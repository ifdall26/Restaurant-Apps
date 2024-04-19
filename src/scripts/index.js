import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

console.log("Hello Coders! :)");

// index.js

// Burger Menu Functionality
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");

  // Burger Animation
  burger.classList.toggle("toggle");
});
