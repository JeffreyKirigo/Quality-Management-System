// app/database/seeds/UserTableSeeder.php

<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{

public function run()
{
    DB::table('users')->delete();
    User::create(array(
        'name'     => 'Chris Sevilleja',
        'username' => 'sevilayha',
        'email'    => 'chris@example.com',
        'password' => Hash::make('awesome'),
    ));
}

}
