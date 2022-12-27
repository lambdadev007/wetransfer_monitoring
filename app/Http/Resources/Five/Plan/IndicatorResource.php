<?php

namespace App\Http\Resources\Five\Plan;

use Illuminate\Http\Resources\Json\JsonResource;

class IndicatorResource extends JsonResource
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
            'task' => new TaskResource($this->whenLoaded('indicatorable')),
            'evidences' => EvidenceResource::collection($this->whenLoaded('evidences'))
        ];
    }
}
