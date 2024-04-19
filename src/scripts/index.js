import "regenerator-runtime";
import "../styles/main.css";

console.log("Hello Coders! :)");

// Import JSON data
import data from "../public/data/DATA.json";

console.log("Hello Coders! :)");

// Fungsi untuk menampilkan daftar restoran
function renderRestaurantList(restaurants) {
  const restaurantListElement = document.getElementById("restaurant-list");

  // Bersihkan isi dari elemen daftar restoran
  restaurantListElement.innerHTML = "";

  // Loop melalui setiap restoran dan elemen untuk setiap restoran
  restaurants.forEach((restaurant) => {
    const restaurantElement = document.createElement("div");
    restaurantElement.classList.add("restaurant");

    // Tampilkan informasi restoran
    restaurantElement.innerHTML = `
      <img src="${restaurant.pictureId}" alt="${restaurant.name}" class="restaurant-image" />
      <div class="restaurant-info">
        <h4>Rating: ${restaurant.rating}</h4>
        <h2>${restaurant.name}</h2>
        <p>${restaurant.description}</p>
        <h5>City: ${restaurant.city}</h5>
      </div>
    `;

    // elemen restoran ke dalam daftar restoran
    restaurantListElement.appendChild(restaurantElement);
  });
}

// Panggil fungsi renderRestaurantList dengan menggunakan data dari JSON
renderRestaurantList(data.restaurants);

// event listener untuk drawer button
const drawerButton = document.querySelector(".drawer-button");
const navigationMenu = document.querySelector("nav");

drawerButton.addEventListener("click", () => {
  navigationMenu.classList.toggle("show");
});

// event listener untuk "Skip to Content"
const skipToContentLink = document.querySelector(".skip-to-content");
const mainContent = document.getElementById("main-content");

skipToContentLink.addEventListener("click", () => {
  mainContent.focus();
});

// event listener untuk navigasi dengan keyboard
const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach((link) => {
  link.addEventListener("keydown", (event) => {
    if (event.code === "Enter" || event.code === "Space") {
      link.click();
    }
  });
});

// event listener untuk menambahkan alternative teks pada gambar tanpa atribut alt
const images = document.querySelectorAll("img");

images.forEach((image) => {
  if (!image.alt) {
    image.alt = "";
  }
});
