<?php

namespace App\Models;

use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\InteractsWithMedia;

class Evidence extends Model implements HasMedia
{
    use LogsActivity, InteractsWithMedia;

    protected $fillable = [
        'name',
        'evidenceable_id',
        'evidenceable_type',
        'plan_id'
    ];
    protected static $logFillable = true;

    public function evidenceable()
    {
        return $this->morphTo();
    }

    public function plan()
    {
        return $this->belongsTo(Plan::class);
    }
}
