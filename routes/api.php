<?php

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Route;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'AuthController@login')->name('login');
    Route::group([
      'middleware' => 'auth:api'
    ], function () {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
        Route::post('profile-update', 'AuthController@profileUpdate');
        Route::post('change-password', 'AuthController@changePassword');
    });
});

Route::group([
    'middleware' => 'auth:api',
    'prefix' => 'positions',
  ], function () {
      Route::get('/', 'PositionController@index')->middleware('permission:users_view');
      Route::post('store', 'PositionController@store')->middleware('permission:plan_create');
      Route::delete('delete/{id}', 'PositionController@delete')->middleware('permission:plan_create');
      Route::post('update/{id}', 'PositionController@update')->middleware('permission:plan_create');
      Route::get('select-data', 'PositionController@positionsSelectData')->middleware('permission:plan_create');
  });

Route::group([
    'middleware' => 'auth:api',
  ], function () {
      Route::prefix('reports')->group(function () {
        Route::get('/', 'ReportController@index');
        Route::delete('/delete/{id}', 'ReportController@delete');
        Route::get('/filters', 'ReportController@filters');
        Route::get('/generate', 'ReportController@generate');
        Route::post('download/{id}', 'ReportController@downloadReport');
      });
      Route::prefix('activities')->group(function (){
          Route::get('/', 'ActivityController@index');
          Route::get('show/{id}', 'ActivityController@show');
          Route::delete('delete/{id}', 'ActivityController@delete');
          Route::delete('delete/file/{id}', 'ActivityController@deleteFile');
          Route::delete('delete/comment-file/{id}', 'ActivityController@deleteCommentFile');
          Route::get('/additional-data', 'ActivityController@additionalData');
          Route::post('create-or-update-for-admin', 'ActivityController@createOrUpdateForAdmin');
          Route::post('create-or-update-for-user', 'ActivityController@createOrUpdateForUser');
          Route::post('/comment/{id}', 'ActivityController@comment');
          Route::prefix('indicators')->group(function (){
            Route::post('/save', 'ActivityController@createOrUpdateIndicator');
            Route::delete('/delete/{id}', 'ActivityController@deleteIndicator');
            Route::post('evidence/save', 'ActivityController@createOrUpdateEvidence');
            Route::delete('evidence/delete/{id}', 'ActivityController@deleteEvidence');
        });
      });
      Route::post('/activity-recomendation', 'PlanYearActivityRecomendationController@index')->middleware('permission:plan_year_create');
      Route::get('/statuses', 'ActivityStatusController@getStatuses');
      Route::get('/select-year-data', 'ActivityController@selectData');
      Route::get('/get-files-by-year/{id}', 'PlanYearFileUploadController@getFilesByYear');
      Route::post('/upload-file-per-year', 'PlanYearFileUploadController@index')->middleware('permission:plan_year_create');
      Route::delete("/delete-file-per-year/{id}", "PlanYearFileUploadController@deleteFile")->middleware('permission:plan_delete');
      Route::post('/activity/status/join', 'ActivityStatusController@join')->middleware('permission:activity_status_manage');
      Route::post('/activity/status/confirm', 'ActivityStatusController@confirm')->middleware('permission:activity_status_confirm');
      Route::post('/settings/store', 'SettingController@store')->middleware('permission:general_information');
      Route::get('/settings', 'SettingController@index');
      Route::post('store', 'PositionController@store')->middleware('permission:plan_create');
      Route::get('logs', 'LogController@index')->middleware('permission:logs_view');
  });

Route::group([
    'prefix' => 'five/plans',
    'namespace' => 'Five\\Steps',
    'middleware' => ['auth:api']
  ], function () {
      for ($i = 0; $i < 5; $i++) {
          if($i == 0){
            Route::get("/step{$i}", "Step{$i}Controller@index");
          } else {
            Route::get("/step{$i}", "Step{$i}Controller@index")->middleware('permission:plan_view');  
          }
          Route::post("/step{$i}/store", "Step{$i}Controller@store")->middleware('permission:plan_create');
          Route::delete("/step{$i}/delete/{id}", "Step{$i}Controller@delete")->middleware('permission:plan_delete');
      }
  });

Route::group([
    'middleware' => ['auth:api', 'permission:job_view']
], function () {
    Route::apiResources([
        'jobs' => JobController::class,
    ]);
});


