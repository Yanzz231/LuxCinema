<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Film extends Model
{
    use HasFactory, SoftDeletes;
    public $timestamps = false;
    protected $table = 'films';
    protected $fillable = [
        'title',
        'synopsis',
        'duration',
        'rating',
        'producer',
        'image',
        'type',
        'genre',
        'director',
        'writer',
        'cast',
        'status',
        'link_trailers',
    ];

    protected $casts = [
        'genre' => 'array',
    ];


}
