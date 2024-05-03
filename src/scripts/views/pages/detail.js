/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import RestoDBSource from '../../data/restodb-source';
import { createRestoDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

// Fungsi untuk menambahkan event listener untuk form review
const addReviewFormListener = () => {
  const reviewForm = document.getElementById('reviewForm');

  reviewForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Mencegah form untuk submit secara default

    // Ambil nilai-nilai dari form
    const restaurantId = document.getElementById('restaurantId').value;
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    // Buat objek review
    const review = {
      id: restaurantId,
      name: name,
      review: comment
    };

    try {
      // Kirim data review ke endpoint API
      const response = await fetch('https://restaurant-api.dicoding.dev/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
      });

      const responseData = await response.json();

      if (responseData.error === false) {
        alert('Review berhasil ditambahkan!');
        // Lakukan apa pun yang diperlukan setelah review berhasil ditambahkan, misalnya refresh halaman atau tampilkan ulasan baru secara langsung
      } else {
        alert('Gagal menambahkan review.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat menambahkan review.');
    }
  });
};


const Detail = {
  async render() {
    return `
      <h2>Detail Restoran</h2>
      <hr>
      <br>
      <div id="restaurant" class="restaurant-detail"></div>
      <div id="likeButtonContainer"></div>
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

    addReviewFormListener();

    // Memperbarui daftar customer review setelah menambahkan review baru
    const reviewContainer = document.querySelector('.restaurant-detail__review-list');
    reviewContainer.innerHTML = ''; // Bersihkan daftar review sebelum memuat ulang
    const updatedRestaurant = await RestoDBSource.DetailRestaurant(url.id); // Ambil data restoran terbaru dari server
    updatedRestaurant.customerReviews.forEach(review => {
      reviewContainer.innerHTML += `
        <li>
          <p><strong>${review.name}</strong></p>
          <p>${review.date}</p>
          <p>${review.review}</p>
        </li>
      `;
    });
  },
};

export default Detail;
