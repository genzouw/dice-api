<?php

header('Content-Type: application/json;charset=UTF-8');
header('Access-Control-Allow-Origin: *');

$result = array(
    'dice' => mt_rand(1, 6),
);

echo json_encode($result);
