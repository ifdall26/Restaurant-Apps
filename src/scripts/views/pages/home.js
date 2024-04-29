const Home = {
  async render() {
    return `
      <h2>Daftar Restoran</h2>
      <hr>
      <div id="restaurant-list"></div>
    `;
  },
 
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};
 
export default Home;