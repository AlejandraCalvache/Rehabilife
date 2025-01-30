<?php
require_once './controllers/OffersController.php';

$controller = new OffersController();
$request_method = $_SERVER["REQUEST_METHOD"];

switch ($request_method) {
    case 'GET':
        $offers = $controller->findAll();
        header('Content-Type: application/json');
        echo json_encode($offers);
        break;
    default:
        header("HTTP/1.1 405 Method Not Allowed");
        break;
}
?>