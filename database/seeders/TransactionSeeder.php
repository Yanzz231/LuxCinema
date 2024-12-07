<?php

namespace Database\Seeders;

use App\Models\Transaction;
use App\Models\TransactionDetail;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Transaction::create([
            'invoice' => 'INV001',
            'status' => 'completed',
            'user_id' => 1,
            'date_transaction' => now(),
            'payment_method' => 'credit_card',
            'payment_total' => '5000',
            'playtime_id' => 1,
            'quantity' => 2,
        ]);
        Transaction::create([
            'invoice' => 'INV002',
            'status' => 'pending',
            'user_id' => 1,
            'date_transaction' => now(),
            'payment_method' => 'cash',
            'payment_total' => '7000',
            'playtime_id' => 2,
            'quantity' => 1,
        ]);


        //Transaction Detail
        TransactionDetail::create([
            'transaction_id' => 1,
            'seat' => 'A1',
            'price' => 2500,
        ]);
        TransactionDetail::create([
            'transaction_id' => 1,
            'seat' => 'A2',
            'price' => 2500,
        ]);
        TransactionDetail::create([
            'transaction_id' => 2,
            'seat' => 'B1',
            'price' => 7000,
        ]);


    }
}
