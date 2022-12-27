<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Traits\Five\Steps\CreateOrUpdateItemTrait;

class Goal extends Model
{
    use CreateOrUpdateItemTrait, LogsActivity;

    protected $fillable = [
        'plan_id',
        'name'
    ];

    protected static $logFillable = true;

    /**
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function plan()
    {
        return $this->belongsTo(Plan::class);
    }

    /**
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
