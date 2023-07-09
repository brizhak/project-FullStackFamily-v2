import { dataUser, authStates } from './firebase-api.js';
import amazon from '../img/shopping/amazon.png';
import apple from '../img/shopping/apple.png';
import bookshop from '../img/shopping/bookshop.png';

import trash from 'bundle-text:../img/icon-trash.svg';
import shopListClearMob1x from '../img/shopping/books_mob_1x.png';

import {
  dataUser,
  authStates,
  readShoppingList,
  removeElShoppingList,
} from './firebase-api.js';
import { showLoader, hideLoader } from './loader.js';

const foundsList = document.querySelector('.sheave');
const mainList = document.querySelector('.shopping-list-list');
const screenWidth = window.screen.width;
if (screenWidth < 1440) {
  foundsList.classList.add('visually-hidden');
}

shoppingListMarkup();
function shoppingListMarkup() {
  if (authStates.status === false) {
    mainList.innerHTML = '';
  }
  showLoader();
  readShoppingList(dataUser.userId).then(snapshot => {
    if (snapshot.exists()) {
      const shoppingList = snapshot.val();
      const keys = Object.keys(shoppingList);
      const books = [];
      if (keys.length !== 0) {
        for (let key of keys) {
          const book = shoppingList[`${key}`];

          const bookMarkup = `<li class="shop-cart-container">
        <div class="shop-cart-wrap">
          <div class="shop-image-wrapper">
            <img class="shop-image" src="${book.book_image}" alt="${book.title}" width="100" height="142" />
          </div>
          <div class="shop-cart-info">
            <h2 class="shop-cart-title">${book.title}</h2>
            <h3 class="shop-cart-category">${book.list_name}</h3>
            <p class="shop-cart-description">${book.description}
            </p>
            <div class="shop-cart-bottom-wrap">
              <h4 class="shop-cart-author">${book.author}</h4>
              <ul class="shop-cart-media">
                <li class="shop-cart-media-item">
                  <a
                    href="${book.buy_links[0].url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Amazon"
                  >
                    <picture class="amazon-picture">
                      <source
                        srcset="${amazon}"
                        type="image/png"
                      />
                      <img
                        class="media-icon amazon-icon"
                        src="${amazon}"
                        alt="Amazon logo"
                        width="32"
                        height="11"
                      />
                    </picture>
                  </a>
                </li>
                <li class="shop-cart-media-item">
                  <a
                    href="${book.buy_links[1].url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Apple Books"
                  >
                    <picture>
                      <source
                        srcset="${apple}"
                        type="image/png"
                      />
                      <img
                        class="media-icon media-book-icon"
                        src="${apple}"
                        alt="Apple book logo"
                        width="16"
                        height="16"
                      />
                    </picture>
                  </a>
                </li>
                <li class="shop-cart-media-item">
                  <a
                    href="${book.buy_links[4].url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bookshop"
                  >
                    <picture>
                      <source
                        srcset="${bookshop}"
                        type="image/png"
                      />
                      <img
                        class="media-icon media-book-icon"
                        src="${bookshop}"
                        alt="Book shop logo"
                        width="16"
                        height="16"
                      />
                    </picture>
                  </a>
                </li>
              </ul>
            </div>
            <button
              class="shop-cart-btn"
              type="button"
              id="${key}"
              data-title="title"
              aria-label="Remove button"
            >
           <svg class="shop-cart-btn-trash" width="18" height="18" id="${key}">
           ${trash}
           </svg>
            </button>
          </div>
        </div>
      </li>`;
          books.push(bookMarkup);
        }

        const markupList = books.join('');

        mainList.innerHTML = markupList;
        const shopList = document.querySelector('.shopping-list-list');

        shopList.addEventListener('click', removeCardInShopList);
      }
    } else {
      const titleNoneMarkup = `<li><p class="empty-shopping-list-text">
      This page is empty, add some books and proceed to order.
    </p>
     
      <picture>
        <sorce
          srset="${shopListClearMob1x}"
          type="image/png"
        />
        <img
          class="empty-shopping-list-img"
          src="${shopListClearMob1x}"
          alt="empty shopping list img"
        />
      </picture>
        </li>`;
      mainList.innerHTML = titleNoneMarkup;
    }
    hideLoader();
  });
}

function removeCardInShopList(event) {
  // if (event.target.nodeName !== 'BUTTON') {
  if (event.target.nodeName !== 'BUTTON' && event.target.nodeName !== 'svg') {
    return;
  }
  const bookItemId = event.target.id;
  removeElShoppingList(dataUser.userId, bookItemId);
  shoppingListMarkup();
}

export { shoppingListMarkup };
