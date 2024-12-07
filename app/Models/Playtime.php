<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Playtime extends Model
{
    use HasFactory, SoftDeletes;
    public $timestamps = false;

    protected $table = 'playtimes';
    protected $fillable = [
        'time',
        'theatres_id',
        'films_id',
    ];
    public function theatre()
    {
        return $this->belongsTo(Theatre::class, 'theatres_id');
    }
    public function film()
    {
        return $this->belongsTo(Film::class, 'films_id');
    }
}
