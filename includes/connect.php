<?php
// includes/connect.php
$host = 'localhost';
$dbname = 'roadfix_gjilan';
$username = 'root';
$password = '';  // Në XAMPP është bosh

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die(json_encode([
        'success' => false,
        'message' => 'Gabim në lidhjen me databazën: ' . $e->getMessage()
    ]));
}
?>