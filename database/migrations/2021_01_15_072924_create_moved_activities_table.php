<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMovedActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('moved_activities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('plan_year_activity_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('main_status_id')
                ->nullable()
                ->constrained('statuses')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreignId('status_id')
                ->nullable()
                ->constrained('statuses')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->integer('day')->nullable();
            $table->dateTime('end_date')->nullable();
            $table->integer('percent')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('moved_activities');
    }
}
