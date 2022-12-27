<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUserRemarkFieldToPlanYearActivities extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('plan_year_activities', function (Blueprint $table) {
            $table->text('user_remark')->nullable()->after('remark');
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
            $table->dropColumn('user_remark');
        });
    }
}
