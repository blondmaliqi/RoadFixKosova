<?php
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

if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode(['success' => false, 'message' => 'JSON i pavlefshëm.']);
    exit;
}

$action = isset($data['action']) ? $data['action'] : '';

try {
    switch ($action) {
        case 'signup':
            $name = trim($data['name'] ?? '');
            $surname = trim($data['surname'] ?? '');
            $email = trim($data['email'] ?? '');
            $phone = trim($data['phone'] ?? '');
            $password = $data['password'] ?? '';

            $errors = [];
            if (empty($name)) $errors[] = 'Emri është i detyrueshëm.';
            if (empty($surname)) $errors[] = 'Mbiemri është i detyrueshëm.';
            if (empty($email)) $errors[] = 'Email është i detyrueshëm.';
            if (empty($password)) $errors[] = 'Fjalëkalimi është i detyrueshëm.';
            if (strlen($password) < 6) $errors[] = 'Fjalëkalimi duhet të ketë të paktën 6 karaktere.';
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Email i pavlefshëm.';

            if (!empty($errors)) {
                echo json_encode(['success' => false, 'message' => implode(' ', $errors)]);
                exit;
            }

            $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
            $stmt->execute([$email]);
            if ($stmt->fetch()) {
                echo json_encode(['success' => false, 'message' => 'Ky email është tashmë i regjistruar.']);
                exit;
            }

            $hashed_password = password_hash($password, PASSWORD_BCRYPT);
            $stmt = $pdo->prepare("INSERT INTO users (name, surname, email, phone, password, role) VALUES (?, ?, ?, ?, ?, 'user')");
            $stmt->execute([$name, $surname, $email, $phone, $hashed_password]);
            $userId = $pdo->lastInsertId();

            echo json_encode([
                'success' => true,
                'message' => 'Regjistrimi u krye me sukses!',
                'user' => ['id' => $userId, 'name' => $name, 'surname' => $surname, 'email' => $email, 'phone' => $phone, 'role' => 'user']
            ]);
            break;

        case 'login':
            $email = trim($data['email'] ?? '');
            $password = $data['password'] ?? '';

            if (empty($email) || empty($password)) {
                echo json_encode(['success' => false, 'message' => 'Email dhe fjalëkalim janë të detyrueshëm.']);
                exit;
            }

            $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
            $stmt->execute([$email]);
            $user = $stmt->fetch();

            if ($user && password_verify($password, $user['password'])) {
                unset($user['password']);
                echo json_encode(['success' => true, 'message' => 'Hyrja u krye me sukses!', 'user' => $user]);
            } else {
                echo json_encode(['success' => false, 'message' => 'Email ose fjalëkalim i gabuar.']);
            }
            break;

        default:
            echo json_encode(['success' => false, 'message' => 'Veprim i panjohur.']);
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Gabim: ' . $e->getMessage()]);
}
?>