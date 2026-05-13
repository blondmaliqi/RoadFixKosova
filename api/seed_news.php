<?php
require_once __DIR__ . '/../includes/connect.php';

$lajmet = [
    ['title' => 'Bllokim në rrugën e Separeve – devijim për në rrugën e Dardanisë', 'summary' => 'Rruga e Separeve është e bllokuar për trafik nga kryqëzimi me rrugën e Dardanisë deri te shkolla fillore për shkak të zëvendësimit të gypave të ujësjellësit.', 'content' => 'Rruga e Separeve do të jetë e bllokuar për trafik duke filluar nga dita e martë, 28 prill 2026.', 'category' => 'bllokime', 'burimi' => 'RTV Gjilan', 'source_url' => 'https://rtvgjilan.com', 'location_lat' => 42.4631, 'location_lng' => 21.4694],
    ['title' => 'Punime në rrugën "Adem Jashari" – segmenti pranë stacionit të autobusëve', 'summary' => 'Nisën punimet në rrugën Adem Jashari për zgjerimin e trotuarit dhe vendosjen e ndriçimit të ri.', 'content' => 'Komuna e Gjilanit ka njoftuar fillimin e punimeve.', 'category' => 'punime', 'burimi' => 'Komuna e Gjilanit', 'source_url' => 'https://kk.rks-gov.net/gjilan', 'location_lat' => 42.4642, 'location_lng' => 21.4685],
    ['title' => 'Devijim në rrugën e Dardanisë për shkak të ndërtimit të ujësjellësit të ri', 'summary' => 'Trafiku do të devijohet nëpërmjet rrugës së Separeve dhe rrugës "Idriz Seferi".', 'content' => 'Drejtoria për Shërbime Publike njofton devijimin.', 'category' => 'devijime', 'burimi' => 'Drejtoria për Shërbime Publike', 'source_url' => '', 'location_lat' => 42.4620, 'location_lng' => 21.4710],
    ['title' => 'Projekt i ri: Ndërtimi i rrethrrotullimit te kryqëzimi i spitalit', 'summary' => 'Komuna e Gjilanit ka miratuar projektin për ndërtimin e një rrethrrotullimi.', 'content' => 'Projekti parasheh ndërtimin e një rrethrrotullimi.', 'category' => 'projekte', 'burimi' => 'KosovaPress', 'source_url' => 'https://kosovapress.com', 'location_lat' => 42.4600, 'location_lng' => 21.4750],
    ['title' => 'Bllokim i përkohshëm në rrugën "Rexhep Elmazi"', 'summary' => 'Një aksident trafiku ka bllokuar përkohësisht rrugën Rexhep Elmazi.', 'content' => 'Policia e Kosovës njofton se një aksident ka ndodhur.', 'category' => 'bllokime', 'burimi' => 'Policia e Kosovës', 'source_url' => '', 'location_lat' => 42.4650, 'location_lng' => 21.4660],
    ['title' => 'Riasfaltim në lagjen "Dardania 2"', 'summary' => 'Fillojnë punimet për riasfaltimin e rrugëve në lagjen Dardania 2.', 'content' => 'Komuna njofton banorët për riasfaltim.', 'category' => 'punime', 'burimi' => 'Komuna e Gjilanit', 'source_url' => '', 'location_lat' => 42.4615, 'location_lng' => 21.4730]
];

$stmt = $pdo->prepare("INSERT INTO news (title, summary, content, category, burimi, source_url, location_lat, location_lng, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'published')");

$count = 0;
foreach ($lajmet as $lajm) {
    try {
        $stmt->execute([$lajm['title'], $lajm['summary'], $lajm['content'], $lajm['category'], $lajm['burimi'], $lajm['source_url'], $lajm['location_lat'], $lajm['location_lng']]);
        $count++;
    } catch (Exception $e) {
        // skip
    }
}

echo json_encode(['success' => true, 'message' => "$count lajme u shtuan!"]);
?>