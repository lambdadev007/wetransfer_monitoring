<?php

namespace App\Traits\Five\Steps;

trait CreateOrUpdateItemTrait
{
    public function createOrUpdateItem(array $data, string $relation)
    {
        if (!isset($data['id'])) {
            $model = $this->$relation()->create($data);
        } else {
            $model = $this->$relation()->whereId($data['id'])->first();
            $model = tap($model)->update($data);
        }
        return $model;
    }
}
