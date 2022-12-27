<?php

namespace Database\Seeders;

use App\Models\SourceOfFunding;
use Illuminate\Database\Seeder;

class SourceOfFundingTableSeeder extends Seeder
{
    protected $data = [
        [
            'slug' => 'tsentris-sakhsrebi',
            'name' => 'ცენტრის სახსრები',
        ],
        [
            'slug' => 'qveprograma',
            'name' => 'ქვეპროგრამა',
        ],
        [
            'slug' => 'granti',
            'name' => 'გრანტი',
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
            SourceOfFunding::updateOrCreate([
                'slug' => $item['slug']
            ], $item);
        }
    }
}
