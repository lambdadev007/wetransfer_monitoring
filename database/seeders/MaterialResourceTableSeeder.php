<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MaterialResource;

class MaterialResourceTableSeeder extends Seeder
{
    protected $data = [
        [
            'slug' => 'arsebuli-resursi',
            'name' => 'არსებული რესურსი',
        ],
        [
            'slug' => 'skhva-inventari',
            'name' => 'სხვა ინვენტარი',
        ],
        [
            'slug' => 'programuli-uzrunvelyofa',
            'name' => 'პროგრამული უზრუნველყოფა',
        ],
        [
            'slug' => 'skhva-aghchurviloba',
            'name' => 'სხვა აღჭურვილობა',
        ],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->data as $item) {
            MaterialResource::updateOrCreate([
                'slug' => $item['slug']
            ], $item);
        }
    }
}
