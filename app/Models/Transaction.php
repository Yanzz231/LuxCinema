<?php

namespace App\Models;

use App\Models\TransactionDetail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Transaction extends Model
{
    use HasFactory;
    protected $table = 'transactions';
    public $timestamps = false;


    protected $fillable = [
        'id',
        'invoice',
        'user_id',
        'status',
        'date_transaction',
        'payment_total',
        'payment_method',
        'playtime_id',
        'quantity'
    ];

    public function details()
    {
        return $this->hasMany(TransactionDetail::class, 'transaction_id', 'id');
    }

    public function playtime()
    {
        return $this->belongsTo(Playtime::class, 'playtime_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
