<?php

namespace App\Http\Controllers\Api\Five\Steps;

use App\Models\Plan;
use function request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Five\Plan\EvidenceResource;
use App\Http\Resources\Five\Plan\IndicatorResource;
use App\Http\Requests\Five\Plan\PlanEvidenceRequest;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Step4Controller extends Controller
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
        $evidences = $this->plan->evidences()->with('evidenceable')->get();
        return $this->success([
            'data' => EvidenceResource::collection($evidences),
            'previous' => IndicatorResource::collection($this->plan->indicators)
        ]);
    }

    public function store(PlanEvidenceRequest $request)
    {
        $indicator = $this->plan->indicators()->findOrFail($request->input('indicator_id'));
        $request['plan_id'] = $this->plan->id;

        $evidence = $indicator->createOrUpdateItem($request->all(), 'evidences');

        // if (request('files')) {
        //     foreach (request('files') as $file) {
        //         $evidence->addMedia($file)->toMediaCollection('evidences');
        //     }
        // }

        return $this->success([
            'data' => new EvidenceResource($evidence)
        ]);
    }

    public function delete($id)
    {
        $this->plan->evidences()->findOrFail($id)->delete();
        return $this->success();
    }
}
