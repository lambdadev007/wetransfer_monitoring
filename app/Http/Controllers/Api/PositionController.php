<?php

namespace App\Http\Controllers\Api;

use App\Models\Job;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Auth\UserResource;
use App\Http\Resources\JobSelectResource;
use App\Http\Requests\Positions\StoreRequest;
use App\Http\Resources\Auth\UserListResource;
use App\Notifications\SendPasswordNotification;

class PositionController extends Controller
{
    public function index()
    {
        return $this->success([
            'users' => UserListResource::collection(User::with('roles', 'job')->where('email', '!=', 'admin@rocket.ge')->get())
        ]);
    }

    public function store(StoreRequest $request)
    {
        $password = Str::random(8);
        $request['password'] = bcrypt($password);
        $user = User::create($request->except('role_name'));
        $user->assignRole($request['role_name']);
        $user->notify(new SendPasswordNotification($user, $password));
        return $this->success([
            'user' => new UserListResource($user)
        ]);
    }

    public function update($id, Request $request)
    {
        $user = User::findOrFail($id);
        if ($request->filled('password')) {
            $request['password'] = bcrypt($request['password']);
        }
        $user->update($request->except('role_name'));
        $user->syncRoles($request['role_name']);
        return $this->success([
            'user' => new UserListResource($user)
        ]);
    }

    public function positionsSelectData()
    {
        $jobs = Job::with(['user' => fn($user) => $user->where('is_active', 1)])->get();
        return $this->success(JobSelectResource::collection($jobs));
    }

    public function delete($id)
    {
        User::findOrFail($id)->delete();
        return $this->success();
    }
}
