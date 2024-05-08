import RestoDBSource from '../../data/restodb-source';
import { createRestoListTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <h2>Daftar Restoran</h2>
      <hr>
      <div id="restaurant-list"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestoDBSource.ListRestaurant();
    const restaurantContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestoListTemplate(restaurant);
    });
  },
};

export default Home;
