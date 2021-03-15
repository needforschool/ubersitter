<?php

namespace App\Model;

use Core\Model\Model;

/**
 * @method ReadAll() | Récupère tous les utilisateurs
 * @method ReadOne(int $id) | Retourne un utilisateur en fonction de son id
 * @method delete(int $id) | Supprime un utilisateur en fonction de son id
 * @method create($data) | Enregistre un utilisateur dans la BDD
 */
class UserModel extends Model
{

    /**
     * Nom de la table
     *
     * @var string
     */
    protected $table = "user";

    /**
     * Récupère un utilisateur en fonction de son id
     *
     * @param int $email
     * @return object
     */
    public function getUser(int $id): object
    {
        $statement = "SELECT * FROM user WHERE id = '$id'";
        return $this->db->getData($statement, true);
    }

    /**
     * Récupère un utilisateur en fonction de son email
     *
     * @param string $email
     * @return object
     */
    public function getUserByEmail(string $email): object
    {
        $statement = "SELECT * FROM user WHERE email = '$email'";
        return $this->db->getData($statement, true);
    }
}