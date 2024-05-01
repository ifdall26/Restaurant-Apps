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
      <div id="restaurant-list"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestos();
    const restaurantContainer = document.querySelector('#restaurant-list');
    
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestoListTemplate(restaurant);
    });
  },
};

export default Favorite;
