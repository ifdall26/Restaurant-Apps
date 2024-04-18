import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

console.log("Hello Coders! :)");

// Load restaurant data
console.log("Fetching restaurant data...");
fetch("../public/data/DATA.json")
  .then((response) => response.json())
  .then((data) => {
    console.log("Data fetched successfully:", data);
    const restaurantList = document.querySelector(".restaurant-list");
    data.restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement("div");
      restaurantItem.classList.add("restaurant-item");
      restaurantItem.innerHTML = `
        <img src="${restaurant.pictureId}" alt="${restaurant.name}">
        <h3>${restaurant.name}</h3>
        <p>${restaurant.description}</p>
        <p>Rating: ${restaurant.rating}</p>
        <p>Location: ${restaurant.city}</p>
      `;
      restaurantList.appendChild(restaurantItem);
    });
  })
  .catch((error) => console.error("Error fetching restaurant data:", error));
