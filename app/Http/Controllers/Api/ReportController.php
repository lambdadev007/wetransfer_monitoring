<?php

namespace App\Http\Controllers\Api;

use App\Models\Goal;
use App\Models\Plan;
use App\Models\User;
use App\Models\Month;
use App\Models\Status;
use App\Models\PlanYearActivity;
use Facades\Barryvdh\DomPDF\PDF;
use App\Http\Controllers\Controller;
use App\Http\Resources\MonthResource;
use App\Http\Resources\SelectResource;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\ReportCollection;
use App\Http\Resources\Five\Plan\GoalResource;
use App\Http\Resources\PlanyearSelectResource;
use App\Http\Resources\Auth\UserListByReportResource;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ReportController extends Controller
{
    public function index()
    {
        $reports = new ReportCollection(
            auth()->user()
                ->reports()
                ->with('user.job','media')
                ->orderByDesc('id')
                ->paginate(25)
        );

        return $this->success($reports);
    }
    public function generate()
    {
        $activities = PlanYearActivity::with($this->withRelation())
            ->filterBy()
            ->get();
        $filterParams = $this->filterParams();

        $pdf = PDF::loadView('reports.index', compact('activities', 'filterParams'));
        $getOriginalContent =  $pdf->download('test.pdf')->getOriginalContent();
        $fileName = now()->format('Y-m-d H-i');
        $report = auth()->user()->reports()->create([]);
        Storage::put("public/{$fileName}.pdf",$getOriginalContent) ;
        $file = Storage::path("public/{$fileName}.pdf");
        $report->addMedia($file)
            ->toMediaCollection('report', 'media_report');
        Storage::delete("public/{$fileName}.pdf");
        return $this->success();
    }

    public function filters()
    {
        $plan = Plan::existPlan();
        return [
            'goals_with_tasks' => GoalResource::collection(
                $plan
                    ->goals()
                    ->get()
            ),
            'month' => MonthResource::collection(
                Month::get()
            ), 
            'users' => UserListByReportResource::collection(
                User::role('users')->notRoot()->with('roles')->get()
            ),
            'statuses' => SelectResource::collection(
                Status::get()
            ),
            'years' => PlanyearSelectResource::collection(
                $plan->planYears()->select('id', 'name')->get()
            )
        ];
    }

    public function delete($id)
    {
        auth()->user()->reports()->findOrFail($id)->delete();
        return $this->success();
    }

    public function downloadReport($id)
    {
        $report = auth()->user()->reports()->with('media')->findOrFail($id);
        return response()->download($report->getFirstMediaPath('report'));
    }

    public function filterParams()
    {
        $data = [];
        if (request()->filled('months')) {
            $data['months'] = Month::findMany(explode(',', request('months')))->pluck('name')->implode(', '); 
        }
        if (request()->filled('main_user_id')) {
            $data['user'] = object_get(User::with('job')->find(request('main_user_id')), 'job.name'); 
        }
        if (request()->filled('goal')) {
            $data['goal'] = object_get(Goal::find(request('goal')), 'name'); 
        }
        if (request()->filled('goal')) {
            $data['goal'] = object_get(Goal::find(request('goal')), 'name'); 
        }
        if (request()->filled('status')) {
            $data['status'] = object_get(Status::find(request('status')), 'name'); 
        }
        return $data;
    }
    protected function withRelation()
    {
        return [
            'task' => fn($query) => $query
                ->select('id', 'name', 'goal_id')
                ->with([
                    'goal' => fn($query) => $query
                        ->select('id', 'name')
                ]),
            'mainUser' => fn($query) => $query
                ->select('id', 'name', 'job_id')
                ->with([
                    'job' => fn($query) => $query
                        ->select('id', 'name')
                ]),
            'users.job',
            'materialResource' => fn($query) => $query
                ->select('id', 'name'),
            'status' => fn($query) => $query
                ->select('id', 'name'),
            'mainStatus' => fn($query) => $query
                ->select('id', 'name'),
            'humanResource' => fn($query) => $query
                ->select('id', 'name'),
            // 'sourceOfFunding' => fn($query) => $query
            //     ->select('id', 'name'),
            'months',
            'indicators.evidences.media',
            'media'
        ];
    }
}
