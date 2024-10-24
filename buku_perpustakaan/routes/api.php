<?php
use App\Http\Controllers\Api\BukuController;

Route::get('/bukus', [BukuController::class, 'index']);
Route::post('/bukus', [BukuController::class, 'store']);