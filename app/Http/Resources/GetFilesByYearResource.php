<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GetFilesByYearResource extends JsonResource
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
            'files' => MediaResource::collection($this->getMedia('file_per_year'))
        ];
    }
}
