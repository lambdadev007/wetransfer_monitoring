<?php

namespace App\Http\Requests\One;

use Illuminate\Foundation\Http\FormRequest;

class PlanYearActivityUpdateRequest extends FormRequest
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
            'id' => 'required|integer',
            // 'source_of_funding_id' => 'nullable|exists:source_of_fundings,id',
            'human_resource_id' => 'nullable|exists:human_resources,id',
            'material_resource_id' => 'nullable|exists:material_resources,id',
            'pl_activity' => 'nullable',
        ];
    }
}
