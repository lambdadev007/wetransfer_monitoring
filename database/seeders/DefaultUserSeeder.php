<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DefaultUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::updateOrCreate(['email' => 'k.tsiramua@eqe.ge'], [
            'name' => 'დაგეგმვის, კვლევისა და საერთაშორისო ურთიერთობების სამსახური',
            'email' => 'k.tsiramua@eqe.ge',
            'password' => '$2y$10$NLi65ljM/mtIO3B052lF9eszVqg.oQxaLcxAgLEGytvNwWpcjJN7W',
            'is_root' => false,
            'is_active' => true,
            'job_id' => 1,
        ]);
        $admin->assignRole('admin');

        $rocket = User::updateOrCreate(['email' => 'admin@rocket.ge'], [
            'name' => 'Rocket Administrator',
            'email' => 'admin@rocket.ge',
            'password' => '$2y$10$NLi65ljM/mtIO3B052lF9eszVqg.oQxaLcxAgLEGytvNwWpcjJN7W',
            'password_change' => true,
            'is_active' => true,
            'is_root' => true
        ]);
        $rocket->assignRole('super_administrator');
    }
}
