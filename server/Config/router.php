<?php

use App\Controller\AuthController;
use App\Controller\MainController;

$route = $_GET['route'];

$route = rtrim($route, "/");

switch ($route) {
    case "main":
    default:
        $controller = new MainController();
        $controller->init();
        break;
        // case 'users':
        //     $controller = new UsersController();
        //     $controller->users($_GET);
        //     break;
    case 'auth/account':
        $controller = new AuthController();
        $controller->auth_account($_POST);
        break;
    case 'auth/session':
        $controller = new AuthController();
        $controller->auth_session($_POST);
        break;
    case 'auth/signup':
        $controller = new AuthController();
        $controller->auth_signup($_POST);
        break;
    case 'auth/signin':
        $controller = new AuthController();
        $controller->auth_signin($_POST);
        break;
}
