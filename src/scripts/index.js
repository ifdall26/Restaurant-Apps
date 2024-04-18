import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

console.log("Hello Coders! :)");

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.querySelector(".navbar-toggle");
  const navLinks = document.querySelector(".nav-links");

  navbarToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
