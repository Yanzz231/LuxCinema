<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Theatre extends Model
{
    use HasFactory, SoftDeletes;
    public $timestamps = false;

    protected $table = 'theatres';

    protected $fillable = [
        'name',
        'image',
        'address',
        'description',
        'price',
    ];

}
