<?php

namespace Database\Seeders;

use App\Models\Fnbdetail;
use App\Models\Transactionfnb;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FnBSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Transactionfnb::create([
            'invoice' => 'INV001',
            'status' => 'completed',
            'user_id' => 1,
            'date_transaction' => now(),
            'payment_method' => 'Dana',
            'payment_total' => '5000',
        ]);
        Transactionfnb::create([
            'invoice' => 'INV002',
            'status' => 'pending',
            'user_id' => 1,
            'date_transaction' => now(),
            'payment_method' => 'Gopay',
            'payment_total' => '7000',
        ]);


        //Transaction Detail
        Fnbdetail::create([
            'transaction_id' => 1,
            'menu_id' => 1,
            'price' => 2500,
            'quantity' => 2,
        ]);
        Fnbdetail::create([
            'transaction_id' => 1,
            'menu_id' => 1,
            'price' => 2500,
            'quantity' => 2,
        ]);
        Fnbdetail::create([
            'transaction_id' => 2,
            'menu_id' => 2,
            'price' => 7000,
            'quantity' => 1,

        ]);
    }
}
