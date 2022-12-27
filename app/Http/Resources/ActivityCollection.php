<?php

namespace App\Http\Resources;

use App\Http\Resources\One\PlanYearActivityResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ActivityCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => PlanYearActivityResource::collection($this->collection),
            'total' => $this->total(),
            'per_page' => $this->perPage(),
            'current_page' => $this->currentPage(),
            'total_pages' => $this->lastPage(),
            'previous_url' => $this->previousPageUrl(),
            'next_url' => $this->nextPageUrl(),

        ];
    }
}
