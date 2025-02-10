<?php

class LocationsModel {
    public function findAll($conn) {
        try {
            $stmt = $conn->prepare('SELECT * FROM locations');
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_OBJ);
        } catch (PDOException $e) {
            return "Error: " . $e->getMessage();
        }
    }

    public function create($conn, $city, $address, $opening_hours) {
        try {
            $stmt = $conn->prepare('INSERT INTO locations (city, address, opening_hours) VALUES (:city, :address, :opening_hours)');
            $stmt->bindParam(':city', $city);
            $stmt->bindParam(':address', $address);
            $stmt->bindParam(':opening_hours', $opening_hours);
            $stmt->execute();
            return ["message" => "Ubicación creada correctamente"];
        } catch (PDOException $e) {
            return ["error" => "Error al insertar ubicación: " . $e->getMessage()];
        }
    }
}
?>
