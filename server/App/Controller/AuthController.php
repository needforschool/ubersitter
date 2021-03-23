<?php

namespace App\Controller;

use App\Model\UsersModel;
use Core\Controller\Controller;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->usersModel = new UsersModel();
    }

    public function users($data)
    {
        $result = [];
        if (isset($data['id'])) {
            $user = $this->usersModel->get($data['id']);
            if (!empty($user)) $result = [
                'id' => $user->id,
                'firstname' => $user->firstname,
                'lastname' => $user->lastname,
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at,
                'roles' => json_decode($user->roles)
            ];
        } else {
            $users = $this->usersModel->getAll();
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

    public function auth_account($data)
    {
        $result = ['exist' => false];

        if (isset($data['email'])) {
            $user = $this->usersModel->getUserByEmail($data['email']);
            if (!empty($user)) $result['exist'] = true;
        }

        $this->render($result);
    }

    public function auth_session()
    {
        $result = isset($_SESSION['ubersitter-server']) ? $_SESSION['ubersitter-server'] : ['id' => null];
        $this->render($result);
    }

    public function auth_signup($data)
    {
        $result = ['success' => false];
        if (isset($data["email"]) && $data['password']) {
            $user = $this->encodeChars($data);
            $user["password"] = password_hash($data["password"], PASSWORD_DEFAULT);
            $user["token"] = $this->generateRandomString(200);
            $user["created_at"] = $this->usersModel->now();
            $user["updated_at"] = $this->usersModel->now();
            $user["roles"] = $data['roles'];
            $this->usersModel->add($user);
            $result = ['success' => true];
        }
        $this->render($result);
    }

    /**
     * Génère une chaine de caractères aléatoire.
     * 
     * @param int $length
     * @return array<string>
     */
    private function generateRandomString($length = 10)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
}
