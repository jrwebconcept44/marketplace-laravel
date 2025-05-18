<?php

use Illuminate\Support\Facades\Route;

// Route pour la SPA Vue.js - Toutes les routes frontend seront gérées par Vue Router
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
