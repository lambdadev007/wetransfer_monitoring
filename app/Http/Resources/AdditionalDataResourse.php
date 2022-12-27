<?php

namespace App\Http\Resources;

use App\Http\Resources\Five\Plan\TaskResource;
use Illuminate\Http\Resources\Json\JsonResource;

class AdditionalDataResourse extends JsonResource
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
            'tasks' => TaskResource::collection($this->whenLoaded('tasks'))
        ];
    }
}
