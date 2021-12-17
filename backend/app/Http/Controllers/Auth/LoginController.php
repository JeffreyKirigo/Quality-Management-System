<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LoginController extends Controller
{
    //
    public function store(Request $req){

        if(!auth()->attempt($req->only('user_id','password'),$req->remember)){
            return 'Invalid login details';
        }
        return 'welcome';
    }
}
