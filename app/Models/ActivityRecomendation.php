<?php

namespace App\Models;

use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\InteractsWithMedia;

class ActivityRecomendation extends Model implements HasMedia
{
    use LogsActivity, InteractsWithMedia;

    protected $fillable = [
        'description'
    ];

    protected static $logFillable = true;
}
