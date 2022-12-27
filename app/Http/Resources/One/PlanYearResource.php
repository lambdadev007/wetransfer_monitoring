<?php

namespace App\Http\Resources\One;

use App\Http\Resources\Five\Plan\PlanResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PlanYearResource extends JsonResource
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
            'name' => $this->name,
            'activities' => PlanYearActivityResource::collection($this->whenLoaded('activities')),
            'plan' => new PlanResource($this->plan),
        ];
    }
}
