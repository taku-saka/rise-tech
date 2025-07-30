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

// 入力のバリデーション（必要に応じて拡張可能）
function sanitize($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

// POSTデータの取得
$name = sanitize($_POST['name'] ?? '');
$email = sanitize($_POST['email'] ?? '');
$phone = sanitize($_POST['phone'] ?? '');
$address = sanitize($_POST['address'] ?? '');
$age = sanitize($_POST['age'] ?? '');
$category = sanitize($_POST['category'] ?? '');
$experience = sanitize($_POST['experience'] ?? '');
$motivation = sanitize($_POST['motivation'] ?? '');
$portfolio = sanitize($_POST['portfolio'] ?? '');

// アップロードディレクトリの設定
$uploadDir = __DIR__ . '/uploads/' . $name . '/';
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

// アップロードされたファイルの処理
function handleFileUpload($fileKey, $uploadDir) {
    if (!isset($_FILES[$fileKey]) || $_FILES[$fileKey]['error'] !== UPLOAD_ERR_OK) {
        return null;
    }

    $filename = basename($_FILES[$fileKey]['name']);
    $targetPath = $uploadDir . uniqid() . '_' . $filename;

    if (move_uploaded_file($_FILES[$fileKey]['tmp_name'], $targetPath)) {
        return $targetPath;
    }

    return null;
}

$resumePath = handleFileUpload('resume', $uploadDir);
$coverLetterPath = handleFileUpload('coverLetter', $uploadDir);

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $pwd);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // SQL文の準備と実行
    $sql = "INSERT INTO recruit (name, email, phone, address, age, category, experience, motivation, portfolio) 
            VALUES (:name, :email, :phone, :address, :age, :category, :experience, :motivation, :portfolio)";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':phone', $phone);
    $stmt->bindParam(':address', $address);
    $stmt->bindParam(':age', $age);
    $stmt->bindParam(':category', $category);
    $stmt->bindParam(':experience', $experience);
    $stmt->bindParam(':motivation', $motivation);
    $stmt->bindParam(':portfolio', $portfolio);
    $stmt->execute();

    echo "正常に登録されました。";

} catch (PDOException $e) {
    // $message = "エラー: " . $e->getMessage();
    echo "データベースに登録できませんでした。";
}

//
// 📧 メール送信処理（ファイル添付あり）
//
$to = 'recruit@rt-solutions.co.jp'; // ★受信先メールアドレスを設定
$subject = "【採用応募】{$name}様より応募がありました";

// メール本文
$body = <<<EOT
以下の内容で応募がありました。

【氏名】     $name
【メール】   $email
【電話番号】 $phone
【住所】     $address
【年齢】     $age
【募集項目】 $category
【経験】 
$experience
【志望動機】
$motivation
【ポートフォリオ】 $portfolio

履歴書および職務経歴書は添付ファイルをご確認ください。
EOT;

// バウンダリ生成
$boundary = md5(uniqid());

// ヘッダー
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";

// 本文（multipart形式）
$message = "--{$boundary}\r\n";
$message .= "Content-Type: text/plain; charset=\"UTF-8\"\r\n";
$message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$message .= $body . "\r\n";

function attachFile(&$message, $filePath, $boundary) {
    if (!file_exists($filePath)) return;

    $filename = basename($filePath);
    $fileData = chunk_split(base64_encode(file_get_contents($filePath)));
    $mimeType = mime_content_type($filePath);

    $message .= "--{$boundary}\r\n";
    $message .= "Content-Type: {$mimeType}; name=\"{$filename}\"\r\n";
    $message .= "Content-Disposition: attachment; filename=\"{$filename}\"\r\n";
    $message .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $message .= $fileData . "\r\n";
}

// 添付ファイル追加
attachFile($message, $resumePath, $boundary);
if ($coverLetterPath) {
    attachFile($message, $coverLetterPath, $boundary);
}

$message .= "--{$boundary}--";

// メール送信
if (mail($to, $subject, $message, $headers)) {
    echo "message:メール送信完了";
} else {
    http_response_code(500);
    echo "error:メール送信に失敗しました";
}

?>