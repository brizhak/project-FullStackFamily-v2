import { fetchSelectedBook } from './api_request';
import { dataUser, pushShoppingList, readShoppingList, readUserData, updateUserData } from './firebase-api';
import Notiflix from 'notiflix';
import { book } from './book';

const addToCartBtn = document.querySelector('#add-to-cart-btn');
const removeFromCartBtn = document.querySelector('#remove-from-cart-btn');
const textRemove = document.querySelector('.modal-congrats-text');
// dataUser.shoppingList

let shoppingCart = [];

addToCartBtn.addEventListener('click', addingBook);
removeFromCartBtn.addEventListener('click', removeBook);



function addingBook(evt) {

    addToCartBtn.classList.add('visually-hidden');


    console.log("Додавання книги", book);
    // shoppingCart.push(book);
    // console.log(shoppingCart);
    // dataUser.shoppingList.push(book);
    // pushShoppingList(dataUser.userId,book);

    updateUserData(book, dataUser.userId);

    removeFromCartBtn.classList.remove('visually-hidden');
    textRemove.classList.remove('visually-hidden');


}



function removeBook(evt) {
    removeFromCartBtn.classList.add('visually-hidden');
    textRemove.classList.add('visually-hidden');

    // const bookIndex = shoppingCart.indexOf(book);
    // shoppingCart.splice(bookIndex, 1);

    addToCartBtn.classList.remove('visually-hidden');
    // console.log(shoppingCart);
}



