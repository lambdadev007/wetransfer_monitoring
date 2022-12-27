<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class DeadlineRemainderMovedActivityNotification extends Notification implements ShouldQueue
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
                    ->salutation('პატივისცემით, განათლების ხარისხის განვითარების ეროვნული ცენტრი')
                    ->subject('დედლაინი')
                    ->line("შეგახსენებთ, რომ გადატანილი აქტივობის შესრულების ვადა იწურება 3 დღეში.");
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
            'name' => 'შეგახსენებთ, რომ გადატანილი აქტივობის დედლაინი იწურება 3 დღეში.'
        ];
    }

    public function toSms($notifiable)
    {
        return 'შეგახსენებთ, რომ გადატანილი აქტივობის დედლაინი იწურება 3 დღეში.';
    }
}
