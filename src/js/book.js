import './category';
import './modal-window';
import { fetchSelectedBook } from './api_request';
import Notiflix from 'notiflix';
import { openModal } from './modal-window';
import amazon from '../img/shopping/amazon.png';
import apple from '../img/shopping/apple.png';
import bookshop from '../img/shopping/bookshop.png';
const addToCartBtn = document.querySelector('#add-to-cart-btn');
const removeFromCartBtn = document.querySelector('#remove-from-cart-btn');
import { authStates } from './firebase-api';
import { showLoader, hideLoader } from './loader';


let modalBodyCard = document.querySelector('.modal-body-card');
const booksCategoryEl = document.querySelector('.books-category');

booksCategoryEl.addEventListener('click', onSelectBook);


function onSelectBook(evt) {
   
    let touchTagA = evt.target.closest('a');

    if (!touchTagA) return;

    if (!booksCategoryEl.contains(touchTagA)) return;

   

    modalBodyCard.innerHTML = "";
    let id = touchTagA.id;
    getBook(id);


    if (authStates.status === true) {
        addToCartBtn.disabled = false;
        removeFromCartBtn.disabled = false;
        addToCartBtn.classList.remove('non-active-btn');
        removeFromCartBtn.classList.remove('non-active-btn');
    } else {
        addToCartBtn.disabled = true;
        removeFromCartBtn.disabled = true;
        addToCartBtn.classList.add('non-active-btn');
        removeFromCartBtn.classList.add('non-active-btn');
    }
        openModal();
    
}



let book = null;

async function getBook(id) {
    try {
        book = await fetchSelectedBook(id);
        renderSelectedBook(book);
    } catch (error) {
        Notiflix.Notify.failure('Something went wrong. Please try again');
    }
}


function renderSelectedBook(book) {
    const markup = `
        <div class="modal-body-image">
            <img
                src="${book.book_image}"
                alt="${book.title}"
                class="modal-body-image-poster"
            />
        </div>
        <div class="modal-body-tablet">
            <div class="modal-body-about-book">
                <h2 class="modal-body-title">${book.title}</h2>
                <h3 class="modal-body-autor">${book.author}</h3>
                <p class="modal-body-text">
                    ${book.description}
                </p>
            </div>
            <div class="modal-body-logo">
            <ul class="modal-body-logo-list">
                <li class="modal-body-logo-item">
                <a
                    href="${book.buy_links[0].url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Amazon"
                    class="modal-body-logo-link"
                >
                    <img
                        class="modal-body-media-icon-amazon"
                        srcset="${amazon}";
                        src="${amazon}";
                        alt="Amazon shop"
                        />
                </a>
                </li>
                <li class="modal-body-logo-item">
                <a
                    href="${book.buy_links[1].url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Apple Books"
                    class="modal-body-logo-link"
                >
                    <img
                        class="modal-body-media-icon-apple"
                        srcset="${apple}";
                        src="${apple}";
                        alt="Apple logo"
                        />
                </a>
                </li>
                <li class="modal-body-logo-item">
                <a
                    href="${book.buy_links[4].url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bookshop"
                    class="modal-body-logo-link"
                >
                    <img
                        class="modal-body-media-icon-shop"
                        srcset="${bookshop}";
                        src="${bookshop}";
                        alt="Bookshop logo"
                        /> 
                </a>
                </li>
            </ul>

            </div>

        </div>`;


    modalBodyCard.insertAdjacentHTML("afterbegin", markup);
}

export { book };