<?php

namespace App\Model;

use Core\Model\Model;

class UsersChildrenModel extends Model
{

    /**
     * Nom de la table
     *
     * @var string
     */
    protected $table = "us_users_children";

    public function getAllByUserId(string $user_id)
    {
        $statement = "SELECT * FROM $this->table WHERE user_id = '$user_id'";
        return $this->db->getData($statement);
    }
}
