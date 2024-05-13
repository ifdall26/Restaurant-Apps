/* eslint-disable no-undef */
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
// eslint-disable-next-line no-unused-vars
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Liking A Resto', () => {
  it('should show the like button when the restaurant has not been liked before', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';

    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 'rqdv5juczeskfw1e867',
      },
    });

    expect(document.querySelector('[aria-label="tambahkan restoran ini ke favorit"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 'rqdv5juczeskfw1e867',
      },
    });
    expect(document.querySelector('[aria-label="hapus restoran ini ke favorit"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 'rqdv5juczeskfw1e867',
      },
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Memastikan film berhasil disukai
    const restaurant = await FavoriteRestoIdb.getResto('rqdv5juczeskfw1e867');
    expect(restaurant).toEqual({ id: 'rqdv5juczeskfw1e867' });

    await FavoriteRestoIdb.deleteResto(1);
  });
});