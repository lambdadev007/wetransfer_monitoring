<?php

namespace App\Http\Requests\Quarter;

use Illuminate\Foundation\Http\FormRequest;

class SubActivityMonthRequest extends FormRequest
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
            'sub_activity_id' => 'required|exists:sub_activities,id',
            'months' => 'required|array',
            'months.*' => 'required|exists:months,id',
        ];
    }
}
