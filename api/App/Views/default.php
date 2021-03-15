<?php

header('Content-type: application/json');
if (empty($content)) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
    $content = [
        'message' => 'Not found'
    ];
}
$json = json_encode($content, JSON_PRETTY_PRINT);
die($json);