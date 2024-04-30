import CONFIG from '../../globals/config';

const createRestiListTemplate = (restaurant) => `
  <div id="restaurant-list" class="restaurant" tabindex="0">
    <a href="#/detail?id=${restaurant.id}" style="text-decoration: none;">
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

export { createRestiListTemplate };
