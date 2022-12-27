<?php

namespace Database\Seeders;

use App\Models\HumanResource;
use Illuminate\Database\Seeder;

class HumanResourceTableSeeder extends Seeder
{
    protected $data = [
        [
            'slug' => 'arsebuli-resursi',
            'name' => 'არსებული რესურსი',
        ],
        [
            'slug' => 'motsveuli',
            'name' => 'მოწვეული',
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
            HumanResource::updateOrCreate([
                'slug' => $item['slug']
            ], $item);
        }
    }
}
