/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-empty-function */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
import FavoriteRestoIdb from '../data/favorite-resto-idb';
import { createLikeRestoButtonTemplate, createUnikeRestoButtonTemplate } from '../views/templates/template-creator';
 
const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = restaurant;

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
    const restaurant = await FavoriteRestoIdb.getResto(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();
 
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._resto);
      this._renderButton();
    });
  },
 
  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnikeRestoButtonTemplate();
 
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};
 
export default LikeButtonInitiator;