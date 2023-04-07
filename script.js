document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});
// DOMContentLoaded  end

// Loading

// Ambil elemen loading screen
const loadingScreen = document.querySelector(".loading-screen");

// Tampilkan loading screen
loadingScreen.style.display = "flex";

// Sembunyikan loading screen setelah 3 detik
setTimeout(function () {
  loadingScreen.style.display = "none";
}, 3000);
