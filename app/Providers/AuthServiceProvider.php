<?php

namespace App\Providers;

use App\Policies\OwnerPolicy;
use Laravel\Passport\Passport;
use App\Models\PlanYearActivity;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */

    protected $policies = [
        PlanYearActivity::class => OwnerPolicy::class
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        // Gate::before(function ($user, $ability) {
        //     return $user->hasRole('super_administrator') ? true : null;
        // });
        Passport::routes();
    }
}
