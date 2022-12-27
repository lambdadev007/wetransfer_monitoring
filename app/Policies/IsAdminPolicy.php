<?php

namespace App\Policies;

use App\Models\User;
use App\Models\PlanYearActivity;
use Illuminate\Auth\Access\HandlesAuthorization;

class IsAdminPolicy
{
    use HandlesAuthorization;

    public function update(User $user)
    {
        return $user->hasRole('admin', 'super_administrato'); 
    }
}
