<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Seeder;

class StatusesTableSeeder extends Seeder
{
    protected $statueses = [
        [
            'slug' => 'completed',
            'name' => 'შესრულდა',
        ],
        [
            'slug' => 'part_completed',
            'name' => 'ნაწილობრივ შესრულდა',
        ],
        [
            'slug' => 'not_completed',
            'name' => 'ვერ შესრულდა',
        ],
        [
            'slug' => 'suspended',
            'name' => 'შეჩერებულია',
        ],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->statueses as $status) {
            Status::updateOrCreate([
                'slug' => $status['slug']
            ], $status);
        }
    }
}
