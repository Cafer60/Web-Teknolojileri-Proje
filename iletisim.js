// --- 1. KLASİK JAVASCRIPT DENETİMİ ---
function validateForm() {
    // Değerleri al
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const birthdate = document.getElementById('birthdate').value;
    const city = document.getElementById('city').value;
    const message = document.getElementById('message').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const confirm = document.getElementById('confirm').checked;

    // RegEx Kontrolleri
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^05[0-9]{9}$/; // 05 ile başlayan 11 haneli numara

    // Kontrol Silsilesi
    if (name === "" || surname === "") {
        alert("Lütfen adınızı ve soyadınızı eksiksiz giriniz.");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Lütfen geçerli bir e-posta adresi giriniz.");
        return false;
    }
    if (!phoneRegex.test(phone)) {
        alert("Telefon numarası 05XXXXXXXXX formatında ve 11 haneli olmalıdır.");
        return false;
    }
    if (birthdate === "") {
        alert("Lütfen doğum tarihinizi seçiniz.");
        return false;
    }
    if (city === "") {
        alert("Lütfen bir şehir seçiniz.");
        return false;
    }
    if (!gender) {
        alert("Lütfen cinsiyet seçimi yapınız.");
        return false;
    }
    if (message === "") {
        alert("Mesaj alanı boş bırakılamaz.");
        return false;
    }
    if (!confirm) {
        alert("Bilgilerin doğruluğunu onaylamanız gerekmektedir.");
        return false;
    }

    // Başarılı Mesajı
    alert("Form Başarıyla Denetlendi (JS)!\nAd: " + name + "\nSoyad: " + surname + "\nEmail: " + email + "\nŞehir: " + city);
    return true; // Formun gonder.php'ye gitmesine izin ver
}

// --- 2. VUE.JS DENETİMİ ---
const { createApp } = Vue;

createApp({
    data() {
        return {
            email: '' // v-model="email" için
        }
    },
    methods: {
        vueDenetle() {
            // Vue içinden de validateForm fonksiyonunu çağırabiliriz 
            // ya da burada ayrı bir mantık yürütebiliriz.
            // Ödev gereği ayrı bir denetim motoru gibi çalışması için:
            if(this.email.includes("@sakarya.edu.tr")) {
                alert("Vue Mesajı: Sakarya Üniversitesi e-postası algılandı!");
            }
            
            if (validateForm()) {
                alert("Vue.js Denetimi de Başarılı!");
            }
        }
    }
}).mount('#app');