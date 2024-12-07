<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    public function run()
    {
        Menu::create([
            'name' => 'Nasi Goreng Spesial',
            'description' => 'Classic Indonesian fried rice served with a fried egg, chicken satay, and prawn crackers.',
            'price' => '30000',
            'type' => 'Food',
        ]);

        Menu::create([
            'name' => 'Mie Goreng',
            'description' => 'Stir-fried noodles with vegetables, chicken, and a flavorful blend of spices.',
            'price' => '27000',
            'type' => 'Food',
        ]);

        Menu::create([
            'name' => 'Kentang Goreng',
            'description' => 'Golden, crispy French fries served with ketchup and mayonnaise.',
            'price' => '20000',
            'type' => 'Snack',
        ]);

        Menu::create([
            'name' => 'Popcorn Caramel',
            'description' => 'Sweet and crunchy caramel-coated popcorn, perfect for movie nights.',
            'price' => '18000',
            'type' => 'Snack',
        ]);

        Menu::create([
            'name' => 'Matcha',
            'description' => 'Refreshing green tea brewed to perfection, served hot or iced.',
            'price' => '13000',
            'type' => 'Drinks',
        ]);

        Menu::create([
            'name' => 'Es Kopi Susu',
            'description' => 'Creamy iced coffee with a hint of sweetness, perfect for coffee lovers.',
            'price' => '18000',
            'type' => 'Drinks',
        ]);

        Menu::create([
            'name' => 'Combo 1: Nasi Goreng & Es Teh Manis',
            'description' => 'A hearty fried rice meal paired with a refreshing iced sweet tea.',
            'price' => '35000',
            'type' => 'Combo',
        ]);

        Menu::create([
            'name' => 'Combo 2: Mie Goreng & Es Kopi Susu',
            'description' => 'Delicious stir-fried noodles served with a creamy iced coffee.',
            'price' => '40000',
            'type' => 'Combo',
        ]);

        Menu::create([
            'name' => 'Combo 3: Popcorn Caramel & Matcha',
            'description' => 'A sweet snack combo featuring caramel popcorn and refreshing green tea.',
            'price' => '28000',
            'type' => 'Combo',
        ]);

        Menu::create([
            'name' => 'Coca Cola',
            'description' => 'Classic and refreshing soft drink, served chilled.',
            'price' => '10000',
            'type' => 'Drinks',
        ]);

        Menu::create([
            'name' => 'Sprite',
            'description' => 'Crisp and clear lemon-lime soft drink, served cold.',
            'price' => '10000',
            'type' => 'Drinks',
        ]);

        Menu::create([
            'name' => 'Popcorn Cheese',
            'description' => 'Savory and cheesy popcorn, a perfect movie-time snack.',
            'price' => '20000',
            'type' => 'Snack',
        ]);

        Menu::create([
            'name' => 'Popcorn Spicy',
            'description' => 'Hot and spicy popcorn for those who love bold flavors.',
            'price' => '20000',
            'type' => 'Snack',
        ]);

        Menu::create([
            'name' => 'Combo 4: Popcorn Cheese & Matcha',
            'description' => 'Cheesy popcorn accompanied by a soothing green tea.',
            'price' => '30000',
            'type' => 'Combo',
        ]);

        Menu::create([
            'name' => 'Combo 5: Popcorn Spicy & Es Kopi Susu',
            'description' => 'Spicy popcorn complemented by creamy iced coffee.',
            'price' => '32000',
            'type' => 'Combo',
        ]);

        Menu::create([
            'name' => 'Combo 6: Kentang Goreng & Sprite',
            'description' => 'Golden fries paired with a fizzy Sprite.',
            'price' => '28000',
            'type' => 'Combo',
        ]);

        Menu::create([
            'name' => 'Lemon Tea',
            'description' => 'Refreshing iced tea infused with a hint of zesty lemon.',
            'price' => '15000',
            'type' => 'Drinks',
        ]);

        Menu::create([
            'name' => 'Mango Juice',
            'description' => 'Sweet and tangy mango juice made from fresh fruit.',
            'price' => '18000',
            'type' => 'Drinks',
        ]);

        Menu::create([
            'name' => 'Combo 7: Kentang Goreng & Lemon Tea',
            'description' => 'Crispy French fries with a glass of refreshing lemon tea.',
            'price' => '30000',
            'type' => 'Combo',
        ]);


    }
}
