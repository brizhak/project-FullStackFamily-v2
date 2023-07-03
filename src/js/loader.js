export const loader = document.getElementById('loader');
const categoryEl = document.querySelector('.category-desktop');

// import { loader, showLoader, hideLoader } from '../js/loader.js';

export function showLoader() {
  loader.classList.remove('hide-loader');
  categoryEl.style.display = 'none';
}

export function hideLoader() {
  categoryEl.style.display = 'block';
  loader.classList.add('hide-loader');
}
