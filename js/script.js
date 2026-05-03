/**
 * Script untuk Portofolio Beb Production
 * Fokus pada interaktivitas dan pengalaman pengguna yang halus.
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inisialisasi Fungsi Ganti Background (dari kode Anda)
    initBackgroundChanger();

    // 2. Efek Navbar Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "10px 0";
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
            navbar.classList.add('shadow-lg');
        } else {
            navbar.style.padding = "15px 0";
            navbar.style.backgroundColor = "rgba(17, 17, 17, 0.95)";
            navbar.classList.remove('shadow-lg');
        }
    });

    // 3. Animasi Smooth Scroll untuk Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

/**
 * Fungsi untuk mengubah background body melalui upload file
 * Disesuaikan agar lebih aman dengan pengecekan elemen
 */
function initBackgroundChanger() {
    const fileInput = document.getElementById("background-upload");
    if (!fileInput) return; // Mencegah error jika elemen tidak ada di halaman tertentu

    const reader = new FileReader();

    fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        // Validasi agar hanya file gambar yang diproses
        if (file && file.type.startsWith('image/')) {
            reader.readAsDataURL(file);
        } else {
            alert("Mohon unggah file gambar yang valid (jpg/png).");
        }
    });

    reader.onload = () => {
        document.body.style.backgroundImage = `url(${reader.result})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundPosition = "center";
    };
}


