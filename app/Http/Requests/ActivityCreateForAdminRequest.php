<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ActivityCreateForAdminRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'plan_year_id' => 'required|exists:plan_years,id',
            'task_id' => 'required|exists:tasks,id',
            'name' => 'required|string',
            'months' => 'required|array',
            'months.*' => 'required|exists:months,id',
            'main_user_id' => 'required|exists:users,id',
            'users' => 'nullable|array|exists:users,id',
        ];
    }
}
