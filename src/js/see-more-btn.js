import { fetchCertainCategory } from "./api_request";
const seeMoreBtn = document.querySelector('.see-more');
const booksCategoryEl = document.querySelector('.books-category');
import { showLoader, hideLoader } from './loader';
import Notiflix from 'notiflix';

booksCategoryEl.addEventListener('click', onOpenCategoryList);

let category = "";

async function onOpenCategoryList(evt) {

    try {
        if (evt.target.nodeName !== "BUTTON") {
            return;
        }
        category = evt.target.id;
        console.log(evt.target);
        // showLoader();
        let books = await fetchCertainCategory(category);
        if (!books) {
            Notiflix.Notify.failure("Ops! We don't have books certain category");
        }
        renderCurrentCategory(books);
        return category;
    } catch (error) {
        Notiflix.Notify.failure('Something went wrong. Please try again');
    } finally {
        // hideLoader();
    }
}



function renderCurrentCategory(arr) {
    let markupCatBook = arr
        .map(({ book_image, author, title, _id }) => {
            return `
        <a href="#" class="book-card" id="${_id}">
            <div class="book-carts">
            <img src="${book_image}" alt="${title}" class="book-img" loading="lazy" width=335>
                <div class="book-title">
                <p>${title}</p>
                <p class="book-author">${author}</p>
                </div>
            </div>
        </a>
        `;
        });

    const screenWidth = window.screen.width;
    const markupMobile = markupCatBook.slice(1).join('');
    const markupLaptop = markupCatBook.slice(3).join('');
    const markupDesktop = markupCatBook.slice(5).join('');

    // let markup = '';
    // if (screenWidth < 767) {
    //     markup = `<ul class="category-item-list">${markupMobile}</ul>`;
    // } else if (screenWidth < 1440 && screenWidth >= 768) {
    //     markup = `<ul class="category-item-list">${markupLaptop}</ul>`;
    // } else {
    //     markup = `<ul class="category-item-list">${markupDesktop}</ul>`;
    // }

    let listCategoryBook = document.querySelector('.category-item-list')
    listCategoryBook.insertAdjacentHTML('beforeend', markup);
}