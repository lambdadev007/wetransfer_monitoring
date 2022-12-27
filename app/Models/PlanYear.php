<?php

namespace App\Models;

use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\InteractsWithMedia;
use App\Traits\Five\Steps\CreateOrUpdateItemTrait;

class PlanYear extends Model implements HasMedia
{
    use CreateOrUpdateItemTrait, LogsActivity, InteractsWithMedia;

    protected $fillable = [
        'plan_id',
        'is_active',
        'name',
    ];

    protected static $logFillable = true;

    public function plan()
    {
        return $this->belongsTo(Plan::class);
    }

    public function planYearsactivities()
    {
        return $this->hasMany(PlanYearActivity::class, 'plan_year_id');
    }

    public function scopeActive()
    {
        return $this->where('name', now()->format('Y'));
    }

    public static function existPlan()
    {
       return PlanYear::active()->first();
    }

    public function getCurrentAttribute()
    {
        return $this->name == now()->format('Y');
    }
}
