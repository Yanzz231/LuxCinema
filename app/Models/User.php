<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;
    protected $rememberTokenName = 'token';

    protected $fillable = [
        'status',
        'username',
        'email',
        'password',
        'type',
        'image',
        'phone',
        'token',
        'otp_verify',
    ];

    public function getFilamentName(): string
    {

        return $this->username;
    }
}


