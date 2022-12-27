<?php

namespace App\Console\Commands;

use App\Models\Plan;
use App\Models\Month;
use Illuminate\Console\Command;
use App\Models\PlanYearActivity;
use App\Models\PlanQuarterSubActivity;
use Lotuashvili\LaravelSmsOffice\SmsOffice;
use App\Notifications\DeadlineRemainderNotification;

class DeadlineRemainderCommand extends Command
{
    public $users = [];

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'run:deadline-remainder';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'run command every day and check deadline date';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->users = collect([]);
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(SmsOffice $smsoffice)
    {
        $deadlineRemainderDate = now()->endOfMonth()->subDay(7)->format('Y-m-d');
        if (now()->format('Y-m-d') != $deadlineRemainderDate) {
            return ;
        }
        $nextMonth = Month::whereSlug(now()->addMonth()->format('F'))->first();
        $this->planYearActivities($nextMonth);
        if ($this->users->count()) {
            $this->users->each(function ($user) use ($smsoffice) {
                $user->notify(new DeadlineRemainderNotification($user));
                try {
                    $smsoffice->send($user->phone, "გამარჯობა {$user->name}. შეგახსენებთ, რომ {$this->month()} - ის ბოლომდე შეავსოთ თქვენი ამოცანები. პატივისცემით, განათლების ხარისხის განვითარების ეროვნული ცენტრი.");
                } catch (\Throwable $th) {
                }
            });
            $this->info('send notifications');
            return;
        }
        $this->info('notification not exists this month');
    }

    protected function planYearActivities($nextMonth)
    {
        $builder = PlanYearActivity::where('status_id', null)
            ->where('main_status_id', null)
            ->whereHas(
                'months',
                fn ($query) => $query->whereSlug(now()->format('F'))
            )
            ->doesntHave('movedLastActivityNotDate')
            ->with('months', 'mainUser')->where([
                'plan_id' => Plan::existPlan()->id,
                'is_active' => true
            ]);
            return $this->getAndPushData($builder, $nextMonth);
    }

    public function getAndPushData($builder, $nextMonth)
    {
        $builder->get()
            ->filter(fn ($item) => !$item->months->contains($nextMonth))
            ->each(function ($item) {
                if (!$this->users->contains($item->mainUser)) {
                    $this->users->push($item->mainUser);
                }
            });
    }

    protected function month(){
        return [
            '01' => 'იანვრის',
            '02' => 'თებერვლის',
            '03' => 'მარტის',
            '04' => 'აპრილის',
            '05' => 'მაისის',
            '06' => 'ივნისის',
            '07' => 'ივლისის',
            '08' => 'აგვისტოს',
            '09' => 'სექტემბრის',
            '10' => 'ოქტომბრის',
            '11' => 'ნოემბრის',
            '12' => 'დეკემბრის',
        ][now()->format('m')];   
    }
}
