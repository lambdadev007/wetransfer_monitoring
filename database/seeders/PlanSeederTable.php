<?php

namespace Database\Seeders;

use App\Models\Plan;
use Illuminate\Database\Seeder;

class PlanSeederTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(!Plan::first()){
            $plan = Plan::create([
                'name' => '2021 - 2025 წლების გეგმა',
            ]);
            foreach (['2021','2022','2023','2024','2025'] as $value) {
                $plan->planYears()->create([
                    'name' => $value
                ]);
            }
        }
    }
}
