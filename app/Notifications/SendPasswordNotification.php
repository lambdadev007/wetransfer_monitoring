<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;
use Lotuashvili\LaravelSmsOffice\SmsOfficeChannel;

class SendPasswordNotification extends Notification
{
    use Queueable;

    public $user;
    public $password;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($user, $password)
    {
        $this->user = $user;
        $this->password = $password;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return [
            'mail', 
            'database', 
            // SmsOfficeChannel::class
        ];
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
            ->salutation('პატივისცემით, განათლების ხარისხის განვითარების ეროვნული ცენტრი')
            ->subject('პაროლი')
            ->line("გიგზავნით მომხმარებლის სახელსა და ერთჯერად პაროლს, გთხოვთ ავტორიზაციისთანავე შეცვალოთ პაროლი.")
            ->line("მომხმარებლის სახელი: {$this->user->email}")
            ->line("ერთჯერადი პაროლი: {$this->password}");
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
            'data' => "გამარჯობა {$this->user->name}. გიგზავნით მომხმარებლის სახელსა და ერთჯერად პაროლს, გთხოვთ ავტორიზაციისთანავე შეცვალოთ პაროლი. მომხმარებლის სახელი: {$this->user->email}, ერთჯერადი პაროლი: {$this->password}",
        ];
    }

    public function toSms($notifiable)
    {
        return "გამარჯობა {$this->user->name}. გიგზავნით მომხმარებლის სახელსა და ერთჯერად პაროლს, გთხოვთ ავტორიზაციისთანავე შეცვალოთ პაროლი. მომხმარებლის სახელი: {$this->user->email}, ერთჯერადი პაროლი: {$this->password}";
    }
}
