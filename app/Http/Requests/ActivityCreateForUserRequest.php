<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ActivityCreateForUserRequest extends FormRequest
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
            'activity_id' => 'nullable|exists:plan_year_activities,id',
            // 'source_of_funding_id' => 'nullable|exists:source_of_fundings,id',
            'human_resource_id' => 'nullable|exists:human_resources,id',
            'material_resource_id' => 'nullable|exists:material_resources,id',
            // 'pr_activity' => 'nullable|string',
            'user_remark' => 'nullable|string',
            'total_funding' => 'nullable|string',
            'grant_funding' => 'nullable|string',
            'other_funding' => 'nullable|string'
        ];
    }
}
