<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use App\Models\ActivityLog;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Auth\UserRequest;
use App\Http\Resources\Auth\UserResource;
use App\Http\Requests\Auth\ProfileRequest;
use App\Http\Requests\ChangePasswordRequest;

class AuthController extends Controller
{
    public function user(Request $request)
    {
        return response()
            ->json(new UserResource($request->user()->load('roles.permissions')));
    }

    public function changePassword(ChangePasswordRequest $request)
    {
        $user = $request->user();
        $user->password = bcrypt($request['new_password']);
        $user->password_change = true;
        $user->save();
        return $this->success(new UserResource($user->load('roles')));
    }

    public function login(UserRequest $request)
    {
        $credentials = request(['email', 'password']);
        $credentials['is_active'] = 1;
        if (!Auth::attempt($credentials)) {
            return $this->error([
                'message' => 'Unauthorized'
            ], 401);
        }
        $user = $request->user();
        $this->activityLog();
        $this->activeUserCheck($user);
       
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        $token->expires_at = Carbon::now()->addDays(1);
        if ($request->remember_me) {
            $token->expires_at = Carbon::now()->addYear(1);
        }
        $token->save();
        return $this->success([
            'user' => new UserResource($user->load('roles.permissions')),
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ]);
    }

    public function profileUpdate(ProfileRequest $request)
    {
        $user = $request->user(); 

        if (request()->filled('new_password')) {
            if (!Hash::check(request('old_password'), $user->password)) {
                return $this->error('გთხოვთ შეიყვანოთ სწორი პაროლი');    
            }
            $user->password = bcrypt(request('new_password'));
        }
        $user->email = request('email');
        $user->phone = request('phone');
        $user->save();
        return $this->success(new UserResource($user->load('roles')));
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return $this->success([
            'message' => 'Successfully logged out'
        ]);
    }

    protected function activeUserCheck($user)
    {
        if (!$user->email == 'admin@rocket.ge' && ($user->job->is_active == false || $user->is_active == false)) {
            return $this->error([
                'message' => 'access denied for user'
            ], 401);
        }
    }

    protected function activityLog()
    {
        ActivityLog::create([
            'log_name' => 'default',
            'log_name' => 'default',
            'description' => 'sign in',
            'subject_type' => 'App\Models\User',
            'subject_id' => auth()->user()->id,
            'causer_type' => 'App\Models\User',
            'causer_id' => auth()->user()->id,
        ]);
    }
}
