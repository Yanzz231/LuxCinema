<?php

namespace App\Http\Controllers;

use App\Models\Theatre;
use Illuminate\Http\Request;

class TheatreController extends Controller
{
    public function index()
    {
        try {
            $theatre = Theatre::all(['name', 'address', 'description','price','image']);

            $theatre->map(function ($movie) {
                $movie->image = $movie->image ? asset('storage/' . $movie->image) : null;
                return $movie;
            });

            return response()->json([
                'status' => 'success',
                'data' => $theatre
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
