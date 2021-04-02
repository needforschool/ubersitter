<?php

error_reporting (0);

use Core\App;

define("ROOT", dirname(__DIR__) . "/");
require ROOT . "Core/App.php";
App::load();

include ROOT . "Config/router.php";