<?php

namespace App\Http\Requests\Statuses;

use Illuminate\Foundation\Http\FormRequest;

class JoinRequest extends FormRequest
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
            'activity_id' => 'required|exists:plan_year_activities,id',
            'status_id' => 'required|exists:statuses,id',
            'remark' => 'nullable|string',
            'percent' => 'nullable',
        ];
    }
}
