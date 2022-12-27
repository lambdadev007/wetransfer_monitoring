<?php

namespace App\Console\Commands;

use App\Models\MovedActivity;
use Illuminate\Console\Command;
use Lotuashvili\LaravelSmsOffice\SmsOffice;
use App\Notifications\DeadlineRemainderMovedActivityNotification;

class DeadlineRemainderMovedActivityCommand extends Command
{
    public $users = [];

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'run:deadline-remainder-moved-activity';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'run command every day and check deadline date by moved activity';

    protected $day = 3;

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
        
        $now = now()->addDay($this->day)->format('Y-m-d');
        $activity = MovedActivity::with('activity.mainUser')
            ->whereDate('end_date', $now)
            ->get()
            ->pluck('activity.mainUser')
            ->unique('phone');
    
        
        if ($activity->count()) {
            $activity->each(function ($user) use ($smsoffice) {
                $user->notify(new DeadlineRemainderMovedActivityNotification($user));
                try {
                    $smsoffice->send($user->phone, "გამარჯობა {$user->name}. შეგახსენებთ, რომ გადატანილი აქტივობის შესრულების ვადა იწურება 3 დღეში.");
                } catch (\Throwable $th) {
                }
            });
            $this->info('send notifications');
            return;
        }
        $this->info('notification not exists this month');
    }
}
