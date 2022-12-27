<?php

namespace Database\Seeders;

use App\Models\Month;
use Illuminate\Database\Seeder;

class MonthTableSeeder extends Seeder
{
    protected $data = [
        [
            'slug' => 'January',
            'name' => 'იანვარი',
            'name_short' => 'იან',
        ],
        [
            'slug' => 'February',
            'name' => 'თებერვალი',
            'name_short' => 'თებ',
        ],
        [
            'slug' => 'March',
            'name' => 'მარტი',
            'name_short' => 'მარ',
        ],
        [
            'slug' => 'April',
            'name' => 'აპრილი',
            'name_short' => 'აპრ',
        ],
        [
            'slug' => 'May',
            'name' => 'მაისი',
            'name_short' => 'მაი',
        ],
        [
            'slug' => 'June',
            'name' => 'ივნისი',
            'name_short' => 'ივნ',
        ],
        [
            'slug' => 'July',
            'name' => 'ივლისი',
            'name_short' => 'ივლ',
        ],
        [
            'slug' => 'August',
            'name' => 'აგვისტო',
            'name_short' => 'აგვ',
        ],
        [
            'slug' => 'September',
            'name' => 'სექტემბერი',
            'name_short' => 'სექ',
        ],
        [
            'slug' => 'October',
            'name' => 'ოქტომბერი',
            'name_short' => 'ოქტ',
        ],
        [
            'slug' => 'November',
            'name' => 'ნოემბერი',
            'name_short' => 'ნოე',
        ],
        [
            'slug' => 'December',
            'name' => 'დეკემბერი',
            'name_short' => 'დეკ',
        ]
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->data as $item) {
            Month::updateOrCreate([
                'slug' => $item['slug']
            ], $item);
        }
    }
}
