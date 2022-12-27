<?php

namespace App\Http\Requests\Positions;

use App\Models\User;
use App\Rules\PhoneRule;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
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
            'name' => 'required',
            'email' => [
                'required',
                Rule::unique('users')->ignore(object_get(User::where('email', request('email'))->where('is_active', 0)->first(), 'id')),
            ],
            'phone' => ['required', new PhoneRule()],
            'job_id' => 'required',
            'role_name' => 'required',
            'is_active' => 'boolean',
        ];
    }
}
