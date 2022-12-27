<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(MaterialResourceTableSeeder::class);
        $this->call(HumanResourceTableSeeder::class);
        $this->call(SourceOfFundingTableSeeder::class);
        $this->call(MonthTableSeeder::class);
        $this->call(PermissionTabelSeeder::class);
        $this->call(JobTableSeeder::class);
        $this->call(DefaultUserSeeder::class);
        $this->call(StatusesTableSeeder::class);
        $this->call(PlanSeederTable::class);
    }
}
