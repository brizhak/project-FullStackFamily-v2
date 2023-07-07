 export  const loader = document.querySelector('.loader-container');
const categoryEl = document.querySelector('.category-desktop');

// import { loader, showLoader, hideLoader } from '../js/loader.js';

export function showLoader() {
  loader.classList.remove('visually-hidden');
  // categoryEl.style.display = 'none';
}

export function hideLoader() {
  loader.classList.add('visually-hidden');
  // categoryEl.style.display = 'block';
}
