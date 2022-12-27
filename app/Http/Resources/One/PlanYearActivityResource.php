<?php

namespace App\Http\Resources\One;

use Carbon\Carbon;
use App\Http\Resources\MediaResource;
use App\Http\Resources\MonthResource;
use App\Http\Resources\Auth\UserResource;
use App\Http\Resources\ActivityStatusesResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PlanYearActivityResource extends JsonResource
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
            'is_mine' => $this->my_task,
            'status' => $this->getStatus(),
            'status_of_author' => $this->statusOfAuthor(),
            'comment' => $this->comment,
            'comment_media' => MediaResource::collection($this->whenLoaded('media')),
            'percent' => $this->percent,
            'main_user_id' => new UserResource($this->mainUser),
            'months_text' => $this->months->sortBy('pivot.month_id')->pluck('name')->implode(', '),
            'moved' => $this->whenLoaded('movedLastActivity'),
            'editable' => $this->editable(),
            'month' => $this->month,
        ];
    }
}
