<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class FilamentUserSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'status' => 'true',
            'username' => 'Violet admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('123'),
            'type' => 'admin',
            'image' => '/images/defaultLogo.jpg',
            'phone' => '0821332543451',
        ]);
        User::create([
            'status' => 'true',
            'username' => 'Violet',
            'email' => 'user@gmail.com',
            'password' => Hash::make('123'),
            'type' => 'customer',
            'image' => '/images/defaultLogo.jpg',
            'phone' => '0821332543451',
        ]);
    }
}
