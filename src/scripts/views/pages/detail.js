/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import RestoDBSource from '../../data/restodb-source';
import { createRestoDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const addReview = async (reviewData) => {
  try {
    const response = await fetch('https://restaurant-api.dicoding.dev/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData), // Mengubah objek reviewData menjadi string JSON
    });
    const responseData = await response.json();
    if (responseData.error) {
      throw new Error(responseData.message);
    }
    return responseData;
  } catch (error) {
    console.error('Gagal menambahkan review:', error);
    throw new Error('Gagal menambahkan review');
  }
};

const Detail = {
  async render() {
    return `
      <h2>Detail Restoran</h2>
      <hr>
      <br>
      <div id="restaurant" class="restaurant-detail"></div>
      <div id="likeButtonContainer"></div>
      <div id="reviewFormContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoDBSource.DetailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });

    // Tambahkan form review setelah data restoran ditampilkan
    const reviewFormContainer = document.querySelector('#reviewFormContainer');
    reviewFormContainer.innerHTML = createReviewFormTemplate();

    // Tambahkan event listener untuk submit form review
    const reviewForm = document.querySelector('#reviewForm');
    reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(reviewForm);
      const reviewData = {
        id: url.id,
        name: formData.get('name'),
        review: formData.get('review'),
      };
      try {
        await addReview(reviewData);
        alert('Review berhasil ditambahkan!');
        // Refresh halaman setelah review berhasil ditambahkan
        window.location.reload();
      } catch (error) {
        alert('Gagal menambahkan review. Silakan coba lagi.');
      }
    });
  },
};

export default Detail;
