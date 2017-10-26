<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
  /**
   * Show dashboard index
   */
  public function index() 
  {
      return view('admin.index');
  }
}
