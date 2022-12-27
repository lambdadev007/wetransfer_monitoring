<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EvidenceRequest extends FormRequest
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
            'indicator_id' => 'required|exists:indicators,id',
            'id' => 'nullable|exists:evidence,id',
            'name' => 'required|string',
            'files' => 'array',
        ];
    }
}
