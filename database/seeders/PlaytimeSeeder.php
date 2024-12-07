<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Playtime;

class PlaytimeSeeder extends Seeder
{
    public function run()
    {
        //Theatre 1
        Playtime::create(['time' => '08:00:00', 'theatres_id' => 1, 'films_id' => 1]);
        Playtime::create(['time' => '10:00:00', 'theatres_id' => 1, 'films_id' => 1]);
        Playtime::create(['time' => '12:00:00', 'theatres_id' => 1, 'films_id' => 1]);
        Playtime::create(['time' => '14:00:00', 'theatres_id' => 1, 'films_id' => 1]);
        Playtime::create(['time' => '16:00:00', 'theatres_id' => 1, 'films_id' => 1]);
        Playtime::create(['time' => '18:00:00', 'theatres_id' => 1, 'films_id' => 1]);

        Playtime::create(['time' => '08:30:00', 'theatres_id' => 1, 'films_id' => 2]);
        Playtime::create(['time' => '10:30:00', 'theatres_id' => 1, 'films_id' => 2]);
        Playtime::create(['time' => '12:30:00', 'theatres_id' => 1, 'films_id' => 2]);
        Playtime::create(['time' => '14:30:00', 'theatres_id' => 1, 'films_id' => 2]);
        Playtime::create(['time' => '16:30:00', 'theatres_id' => 1, 'films_id' => 2]);
        Playtime::create(['time' => '18:30:00', 'theatres_id' => 1, 'films_id' => 2]);

        Playtime::create(['time' => '09:00:00', 'theatres_id' => 1, 'films_id' => 3]);
        Playtime::create(['time' => '11:00:00', 'theatres_id' => 1, 'films_id' => 3]);
        Playtime::create(['time' => '13:00:00', 'theatres_id' => 1, 'films_id' => 3]);
        Playtime::create(['time' => '15:00:00', 'theatres_id' => 1, 'films_id' => 3]);
        Playtime::create(['time' => '17:00:00', 'theatres_id' => 1, 'films_id' => 3]);
        Playtime::create(['time' => '19:00:00', 'theatres_id' => 1, 'films_id' => 3]);

        Playtime::create(['time' => '09:30:00', 'theatres_id' => 1, 'films_id' => 4]);
        Playtime::create(['time' => '11:30:00', 'theatres_id' => 1, 'films_id' => 4]);
        Playtime::create(['time' => '13:30:00', 'theatres_id' => 1, 'films_id' => 4]);
        Playtime::create(['time' => '15:30:00', 'theatres_id' => 1, 'films_id' => 4]);
        Playtime::create(['time' => '17:30:00', 'theatres_id' => 1, 'films_id' => 4]);
        Playtime::create(['time' => '19:30:00', 'theatres_id' => 1, 'films_id' => 4]);

        Playtime::create(['time' => '10:00:00', 'theatres_id' => 1, 'films_id' => 5]);
        Playtime::create(['time' => '12:00:00', 'theatres_id' => 1, 'films_id' => 5]);
        Playtime::create(['time' => '14:00:00', 'theatres_id' => 1, 'films_id' => 5]);
        Playtime::create(['time' => '16:00:00', 'theatres_id' => 1, 'films_id' => 5]);
        Playtime::create(['time' => '18:00:00', 'theatres_id' => 1, 'films_id' => 5]);
        Playtime::create(['time' => '20:00:00', 'theatres_id' => 1, 'films_id' => 5]);

        Playtime::create(['time' => '10:30:00', 'theatres_id' => 1, 'films_id' => 6]);
        Playtime::create(['time' => '12:30:00', 'theatres_id' => 1, 'films_id' => 6]);
        Playtime::create(['time' => '14:30:00', 'theatres_id' => 1, 'films_id' => 6]);
        Playtime::create(['time' => '16:30:00', 'theatres_id' => 1, 'films_id' => 6]);
        Playtime::create(['time' => '18:30:00', 'theatres_id' => 1, 'films_id' => 6]);
        Playtime::create(['time' => '20:30:00', 'theatres_id' => 1, 'films_id' => 6]);

        Playtime::create(['time' => '11:00:00', 'theatres_id' => 1, 'films_id' => 7]);
        Playtime::create(['time' => '13:00:00', 'theatres_id' => 1, 'films_id' => 7]);
        Playtime::create(['time' => '15:00:00', 'theatres_id' => 1, 'films_id' => 7]);
        Playtime::create(['time' => '17:00:00', 'theatres_id' => 1, 'films_id' => 7]);
        Playtime::create(['time' => '19:00:00', 'theatres_id' => 1, 'films_id' => 7]);
        Playtime::create(['time' => '21:00:00', 'theatres_id' => 1, 'films_id' => 7]);

        Playtime::create(['time' => '11:30:00', 'theatres_id' => 1, 'films_id' => 8]);
        Playtime::create(['time' => '13:30:00', 'theatres_id' => 1, 'films_id' => 8]);
        Playtime::create(['time' => '15:30:00', 'theatres_id' => 1, 'films_id' => 8]);
        Playtime::create(['time' => '17:30:00', 'theatres_id' => 1, 'films_id' => 8]);
        Playtime::create(['time' => '19:30:00', 'theatres_id' => 1, 'films_id' => 8]);
        Playtime::create(['time' => '21:30:00', 'theatres_id' => 1, 'films_id' => 8]);


        //Theatre 2
        Playtime::create(['time' => '08:00:00', 'theatres_id' => 2, 'films_id' => 1]);
        Playtime::create(['time' => '10:00:00', 'theatres_id' => 2, 'films_id' => 1]);
        Playtime::create(['time' => '12:00:00', 'theatres_id' => 2, 'films_id' => 1]);
        Playtime::create(['time' => '14:00:00', 'theatres_id' => 2, 'films_id' => 1]);
        Playtime::create(['time' => '16:00:00', 'theatres_id' => 2, 'films_id' => 1]);
        Playtime::create(['time' => '18:00:00', 'theatres_id' => 2, 'films_id' => 1]);

//        Playtime::create(['time' => '08:30:00', 'theatres_id' => 2, 'films_id' => 2]);
//        Playtime::create(['time' => '10:30:00', 'theatres_id' => 2, 'films_id' => 2]);
//        Playtime::create(['time' => '12:30:00', 'theatres_id' => 2, 'films_id' => 2]);
//        Playtime::create(['time' => '14:30:00', 'theatres_id' => 2, 'films_id' => 2]);
//        Playtime::create(['time' => '16:30:00', 'theatres_id' => 2, 'films_id' => 2]);
//        Playtime::create(['time' => '18:30:00', 'theatres_id' => 2, 'films_id' => 2]);

        Playtime::create(['time' => '09:00:00', 'theatres_id' => 2, 'films_id' => 3]);
        Playtime::create(['time' => '11:00:00', 'theatres_id' => 2, 'films_id' => 3]);
        Playtime::create(['time' => '13:00:00', 'theatres_id' => 2, 'films_id' => 3]);
        Playtime::create(['time' => '15:00:00', 'theatres_id' => 2, 'films_id' => 3]);
        Playtime::create(['time' => '17:00:00', 'theatres_id' => 2, 'films_id' => 3]);
        Playtime::create(['time' => '19:00:00', 'theatres_id' => 2, 'films_id' => 3]);

        Playtime::create(['time' => '09:30:00', 'theatres_id' => 2, 'films_id' => 4]);
        Playtime::create(['time' => '11:30:00', 'theatres_id' => 2, 'films_id' => 4]);
        Playtime::create(['time' => '13:30:00', 'theatres_id' => 2, 'films_id' => 4]);
        Playtime::create(['time' => '15:30:00', 'theatres_id' => 2, 'films_id' => 4]);
        Playtime::create(['time' => '17:30:00', 'theatres_id' => 2, 'films_id' => 4]);
        Playtime::create(['time' => '19:30:00', 'theatres_id' => 2, 'films_id' => 4]);

        Playtime::create(['time' => '10:00:00', 'theatres_id' => 2, 'films_id' => 5]);
        Playtime::create(['time' => '12:00:00', 'theatres_id' => 2, 'films_id' => 5]);
        Playtime::create(['time' => '14:00:00', 'theatres_id' => 2, 'films_id' => 5]);
        Playtime::create(['time' => '16:00:00', 'theatres_id' => 2, 'films_id' => 5]);
        Playtime::create(['time' => '18:00:00', 'theatres_id' => 2, 'films_id' => 5]);
        Playtime::create(['time' => '20:00:00', 'theatres_id' => 2, 'films_id' => 5]);

        Playtime::create(['time' => '10:30:00', 'theatres_id' => 2, 'films_id' => 6]);
        Playtime::create(['time' => '12:30:00', 'theatres_id' => 2, 'films_id' => 6]);
        Playtime::create(['time' => '14:30:00', 'theatres_id' => 2, 'films_id' => 6]);
        Playtime::create(['time' => '16:30:00', 'theatres_id' => 2, 'films_id' => 6]);
        Playtime::create(['time' => '18:30:00', 'theatres_id' => 2, 'films_id' => 6]);
        Playtime::create(['time' => '20:30:00', 'theatres_id' => 2, 'films_id' => 6]);

        Playtime::create(['time' => '11:00:00', 'theatres_id' => 2, 'films_id' => 7]);
        Playtime::create(['time' => '13:00:00', 'theatres_id' => 2, 'films_id' => 7]);
        Playtime::create(['time' => '15:00:00', 'theatres_id' => 2, 'films_id' => 7]);
        Playtime::create(['time' => '17:00:00', 'theatres_id' => 2, 'films_id' => 7]);
        Playtime::create(['time' => '19:00:00', 'theatres_id' => 2, 'films_id' => 7]);
        Playtime::create(['time' => '21:00:00', 'theatres_id' => 2, 'films_id' => 7]);

//        Playtime::create(['time' => '11:30:00', 'theatres_id' => 2, 'films_id' => 8]);
//        Playtime::create(['time' => '13:30:00', 'theatres_id' => 2, 'films_id' => 8]);
//        Playtime::create(['time' => '15:30:00', 'theatres_id' => 2, 'films_id' => 8]);
//        Playtime::create(['time' => '17:30:00', 'theatres_id' => 2, 'films_id' => 8]);
//        Playtime::create(['time' => '19:30:00', 'theatres_id' => 2, 'films_id' => 8]);
//        Playtime::create(['time' => '21:30:00', 'theatres_id' => 2, 'films_id' => 8]);


        //Theatre 3
        Playtime::create(['time' => '08:00:00', 'theatres_id' => 3, 'films_id' => 1]);
        Playtime::create(['time' => '10:00:00', 'theatres_id' => 3, 'films_id' => 1]);
        Playtime::create(['time' => '12:00:00', 'theatres_id' => 3, 'films_id' => 1]);
        Playtime::create(['time' => '14:00:00', 'theatres_id' => 3, 'films_id' => 1]);
        Playtime::create(['time' => '16:00:00', 'theatres_id' => 3, 'films_id' => 1]);
        Playtime::create(['time' => '18:00:00', 'theatres_id' => 3, 'films_id' => 1]);

        Playtime::create(['time' => '08:30:00', 'theatres_id' => 3, 'films_id' => 2]);
        Playtime::create(['time' => '10:30:00', 'theatres_id' => 3, 'films_id' => 2]);
        Playtime::create(['time' => '12:30:00', 'theatres_id' => 3, 'films_id' => 2]);
        Playtime::create(['time' => '14:30:00', 'theatres_id' => 3, 'films_id' => 2]);
        Playtime::create(['time' => '16:30:00', 'theatres_id' => 3, 'films_id' => 2]);
        Playtime::create(['time' => '18:30:00', 'theatres_id' => 3, 'films_id' => 2]);

        Playtime::create(['time' => '09:00:00', 'theatres_id' => 3, 'films_id' => 3]);
        Playtime::create(['time' => '11:00:00', 'theatres_id' => 3, 'films_id' => 3]);
        Playtime::create(['time' => '13:00:00', 'theatres_id' => 3, 'films_id' => 3]);
        Playtime::create(['time' => '15:00:00', 'theatres_id' => 3, 'films_id' => 3]);
        Playtime::create(['time' => '17:00:00', 'theatres_id' => 3, 'films_id' => 3]);
        Playtime::create(['time' => '19:00:00', 'theatres_id' => 3, 'films_id' => 3]);

        Playtime::create(['time' => '09:30:00', 'theatres_id' => 3, 'films_id' => 4]);
        Playtime::create(['time' => '11:30:00', 'theatres_id' => 3, 'films_id' => 4]);
        Playtime::create(['time' => '13:30:00', 'theatres_id' => 3, 'films_id' => 4]);
        Playtime::create(['time' => '15:30:00', 'theatres_id' => 3, 'films_id' => 4]);
        Playtime::create(['time' => '17:30:00', 'theatres_id' => 3, 'films_id' => 4]);
        Playtime::create(['time' => '19:30:00', 'theatres_id' => 3, 'films_id' => 4]);

        Playtime::create(['time' => '10:00:00', 'theatres_id' => 3, 'films_id' => 5]);
        Playtime::create(['time' => '12:00:00', 'theatres_id' => 3, 'films_id' => 5]);
        Playtime::create(['time' => '14:00:00', 'theatres_id' => 3, 'films_id' => 5]);
        Playtime::create(['time' => '16:00:00', 'theatres_id' => 3, 'films_id' => 5]);
        Playtime::create(['time' => '18:00:00', 'theatres_id' => 3, 'films_id' => 5]);
        Playtime::create(['time' => '20:00:00', 'theatres_id' => 3, 'films_id' => 5]);

        Playtime::create(['time' => '10:30:00', 'theatres_id' => 3, 'films_id' => 6]);
        Playtime::create(['time' => '12:30:00', 'theatres_id' => 3, 'films_id' => 6]);
        Playtime::create(['time' => '14:30:00', 'theatres_id' => 3, 'films_id' => 6]);
        Playtime::create(['time' => '16:30:00', 'theatres_id' => 3, 'films_id' => 6]);
        Playtime::create(['time' => '18:30:00', 'theatres_id' => 3, 'films_id' => 6]);
        Playtime::create(['time' => '20:30:00', 'theatres_id' => 3, 'films_id' => 6]);

//        Playtime::create(['time' => '11:00:00', 'theatres_id' => 3, 'films_id' => 7]);
//        Playtime::create(['time' => '13:00:00', 'theatres_id' => 3, 'films_id' => 7]);
//        Playtime::create(['time' => '15:00:00', 'theatres_id' => 3, 'films_id' => 7]);
//        Playtime::create(['time' => '17:00:00', 'theatres_id' => 3, 'films_id' => 7]);
//        Playtime::create(['time' => '19:00:00', 'theatres_id' => 3, 'films_id' => 7]);
//        Playtime::create(['time' => '21:00:00', 'theatres_id' => 3, 'films_id' => 7]);

        Playtime::create(['time' => '11:30:00', 'theatres_id' => 3, 'films_id' => 8]);
        Playtime::create(['time' => '13:30:00', 'theatres_id' => 3, 'films_id' => 8]);
        Playtime::create(['time' => '15:30:00', 'theatres_id' => 3, 'films_id' => 8]);
        Playtime::create(['time' => '17:30:00', 'theatres_id' => 3, 'films_id' => 8]);
        Playtime::create(['time' => '19:30:00', 'theatres_id' => 3, 'films_id' => 8]);
        Playtime::create(['time' => '21:30:00', 'theatres_id' => 3, 'films_id' => 8]);


        //Theatre 4
//        Playtime::create(['time' => '08:00:00', 'theatres_id' => 4, 'films_id' => 1]);
//        Playtime::create(['time' => '10:00:00', 'theatres_id' => 4, 'films_id' => 1]);
//        Playtime::create(['time' => '12:00:00', 'theatres_id' => 4, 'films_id' => 1]);
//        Playtime::create(['time' => '14:00:00', 'theatres_id' => 4, 'films_id' => 1]);
//        Playtime::create(['time' => '16:00:00', 'theatres_id' => 4, 'films_id' => 1]);
//        Playtime::create(['time' => '18:00:00', 'theatres_id' => 4, 'films_id' => 1]);

        Playtime::create(['time' => '08:30:00', 'theatres_id' => 4, 'films_id' => 2]);
        Playtime::create(['time' => '10:30:00', 'theatres_id' => 4, 'films_id' => 2]);
        Playtime::create(['time' => '12:30:00', 'theatres_id' => 4, 'films_id' => 2]);
        Playtime::create(['time' => '14:30:00', 'theatres_id' => 4, 'films_id' => 2]);
        Playtime::create(['time' => '16:30:00', 'theatres_id' => 4, 'films_id' => 2]);
        Playtime::create(['time' => '18:30:00', 'theatres_id' => 4, 'films_id' => 2]);

        Playtime::create(['time' => '09:00:00', 'theatres_id' => 4, 'films_id' => 3]);
        Playtime::create(['time' => '11:00:00', 'theatres_id' => 4, 'films_id' => 3]);
        Playtime::create(['time' => '13:00:00', 'theatres_id' => 4, 'films_id' => 3]);
        Playtime::create(['time' => '15:00:00', 'theatres_id' => 4, 'films_id' => 3]);
        Playtime::create(['time' => '17:00:00', 'theatres_id' => 4, 'films_id' => 3]);
        Playtime::create(['time' => '19:00:00', 'theatres_id' => 4, 'films_id' => 3]);

        Playtime::create(['time' => '09:30:00', 'theatres_id' => 4, 'films_id' => 4]);
        Playtime::create(['time' => '11:30:00', 'theatres_id' => 4, 'films_id' => 4]);
        Playtime::create(['time' => '13:30:00', 'theatres_id' => 4, 'films_id' => 4]);
        Playtime::create(['time' => '15:30:00', 'theatres_id' => 4, 'films_id' => 4]);
        Playtime::create(['time' => '17:30:00', 'theatres_id' => 4, 'films_id' => 4]);
        Playtime::create(['time' => '19:30:00', 'theatres_id' => 4, 'films_id' => 4]);

        Playtime::create(['time' => '10:00:00', 'theatres_id' => 4, 'films_id' => 5]);
        Playtime::create(['time' => '12:00:00', 'theatres_id' => 4, 'films_id' => 5]);
        Playtime::create(['time' => '14:00:00', 'theatres_id' => 4, 'films_id' => 5]);
        Playtime::create(['time' => '16:00:00', 'theatres_id' => 4, 'films_id' => 5]);
        Playtime::create(['time' => '18:00:00', 'theatres_id' => 4, 'films_id' => 5]);
        Playtime::create(['time' => '20:00:00', 'theatres_id' => 4, 'films_id' => 5]);

        Playtime::create(['time' => '10:30:00', 'theatres_id' => 4, 'films_id' => 6]);
        Playtime::create(['time' => '12:30:00', 'theatres_id' => 4, 'films_id' => 6]);
        Playtime::create(['time' => '14:30:00', 'theatres_id' => 4, 'films_id' => 6]);
        Playtime::create(['time' => '16:30:00', 'theatres_id' => 4, 'films_id' => 6]);
        Playtime::create(['time' => '18:30:00', 'theatres_id' => 4, 'films_id' => 6]);
        Playtime::create(['time' => '20:30:00', 'theatres_id' => 4, 'films_id' => 6]);

        Playtime::create(['time' => '11:00:00', 'theatres_id' => 4, 'films_id' => 7]);
        Playtime::create(['time' => '13:00:00', 'theatres_id' => 4, 'films_id' => 7]);
        Playtime::create(['time' => '15:00:00', 'theatres_id' => 4, 'films_id' => 7]);
        Playtime::create(['time' => '17:00:00', 'theatres_id' => 4, 'films_id' => 7]);
        Playtime::create(['time' => '19:00:00', 'theatres_id' => 4, 'films_id' => 7]);
        Playtime::create(['time' => '21:00:00', 'theatres_id' => 4, 'films_id' => 7]);

        Playtime::create(['time' => '11:30:00', 'theatres_id' => 4, 'films_id' => 8]);
        Playtime::create(['time' => '13:30:00', 'theatres_id' => 4, 'films_id' => 8]);
        Playtime::create(['time' => '15:30:00', 'theatres_id' => 4, 'films_id' => 8]);
        Playtime::create(['time' => '17:30:00', 'theatres_id' => 4, 'films_id' => 8]);
        Playtime::create(['time' => '19:30:00', 'theatres_id' => 4, 'films_id' => 8]);
        Playtime::create(['time' => '21:30:00', 'theatres_id' => 4, 'films_id' => 8]);

    }
}
