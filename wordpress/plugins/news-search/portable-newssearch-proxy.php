<?php

$apiKey = 'bad03712-1f0e-498d-8a4e-e5eb4d1592f1';

$query = $_GET['query'];

$apiUrl = "https://content.guardianapis.com/search?q=" . urlencode($query) . "&api-key=" . $apiKey;

$response = file_get_contents($apiUrl);

header('Content-Type: application/json');
echo $response;

?>