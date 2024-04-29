import RestoDBSource from '../../data/restodb-source';

const Home = {
  async render() {
    return `
      <h2>Daftar Restoran</h2>
      <hr>
      <div id="restaurant-list"></div>
    `;
  },
 
  async afterRender() {
    const restaurant = await RestoDBSource.ListRestaurant();
    console.log(restaurant);
  },
};
 
export default Home;