<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlanYearActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plan_year_activities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('plan_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('plan_year_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('task_id')->nullable()->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('material_resource_id')->nullable()->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('human_resource_id')->nullable()->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('source_of_funding_id')->nullable()->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('main_user_id')->nullable()->constrained('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('secondary_user_id')->nullable()->constrained('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('status_id')->nullable()->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->boolean('is_active')->default(true);
            $table->text('name')->nullable();
            $table->text('remark')->nullable();
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
        Schema::dropIfExists('plan_year_activities');
    }
}
