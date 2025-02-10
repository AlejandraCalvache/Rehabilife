<?php
require 'vendor/autoload.php';

$swagger = \OpenApi\Generator::scan(['./routes.php']);

header('Content-Type: application/json');
echo $swagger->toJson();