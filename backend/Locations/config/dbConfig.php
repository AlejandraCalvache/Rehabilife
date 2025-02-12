<?php

class Conexion {
    private $cdc = "pgsql:host=postgresql-karenchicaiza.alwaysdata.net;port=5432;dbname=karenchicaiza_dblocations;user=karenchicaiza;password=karenpat020701.";

    public function connect() {
        try {
            $conn = new PDO($this->cdc);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $a) {
            error_log("Error de conexión: " . $a->getMessage());
            return null;
        }
        return $conn;
    }
}

?>
