<?php

namespace App\Http\Controllers;

use App\Models\Film; // Assuming the model name is Movie
use Illuminate\Http\Request;

class FilmController extends Controller
{
    public function index()
    {
        try {
            $movies = Film::all(['title', 'synopsis', 'duration', 'rating', 'producer', 'director', 'writer', 'cast', 'link_trailers', 'image']);

            $movies->map(function ($movie) {
                $movie->image = $movie->image ? asset('storage/' . $movie->image) : null;
                return $movie;
            });

            return response()->json([
                'status' => 'success',
                'data' => $movies
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
