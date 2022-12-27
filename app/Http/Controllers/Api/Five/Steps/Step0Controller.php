<?php

namespace App\Http\Controllers\Api\Five\Steps;

use App\Http\Requests\Five\Plan\PlanRequest;
use App\Http\Resources\Five\Plan\PlanResource;
use App\Models\Plan;
use App\Http\Controllers\Controller;

class Step0Controller extends Controller
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
                'message' => 'Plan does not existss.'
            ]);
        }
        return $this->success([
            'data' => new PlanResource($this->plan)
        ]);
    }
}
