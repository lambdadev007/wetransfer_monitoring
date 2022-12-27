<?php

namespace App\Http\Resources\Five\Plan;

use App\Http\Resources\MediaResource;
use Illuminate\Http\Resources\Json\JsonResource;

class EvidenceResource extends JsonResource
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
            'plan' => new PlanResource($this->whenLoaded('plan')),
            'indicator' => new PlanResource($this->whenLoaded('evidenceable')),
            'files' => MediaResource::collection($this->whenLoaded('media'))
        ];
    }
}
