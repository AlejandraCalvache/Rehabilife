<?php

class DevelopersModel {
    public function findAll($conn) {
        try {
            $stmt = $conn->prepare('SELECT * FROM developers');
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_OBJ);
        } catch (PDOException $e) {
            return "Error: " . $e->getMessage();
        }
    }
}
?>
