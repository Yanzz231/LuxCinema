<?php

namespace App\Models;

use App\Models\TransactionDetail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Transactionfnb extends Model
{
    use HasFactory;
    protected $table = 'transactionfnbs';
    public $timestamps = false;


    protected $fillable = [
        'id',
        'invoice',
        'user_id',
        'theatre_id',
        'status',
        'pickup_time',
        'date_transaction',
        'payment_total',
        'payment_method',

    ];

    public function fnbdetails()
    {
        return $this->hasMany(Fnbdetail::class, 'transaction_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function theatre()
    {
        return $this->belongsTo(Theatre::class, 'theatres_id');
    }
}
