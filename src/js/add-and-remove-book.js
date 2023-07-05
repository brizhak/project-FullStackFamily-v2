import { fetchSelectedBook } from './api_request';
import { dataUser, pushShoppingList, readShoppingList, readUserData, updateUserData,removeElShoppingList } from './firebase-api';
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
     addToCartBtn.classList.remove('visually-hidden');
     readShoppingList(dataUser.userId).then(snapshot => {
        if (snapshot.exists()) {
            const shoppingList = snapshot.val();             
            const keys = Object.keys(shoppingList);            
            const books = [];
            if (keys.length !== 0) {
                for (let key of keys) {
                    const oneBook = shoppingList[`${key}`];
                    books.push(oneBook);
                }
                
            }
            const indexBook = books.findIndex((onebook, index) => 
                onebook._id === book._id)
            const removeId = keys[indexBook];            
            removeElShoppingList(dataUser.userId, removeId).then(() => {
                
            })

        }
    })

}



