<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class LogoutController extends Controller
{
    //
    public function store(){
        auth()->logout();
        $res=array(
            'success'=>true,
            'message'=>'Loggin Failed, Invalid details'
        );
        return response()->json([$res]);
    }
}
