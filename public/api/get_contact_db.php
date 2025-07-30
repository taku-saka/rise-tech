<?php
header("Content-Type: application/json; charset=UTF-8");
// JSONで送られてくるPOSTデータを受け取る
header("Access-Control-Allow-Origin: *"); // 本番では * をReactサイトのURLに変更
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// データベース接続情報
$host = 'localhost';
$dbname = 'xs935286_rts';
$username = 'xs935286_ifs';
$pwd = 'Bq5dfRNx';

// プリフライト対応
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $pwd);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // SQL文の準備と実行
    $sql = "SELECT * FROM contact";
    // 結果を配列で取得
    $contacts = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($contacts);

} catch (PDOException $e) {
    echo json_encode(["error" => "データベースに登録できませんでした。"]);
}
?>