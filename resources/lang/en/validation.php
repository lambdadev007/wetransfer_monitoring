<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => ':attribute მონიშნული უნდა იყოს.',
    'active_url' => ':attribute URL მისამართი უნდა იყოს.',
    'after' => ':attribute :date-ის შემდეგ უნდა იყოს.',
    'alpha' => ':attribute მხოლოდ ასოებს უნდა შეიცავდეს.',
    'alpha_dash' => ':attribute მხოლოდ ასოებს, რიცხვებს და ტირეებს უნდა შეიცავდეს.',
    'alpha_num' => ':attribute მხოლოდ ასოებს და რიცხვებს უნდა შეიცავდეს.',
    'array' => ':attribute მასივი უნდა იყოს.',
    'before' => ':attribute :date-მდე უნდა იყოს.',
    'between' => [
        'numeric' => ':attribute :min-სა და :max-ს შორის უნდა იყოს.',
        'file' => ':attribute :min-სა და :max კილობაიტს შორის უნდა იყოს.',
        'string' => ':attribute :min-სა და :max სიმბოლოს შორის უნდა იყოს.',
        'array' => ':attribute-ის რაოდენობა :min-დან :max-მდე უნდა იყოს.',
    ],
    'boolean' => ':attribute-ის მნიშვნელობა true, false, 0 ან 1 უნდა იყოს.',
    'confirmed' => ':attribute დადასტურებას არ ემთხვევა.',
    'date' => ':attribute არასწორი თარიღის ფორმატს შეიცავს.',
    'date_format' => ':attribute არ ემთხვევა თარიღის ფორმატს: :format.',
    'different' => ':attribute და :other ერთმანეთს არ უნდა ემთხვეოდეს.',
    'digits' => ':attribute :digits ციფრისგან უნდა შედგებოდეს.',
    'digits_between' => ':attribute :min-დან :max ციფრამბდე უნდა შედგებოდეს.',
    'email' => ':attribute არასწორია.',
    'exists' => 'ასეთი :attribute არ არსებობს.',
    'filled' => ':attribute აუცილებელია.',
    'image' => ':attribute სურათი უნდა იყოს.',
    'in' => 'მითითებული :attribute არასწორია.',
    'integer' => ':attribute მთელი რიცხვი უნდა იყოს.',
    'ip' => ':attribute IP მისამართი უნდა იყოს.',
    'json' => ':attribute JSON ტიპის უნდა იყოს.',
    'max' => [
        'numeric' => ':attribute :max-ს უნდა აღემატებოდეს.',
        'file' => ':attribute :max კილობაიტს არ უნდა აღემატებოდეს.',
        'string' => ':attribute :max სიმბოლოს არ უნდა აღემატებოდეს.',
        'array' => ':attribute-ის რაოდენობა :max-ს არ უნდა აღემატებოდეს.',
    ],
    'mimes' => ':attribute შემდეგი ტიპის უნდა იყოს: :values.',
    'min' => [
        'numeric' => ':attribute მინიმუმ :min უნდა იყოს.',
        'file' => ':attribute მინიმუმ :min კილობაიტი უნდა იყოს.',
        'string' => ':attribute მინიმუმ :min სიმბოლოს უნდა შეიცავდეს.',
        'array' => ':attribute მინიმუმ :min უნდა იყოს.',
    ],
    'not_in' => 'მითითებული :attribute არასწორია.',
    'numeric' => ':attribute რიცხვი უნდა იყოს.',
    'regex' => ':attribute არ ემთხვევა ფორმატს.',
    'required' => ':attribute აუცილებელია.',
    'required_if' => ':attribute აუცილებელია, თუ :other-ს მნიშვნელობა ემთხვევა :value-ს.',
    'required_with' => ':attribute აუცილებელია, თუ :values მითითებულია.',
    'required_with_all' => ':attribute აუცილებელია, თუ :values მითითებულია.',
    'required_without' => ':attribute აუცილებელია, თუ :values არ არის მითითებული.',
    'required_without_all' => ':attribute აუცილებელია, თუ :values არ არის მითითებული.',
    'same' => ':attribute და :other უნდა ემთხვეოდეს ერთმანეთს.',
    'size' => [
        'numeric' => ':attribute :size-ის ტოლი უნდა იყოს.',
        'file' => ':attribute :size კილობაიტი უნდა იყოს.',
        'string' => ':attribute :size სიმბოლოსგან უნდა შედგებოდეს.',
        'array' => ':attribute :size ელემენტს უნდა შეიცავდეს.',
    ],
    'string' => ':attribute ტექსტი უნდა იყოს.',
    'timezone' => ':attribute დროის ზონა უნდა იყოს.',
    'unique' => 'ასეთი :attribute უკვე არსებობს.',
    'url' => ':attribute URL მისამართი უნდა იყოს.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'identification_code' => 'კომპანიის საიდენთიფიკაციო კოდი აუცილებელია',
        'email_tdl' => 'გთხოვთ მიუთითოთ სწორი ელ-ფოსტა.',
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap attribute place-holders
    | with something more reader friendly such as E-Mail Address instead
    | of "email". This simply helps us make messages a little cleaner.
    |
    */

    'attributes' => [
        'tabs' => [
            '*' => [
                'ka' => [
                    'title' => 'ტაბი * - ის სათაური',
                ],
            ],
        ],

        'value' => 'მნიშვნელობა',
        'phone' => 'ტელეფონის ნომერი',
        'comment' => 'კომენტარი',
        'price' => 'ფასი',
        'invoice_number' => 'ინვოისის ნომერი',

        'ka' => [
            'title' => 'ქართული სათაური',
            'content' => 'ქართული შიგთავსი',
            'description' => 'ქართული აღწერა',
            'name' => 'ქართული სახელი',
            'position' => 'ქართული პოზიცია',
            'question' => 'ქართული კითხვა',
        ],
        'en' => [
            'title' => 'ინგლისური სათაური',
            'content' => 'ინგლისური შიგთავსი',
            'description' => 'ინგლისური აღწერა',
            'name' => 'ინგლისური სახელი',
            'position' => 'ინგლისური პოზიცია',
        ],
        'slug' => 'ლინკი',
        'featured_image' => 'ფოტოსურათი',
        'image' => 'ფოტოსურათი',
        'categories' => 'კატეგორია',
        'pdf' => 'PDF დოკუმენტი',
        'email' => 'ელ-ფოსტა',
        'name' => 'სახელი',
        'captcha' => '"მე არ ვარ რობოტი"',
        'category_id' => 'კატეგორია',
        'menus' => 'მენიუები',
        'mobile' => 'ტელეფონის ნომერი',
        'full_name' => 'სახელი, გვარი',
        'directions' => 'საქმიანობის სასურველი მიმართულება',
        'description' => 'თემა',
        'company_name' => 'კომპანიის სახელი',
        'company_position' => 'კომპანიის პოზიცია',
        'term' => 'წესები და პირობები',
        'date' => 'თარიღი',
        'guests' => 'სტუმრების რაოდენობა',
        'quantity' => 'რაოდენობა',
        'rooms' => 'ნომრები',
        'rooms_quantity' => 'ნომრების რაოდენობა',
        'percent' => 'პროცენტი',
        'promo_code' => 'ფასდაკლების კოდი',
        'surname' => 'გვარი',
        'password' => 'პაროლი',
        'url' => 'ლინკი',
        'new_password' => 'ახალი პაროლი',

        'message' => 'საინფორმაციო ტექსტი',
        'authorized_person' => 'განმცხადებელი',
        'organization_name' => 'ორგანიზაციის დასახელება',
        'contact_phone' => 'ტელეფონი/ფაქსი',
        'contact_message' => 'ტექსტი',
        'g-recaptcha-response' => 'არ ვარ რობოტი',
        'password_confirmation' => 'გაიმეორე პაროლი',
        'text' => 'ტექსტი',
        'subject' => 'თემა',
        'g_recaptcha_response' => 'არ ვარ რობოტი',
        'order' => 'ორდერი',
        'main_status_id' => 'სტატუსი',
        'moved' => 'აქტივობის გადატანა',
        'day' => 'გადავადების დრო',
    ],
];
