<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fnbdetail extends Model
{
    use HasFactory;
    protected $table = 'fnbdetails';
    public $timestamps = false;

    protected $fillable = [
        'transaction_id',
        'menu_id',
        'price',
        'quantity',
    ];

    public function transactionfnb()
    {
        return $this->belongsTo(Transactionfnb::class, 'transaction_id', 'id');
    }
    public function menu()
    {
        return $this->belongsTo(Menu::class, 'menu_id');
    }
}
