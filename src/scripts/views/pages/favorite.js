/* eslint-disable linebreak-style */
/* eslint-disable import/named */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoListTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <h2>Restoran Favoritmu:)</h2>
      <hr>
      <div id="restaurant-list" class="resto"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestos();
    const restaurantContainer = document.querySelector('#restaurant-list');
    
    if (restaurants.length === 0) {
      // Tampilkan pesan "Tidak ada Restoran yang Ditampilkan"
      restaurantContainer.innerHTML = '<p class="resto-nothing">Tidak ada Restoran yang Ditampilkan</p>';
    } else {
      // Tampilkan daftar restoran
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestoListTemplate(restaurant);
      });
    }
  },
};

export default Favorite;

