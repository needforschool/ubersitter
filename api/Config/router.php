<?php

use App\Controller\MainController;
use App\Controller\UsersController;

$route = $_GET['route'];

$route = rtrim($route, "/");

switch ($route) {
    case "main":
    default:
        $controller = new MainController();
        $controller->init();
        break;
    case 'users':
        $controller = new UsersController();
        $controller->users($_GET);
        break;
    case 'users/add':
        echo $_GET['id'];
        $controller = new UsersController();
        break;
}
