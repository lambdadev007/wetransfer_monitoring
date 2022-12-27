<?php

namespace App\Http\Controllers\Api;

use App\Models\PlanYear;
use App\Http\Controllers\Controller;
use App\Http\Resources\GetFilesByYearResource;
use App\Http\Requests\PlanYearFileUploadRequest;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class PlanYearFileUploadController extends Controller
{
    public function index(PlanYearFileUploadRequest $request)
    {
        $model = PlanYear::find($request['plan_year_id']);
        foreach (request('files', []) as $file) {
            $model->addMedia($file)->toMediaCollection('file_per_year');
        }
        return $this->success();
    }

    public function getFilesByYear($id)
    {
        $model = PlanYear::with('media')->findOrFail($id);
        return new GetFilesByYearResource($model);
        return $model;
    }

    public function deleteFile($id)
    {
        Media::findOrFail($id)->delete();
        return $this->success();
    }
}
