<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MovedActivity extends Model
{
    protected $fillable = [
        'plan_year_activity_id',
        'day',
        'end_date',
        'percent',
        'status_id',
        'main_status_id'
    ];

    protected $dates = ['end_date'];

    /**
    * @return \Illuminate\Database\Eloquent\Relations\HasOne
    */
    public function activity()
    {
        return $this->belongsTo(PlanYearActivity::class, 'plan_year_activity_id');
    }

    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    public function mainStatus()
    {
        return $this->belongsTo(Status::class, 'main_status_id');
    }
}
