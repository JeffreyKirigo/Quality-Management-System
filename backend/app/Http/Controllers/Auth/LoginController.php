<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LoginController extends Controller
{
    //
    public function store(Request $req){

        if(!auth()->attempt($req->only('user_id','password'),$req->remember)){
            $res=array(
                'success'=>false,
                'message'=>'Loggin Failed, Invalid details'
            );
           return response()->json(['unauthorized',401]);
        }else {

            $res=array(
                'success'=>true,
                'message'=>'Logged in successfully'
            );
            return response()->json($res);

        }



    }
}
