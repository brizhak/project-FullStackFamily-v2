export const loader = document.getElementById('loader');

// import { loader, showLoader, hideLoader } from '../js/loader.js';

export function showLoader() {
  loader.classList.remove('hide-loader');
}

export function hideLoader() {
  loader.classList.add('hide-loader');
}
