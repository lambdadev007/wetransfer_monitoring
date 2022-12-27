<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('custom_fresh', function () {
    if ($this->confirm('Do you wish to continue?')) {
        Artisan::call('migrate:fresh');
        $this->info('database migrate fresh successfully');
        Artisan::call('db:seed');
        $this->info('run db:seed successfully');
        Artisan::call('passport:install');
        $this->info('passport install successfully');
    }
})->purpose('Display an inspiring quote');
