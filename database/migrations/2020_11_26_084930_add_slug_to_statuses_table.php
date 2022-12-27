<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSlugToStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('statuses', function (Blueprint $table) {
            $table->string('slug')->after('name')->unique()->nullable();
            $table->boolean('only_super_admin')->after('slug')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('statuses', function (Blueprint $table) {
            $table->dropColumn('slug');
            $table->dropColumn('only_super_admin');
        });
    }
}
