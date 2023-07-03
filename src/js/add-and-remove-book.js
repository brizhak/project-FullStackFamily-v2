import { fetchSelectedBook } from './api_request';
import { dataUser } from './firebase-api';
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
    shoppingCart.push(book);
    console.log(shoppingCart);
    // console.log(dataUser.shoppingList);

    removeFromCartBtn.classList.remove('visually-hidden');
    textRemove.classList.remove('visually-hidden');


}



function removeBook(evt) {
    removeFromCartBtn.classList.add('visually-hidden');
    textRemove.classList.add('visually-hidden');

    addToCartBtn.classList.remove('visually-hidden');

}



// export async function getIdForBook(id) {
//     console.log(shoppingCart);


//     try {
//         let book = await fetchSelectedBook(id);
//         console.log(book);
//         return book;
//     } catch (error) {
//         Notiflix.Notify.failure('Something went wrong. Please try again');
//     }

//     checkBook(book);

// }
