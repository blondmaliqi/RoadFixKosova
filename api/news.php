<?php
// api/news.php
error_reporting(E_ALL);
ini_set('display_errors', 0);
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once __DIR__ . '/../includes/connect.php';

$method = $_SERVER['REQUEST_METHOD'];

try {
    switch ($method) {
        case 'GET':
            handleGetNews($pdo);
            break;
        case 'POST':
            handleAddNews($pdo);
            break;
        case 'PUT':
            handleUpdateNews($pdo);
            break;
        case 'DELETE':
            handleDeleteNews($pdo);
            break;
        default:
            echo json_encode(['success' => false, 'message' => 'Metodë e palejuar.']);
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Gabim: ' . $e->getMessage()]);
}

function handleGetNews($pdo) {
    $id = isset($_GET['id']) ? (int)$_GET['id'] : null;
    $category = isset($_GET['category']) ? $_GET['category'] : null;
    $status = isset($_GET['status']) ? $_GET['status'] : 'published';
    $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 50;

    $sql = "SELECT * FROM news WHERE 1=1";
    $params = [];

    if ($id) {
        $sql .= " AND id = ?";
        $params[] = $id;
    } else {
        if ($status !== 'all') {
            $sql .= " AND status = ?";
            $params[] = $status;
        }
        if ($category && $category !== 'te-gjitha') {
            $sql .= " AND category = ?";
            $params[] = $category;
        }
        $sql .= " ORDER BY published_at DESC LIMIT " . $limit;
    }

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    if ($id) {
        $news = $stmt->fetch();
        echo json_encode($news ?: null);
    } else {
        $news = $stmt->fetchAll();
        echo json_encode($news);
    }
}

function handleAddNews($pdo) {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $title = trim($data['title'] ?? '');
    $summary = trim($data['summary'] ?? '');
    $content = trim($data['content'] ?? '');
    $category = trim($data['category'] ?? '');
    $burimi = trim($data['burimi'] ?? 'Manual');
    $source_url = trim($data['source_url'] ?? '');
    $location_lat = $data['location_lat'] ?? null;
    $location_lng = $data['location_lng'] ?? null;
    $status = $data['status'] ?? 'published';

    if (empty($title) || empty($summary) || empty($category)) {
        echo json_encode(['success' => false, 'message' => 'Titulli, përmbledhja dhe kategoria janë të detyrueshme.']);
        return;
    }

    $stmt = $pdo->prepare("INSERT INTO news (title, summary, content, category, burimi, source_url, location_lat, location_lng, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([$title, $summary, $content, $category, $burimi, $source_url, $location_lat, $location_lng, $status]);
    
    echo json_encode(['success' => true, 'message' => 'Lajmi u shtua!', 'id' => $pdo->lastInsertId()]);
}

function handleUpdateNews($pdo) {
    $data = json_decode(file_get_contents('php://input'), true);
    $id = isset($data['id']) ? (int)$data['id'] : null;

    if (!$id) {
        echo json_encode(['success' => false, 'message' => 'ID mungon.']);
        return;
    }

    $fields = [];
    $params = [];

    if (isset($data['title'])) { $fields[] = "title = ?"; $params[] = $data['title']; }
    if (isset($data['summary'])) { $fields[] = "summary = ?"; $params[] = $data['summary']; }
    if (isset($data['content'])) { $fields[] = "content = ?"; $params[] = $data['content']; }
    if (isset($data['category'])) { $fields[] = "category = ?"; $params[] = $data['category']; }
    if (isset($data['status'])) { $fields[] = "status = ?"; $params[] = $data['status']; }

    if (empty($fields)) {
        echo json_encode(['success' => false, 'message' => 'Asnjë fushë për përditësim.']);
        return;
    }

    $params[] = $id;
    $sql = "UPDATE news SET " . implode(", ", $fields) . " WHERE id = ?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    
    echo json_encode(['success' => true, 'message' => 'Lajmi u përditësua!']);
}

function handleDeleteNews($pdo) {
    $id = isset($_GET['id']) ? (int)$_GET['id'] : null;
    
    if (!$id) {
        echo json_encode(['success' => false, 'message' => 'ID mungon.']);
        return;
    }

    $stmt = $pdo->prepare("DELETE FROM news WHERE id = ?");
    $stmt->execute([$id]);
    echo json_encode(['success' => true, 'message' => 'Lajmi u fshi!']);
}
?>