// Ambil elemen cursor dan elemen body
const cursor = document.querySelector(".cursor");
const body = document.querySelector("body");

// Tambahkan variabel untuk menghitung jarak scroll vertikal
let scrollY = 0;

// Tambahkan event listener untuk saat window di-scroll
window.addEventListener("scroll", function () {
  // Simpan jarak scroll vertikal ke variabel "scrollY"
  scrollY = window.scrollY;
});

// Tambahkan event listener untuk saat mouse bergerak pada body
body.addEventListener("mousemove", function (e) {
  // Set posisi cursor ke posisi mouse dengan memperhitungkan jarak scroll vertikal
  cursor.style.top = e.pageY - scrollY + "px";
  cursor.style.left = e.pageX + "px";
});

// Tambahkan event listener untuk saat mouse memasuki elemen yang dapat dihover
body.addEventListener("mouseenter", function () {
  // Tambahkan class "active" pada cursor
  cursor.classList.add("active");
});

// Tambahkan event listener untuk saat mouse meninggalkan elemen yang dapat dihover
body.addEventListener("mouseleave", function () {
  // Hilangkan class "active" dari cursor
  cursor.classList.remove("active");
});
