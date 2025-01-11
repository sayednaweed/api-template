<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

use function Laravel\Prompts\select;
use Illuminate\Support\Facades\Redis;

class TestController extends Controller
{
    public function index(Request $request)
    {
        if (!class_exists('SwayRedis\\Traits\\InvalidatableToken')) {
            dd("Trait not found!");
        } else {
            dd("Trait found!");
        }
    }
}
