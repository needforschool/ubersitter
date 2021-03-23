<?php

namespace App\Model;

use Core\Model\Model;

/**
 * @method getAll() | Récupère tous les utilisateurs
 * @method get(int $id) | Retourne un utilisateur en fonction de son id
 * @method remove(int $id) | Supprime un utilisateur en fonction de son id
 * @method add($data) | Enregistre un utilisateur dans la BDD
 */
class UsersModel extends Model
{

    /**
     * Nom de la table
     *
     * @var string
     */
    protected $table = "us_users";

    /**
     * Récupère un utilisateur en fonction de son email
     *
     * @param string $email
     * @return object
     */
    public function getUserByEmail(string $email)
    {
        $statement = "SELECT * FROM us_users WHERE email = '$email'";
        return $this->db->getData($statement, true);
    }
}
