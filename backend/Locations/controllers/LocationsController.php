<?php
require_once './config/dbConfig.php';
require_once './models/LocationsModel.php';

class LocationsController {
    public function findAll() {
        $db = new Conexion();
        $conn = $db->connect();
        $location = new LocationsModel();
        return $location->findAll($conn);
    }

    public function create($data) {
        $db = new Conexion();
        $conn = $db->connect();
        $location = new LocationsModel();
        return $location->create($conn, $data['city'], $data['address'], $data['opening_hours']);
    }
}
?>
