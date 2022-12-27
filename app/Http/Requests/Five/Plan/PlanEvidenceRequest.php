<?php

namespace App\Http\Requests\Five\Plan;

use Illuminate\Foundation\Http\FormRequest;

class PlanEvidenceRequest extends FormRequest
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
            'name' => 'required|string',
            'indicator_id' => 'required|exists:indicators,id',
            'id' => 'nullable',
            // 'file' => 'required|mimes:pdf,docx,xlsx',
        ];
    }
}
