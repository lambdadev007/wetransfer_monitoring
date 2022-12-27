<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class PermissionTabelSeeder extends Seeder
{
    protected $roles = [
        [
            'name' => 'users',
            'label' => 'მომხმარებელი',
        ],
        [
            'name' => 'admin',
            'label' => 'ადმინისტრატორი',
        ],
        [
            'name' => 'super_administrator',
            'label' => 'სუპერ ადმინისტრატორი',
        ],
    ];

    protected $permissions = [
        //plan
        ['name' => 'plan_view', 'label' => '5 წლიანი გეგმის ნახვა', 'group' => 'plan', 'roles' => ['super_administrator', 'admin']],
        ['name' => 'plan_create', 'label' => '5 წლიანი გეგმის დამატება', 'group' => 'plan', 'roles' => ['super_administrator', 'admin']],
        ['name' => 'plan_edit', 'label' => '5 წლიანი გეგმის რედაქტირება', 'group' => 'plan', 'roles' => ['super_administrator', 'admin']],
        ['name' => 'plan_delete', 'label' => '5 წლიანი გეგმის წაშლა', 'group' => 'plan', 'roles' => ['super_administrator', 'admin']],
        //plan year
        ['name' => 'plan_year_view', 'label' => 'ერთწლიანი გეგმის ნახვა', 'group' => 'plan_year', 'roles' => ['super_administrator', 'admin']],
        ['name' => 'plan_year_create', 'label' => 'ერთწლიანი გეგმის დამატება', 'group' => 'plan_year', 'roles' => ['super_administrator', 'admin']],
        ['name' => 'plan_year_edit', 'label' => 'ერთწლიანი გეგმის რედაქტირება', 'group' => 'plan_year', 'roles' => ['super_administrator', 'admin']],
        ['name' => 'plan_year_delete', 'label' => 'ერთწლიანი გეგმის წაშლა', 'group' => 'plan_year', 'roles' => ['super_administrator', 'admin']],

        //jobs
        ['name' => 'job_view', 'label' => 'სამსახურის ნახვა', 'group' => 'job', 'roles' => ['super_administrator', 'admin']],
        ['name' => 'job_create', 'label' => 'სამსახურის დამატება', 'group' => 'job', 'roles' => ['super_administrator', 'admin']],
        ['name' => 'job_edit', 'label' => 'სამსახურის რედაქტირება', 'group' => 'job', 'roles' => ['super_administrator', 'admin']],
        ['name' => 'job_delete', 'label' => 'სამსახურის წაშლა', 'group' => 'job', 'roles' => ['super_administrator', 'admin']],

        //users
        ['name' => 'users_view', 'label' => 'მომხმარებლის ნახვა', 'group' => 'users', 'roles' => ['super_administrator', 'admin']],
        ['name' => 'users_create', 'label' => 'მომხმარებლის დამატება', 'group' => 'users', 'roles' => ['super_administrator', 'admin']],
        ['name' => 'users_edit', 'label' => 'მომხმარებლის რედაქტირება', 'group' => 'users', 'roles' => ['super_administrator', 'admin']],
        ['name' => 'users_delete', 'label' => 'მომხმარებლის წაშლა', 'group' => 'users', 'roles' => ['super_administrator', 'admin']],
        //logs
        ['name' => 'logs_view', 'label' => 'ლოგების ნახვა', 'group' => 'logs', 'roles' => ['super_administrator', 'admin']],

        ['name' => 'every_year_add_file', 'label' => 'ყოველწლიური სტატისტიკური ინფრომაციის ატვირთვა', 'group' => 'plan_year', 'roles' => ['super_administrator', 'admin']],
        ['name' => 'excel_export', 'label' => 'ექსელის ექსპორტი', 'group' => 'excel', 'roles' => ['super_administrator', 'admin']],
        ['name' => 'activity_status_manage', 'label' => 'აქტივობებზე/ქვეაქტივობებზე სტატუსების მინიჭება', 'group' => 'status', 'roles' => ['super_administrator', 'admin']],
        ['name' => 'activity_status_confirm', 'label' => 'აქტივობებზე/ქვეაქტივობებზე სტატუსების დადასტურება', 'group' => 'status', 'roles' => ['super_administrator']],
        ['name' => 'general_information', 'label' => 'ზოგადი ინფორმაცია', 'group' => 'general', 'roles' => ['super_administrator', 'admin']],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        foreach ($this->roles as $role) {
            Role::updateOrCreate(['name' => $role['name']], $role);
        }

        foreach ($this->permissions as $perm) {
            $permission = Permission::updateOrCreate(['name' => $perm['name']], [
                'name' => $perm['name'],
                'label' => $perm['label'],
                'group' => $perm['group'],
            ]);
            $permission->syncRoles($perm['roles']);
        }
    }
}
