<?php

namespace App\Exports;

use App\Models\Goal;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class PlanExcel implements FromView
{
    public function view(): View
    {
        return view('exports.plan', [
            'goals' => Goal::with('tasks')->get()
        ]);
    }
}
