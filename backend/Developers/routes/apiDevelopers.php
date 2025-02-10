<?php
require_once './controllers/DevelopersController.php';

$controller = new DevelopersController();
$request_method = $_SERVER["REQUEST_METHOD"];

switch ($request_method) {
    case 'GET':
        $developers = $controller->findAll();
        header('Content-Type: application/json');
        echo json_encode($developers);
        break;
    default:
        header("HTTP/1.1 405 Method Not Allowed");
        break;
}
?>
