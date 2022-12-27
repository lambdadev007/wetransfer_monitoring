<?php

namespace App\Http\Controllers\Api\Five\Steps;

use App\Http\Resources\Five\Plan\GoalResource;
use App\Models\Goal;
use App\Models\Plan;
use App\Http\Controllers\Controller;
use App\Http\Requests\Five\Plan\PlanTaskRequest;
use App\Http\Resources\Five\Plan\TaskResource;

class Step2Controller extends Controller
{
    private $plan;

    public function __construct()
    {
        $this->plan = Plan::existPlan();
    }

    public function index()
    {
        if (!$this->plan) {
            return $this->error([
                'message' => 'Plan does not exist.'
            ]);
        }
        return $this->success([
            'data' => TaskResource::collection($this->plan->tasks()->with('goal')->get()),
            'previous' => GoalResource::collection($this->plan->goals)
        ]);
    }

    public function store(PlanTaskRequest $request)
    {
        $goal = $this->plan->goals()->findOrFail($request->input('goal_id'));
        $request['plan_id'] = $this->plan->id;
        $task = $goal->createOrUpdateItem($request->all(), 'tasks');
        return $this->success([
            'data' => new TaskResource($task)
        ]);
    }

    public function delete($id)
    {
        $task = $this->plan->tasks()->with('indicators.evidences')->findOrFail($id);
        foreach ($task->indicators as $indicator) {
            foreach ($indicator->evidences as $evidence) {
                $evidence->delete();
            }
            $indicator->delete();
        }
        $task->delete();
        return $this->success();
    }
}
