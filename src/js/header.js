import { authStates } from './firebase-api.js';

const linkShop = document.querySelector('#nav-item-shopping-list');
const mobileLinkShop = document.querySelector('#mobile-item-shopping-list');

export function letDisabledLink() {
  if (authStates.status === true) {
    linkShop.classList.remove('disabled-link');
    mobileLinkShop.classList.remove('disabled-link');
    return;
  }
  linkShop.classList.add('disabled-link');
  mobileLinkShop.classList.add('disabled-link');
}
