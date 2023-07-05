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
        console.log("Id",evt.target.id);

        let books = await fetchCertainCategory(category);
        if (!books) {
            Notiflix.Notify.failure("Ops! We don't have books certain category");
        }
        renderCurrentCategory(books);
        return category;
    } catch (error) {
        Notiflix.Notify.failure('Something went wrong. Please try again');
        console.log(error);
    } finally {

    }
}



function renderCurrentCategory(arr) {
    const booksTop = document.createElement('div');
    booksTop.classList.add('list-top-books')
    let markupCatBook = arr
        .map(({ book_image, author, title, _id, list_name }, index) => {
            const bookTitleClass = index === 0 ? 'best-sellers-title' : 'visible-hidden-title';

            return `
                    <a href="#" class="book-card" id="${_id}">
                    <p class="${bookTitleClass}">${list_name}</p>
                    <div class="book-carts">
                        <div class='img-container-top'>
                            <img src="${book_image}" alt="${title}" class="book-img" loading="lazy" width=335>
                        </div>
                        <div class="book-title">
                            <p>${title}</p>
                            <p class="book-author">${author}</p>
                        </div>
                    </div>
                    </a>
        `;
        }).join('');



    let listCategoryBook = document.querySelector('.category-item-list')
    // listCategoryBook.insertAdjacentHTML('beforeend', markup);
    // listCategoryBook.innerHTML = markupCatBook;
    booksTop.innerHTML = markupCatBook;
    listCategoryBook.id = category;

    if (listCategoryBook.id === category) {
        listCategoryBook.innerHTML = '';

        listCategoryBook.appendChild(booksTop);
    }




}