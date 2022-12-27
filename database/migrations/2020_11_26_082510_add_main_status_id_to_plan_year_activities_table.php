<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMainStatusIdToPlanYearActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('plan_year_activities', function (Blueprint $table) {
            $table->foreignId('main_status_id')
                ->nullable()
                ->after('status_id')
                ->constrained('statuses')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->integer('month_qty')->after('main_user_id')->nullable();
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
            $table->dropForeign(['main_status_id']);
            $table->dropColumn('main_status_id');
            $table->dropColumn('month_qty');
        });
    }
}
