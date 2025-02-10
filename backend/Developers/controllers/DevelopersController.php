<?php
require_once './config/dbConfig.php';
require_once './models/DevelopersModel.php';

class DevelopersController {
    public function findAll() {
        $db = new Conexion();
        $conn = $db->connect();
        $developer = new DevelopersModel();
        $developers = $developer->findAll($conn);
        return $developers;
    }
}
?>
