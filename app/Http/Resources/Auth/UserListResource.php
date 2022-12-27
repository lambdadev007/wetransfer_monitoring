<?php

namespace App\Http\Resources\Auth;

use Illuminate\Http\Resources\Json\JsonResource;

class UserListResource extends JsonResource
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
            'phone' => $this->phone,
            'email' => $this->email,
            'job_id' => $this->job_id,
            'job' => object_get($this, 'job.name'),
            'is_active' => $this->is_active,
            'role_name' => object_get($this->whenLoaded('roles')->first(), 'name'),
        ];
    }
}
