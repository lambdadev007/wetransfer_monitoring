<?php

namespace App\Http\Controllers\Api;

use App\Models\ActivityLog;
use Illuminate\Http\Request;
use App\Http\Resources\LogCollection;
use App\Http\Controllers\Controller;
use App\Http\Resources\Auth\UserResource;

class LogController extends Controller
{
    public function index()
    {
        $activities = ActivityLog::orderByDesc('id')->with('causer')->paginate(25);
        return $this->success(new LogCollection($activities));
    }
}
