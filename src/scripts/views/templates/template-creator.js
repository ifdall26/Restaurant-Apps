import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
 
const START = 10;
const NUMBER_OF_IMAGES = 100;

const createRestoListTemplate = (restaurant) => `
  <div id="restaurant-list" class="restaurant" tabindex="0">
    <a class="lazyload" href="#/detail/${restaurant.id}" style="text-decoration: none;">
      <img src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" alt="${restaurant.name}" class="restaurant-image" crossorigin="anonymous" />
      <div class="restaurant-info">
        <h4>Rating: ${restaurant.rating}</h4>
        <h2>${restaurant.name}</h2>
        <p>${restaurant.description}</p>
        <h5>City: ${restaurant.city}</h5>
      </div>
    </a>
  </div>
`;

const createRestoDetailTemplate = (restaurant) => `
  <div class="restaurant-detail">
    <div class="restaurant-detail__header">
      <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="restaurant-detail__image" />
      <div class="restaurant-detail__info">
        <h2 class="restaurant-detail__name">${restaurant.name}</h2>
        <p class="restaurant-detail__address">Address: ${restaurant.address}, ${restaurant.city}</p>
        <p class="restaurant-detail__description">${restaurant.description}</p>
      </div>
    </div>
    <div class="restaurant-detail__menu">
      <div class="restaurant-detail__food">
        <h3>Menu Makanan</h3>
        <ul class="restaurant-detail__food-menu">
          ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
        </ul>
      </div>
      <div class="restaurant-detail__food">
        <h3>Menu Minuman</h3>
        <ul class="restaurant-detail__drink-menu">
          ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
        </ul>
      </div>
    </div>
    <div class="restaurant-detail__reviews">
      <h2>Customer Reviews</h2>
      <ul class="restaurant-detail__review-list">
        ${restaurant.customerReviews.map((review) => `
          <li>
            <p><strong>${review.name}</strong></p>
            <p>${review.date}</p>
            <p>${review.review}</p>
          </li>
        `).join('')}
      </ul>
    </div>
    <div class="restaurant-detail__add-review">
      <h2>Add Your Review</h2>
      <form id="reviewForm" class="review-form">
        <input type="hidden" id="restaurantId" name="restaurantId" value="${restaurant.id}">
        <div class="form-group">
          <label for="name">Your Name:</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="rating">Rating:</label>
          <select id="rating" name="rating" required>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
        <div class="form-group">
          <label for="comment">Your Review:</label>
          <textarea id="comment" name="comment" required></textarea>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  </div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="tambahkan restoran ini ke favorit" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="hapus restoran ini ke favorit" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoListTemplate, createRestoDetailTemplate, createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate
};
