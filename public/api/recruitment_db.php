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
// メール送信処理（ファイル添付あり）
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


//
// サンクスメール
//
$subject = "【株式会社Rise Tech Solutions】ご応募ありがとうございます";

// メール本文
$body = <<<EOT
ご応募ありがとうございます
$name 様

ーーーーー◆タイムレックス面談調整リンク◆ーーーーーー
https://timerex.net/s/ifsifs2021_e4ec/7643a7bf
(※こちらのURLをコピーし、Web検索のところに張り付けていただき、面談日時の設定をお願いいたします。)
ーーーーー◆ーーーーーーーーーーーーーー◆ーーーーーー

この度は、弊社求人にご応募いただき誠にありがとうございます。
株式会社Rise Tech Solutions（ライズ　テック　ソリューションズ）(旧IFS)
社長室 兼 人事責任者を務めます中島 嘉寿と申します。
応募書類を拝見しまして、ご面談に進ませて頂きたく連絡差し上げました。

当社のことを事前にお知り頂きたく、WantedlyとYouTubeで情報発信を始めました。
ご面接までにご視聴頂けますと幸いで御座います。
面接方法は下記の方法で実施させて頂きたく存じ上げます。


"面接方法"
web面接（Google meet）にて実施したいと考えています。
ご準備いただくものは、
①カメラ付のPC（※ない場合、スマホでお願い致します）
②メモ＋ペン
のみとなります。


ご不明点・ご質問ございましたら、お気軽にお問合せください。
何卒宜しくお願い申し上げます。

ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

会社名：株式会社Rise Tech Solutions
社員数：53名
年商：10億円（グループ連結）
採用担当者：社長室 兼 最高人事責任者/中島 嘉寿
担当者電話番号：090-3964-1166
東京本社：東京都中央区築地2-10-2 JP-BASE築地駅前 7階
熊本支店：熊本県熊本市西区春日1丁目14-1 くまもと森都心プラザ2階 クロスポイント room1
熊本支店：熊本県上益城郡甲佐町大字岩下134-1 バーチャルオフィス2号棟
ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
【Wantedly】
https://www.wantedly.com/companies/company_4068809

【(株)RTS/公式YouTube】(旧IFS)
https://m.youtube.com/watch?si=slu6OR-2T1nDHvoc&v=bcV_XG0Y4Pg&feature=youtu.be

【令和6年4月18日熊本県熊本市立地協定締結】
https://www.kumamoto-investment.jp/kiji003244/index.html

ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
EOT;

// 宛先など設定
$to = $email; // 実際の送信先
$headers = "From: 株式会社Rise_Tech_Solutions\r\n";
$headers .= "Reply-To: recruit@rt-solutions.co.jp\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8";

// メール送信
if (mail($to, $subject, $body, $headers)) {
    // echo "message:メール送信完了";
} else {
    http_response_code(500);
    // echo "error:メール送信に失敗しました";
}

?>