<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class ProfileRequest extends FormRequest
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
            'email' => 'required|string|email',
            'phone' => 'required|string',
            'new_password' => 'nullable|confirmed|string|min:8',
            'new_password_confirmation' => 'required_with:new_password|string|min:8',
            'old_password' => 'required_with:new_password|string|min:8',
        ];
    }
}
