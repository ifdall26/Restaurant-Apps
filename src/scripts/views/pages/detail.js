import UrlParser from '../../routes/url-parser';
import RestoDBSource from '../../data/restodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <h2>Detail Restoran</h2>
      <hr>
      <br>
      <div id="restaurant" class="restaurant-detail"></div>
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoDBSource.DetailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);
  },
};
 
export default Detail;
