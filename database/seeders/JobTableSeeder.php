<?php

namespace Database\Seeders;

use App\Models\Job;
use Illuminate\Database\Seeder;

class JobTableSeeder extends Seeder
{
    protected $data = [
        [
            'name' => 'დაგეგმვის, კვლევისა და საერთაშორისო ურთიერთობების სამსახური (ადმინისტრატორი)',
            'is_active' => true,
        ],
        [
            'name' => 'დაგეგმვის, კვლევისა და საერთაშორისო ურთიერთობების სამსახური',
            'is_active' => true,
        ],
        [
            'name' => 'პროფესიული განათლების ხარისხის უზრუნველყოფის სამსახური',
            'is_active' => true,
        ],
        [
            'name' => 'ზოგადი განათლების ხარისხის უზრუნველყოფის სამსახური',
            'is_active' => true,
        ],
        [
            'name' => 'ზოგადი განათლების ხარისხის უზრუნველყოფის სამსახური',
            'is_active' => true,
        ],
        [
            'name' => 'საგანმანათლებლო სერვისების განვითარების სამსახური',
            'is_active' => true,
        ],
        [
            'name' => 'იურიდიული სამსახური',
            'is_active' => true,
        ],
        [
            'name' => 'კვალიფიკაციების განვითარების სამსახური',
            'is_active' => true,
        ],
        [
            'name' => 'ადამიანური რესურსების მართვის და საქმისწარმოების სამსახური',
            'is_active' => true,
        ],
        [
            'name' => 'შესყიდვებისა და მატერიალურ-ტექნიკური უზრუნველყოფის სამსახური',
            'is_active' => true,
        ],
        [
            'name' => 'ფინანსური უზრუნველყოფის სამმართველო',
            'is_active' => true,
        ],
        [
            'name' => 'შიდა აუდიტის სამსახური',
            'is_active' => true,
        ],
        [
            'name' => 'საზოგადოებასთან ურთიერთობის და საორგანიზაციო სამმართველო',
            'is_active' => true,
        ],
        [
            'name' => 'საჯარო ინფორმაციის გაცემასა და პროაქტიულად გამოქვეყნებაზე პასუხისმგებელი პირი/ პერსონალურ მონაცემთა კანონიერად დამუშავებაზე რეკომენდაციების გამცემი პირი',
            'is_active' => true,
        ],
        [
            'name' => 'ინფორმაციული უსაფრთხოების მენეჯერი',
            'is_active' => true,
        ], 
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (!Job::first()) {
            foreach ($this->data as $item) {
                Job::create($item);
            }
        }
    }
}
