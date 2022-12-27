<?php

namespace App\Models;

use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles, LogsActivity;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'is_root',
        'phone',
        'job_id',
        'is_active',
        'password_change'
    ];
    protected static $logFillable = true;

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function routeNotificationForSms()
    {
        return $this->phone;
    }

    public function scopeSkipFirst($query)
    {
        return $query->where('job_id', '!=', 1);
    }
    public function scopeNotRoot($query)
    {
        return $query->where('is_root', 0);
    }

    public function adminOrSuperAdmin()
    {
        return $this->hasRole(['admin', 'super_administrator']);
    }
    
    /**
    * @return \Illuminate\Database\Eloquent\Relations\HasOne
    */
    public function job()
    {
        return $this->belongsTo(Job::class, 'job_id');
    }

    /**
    * @return \Illuminate\Database\Eloquent\Relations\HasMany 
    */
    public function reports()
    {
        return $this->hasMany(Report::class);
    }
}
