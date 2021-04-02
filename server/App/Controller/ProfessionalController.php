<?php

namespace App\Controller;

use App\Model\UsersModel;
use App\Model\UsersProfessionalModel;
use Core\Controller\Controller;

class ProfessionalController extends Controller
{

    public function __construct()
    {
        $this->usersModel = new UsersModel();
        $this->usersProfessionalModel = new UsersProfessionalModel();
    }

    public function professional($data)
    {
        $result = [];
        $user = $this->usersModel->getUserByEmailAndToken($data["email"], $data["token"]);

        if ($user) {
            $result = $this->usersProfessionalModel->getAll();
        } else $result = ['message' => 'Invalid credentials'];

        $this->render($result);
    }
}
