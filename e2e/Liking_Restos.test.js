/* eslint-disable no-undef */
Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurant-list');
  I.see('Tidak ada Restoran yang Ditampilkan', '.resto-nothing');
});

Scenario('liking one restaurants', ({ I }) => {
  I.see('Tidak ada Restoran yang Ditampilkan', '.resto-nothing');
  I.amOnPage('/');

  // pause();
  I.seeElement('.restaurant a');
  I.click(locate('.restaurant a').first());
});