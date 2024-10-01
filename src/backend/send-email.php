<?php
// Inclure les fichiers PHPMailer nécessaires
require 'vendor/autoload.php'; // Utilisez cette ligne si vous utilisez Composer

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Récupérer les données de la requête
$data = json_decode(file_get_contents("php://input"));

// Vérifier les données
if (empty($data->name) || empty($data->email) || empty($data->subject) || empty($data->message) || empty($data->recaptchaToken)) {
    http_response_code(400);
    echo json_encode(["message" => "Tous les champs sont obligatoires."]);
    exit;
}

// Vérification de l'adresse e-mail
$email = $data->email;
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["message" => "Adresse email invalide."]);
    exit;
}

// Vérification de la longueur du message
if (strlen($data->message) > 500) {
    http_response_code(400);
    echo json_encode(["message" => "Le message est trop long."]);
    exit;
}

// Vérification reCAPTCHA
$secretKey = '6LeLsFQqAAAAALiwrIrYbPBT3P_uI2haZ-yl-jTA';
$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secretKey}&response={$data->recaptchaToken}");
$responseKeys = json_decode($response, true);

if (!$responseKeys["success"]) {
    http_response_code(400);
    echo json_encode(["message" => "Échec de la vérification du reCAPTCHA."]);
    exit;
}

// Créer une nouvelle instance de PHPMailer
$mail = new PHPMailer(true);
try {
    // Configuration du serveur
    $mail->isSMTP();
    $mail->Host = 'ssl0.ovh.net';
    $mail->SMTPAuth = true;
    $mail->Username = 'contact@lespritbrique.com';
    $mail->Password = 'Juggernaut_06!'; // Remplacez par votre mot de passe
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Activer le chiffrement
    $mail->Port = 465;

    // Définir le charset en UTF-8
    $mail->CharSet = 'UTF-8';

    // Destinataires
    $mail->setFrom($data->email, $data->name);
    $mail->addAddress('contact@lespritbrique.com');

    // Contenu de l'e-mail
    $mail->isHTML(false); // Si vous voulez envoyer en texte brut
    $mail->Subject = $data->subject;
    $mail->Body = $data->message;

    // Envoyer l'e-mail
    $mail->send();
    echo json_encode(["message" => "Email envoyé avec succès."]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["message" => "Erreur lors de l'envoi de l'email: {$mail->ErrorInfo}"]);
}
