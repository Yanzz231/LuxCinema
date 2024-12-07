<?php

namespace Database\Seeders;

use App\Models\Theatre;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TheatreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Theatre::create([
            'name' => 'IMAX Theatre',
            'address' => 'Jl. Sultan Iskandar Muda, Kebayoran Lama Jakarta Selatan Jakarta',
            'description' => 'Immerse yourself in a premium cinematic experience with floor-to-ceiling screens, crystal-clear visuals, and a powerful surround sound system that brings movies to life like never before.',
            'image' => 'image.jpg',
            'price' => 45000,
        ]);

        Theatre::create([
            'name' => 'CGV Cinemas',
            'address' => 'Jl. Sudirman No. 1, Jakarta',
            'description' => 'Experience cutting-edge entertainment with state-of-the-art Dolby Atmos sound, comfortable seating, and a modern aesthetic, perfect for enjoying the latest blockbusters.',
            'image' => 'cgv.jpg',
            'price' => 50000,
        ]);

        Theatre::create([
            'name' => 'XXI Plaza Senayan',
            'address' => 'Plaza Senayan, Jakarta',
            'description' => 'Relive the magic of classic cinema with high-definition screens, top-notch sound quality, and an elegant atmosphere, all conveniently located in Plaza Senayan.',
            'image' => 'xxi.jpg',
            'price' => 45000,
        ]);

        Theatre::create([
            'name' => 'Platinum Cineplex',
            'address' => 'Mall of Indonesia, Jakarta',
            'description' => 'Enjoy affordable and family-friendly movie entertainment in a cozy and welcoming setting, offering great value without compromising comfort.',
            'image' => 'platinum.jpg',
            'price' => 35000,
        ]);
    }
}
