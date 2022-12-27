<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class DeadlineRemainderNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public $user;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($user)
    {
        $this->user = $user;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->greeting("გამარჯობა {$this->user->name}.")
                    ->salutation('პატივისცემით, განათლების ხარისხის განვითარების ეროვნული ცენტრი.')
                    ->subject('დედლაინი')
                    ->line("შეგახსენებთ, რომ {$this->month()} - ის ბოლომდე შეავსოთ თქვენი ამოცანები.");
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'name' => 'თვის ბოლოს გაქვთ დედლაინი, გთხოვთ გადაამოწმოთ'
        ];
    }

    public function toSms($notifiable)
    {
        return 'თვის ბოლოს გაქვთ დედლაინი, გთხოვთ გადაამოწმოთ';
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
