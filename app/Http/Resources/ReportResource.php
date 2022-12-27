<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReportResource extends JsonResource
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
            'user_name' => object_get($this, 'user.job.name') ? object_get($this, 'user.job.name') : object_get($this, 'user.name') ,
            'file' => [
                'name' => object_get($this->getFirstMedia('report'), 'name'),
                'id' => object_get($this->getFirstMedia('report'), 'id'),
            ], 
            'created_at' => localizedDate($this->created_at, true) .' ' . $this->created_at->format('H:i'),
        ];
    }
}
