<?php

namespace App\Controller;

use Core\Controller\Controller;

class MainController extends Controller
{
    public function init()
    {
        $this->render('main');
    }
}