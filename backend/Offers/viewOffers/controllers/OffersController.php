<?php
require_once './config/dbConfig.php';
require_once './models/OffersModel.php';

class OffersController {
    public function findAll() {
        $db = new Conexion();
        $conn = $db->connect();
        $offer = new OffersModel();
        $offers = $offer->findAll($conn);
        return $offers;
    }
}
?>