import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

console.log("Hello Coders! :)");

// Import JSON data
import data from "../public/data/DATA.json";

// Fungsi untuk menampilkan daftar restoran
function renderRestaurantList(restaurants) {
  const restaurantListElement = document.getElementById("restaurant-list");

  // Bersihkan isi dari elemen daftar restoran
  restaurantListElement.innerHTML = "";

  // Loop melalui setiap restoran dan tambahkan elemen untuk setiap restoran
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

    // Tambahkan elemen restoran ke dalam daftar restoran
    restaurantListElement.appendChild(restaurantElement);
  });
}

// Panggil fungsi renderRestaurantList dengan menggunakan data dari JSON
renderRestaurantList(data.restaurants);

// Tambahkan event listener untuk drawer button
const drawerButton = document.querySelector(".drawer-button");
const navigationMenu = document.querySelector("nav");

drawerButton.addEventListener("click", () => {
  navigationMenu.classList.toggle("show");
});
