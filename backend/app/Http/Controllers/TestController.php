<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

use Illuminate\Support\Facades\Redis;

class TestController extends Controller
{
    //
    function  callMe(){

        $data=User::all();
        echo($data);
    }
}
