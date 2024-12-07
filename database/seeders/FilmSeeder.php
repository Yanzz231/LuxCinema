<?php

namespace Database\Seeders;

use App\Models\Film;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class FilmSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Film::create([
            'title' => 'Interstellar',
            'synopsis' => 'When Earth faces extinction, a team of astronauts ventures beyond our solar system in search of a new home for humanity. A gripping tale of love, survival, and the power of exploration.',
            'duration' => '169 minutes',
            'rating' => 'PG-13',
            'producer' => 'Emma Thomas',
            'type' => '3D',
            'genre' => 'Sci-Fi',
            'director' => 'Christopher Nolan',
            'writer' => 'Jonathan Nolan, Christopher Nolan',
            'cast' => 'Matthew McConaughey, Anne Hathaway',
            'image' => '1732594544hallo.jpg',
            'link_trailers' => 'https://youtube.com/trailer/interstellar',
            'status' => 'Now-Showing',
        ]);

        Film::create([
            'title' => 'Inception',
            'synopsis' => 'A skilled thief who can enter peoples dreams is tasked with planting an idea into a targets subconscious. As the mission unfolds, the lines between dream and reality blur in a thrilling race against time.',
            'duration' => '148 minutes',
            'rating' => 'PG-13',
            'producer' => 'Emma Thomas',
            'type' => '2D',
            'genre' => 'Sci-Fi',
            'director' => 'Christopher Nolan',
            'writer' => 'Christopher Nolan',
            'cast' => 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page',
            'image' => '1732594809MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg',
            'link_trailers' => 'https://youtube.com/trailer/inception',
            'status' => 'Now-Showing',
        ]);

        Film::create([
            'title' => 'The Dark Knight',
            'synopsis' => 'As Gothams protector, Batman confronts his most dangerous adversary yet—the anarchistic Joker, who pushes him to his limits in a battle of wits and chaos.',
            'duration' => '152 minutes',
            'rating' => 'PG-13',
            'producer' => 'Emma Thomas',
            'type' => '2D',
            'genre' => 'Action',
            'director' => 'Christopher Nolan',
            'writer' => 'Jonathan Nolan, Christopher Nolan',
            'cast' => 'Christian Bale, Heath Ledger, Aaron Eckhart',
            'image' => '',
            'link_trailers' => 'https://youtube.com/trailer/darkknight',
            'status' => 'Now-Showing',
        ]);

        Film::create([
            'title' => 'Avatar',
            'synopsis' => 'On the alien moon of Pandora, a former Marine becomes part of an indigenous tribe through a revolutionary avatar program, leading to a clash of cultures and a fight for survival.',
            'duration' => '162 minutes',
            'rating' => 'PG-13',
            'producer' => 'James Cameron',
            'type' => '2D',
            'genre' => 'Sci-Fi',
            'director' => 'James Cameron',
            'writer' => 'James Cameron',
            'cast' => 'Sam Worthington, Zoe Saldana, Sigourney Weaver',
            'image' => '1732594888MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
            'link_trailers' => 'https://youtube.com/trailer/avatar',
            'status' => 'Now-Showing',
        ]);

        Film::create([
            'title' => 'The Matrix',
            'synopsis' => 'A hacker discovers the shocking truth about reality and humanitys enslavement by machines. He joins a rebellion to fight for freedom in a world beyond imagination.',
            'duration' => '136 minutes',
            'rating' => 'R',
            'producer' => 'Joel Silver',
            'type' => '3D',
            'genre' => 'Action',
            'director' => 'Lana Wachowski, Lilly Wachowski',
            'writer' => 'Lana Wachowski, Lilly Wachowski',
            'cast' => 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
            'image' => '1732594974MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
            'link_trailers' => 'https://youtube.com/trailer/matrix',
            'status' => 'Now-Showing',
        ]);


        Film::create([
            'title' => 'Forrest Gump',
            'synopsis' => 'Follow the life of Forrest Gump, an extraordinary man with a simple outlook, as he inadvertently influences some of the most significant events of the 20th century.',
            'duration' => '142 minutes',
            'rating' => 'PG-13',
            'producer' => 'Wendy Finerman',
            'type' => '3D',
            'genre' => 'Sci-Fi',
            'director' => 'Robert Zemeckis',
            'writer' => 'Eric Roth',
            'cast' => 'Tom Hanks, Robin Wright, Gary Sinise',
            'image' => '1732595096MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
            'link_trailers' => 'https://youtube.com/trailer/forrestgump',
            'status' => 'Now-Showing',
        ]);

        Film::create([
            'title' => 'The Godfather',
            'synopsis' => 'The story of the Corleone family, a powerful mafia dynasty, as they navigate loyalty, betrayal, and the struggle to maintain power in the criminal underworld.',
            'duration' => '175 minutes',
            'rating' => 'R',
            'producer' => 'Albert S. Ruddy',
            'type' => '3D',
            'genre' => 'Sci-Fi',
            'director' => 'Francis Ford Coppola',
            'writer' => 'Mario Puzo, Francis Ford Coppola',
            'cast' => 'Marlon Brando, Al Pacino, James Caan',
            'image' => '1732595122MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg',
            'link_trailers' => 'https://youtube.com/trailer/godfather',
            'status' => 'Now-Showing',
        ]);

        Film::create([
            'title' => 'Star Wars: A New Hope',
            'synopsis' => 'A farm boy named Luke Skywalker embarks on an epic journey to save a princess, destroy a deadly space station, and restore hope to a galaxy oppressed by the Empire.',
            'duration' => '121 minutes',
            'rating' => 'PG',
            'producer' => 'Gary Kurtz',
            'type' => '2D',
            'genre' => 'Sci-Fi',
            'director' => 'George Lucas',
            'writer' => 'George Lucas',
            'cast' => 'Mark Hamill, Harrison Ford, Carrie Fisher',
            'image' => '1732595185MV5BZDFlM2YzMTctZTExNy00ZGJmLTk5M2QtZTJhOTcxNzk1Zjk0XkEyXkFqcGc@._V1_.jpg',
            'link_trailers' => 'https://youtube.com/trailer/starwars',
            'status' => 'Up-Coming',
        ]);

    }
}
