import { authStates } from './firebase-api';
const linkShop = document.querySelector('#nav-item-shopping-list');

export function letDisabledLink() {


    if (authStates.status === true) {
        linkShop.classList.remove('disabled-link');
        return;
    }
    linkShop.classList.add('disabled-link');



}

// letDisabledLink();