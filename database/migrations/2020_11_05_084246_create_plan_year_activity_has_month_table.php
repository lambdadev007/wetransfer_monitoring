<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlanYearActivityHasMonthTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plan_year_activity_has_month', function (Blueprint $table) {
            $table->id();
            $table->foreignId('month_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('plan_year_activity_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plan_year_activity_has_month');
    }
}
