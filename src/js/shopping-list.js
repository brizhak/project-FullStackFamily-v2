import { dataUser } from './firebase-api.js';
import amazon from '../img/shopping/amazon.png';
import apple from '../img/shopping/apple.png';
import bookshop from '../img/shopping/bookshop.png';
import { onBtnInSelect, onBtnUpSelect, firebaseConfig, dataUser, authStates, writeUserData,readUserData,onLogout,readShoppingList } from './firebase-api.js';

// const shopListEl = document.querySelector('.shopping-list-list');
// dataUser.shoppingList.length === 4;
const mainSection = document.querySelector(".category-desktop");
const categoryList = document.querySelector(".categorys");
// dataUser.shoppingList = [1];

function shoppingListMarkup() {
  categoryList.classList.add("visually-hidden");
  mainSection.innerHTML = '';
  readShoppingList(dataUser.userId).then(snapshot => {
    if (snapshot.exists()) {
      // console.log('snap', snapshot.val());
        
      const shoppingList = snapshot.val();
      console.log("SSS", shoppingList);
          
      // console.log(shoppingList["-NZUy2Otr3H3ov2xTry5"]);
            
      console.log(Object.keys(shoppingList));
      const keys = Object.keys(shoppingList);
      console.log(keys);
      const books = [];
            
      if (keys.length !== 0) {
        for (let key of keys) {
          const book = shoppingList[`${key}`];
          console.log('book', book);
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
              data-title="title"
              aria-label="Remove button"
            >
              <svg class="shop-cart-btn-trash">
                <use href="../img/icons.svg#icon-trash"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>`
          books.push(bookMarkup);
                             
        }
        
        markupList = books.join('');
        const titleMarkup = `<section class="shopping-list-section">
        <div class="container shopping-list-container">
          <h1 class="shopping-list-title">
            Shopping <span class="title-blue">List</span>
          </h1>

          <ul class="shopping-list-list">${markupList}</ul>
          
      </section>`;
        mainSection.innerHTML = titleMarkup;
      }
    }
    else {
            
      const titleNoneMarkup = `<li><p class="empty-shopping-list-text">
      This page is empty, add some books and proceed to order.
    </p>
    <div>
      <picture>
        <source
          srcset="./img/books_desk_tab_1x.png 1x,
                .img/books_desk_tab_2x.png 2x"
           type="image/png"
          media="(min-width: 768px)"
        />
        <source
          srcset="
            ./img/shopping/books_mob_1x.png 1x,
            ./img/shopping/books_mob_2x.png 2x
          "
          media="(max-width: 767px)"
        />
        <img
          class="empty-shopping-list-img"
          src="./img/shopping/books_mob_1x.png"
          alt="empty shopping list img"
        />
      </picture>
    </div></li>`;
      mainSection.innerHTML = titleNoneMarkup;
            
    }
  })    
  }
        
  
  export {shoppingListMarkup};

