/* eslint-disable no-undef */
Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurant-list');
  I.see('Tidak ada Restoran yang Ditampilkan', '.resto-nothing');
});

const assert = require('assert');

Scenario('liking one restaurants', async ({ I }) => {
  I.see('Tidak ada Restoran yang Ditampilkan', '.resto-nothing');
  I.amOnPage('/');

  const firstRestoTitle = await I.grabTextFrom('//*[@id="restaurant-list"]/a/div/h2');
  I.click('//*[@id="restaurant-list"]/a/div/h2');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');
  const likedRestoTitle = await I.grabTextFrom('.restaurant h2');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
  pause();
});