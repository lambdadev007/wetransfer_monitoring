<?php

namespace App\Http\Controllers\Api;

use App\Models\Plan;
use App\Models\User;
use App\Models\Status;
use App\Models\Evidence;
use App\Models\PlanYear;
use App\Models\Indicator;
use App\Models\HumanResource;
use App\Models\SourceOfFunding;
use App\Models\MaterialResource;
use App\Models\PlanYearActivity;
use App\Http\Controllers\Controller;
use App\Http\Requests\EvidenceRequest;
use App\Http\Resources\SelectResource;
use App\Http\Requests\IndicatorRequest;
use App\Http\Resources\StatusesResource;
use App\Http\Resources\Auth\UserResource;
use App\Http\Resources\ActivityCollection;
use App\Http\Requests\ActivityIndexRequest;
use App\Http\Resources\AdditionalDataResourse;
use App\Http\Resources\PlanyearSelectResource;
use App\Http\Requests\ActivityCreateForUserRequest;
use App\Http\Requests\ActivityCreateForAdminRequest;
use App\Http\Requests\PlanYearActivityCommentRequest;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use App\Http\Resources\One\PlanYearActivityShowResource;

class ActivityController extends Controller
{
    private $planYear;
    private $plan;

    public function __construct()
    {
        $this->planYear = PlanYear::existPlan();
        $this->plan = Plan::existPlan();
    }

    public function index(ActivityIndexRequest $request)
    {
        return $this->success([
            'data' => new ActivityCollection(
                PlanYear::with('activities')->findOrFail($request['plan_year_id'])
                    ->planYearsactivities()
                    ->select('*')
                    ->orderByRaw('naturalSortFormat(name, 10, ".")')
                    ->filterBy()
                    ->with('media','months', 'planYear', 'movedLastActivity', 'mainUser.roles', 'status', 'mainStatus')
                    ->ownerWithAdmin()
                    ->paginate(25)
            ),
        ]);
    }

    public function show($id)
    {
        $activity = $this->plan
            ->planYearsActivities()
            ->with(
                'media',
                'months', 
                'movedLastActivity', 
                'mainUser.roles',
                'users.job',
                'status', 
                'mainStatus', 
                'task.goal', 
                // 'sourceOfFunding',
                'materialResource', 
                'humanResource', 
                'planYear', 
                'indicators.evidences.media',
                'statusLog'
            )
            ->ownerWithAdmin()
            ->findOrFail($id); 
        return $this->success(
            new PlanYearActivityShowResource($activity)
        );
    }

    public function createOrUpdateForAdmin(ActivityCreateForAdminRequest $request)
    {
        abort_if(!auth()->user()->adminOrSuperAdmin(), 403);

        if (request()->filled('id')) {
            $activity = $this->plan->planYearsActivities()->findOrFail($request['id']);
            tap($activity)->update($request->except('months', 'users'));
        }else{
            $activity = $this->plan->planYearsActivities()->create($request->except('months', 'users'));
        }
        $activity->months()->sync($request['months']);
        $activity->users()->sync($request['users']);

        return $this->success($activity->id);
    }

    public function createOrUpdateForUser(ActivityCreateForUserRequest $request)
    {
        $activity = $this->planYear->planYearsActivities()->findOrFail(request('activity_id'));
        $this->authorize('update', $activity);
        tap($activity)->update($request->validated());
        return $this->success($activity->id);
    }

    public function comment($id, PlanYearActivityCommentRequest $request)
    {
        $activity = $this->planYear->planYearsActivities()->ownerWithAdmin()->findOrFail($id);
        abort_if(!$activity->editable() || auth()->user()->id != $activity->main_user_id, 503);
        $activity->comment = $request->comment;

        if ($request->has('photos')) {
            foreach($request->photos as $image){
                $activity->addMedia($image)->tomediaCollection('comments');
            }
        }

        $activity->save();
        
        return $this->success();   
    }

    public function additionalData()
    {
        $goals = $this->plan->goals()->with('tasks')->get();
        $data = [];
        $data['goals'] = AdditionalDataResourse::collection($goals);
        $data['statuses'] = StatusesResource::collection(Status::get());
        $data['material_resources'] = SelectResource::collection(MaterialResource::get());
        // $data['source_of_fundings'] = SelectResource::collection(SourceOfFunding::get());
        $data['human_resources'] = SelectResource::collection(HumanResource::get());
        $data['users'] = UserResource::collection(User::with('roles')->where('is_root', false)->skipFirst()->get());
        return $this->success($data);
    }

    public function selectData()
    {
        $data =  $this->plan->planYears()->select('id', 'name')->get();
        return $this->success(
            PlanyearSelectResource::collection(
                $data
            )
        ); 
    }

    public function createOrUpdateIndicator(IndicatorRequest $request)
    {
        $activity = $this->planYear->planYearsActivities()->findOrFail(request('activity_id'));
        $this->authorize('update', $activity);
        if ($request->filled('id')) {
            $model = $activity->indicators()->findOrFail(request('id'));
            tap($model)->update(['name' => request('name')]);
        }else{
            $model = $activity->indicators()->create([
                'name' => request('name'),
                'plan_id' => $this->plan->id
            ]);
        }
        return $this->success($model->id);
    }

    public function deleteIndicator($id)
    {
        $model = Indicator::with('indicatorable','evidences')->findOrFail($id);
        $this->authorize('update', $model->indicatorable);
        $model->evidences->each->delete();
        $model->delete();
        return $this->success();   
    }

    public function createOrUpdateEvidence(EvidenceRequest $request)
    {
        $indicator = Indicator::with('indicatorable')->findOrFail(request('indicator_id'));
        $this->authorize('update', $indicator->indicatorable);

        if ($request->filled('id')) {
            $model = $indicator->evidences()->findOrFail(request('id'));
            tap($model)->update(['name' => request('name')]);
        }else{
            $model = $indicator->evidences()->create([
                'name' => request('name'),
                'plan_id' => $this->plan->id
            ]);
        }
        if (request('files')) {
            foreach ($request['files'] as $file) {
                $model->addMedia($file)->toMediaCollection('evidence_for_user');
            }
        }
        return $this->success($model->id);
    }

    public function deleteEvidence($id)
    {
        $model = Evidence::with('media', 'evidenceable.indicatorable')->findOrFail($id);
        $this->authorize('update', $model->evidenceable->indicatorable);
        $model->delete();
        return $this->success();    
    }

    public function delete($id)
    {
        $model = PlanYearActivity::with('indicators')->findOrFail($id);
        $model->indicators->each->delete();
        $model->delete();
        return $this->success();   
    }

    public function deleteFile($id)
    {
        $media = Media::with('model.evidenceable.indicatorable')->findOrFail($id);
        $this->authorize('update', $media->model->evidenceable->indicatorable);
        $media->delete();
        return $this->success();
    }

    public function deleteCommentFile($id)
    {
        $media = Media::with('model')->findOrFail($id);
        $this->authorize('update', $media->model);
        $media->delete();
        return $this->success();
    }

}
