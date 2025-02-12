<?php
require_once './controllers/LocationsController.php';

$controller = new LocationsController();
$request_method = $_SERVER["REQUEST_METHOD"];

switch ($request_method) {
    case 'GET':
        $locations = $controller->findAll();
        header('Content-Type: application/json');
        echo json_encode($locations);
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        $response = $controller->create($data);
        header('Content-Type: application/json');
        echo json_encode($response);
        break;

    default:
        header("HTTP/1.1 405 Method Not Allowed");
        break;
}
?>
