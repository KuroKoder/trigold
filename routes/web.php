<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/tentang', function () {
    return Inertia::render('tentang');
})->name('tentang');

Route::get('/layanan', function () {
    return Inertia::render('layanan');
})->name('layanan');

Route::get('/kontak', function () {
    return Inertia::render('kontak');
})->name('kontak');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
