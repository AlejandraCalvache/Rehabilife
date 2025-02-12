<?php
require 'vendor/autoload.php';

$swagger = \OpenApi\Generator::scan(['./routes/apiDevelopers.php']);

header('Content-Type: application/json');
echo $swagger->toJson();
?>
