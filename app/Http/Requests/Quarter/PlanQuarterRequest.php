<?php

namespace App\Http\Requests\Quarter;

use Illuminate\Foundation\Http\FormRequest;

class PlanQuarterRequest extends FormRequest
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
            'id' => 'nullable|integer',
            'plan_year_activity_id' => 'required|exists:plan_year_activities,id',
            'name' => 'required|string',
        ];
    }
}
