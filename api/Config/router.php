<?php
use App\Controller\MainController;

if (!empty($_GET["page"])) {
    $page = $_GET["page"];
} else {
    $page = "main";
}

switch ($page) {
    case 'main':
        $controller = new MainController();
        $controller->init();
        break;
}
