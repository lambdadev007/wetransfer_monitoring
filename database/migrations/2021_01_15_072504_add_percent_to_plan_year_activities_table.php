<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPercentToPlanYearActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('plan_year_activities', function (Blueprint $table) {
            $table->integer('percent')->nullable()->after('pr_activity');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('plan_year_activities', function (Blueprint $table) {
            $table->dropColumn('percent');
        });
    }
}
