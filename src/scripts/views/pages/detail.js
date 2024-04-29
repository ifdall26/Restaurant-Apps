import UrlParser from '../../routes/url-parser';
import RestoDBSource from '../../data/restodb-source';

const Detail = {
  async render() {
    return `
    <h2>Detail Restoran</h2>
    <hr>
    <br>
    <div id="restaurant" class="restaurant"></div>
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoDBSource.DetailRestaurant(url.id);
    console.log(restaurant);
  },
};
 
export default Detail;