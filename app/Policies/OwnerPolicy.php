<?php

namespace App\Policies;

use App\Models\User;
use App\Models\PlanYearActivity;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class OwnerPolicy
{
    use HandlesAuthorization;

    public function update(User $user, PlanYearActivity $planYearActivity)
    {
        return $user->id === $planYearActivity->main_user_id && $planYearActivity->editable();
    }
}
