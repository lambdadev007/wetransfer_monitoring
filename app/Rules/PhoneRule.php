<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class PhoneRule implements Rule
{
    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return strlen($value) == 9 && substr($value, 0, 1) == 5;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'ტელეფონის ნომრის ფორმატი არასწორია';
    }
}
