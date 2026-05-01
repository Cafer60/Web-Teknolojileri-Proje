// Sayfa yüklendiğinde telefon maskesini aktif et
document.getElementById('phone').addEventListener('input', function (e) {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,4})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = !x[2] ? x[1] : x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] : '') + (x[4] ? ' ' + x[4] : '');
});

// --- 1. Klasik JavaScript Denetimi ---
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || phone === "" || email === "") {
        alert("Lütfen zorunlu alanları doldurun!");
        return false;
    }

    // Telefon formatı kontrolü (05xx xxx xx xx formatına uygun mu?)
    const phoneRegex = /^05\d{2} \d{3} \d{2} \d{2}$/;
    if (!phoneRegex.test(phone)) {
        alert("Lütfen telefon numarasını geçerli formatta girin (05xx xxx xx xx)");
        return false;
    }

    return true; 
}

// --- 2. Vue.js Framework Denetimi ---
const { createApp } = Vue;
createApp({
    data() { return { email: '' } },
    methods: {
        vueDenetle() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.email === "" || !emailRegex.test(this.email)) {
                alert("Vue.js: Geçersiz e-posta formatı!");
            } 
        }
    }
}).mount('#app');