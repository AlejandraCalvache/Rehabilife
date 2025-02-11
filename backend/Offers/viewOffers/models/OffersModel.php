<?php

class OffersModel {
    public function findAll($conn) {
        try{
            $stmt = $conn->prepare('SELECT * FROM offers_table');
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_OBJ);;
        } catch (PDOException $e) {
            return "Error: " . $e->getMessage();
        }
        
    }
}