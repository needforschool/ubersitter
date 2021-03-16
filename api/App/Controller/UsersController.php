<?php

namespace App\Controller;

use App\Model\UsersModel;
use Core\Controller\Controller;

class UsersController extends Controller
{

    public function __construct()
    {
        $this->userModel = new UsersModel();
    }

    public function users($data)
    {
        $result = [];
        if (isset($data['id'])) {
            $user = $this->userModel->get($data['id']);
            $result[] = [
                'id' => $user->id,
                'firstname' => $user->firstname,
                'lastname' => $user->lastname,
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at,
                'roles' => json_decode($user->roles)
            ];
        } else {
            $users = $this->userModel->getAll();
            $result = [];
            foreach ($users as $user) {
                $result[] = [
                    'id' => $user->id,
                    'firstname' => $user->firstname,
                    'lastname' => $user->lastname,
                    'created_at' => $user->created_at,
                    'updated_at' => $user->updated_at,
                    'roles' => json_decode($user->roles)
                ];
            }
        }

        $this->render($result);
    }
}
