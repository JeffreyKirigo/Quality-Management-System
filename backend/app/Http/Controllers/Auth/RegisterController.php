<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{


    //Register new user and store data
    public function store(Request $req)
    {
        //Store new User data
        User::create([
            'user_id' => $req->user_id,
            'first_name' => $req->first_name,
            'last_name' => $req->last_name,
            'company' => $req->company,
            'email' => $req->email,
            'state' => $req->state,
            'date_of_birth' => $req->date_of_birth,
            'password' => Hash::make($req->password),
        ]);

        auth()->attempt($req->only('user_id','password'));

    }
}
