<?php
namespace Core\Controller;

class Controller{

    public function encodeChars($data)
    {
        $encoded=[];
        foreach ($data as $key => $element) {
            
            $encoded[$key] = htmlspecialchars($element);
        }
        return $encoded;
    }

    public function render($view, $params = null)
    {
        $pathView = str_replace(".", "/", $view);
        ob_start();
        $data = $params;
        require ROOT."App/Views/$pathView.php";
        require ROOT."App/Views/default.php";
    }
}