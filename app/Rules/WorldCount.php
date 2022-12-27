<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class WorldCount implements Rule
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
        if( count(explode(' ', $value)) > 200){
            return false;
        }

        return true;

    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'კომენტარი 200 სიტყვას არ უნდა აღემატებოდეს.';
    }
}
