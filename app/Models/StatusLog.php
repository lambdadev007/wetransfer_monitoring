<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StatusLog extends Model
{
    protected $fillable = [
        'plan_year_activity_id',
        'data_admin',
        'data_super_admin',
    ];

    protected $casts = [
        'data_admin' => 'json',
        'data_super_admin' => 'json',
    ];
}
