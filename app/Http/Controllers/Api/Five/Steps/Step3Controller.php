<?php

namespace App\Http\Controllers\Api\Five\Steps;

use App\Http\Resources\Five\Plan\TaskResource;
use App\Http\Controllers\Controller;
use App\Http\Requests\Five\Plan\PlanIndicatorRequest;
use App\Http\Resources\Five\Plan\IndicatorResource;
use App\Models\Plan;

class Step3Controller extends Controller
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
        $indicators = $this->plan->indicators()->with('indicatorable')->get();
        // return $indicators;
        return $this->success([
            'data' => IndicatorResource::collection($indicators),
            'previous' => TaskResource::collection($this->plan->tasks)
        ]);
    }

    public function store(PlanIndicatorRequest $request)
    {
        $task = $this->plan->tasks()->findOrFail($request->input('task_id'));
        $request['plan_id'] = $this->plan->id;
        $indicator = $task->createOrUpdateItem($request->all(), 'indicators');
        return $this->success([
            'data' => new IndicatorResource($indicator)
        ]);
    }

    public function delete($id)
    {
        $indicator = $this->plan->indicators()
            ->with('evidences')
            ->findOrFail($id);
            
        $indicator->evidences->each->delete();

        $indicator->delete();
        return $this->success();
    }
}
