<?php

namespace App\Http\Controllers\Api;

use App\Models\Job;
use App\Http\Requests\JobRequest;
use App\Http\Controllers\Controller;

class JobController extends Controller
{
    public function index()
    {
        return $this->success([
            'data' => Job::get()
        ]);
    }

    public function store(JobRequest $request)
    {
        $job = Job::create($request->validated());
        return $this->success([
            'data' => $job
        ]);
    }

    public function show(Job $job)
    {
        return $this->success([
            'data' => $job
        ]);
    }

    public function update(JobRequest $request, $id)
    {
        $job = Job::findOrFail($id);
        $job->load('user');
        if ($request['is_active'] == 0) {
            if ($job->user) {
                $job->user->is_active = false;
                $job->user->save();
            }
            $request['is_active'] = false;
        }
        $job->update($request->validated());
        return $this->success([
            'data' => $job
        ]);
    }

    public function destroy($id)
    {
        $job = Job::findOrFail($id);
        $job->delete();
        return $this->success();
    }
}
