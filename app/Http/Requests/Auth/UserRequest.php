<?php

namespace App\Http\Requests\Auth;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
            'email' => [
                'required',
                'string',
                'email',
                Rule::exists('users')->where(function ($query) {
                    $query->where('is_active', 1);
                }),
            ],
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ];
    }
}
