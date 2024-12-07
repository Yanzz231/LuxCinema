<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('status')->nullable();
            $table->string('username');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('type')->nullable();
            $table->string('image')->nullable();
            $table->string('phone');
            $table->string('token')->nullable();
            $table->string('otp_verify')->nullable();
            $table->string('otp_reminder')->nullable();
            $table->string('otp_password')->nullable();
            $table->string('otp_password_reminder')->nullable();
            $table->timestamps();
        });

        schema::create('films', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('synopsis');
            $table->string('status')->default('Now-Showing');
            $table->string('duration');
            $table->string('rating');
            $table->string('type');
            $table->string('genre');
            $table->string('producer');
            $table->string('image')->nullable();
            $table->string('director');
            $table->string('writer');
            $table->string('cast');
            $table->string('link_trailers');
            $table->softDeletes();
        });

        schema::create('theatres', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('image');
            $table->string('address');
            $table->string('description');
            $table->integer('price');
            $table->softDeletes();
        });

        schema::create('playtimes', function (Blueprint $table) {
            $table->id();
            $table->string('time');
            $table->foreignId('theatres_id')->constrained('theatres')->cascadeOnDelete();
            $table->foreignId('films_id')->constrained('films')->cascadeOnDelete();
            $table->softDeletes();
        });

        schema::create('menus', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->string('image')->nullable();
            $table->integer('price');
            $table->string('type');
            $table->softDeletes();
        });

        schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('invoice');
            $table->string('status');
            $table->string('token')->nullable();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->timestamp('date_transaction');
            $table->string('payment_method');
            $table->string('payment_total');
            $table->foreignId('playtime_id')->constrained('playtimes')->cascadeOnDelete();
            $table->integer('quantity');
        });

        schema::create('transactiondetails', function (Blueprint $table) {
            $table->id();
            $table->foreignId('transaction_id')->constrained('transactions')->cascadeOnDelete();
            $table->string('seat');
            $table->integer('price');
        });

        schema::create('transactionfnbs', function (Blueprint $table) {
            $table->id();
            $table->string('invoice');
            $table->string('status');
            $table->string('pickup_time')->nullable();
            $table->string('token')->nullable();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('theatre_id')->constrained('theatres')->cascadeOnDelete();
            $table->timestamp('date_transaction');
            $table->string('payment_method');
            $table->string('payment_total');
        });

        schema::create('fnbdetails', function (Blueprint $table) {
            $table->id();
            $table->foreignId('transaction_id')->constrained('transactionfnbs')->cascadeOnDelete();
            $table->foreignId('menu_id')->constrained('menus')->cascadeOnDelete();
            $table->integer('price');
            $table->integer('quantity')->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('menus');
        Schema::dropIfExists('playtimes');
        Schema::dropIfExists('theatres');
        Schema::dropIfExists('films');
        Schema::dropIfExists('users');
    }
};
