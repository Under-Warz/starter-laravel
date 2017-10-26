<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
 	return view('welcome');
});

// Back
Route::prefix('admin')->group(function () {
	Route::middleware('auth')->group(function() {
		Route::get('/', ['as' => 'admin', 'uses' => 'Admin\DashboardController@index']);
	});

	Route::middleware('guest')->group(function() {
		Route::get('login', ['as' => 'login', 'uses' => 'Auth\LoginController@showLoginForm']);
		Route::post('login', ['as' => 'authenticate', 'uses' => 'Auth\LoginController@login']);
	});

	Route::get('logout', ['as' => 'logout', 'uses' => 'Auth\LoginController@logout']);
});