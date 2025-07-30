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

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo "error:無効なリクエストです";
    exit;
}

// 入力値を取得・サニタイズ
$name     = htmlspecialchars($data["name"] ?? "");
$email    = htmlspecialchars($data["email"] ?? "");
$company  = htmlspecialchars($data["company"] ?? "");
$phone    = htmlspecialchars($data["phone"] ?? "");
$subject  = htmlspecialchars($data["subject"] ?? "");
$message  = htmlspecialchars($data["message"] ?? "");
$service  = htmlspecialchars($data["service"] ?? "");

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $pwd);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // SQL文の準備と実行
    $sql = "INSERT INTO contact (name, email, company, phone, subject, message, service) 
            VALUES (:name, :email, :company, :phone, :subject, :message, :service)";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':company', $company);
    $stmt->bindParam(':phone', $phone);
    $stmt->bindParam(':subject', $subject);
    $stmt->bindParam(':message', $message);
    $stmt->bindParam(':service', $service);
    $stmt->execute();

    echo "正常に登録されました。";

} catch (PDOException $e) {
    // $message = "エラー: " . $e->getMessage();
    echo "データベースに登録できませんでした。";
}

// メール本文の組み立て
$body = <<<EOT
【ホームページからのお問い合わせ】

お名前: $name
メール: $email
会社名: $company
電話番号: $phone
件名: $subject
サービス: $service

メッセージ:
$message
EOT;

// 宛先など設定
$to = "info@rt-solutions.co.jp"; // 実際の送信先
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8";

// メール送信
if (mail($to, "【お問い合わせ】$subject", $body, $headers)) {
    echo "message:メール送信完了";
} else {
    http_response_code(500);
    echo "error:メール送信に失敗しました";
}

?>