/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-empty-function */
import { createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  // eslint-disable-next-line no-shadow
  async init({ likeButtonContainer, favoriteRestos: FavoriteRestoIdb, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = restaurant;
    this._favoriteRestos = FavoriteRestoIdb;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const restaurant = await this._favoriteRestos.getResto(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestos.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestoButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestos.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
