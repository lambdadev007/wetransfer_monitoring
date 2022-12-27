<?php

namespace App\Http\Resources\Auth;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'job_name' => object_get($this, 'job.name') ? object_get($this, 'job.name') : $this->name,
            'phone' => $this->phone,
            'email' => $this->email,
            'change_password' => $this->password_change,
            'role_name' => object_get($this->whenLoaded('roles')->first(), 'name'),
        ];
    }
}
