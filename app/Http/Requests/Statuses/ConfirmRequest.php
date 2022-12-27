<?php

namespace App\Http\Requests\Statuses;

use Illuminate\Foundation\Http\FormRequest;

class ConfirmRequest extends FormRequest
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
            'main_status_id' => 'required_unless:is_accept,1|exists:statuses,id', 
            'is_accept' => 'nullable',
            'moved' => 'nullable|required_if:main_status_id,2,3', 
            'day' => 'nullable|required_if:moved,1',
            'remark' => 'nullable|string',
            'percent' => 'nullable',
        ];
    }

    public function messages()
    {
        return [
            'main_status_id.required_unless' => 'სტატუსი აუცილებელია',
        ];
    }
}
