<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Sonuçları | PHP</title>
    <!-- Tasarımın bozulmaması için Bootstrap'i buraya da ekliyoruz -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body { background-color: #f8f9fa; padding-top: 50px; }
        .result-container { background: white; border-radius: 15px; padding: 30px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
    </style>
</head>
<body>

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8 result-container">
            <h2 class="text-center mb-4 text-primary">Gönderilen Form Bilgileri</h2>
            
            <?php
            // Formun POST yöntemiyle gönderilip gönderilmediğini kontrol ediyoruz
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                
                // HTML formundaki 'name' özelliklerine göre verileri alıyoruz
                $ad       = htmlspecialchars($_POST['name'] ?? 'Belirtilmedi');
                $soyad    = htmlspecialchars($_POST['surname'] ?? 'Belirtilmedi');
                $email    = htmlspecialchars($_POST['email'] ?? 'Belirtilmedi');
                $telefon  = htmlspecialchars($_POST['phone'] ?? 'Belirtilmedi');
                $dogum    = htmlspecialchars($_POST['birthdate'] ?? 'Belirtilmedi');
                $sehir    = htmlspecialchars($_POST['city'] ?? 'Belirtilmedi');
                $cinsiyet = htmlspecialchars($_POST['gender'] ?? 'Belirtilmedi');
                $mesaj    = htmlspecialchars($_POST['message'] ?? 'Belirtilmedi');

                // Verileri düzenli bir tablo içinde yazdırıyoruz
                echo "<table class='table table-bordered table-striped'>";
                echo "<thead class='table-dark'><tr><th>Alan</th><th>Girilen Veri</th></tr></thead>";
                echo "<tbody>";
                echo "<tr><td><strong>Ad</strong></td><td>$ad</td></tr>";
                echo "<tr><td><strong>Soyad</strong></td><td>$soyad</td></tr>";
                echo "<tr><td><strong>E-posta</strong></td><td>$email</td></tr>";
                echo "<tr><td><strong>İletişim Numarası</strong></td><td><span class='badge bg-info text-dark'>$telefon</span></td></tr>";
                echo "<tr><td><strong>Doğum Tarihi</strong></td><td>$dogum</td></tr>";
                echo "<tr><td><strong>Şehir Plaka</strong></td><td>$sehir</td></tr>";
                echo "<tr><td><strong>Cinsiyet</strong></td><td>$cinsiyet</td></tr>";
                echo "<tr><td><strong>Mesaj</strong></td><td>$mesaj</td></tr>";
                echo "</tbody>";
                echo "</table>";

                echo "<div class='text-center mt-4'>";
                echo "<p class='alert alert-success'>Form verileri başarıyla sunucuya ulaştı.</p>";
                echo "<a href='iletisim.html' class='btn btn-primary'>Geri Dön</a>";
                echo "</div>";

            } else {
                // Eğer sayfa doğrudan (formsuz) açılırsa uyarı veriyoruz
                echo "<div class='alert alert-danger text-center'>Hata: Form verisi bulunamadı! Lütfen iletişim sayfasından gönderim yapın.</div>";
                echo "<div class='text-center'><a href='iletisim.html' class='btn btn-secondary'>İletişim Sayfasına Git</a></div>";
            }
            ?>
        </div>
    </div>
</div>

</body>
</html>