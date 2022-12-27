<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class Job extends Model
{
    use LogsActivity;

    protected $fillable = [
        'name',
        'slug',
        'is_active',
    ];

    protected static $logFillable = true;

    protected $table = 'jobs_model';

    /**
    * @return \Illuminate\Database\Eloquent\Relations\HasOne
    */
    public function user()
    {
        return $this->hasOne(User::class)->orderByDesc('is_active');
    }

}
