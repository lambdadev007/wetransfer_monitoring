<?php

namespace App\Http\Controllers\Api;

use App\Models\Month;
use App\Models\Status;
use App\Models\MovedActivity;
use App\Models\PlanYearActivity;
use App\Http\Controllers\Controller;
use App\Http\Resources\StatusesResource;
use App\Http\Requests\Statuses\JoinRequest;
use App\Http\Requests\Statuses\ConfirmRequest;

class ActivityStatusController extends Controller
{
    public function getStatuses()
    {
        $statuses = StatusesResource::collection(Status::get());
        return $this->success([
            $statuses
        ]);
    }

    public function join(JoinRequest $request)
    {
        $activity = PlanYearActivity::findOrFail($request->input('activity_id'));
        if ($activity->editable()) {
            return $this->error('აქტივობა ჯერ არ დასრულებულა');
        }

        $this->logStatus($request->all(), $activity);

        $activity->update([
            'status_id' => $request->input('status_id'),
            'main_status_id' => null,
            'remark' => $request->input('remark'),
            'percent' => $request->input('percent'),
        ]);
        return $this->success();
        
    }

    public function logStatus($request, $model)
    {
        $user = auth()->user();
        $status = Status::find($request['status_id']);
        $data = [
            'status' => [
                'name' => $status->name,
                'percent' => $request['percent'],
                'remark' => $request['remark'],
            ],
            'user' => [
                'name' => $user->name,
                'job_name' => object_get($user, 'job.name'),
            ],
            'created_at' => now()->format('Y-m-d H:i')
        ];

        $model->statusLog()->create(['data_admin' => $data]);

    }
    public function confirm(ConfirmRequest $request)
    {
        $activity = PlanYearActivity::with('months')->findOrFail($request->input('activity_id'));
        
        if ($request->filled('is_accept') && $request['is_accept'] == '1') {
            $activity->main_status_id = $activity->status_id;
            $this->logStatusConfirm($request->validated(), $activity);
            $activity->save();
            return $this->success();
        }
        if ($request->filled('moved') && $request['moved'] == '2') {
            $activity->main_status_id = $request['main_status_id'];
            $this->logStatusConfirm($request->validated(), $activity, 'moved');
            $activity->save();
            return $this->success();
        }
        if ($request->filled('moved') && $request['moved'] == '1') {
            $endDate = now()->addDay(request('day', 10));
            if(!$activity->months->pluck('id')->contains($endDate->month)){
                $activity->months()->attach($endDate->month);
            }
            $additionalData = [
                'end_date' => $endDate->format('Y-m-d'),
                'day' => request('day', 10),
            ];
            $this->logStatusConfirm($request->validated(), $activity, 'moved_and_next', $additionalData);
            MovedActivity::create([
                'plan_year_activity_id' => $activity->id,
                'day' => request('day', 10),
                'end_date' => $endDate->format('Y-m-d')
            ]);
            $activity->main_status_id = $request['main_status_id'];
            $activity->status_id = null;
            $activity->save();
            return $this->success();
        }
    }

    public function logStatusConfirm($request, $model, $type = 'accept', $additionalData = [])
    {
        $user = auth()->user();

        $status = Status::find($type == 'accept' ? $model->status_id : $request['main_status_id']);

        $data = [
            'status' => [
                'name' => $status->name,
                'percent' => data_get($request, 'percent'),
                'remark' => data_get($request, 'remark'),
            ],
            'user' => [
                'name' => $user->name,
                'job_name' => object_get($user, 'job.name'),
            ],
            'created_at' => now()->format('Y-m-d H:i')
        ];
        if ($type == 'moved_and_next') {
            array_merge($data['status'], $additionalData);
            $data['status']['info'] = $additionalData;
        }

        $model->statusLog()->latest()->first()->update([
            'data_super_admin' => $data
        ]);

    }
}
