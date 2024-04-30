import CONFIG from '../../globals/config';

const createRestoListTemplate = (restaurant) => `
  <div id="restaurant-list" class="restaurant" tabindex="0">
    <a href="#/detail/${restaurant.id}" style="text-decoration: none;">
      <img src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" alt="${restaurant.name}" class="restaurant-image" />
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
          ${restaurant.menus.foods.map(food => `<li>${food.name}</li>`).join('')}
        </ul>
      </div>
      <div class="restaurant-detail__food">
        <h3>Menu Minuman</h3>
        <ul class="restaurant-detail__drink-menu">
          ${restaurant.menus.drinks.map(drink => `<li>${drink.name}</li>`).join('')}
        </ul>
      </div>
    </div>
    <div class="restaurant-detail__reviews">
      <h2>Customer Reviews</h2>
      <ul class="restaurant-detail__review-list">
        ${restaurant.customerReviews.map(review => `
          <li>
            <p><strong>${review.name}</strong></p>
            <p>${review.date}</p>
            <p>${review.review}</p>
          </li>
        `).join('')}
      </ul>
    </div>
    <div class="restaurant-detail__favorite">
      <button id="favoriteButton" class="favorite-button">${restaurant.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
    </div>
  </div>
`;

export { createRestoListTemplate, createRestoDetailTemplate };