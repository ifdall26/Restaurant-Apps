import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

console.log("Hello Coders! :)");

// Toggle mobile menu
const hamburgerBtn = document.querySelector(".hamburger-btn");
const navMenu = document.querySelector(".navigation-menu");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Function to toggle navigation menu
function toggleNavMenu() {
  const navMenu = document.querySelector(".navigation-menu");
  if (navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
  } else {
    navMenu.classList.add("active");
  }
}

// Event listener for hamburger button click
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".hamburger-btn")
    .addEventListener("click", toggleNavMenu);
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const navMenu = document.querySelector(".navigation-menu");

  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Menambahkan delay sebentar sebelum mengubah display menu navigasi
    setTimeout(() => {
      if (navMenu.classList.contains("active")) {
        navMenu.style.display = "block";
      } else {
        navMenu.style.display = "none";
      }
    }, 500);
  });
});
