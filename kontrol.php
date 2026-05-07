<?php
// Form verilerini yakala
$email = $_POST['email'];
$password = $_POST['password'];

$user_email = "b241210012@sakarya.edu.tr"; 
$user_pass = "b241210012";

// 1. Boşluk Kontrolü
if (empty($email) || empty($password)) {
    header("Location: login.html?hata=bos");
    exit();
}

// 2. Bilgi Karşılaştırma
if ($email == $user_email && $password == $user_pass) {
    // Bilgiler doğruysa başarı sayfasına uçur
    header("Location: basari.html");
    exit();
} else {
    // Bilgiler yanlışsa hata koduyla geri gönder
    header("Location: login.html?hata=yanlis");
    exit();
}
?>