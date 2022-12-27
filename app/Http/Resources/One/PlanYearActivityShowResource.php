<?php

namespace App\Http\Resources\One;

use Carbon\Carbon;
use App\Http\Resources\MediaResource;
use App\Http\Resources\MonthResource;
use App\Http\Resources\SelectResource;
use App\Http\Resources\Auth\UserResource;
use App\Http\Resources\StatusLogResource;
use App\Http\Resources\Five\Plan\TaskResource;
use App\Http\Resources\ActivityStatusesResource;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Five\Plan\IndicatorResource;

class PlanYearActivityShowResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            // 'plan' => new PlanResource($this->plan),
            'name' => $this->name,
            'remark' => $this->remark,
            'user_remark' => $this->user_remark,
            // 'pr_activity' => $this->pr_activity,
            'is_mine' => $this->my_task,
            'status' => [
                'status' => new ActivityStatusesResource($this->whenLoaded('status')),
                'main_status' => new ActivityStatusesResource($this->whenLoaded('mainStatus')),
            ],
            'status_log' => StatusLogResource::collection($this->whenLoaded('statusLog')), 
            'status_text' => $this->getStatus(),
            'percent' => $this->percent,
            'plan_year' => new PlanYearResource($this->planYear),
            'task' => new TaskResource($this->whenLoaded('task')),
            // 'source_of_fundings' => new SelectResource($this->sourceOfFunding),
            'human_resource' => new SelectResource($this->humanResource),
            'material_resource' => new SelectResource($this->materialResource),
            'main_user_id' => new UserResource($this->mainUser),
            'users' => $this->users->isNotEmpty() ? $this->users->pluck('job.name')->implode(", ") : null,
            'users_ids' => $this->users->isNotEmpty() ? $this->users->pluck('id')->toArray() : null,
            'months' => MonthResource::collection($this->whenLoaded('months')),
            'months_text' => $this->months->sortBy('pivot.month_id')->pluck('name')->implode(', '),
            'comment' => $this->comment,
            'comment_media' => MediaResource::collection($this->whenLoaded('media')),
            'moved' => $this->whenLoaded('movedLastActivity'),
            'editable' => $this->editable($this),
            'can_status_admin' => $this->canSetStatusAdmin(),
            'can_status_super_admin' => $this->canSetStatusSuperAdmin(),
            'indicators' => IndicatorResource::collection($this->whenLoaded('indicators')),
            'total_funding' => $this->total_funding,
            'grant_funding' => $this->grant_funding,
            'other_funding' => $this->other_funding,
        ];      
    }
}
