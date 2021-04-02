<?php

use App\Controller\AuthController;
use App\Controller\ChildrenController;
use App\Controller\MainController;
use App\Controller\ProfessionalController;

$route = $_GET['route'];

$route = rtrim($route, "/");

switch ($route) {
    case "main":
    default:
        $controller = new MainController();
        $controller->init();
        break;
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
    case 'children':
        $controller = new ChildrenController();
        $controller->children($_POST);
        break;
    case 'children/add':
        $controller = new ChildrenController();
        $controller->children_add($_POST);
        break;
    case 'professional':
        $controller = new ProfessionalController();
        $controller->professional($_POST);
        break;
}
