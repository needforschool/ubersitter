<?php

$basepath = realpath(dirname(__FILE__) . '/..');
require $basepath . '/vendor/autoload.php';

use Symfony\Component\Dotenv\Dotenv;

$dotenv = new Dotenv();
$dotenv->load($basepath . '/.env');

$config = [
    "dbName" => $_ENV['SQL_NAME'],
    "dbHost" => $_ENV['SQL_HOST'],
    "dbUser" => $_ENV['SQL_USER'],
    "dbPassword" =>$_ENV['SQL_PASSWORD'],
];
