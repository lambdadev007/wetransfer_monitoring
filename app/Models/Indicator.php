<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Traits\Five\Steps\CreateOrUpdateItemTrait;

class Indicator extends Model
{
    use CreateOrUpdateItemTrait, LogsActivity;

    protected $fillable = [
        'name',
        'plan_id',
        'indicatorable_id',
        'indicatorable_type',
    ];

    protected static $logFillable = true;

    public function indicatorable()
    {
        return $this->morphTo();
    }

    public function evidences()
    {
        return $this->morphMany(Evidence::class, 'evidenceable');
    }
}
