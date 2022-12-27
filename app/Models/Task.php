<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Traits\Five\Steps\CreateOrUpdateItemTrait;

class Task extends Model
{
    use CreateOrUpdateItemTrait, LogsActivity;

    protected $fillable = [
        'name',
        'plan_id',
        'goal_id',
        'status_id',
        'percent',
    ];

    protected static $logFillable = true;

    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    public function goal()
    {
        return $this->belongsTo(Goal::class);
    }

    public function indicators()
    {
        return $this->morphMany(Indicator::class, 'indicatorable');
    }
}
