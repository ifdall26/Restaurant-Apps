/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import { Workbox } from 'workbox-window';
 
const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('./service-worker.js');
    wb.register();
  }

  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;
