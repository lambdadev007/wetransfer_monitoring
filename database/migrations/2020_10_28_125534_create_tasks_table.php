<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('plan_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('goal_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('status_id')->nullable()->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->integer('percent')->default(0);
            $table->text('name')->nullable();
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
        Schema::dropIfExists('tasks');
    }
}
