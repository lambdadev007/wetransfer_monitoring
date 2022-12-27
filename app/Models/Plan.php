<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Traits\Five\Steps\CreateOrUpdateItemTrait;

class Plan extends Model
{
    use CreateOrUpdateItemTrait, LogsActivity;

    protected $fillable = [
        'is_active',
        'started_at'
    ];

    protected static $logFillable = true;

    public function planYears()
    {
        return $this->hasMany(PlanYear::class);
    }

    public function goals()
    {
        return $this->hasMany(Goal::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function indicators()
    {
        return $this->hasMany(Indicator::class);
    }
    public function evidences()
    {
        return $this->hasMany(Evidence::class);
    }

    /**
    * @return \Illuminate\Database\Eloquent\Relations\HasMany 
    */
    public function planYearsActivities()
    {
        return $this->hasMany(PlanYearActivity::class);
    }

    public function scopeActive()
    {
        return $this->whereIsActive(true);
    }

    public static function existPlan()
    {
        return Plan::active()->first();
    }

}
