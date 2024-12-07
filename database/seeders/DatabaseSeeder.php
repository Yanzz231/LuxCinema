<?php

namespace Database\Seeders;

use App\Models\Transaction;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            FilamentUserSeeder::class,
//            FilmSeeder::class,
//            TheatreSeeder::class,
            MenuSeeder::class,
            PlaytimeSeeder::class,
//            TransactionSeeder::class,
//            FnBSeeder::class,
        ]);
    }
}
