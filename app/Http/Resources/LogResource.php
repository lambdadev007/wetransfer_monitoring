<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LogResource extends JsonResource
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
            'action' => $this->description,
            'model' => $this->subject_id . ' - ' . class_basename($this->subject_type),
            'author' => object_get($this, 'causer.name'),
            'ip' => $this->ip_address,
            'created_at' => $this->created_at->toDateTimeString(),
        ];
    }
}
