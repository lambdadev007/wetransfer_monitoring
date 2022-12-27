<?php

namespace App\Http\Controllers\Api\Five\Steps;

use App\Http\Resources\Five\Plan\PlanResource;
use App\Models\Goal;
use App\Models\Plan;
use App\Http\Controllers\Controller;
use App\Http\Requests\Five\Plan\PlanGoalRequest;
use App\Http\Resources\Five\Plan\GoalResource;

class Step1Controller extends Controller
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
            'data' => GoalResource::collection($this->plan->goals),
            'previous' => new PlanResource($this->plan)
        ]);
    }

    public function store(PlanGoalRequest $request)
    {
        $goal = $this->plan->createOrUpdateItem($request->all(), 'goals');
        return $this->success([
            'data' => new GoalResource($goal)
        ]);
    }

    public function delete($id)
    {
        $goal = $this->plan->goals()->with('tasks.indicators.evidences')->findOrFail($id);
        foreach ($goal->tasks as $task) {
            foreach ($task->indicators as $indicator) {
                foreach ($indicator->evidences as $evidence) {
                    $evidence->delete();
                }
                $indicator->delete();
            }
            $task->delete();
        }
        $goal->delete();
        return $this->success();
    }

}
