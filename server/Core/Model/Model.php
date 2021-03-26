<?php

namespace Core\Model;

use Core\Database\Database;

class Model
{

    /**
     * Nom de la table
     *
     * @var string
     */
    protected $table;

    /**
     * Connexion à la BDD
     */
    public function __construct()
    {
        $this->db = new Database();
    }

    /**
     * Enregistre une ligne dans la BDD
     *
     * @param array $data
     */
    public function add(array $data)
    {
        // On récupère les informations d'un formulaire
        // Ces informations sont dans le $_POST avec le name des input

        $statement = "INSERT INTO $this->table (";
        $values = "VALUES (";
        foreach ($data as $key => $value) {
            $statement .= $key . ",";
            $values .= "'" . $value . "',";
        }
        $statement = substr($statement, 0, -1) . ") ";
        $values = substr($values, 0, -1) . ")";

        $statement .= $values;

        $this->db->postData($statement);
    }

    /**
     * Récupère l'ensemble des informations d'une table dans la BDD
     *
     * @return array
     */
    public function getAll(): array
    {

        return $this->db->getData("SELECT * FROM $this->table");
    }

    /**
     * Récupère une ligne d'une table dans la BDD
     *
     * @param integer $id
     */
    public function get(int $id)
    {

        return $this->db->getData("SELECT * FROM $this->table WHERE id = $id", true);
    }

    /**
     * Supprime une ligne d'une table dans la BDD
     *
     * @param int $id
     * @return void
     */
    public function remove(int $id)
    {
        $statement = "DELETE FROM $this->table WHERE id = $id";
        $this->db->postData($statement);
    }

    /**
     * Donne l'heure exacte en format (Y-m-d H:i:s), cela évite d'utiliser la foncion SQL si le serveur n'est pas configuré.
     * 
     * @return string
     */
    public function now()
    {
        return (new \DateTime())->format('Y-m-d H:i:s');
    }
}
