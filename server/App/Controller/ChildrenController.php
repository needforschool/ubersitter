<?php

namespace App\Controller;

use App\Model\UsersChildrenModel;
use App\Model\UsersModel;
use Core\Controller\Controller;

class ChildrenController extends Controller
{

    public function __construct()
    {
        $this->usersModel = new UsersModel();
        $this->usersChildrenModel = new UsersChildrenModel();
    }

    public function children($data)
    {
        $result = [];
        $user = $this->usersModel->getUserByEmailAndToken($data["email"], $data["token"]);

        if ($user) {
            $children = $this->usersChildrenModel->getAllByUserId($user->id);
            foreach ($children as $child) {
                $result[] = $child;
            }
        }

        $this->render($result);
    }

    public function children_add($data)
    {
        $result = ['success' => false];
        $user = $this->usersModel->getUserByEmailAndToken($data["email"], $data["token"]);

        if ($user) {
            $result = ['success' => true];
            $children = [
                'user_id' => $user->id,
                'firstname' => $data['firstname'],
                'lastname' => $data['lastname'],
                'gender' => $data['gender'],
                'birthdate' => $data['birthdate'],
                'note' => $data['note'],
                'created_at' => $this->usersChildrenModel->now(),
                'updated_at' => $this->usersChildrenModel->now()

            ];
            $this->usersChildrenModel->add($children);
            $result = ['success' => true];
        }

        $this->render($result);
    }
}
