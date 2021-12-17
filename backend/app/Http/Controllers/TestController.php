<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Controllers\Controller;

class TestController extends Controller
{
    //
    function  callMe(){

        $data=User::all();
        echo($data);
    }
}
