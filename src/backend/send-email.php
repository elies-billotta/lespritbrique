<?php

header("Access-Control-Allow-Origin: https://lespritbrique.com/beta/");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();
$secretKey = $_ENV['RECAPTCHA_SECRET'];
$smtpUsername = $_ENV['SMTP_USERNAME'];
$smtpPassword = $_ENV['SMTP_PASSWORD'];

$data = json_decode(file_get_contents("php://input"));

if (empty($data->name) || empty($data->email) || empty($data->subject) || empty($data->message) || empty($data->recaptchaToken)) {
    http_response_code(400);
    echo json_encode(["message" => "Tous les champs sont obligatoires."]);
    exit;
}

$email = $data->email;
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["message" => "Adresse email invalide."]);
    exit;
}

if (strlen($data->message) > 500) {
    http_response_code(400);
    echo json_encode(["message" => "Le message est trop long."]);
    exit;
}

$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secretKey}&response={$data->recaptchaToken}");
$responseKeys = json_decode($response, true);

if (!$responseKeys["success"]) {
    http_response_code(400);
    echo json_encode(["message" => "Échec de la vérification du reCAPTCHA."]);
    exit;
}


$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'ssl0.ovh.net';
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;
    $mail->CharSet = 'UTF-8';

    // Expéditeur et destinataire
    $mail->setFrom($data->email, $data->name);
    $mail->addAddress($smtpUsername);

    // Contenu de l'email
    $mail->isHTML(false);
    $mail->Subject = $data->subject;
    $mail->Body = $data->message;

    // Envoi de l'email
    if ($mail->send()) {
        http_response_code(200);
        echo json_encode(["message" => "Email envoyé avec succès."]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Erreur lors de l'envoi de l'email."]);
    }
} catch (Exception $e) {
    // Gestion des erreurs d'envoi
    http_response_code(500);
    echo json_encode([
        "message" => "Erreur lors de l'envoi de l'email: " . $mail->ErrorInfo,
        "exception" => $e->getMessage()
    ]);
}
