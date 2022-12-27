<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\InteractsWithMedia;
use App\Traits\Five\Steps\CreateOrUpdateItemTrait;

class PlanYearActivity extends Model implements HasMedia
{
    use CreateOrUpdateItemTrait, LogsActivity, InteractsWithMedia;

    protected $fillable = [
        'plan_id',
        'plan_year_id',
        'task_id',
        'material_resource_id',
        'human_resource_id',
        'source_of_funding_id',
        'main_user_id',
        'status_id',
        'main_status_id',
        'month_qty',
        'is_active',
        'name',
        'remark',
        'percent',
        'pr_activity',
        'user_remark',
        'comment',
        'total_funding',
        'grant_funding',
        'other_funding'
    ];

    protected $appends = ['my_task'];

    protected static $logFillable = true;

    public function plan()
    {
        return $this->belongsTo(Plan::class);
    }

    public function recomendation()
    {
        return $this->hasOne(ActivityRecomendation::class, 'plan_year_activity_id');
    }

    /**
    * @return \Illuminate\Database\Eloquent\Relations\HasMany 
    */
    public function movedActivity()
    {
        return $this->hasMany(MovedActivity::class, 'plan_year_activity_id');
    }
    /**
    * @return \Illuminate\Database\Eloquent\Relations\HasMany 
    */
    public function movedLastActivity()
    {
        return $this->hasOne(MovedActivity::class, 'plan_year_activity_id')
            ->latest('end_date')
            ->whereDate('end_date', '>', now()->format('Y-m-d'));
    }
    public function movedLastActivityNotDate()
    {
        return $this->hasOne(MovedActivity::class, 'plan_year_activity_id')
            ->latest('end_date');
    }

    public function planYear()
    {
        return $this->belongsTo(PlanYear::class);
    }

    public function indicators()
    {
        return $this->morphMany(Indicator::class, 'indicatorable');
    }

    public function evidences()
    {
        return $this->morphMany(Evidence::class, 'evidenceable');
    }

    public function mainUser()
    {
        return $this->belongsTo(User::class, 'main_user_id');
    }
    
    public function users()
    {
        return $this->belongsToMany(User::class, 'activity_user');
    }
    public function statusLog()
    {
        return $this->hasMany(StatusLog::class, 'plan_year_activity_id');
    }
    public function status()
    {
        return $this->belongsTo(Status::class);
    }
    public function mainStatus()
    {
        return $this->belongsTo(Status::class, 'main_status_id');
    }

    public function task()
    {
        return $this->belongsTo(Task::class);
    }

    public function materialResource()
    {
        return $this->belongsTo(MaterialResource::class);
    }

    public function humanResource()
    {
        return $this->belongsTo(HumanResource::class);
    }

    public function sourceOfFunding()
    {
        return $this->belongsTo(SourceOfFunding::class);
    }

    public function scopeOwnerWithAdmin($query)
    {
        if (auth()->user()->roles->pluck('name')->contains(function ($value, $key) {
            return in_array($value, ['super_administrator', 'admin']);
        })) {
            return $query;
        }
        return $query->where('main_user_id', auth()->user()->id)
            ->orWhereHas('users', function ($query){
                $query->where('user_id', auth()->user()->id);
            });
    }

    public function getMyTaskAttribute()
    {
        return $this->main_user_id == auth()->user()->id;
    }

    public function editable()
    {
        if(config('app.finished_activity_manual')){
            return true;
        }
        $lastMonthIndex = $this->lastMonthIndex()->addDay(5);
        if ($lastMonthIndex > now() || $this->movedLastActivity) {
            return true;
        }
        return false;
    }

    public function canSetStatusAdmin()
    {
        return $this->lastMonthIndex()->addDay(5) < now() && $this->lastMonthIndex()->addDay(12) >= now();
    }

    public function canSetStatusSuperAdmin()
    {
        return !is_null($this->status_id) && $this->lastMonthIndex()->addDay(12) < now() && $this->lastMonthIndex()->addDay(17) >= now();
    }

    public function lastMonthIndex()
    {
        return Carbon::create($this->planYear->name, object_get($this->months->first(), 'id'))
            ->endOfMonth();
    }

    public function getStatus()
    {
        $status = object_get($this->mainStatus,'name') 
                    ? object_get($this->mainStatus,'name') 
                    : object_get($this->status,'name');

        $firstMonth = $this->months->sortBy('id')->first()->pivot->month_id;

        if (!$this->editable() && is_null($status)) {
            return 'შესაფასებელი';
        }

        $defaultStatus = ($firstMonth <= now()->month) ? 'მიმდინარე' : 'არ არის დაწყებული';

        return $status ? $status : $defaultStatus;
    }

    public function statusOfAuthor()
    {
        if ($this->mainStatus) {
            return 'სუპერ ადმინისტრატორი';
        }
        if ($this->status) {
            return 'ადმინისტრატორი';
        }
        return 'სისტემა';
    }

    public function months()
    {
        return $this->belongsToMany(Month::class, 'plan_year_activity_has_month')
            ->orderByDesc('month_id');
    }

    public function scopeFilterBy($query)
    {
        $query
            ->when(request()->filled('main_user_id'), function ($builder){
                $builder->where('main_user_id', request('main_user_id'));
            })
            ->when(request()->filled('year'), function ($builder){
                $builder->where('plan_year_id', request('year'));
            })
            ->when(request()->filled('name'), function ($builder){
                $builder->where('name', 'like', '%'. request('name') . '%');
            })
            ->when(request()->filled('status'), function ($builder){
                $builder->where(function($builder){
                    $builder->where('main_status_id', request('status'))
                        ->orWhere(function($builder){
                            $builder->where('status_id', request('status'))
                                ->where('main_status_id', null);
                        });
                });
            })
            ->when(request()->filled('month'), function ($builder){
                $builder->whereHas('months', function ($builder){
                    $builder->where('month_id', request('month'));
                });
            })

            ->when(request()->filled('months'), function ($builder){
                $builder->whereHas('months', function ($builder){
                    $builder->whereIn('month_id', explode(',', request('months')));
                });
            })
            ->when(request()->filled('goal'), function ($builder){
                $builder->whereHas('task', function ($builder){
                    $builder->where('goal_id', request('goal'));
                });
            })
            ->when(request()->filled('order_by'), function ($builder){
                $des = Str::startsWith(request('order_by'), '-') ? 'desc' : 'asc';
                $name = Str::startsWith(request('order_by'), '-') ? substr(request('order_by'), 1) : request('order_by');
                $builder->orderBy($name, $des);
            });
        return $query;
    }
}
