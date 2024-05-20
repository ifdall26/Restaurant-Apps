/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import 'regenerator-runtime';
import '../styles/main.css';
import swRegister from './utils/sw-register';

document.addEventListener('DOMContentLoaded', async () => {
  // Lazy load App module
  const module = await import(/* webpackChunkName: "lazy-loaded-app" */ './views/app');
  const App = module.default;
  const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
  });

  // event listener untuk drawer button
  const drawerButton = document.querySelector('.drawer-button');
  const navigationMenu = document.querySelector('nav');

  drawerButton.addEventListener('click', () => {
    navigationMenu.classList.toggle('show');
  });

  // event listener untuk "Skip to Content"
  const skipToContentLink = document.querySelector('.skip-to-content');
  const mainContent = document.getElementById('mainContent');

  skipToContentLink.addEventListener('click', () => {
    mainContent.focus();
  });

  // event listener untuk navigasi dengan keyboard
  const navigationLinks = document.querySelectorAll('nav a');

  navigationLinks.forEach((link) => {
    link.addEventListener('keydown', (event) => {
      if (event.code === 'Enter' || event.code === 'Space') {
        link.click();
      }
    });
  });

  // event listener untuk menambahkan alternative teks pada gambar tanpa atribut alt
  const images = document.querySelectorAll('img');

  images.forEach((image) => {
    if (!image.alt) {
      image.alt = '';
    }
  });

  // fungsi untuk color-mode
  let darkModeEnabled = false;

  document.getElementById('theme-toggle').addEventListener('click', function () {
    darkModeEnabled = !darkModeEnabled;
    if (darkModeEnabled) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
    this.classList.toggle('rotate-down');
  });

  function enableDarkMode() {
    document.body.classList.add('dark-mode');
  }

  function disableDarkMode() {
    document.body.classList.remove('dark-mode');
  }

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });

  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });
});
