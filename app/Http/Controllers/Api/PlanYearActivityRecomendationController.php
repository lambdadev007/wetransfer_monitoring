<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PlanYearActivityRecomendationRequest;
use App\Models\PlanYearActivity;

class PlanYearActivityRecomendationController extends Controller
{
    public function index(PlanYearActivityRecomendationRequest $request)
    {
        $planYearActivity = PlanYearActivity::find($request['plan_year_activity_id']);
        $recomendation = $planYearActivity->recomendation;
        if ($recomendation) {
            tap($recomendation)->update($request->validated());
        } else {
            $recomendation = $planYearActivity->recomendation()->create($request->validated());
        }
        if ($request->hasFile('file')) {
            $recomendation->clearMediaCollection('recomendation_file');
            $recomendation->addMediaFromRequest('file')->toMediaCollection('recomendation_file');
        }
        return $this->success($recomendation->load('media'));
    }
}
