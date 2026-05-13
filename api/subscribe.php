<?php
// api/subscribe.php
error_reporting(E_ALL);
ini_set('display_errors', 0);
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once __DIR__ . '/../includes/connect.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Vetëm POST lejohet.']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$email = trim($data['email'] ?? '');
$types = $data['types'] ?? ['bllokime', 'punime'];

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Email i pavlefshëm.']);
    exit;
}

try {
    // Kontrollo nëse email ekziston
    $stmt = $pdo->prepare("SELECT id FROM subscribers WHERE email = ?");
    $stmt->execute([$email]);
    
    if ($stmt->fetch()) {
        // Përditëso abonimin ekzistues
        $stmt = $pdo->prepare("UPDATE subscribers SET notification_types = ? WHERE email = ?");
        $stmt->execute([json_encode($types), $email]);
        echo json_encode(['success' => true, 'message' => 'Abonimi u përditësua me sukses!']);
    } else {
        // Krijo abonim të ri
        $stmt = $pdo->prepare("INSERT INTO subscribers (email, notification_types) VALUES (?, ?)");
        $stmt->execute([$email, json_encode($types)]);
        echo json_encode(['success' => true, 'message' => 'U abonuat me sukses!']);
    }
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Gabim në databazë: ' . $e->getMessage()]);
}
?>