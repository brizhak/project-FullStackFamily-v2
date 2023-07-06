import { reauthenticateWithPhoneNumber } from "firebase/auth";
import { book } from "./book";
import { dataUser, readShoppingList, authStates } from './firebase-api';


let modalWrapper = document.querySelector('.modal');
let modalOverlay = document.querySelector('.overlay-modal-book');
let closeModalBtn = document.querySelector('.modal-close-btn');
const addToCartBtn = document.querySelector('#add-to-cart-btn');
const removeFromCartBtn = document.querySelector('#remove-from-cart-btn');


export function openModal() {
  modalWrapper.classList.add('active');
  modalOverlay.classList.add('active');

  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;

  if (authStates.status === false) {
    return;
  }
  document.body.addEventListener('keyup', escapeListener);
  readShoppingList(dataUser.userId).then(snapshot => {
    if (snapshot.exists()) {
      const shoppingList = snapshot.val();
      const keys = Object.keys(shoppingList);
      const books = [];
      if (keys.length !== 0) {
        for (let key of keys) {
          const onebook = shoppingList[`${key}`];
          books.push(onebook);

        }

        const result = books.find(elem =>

          elem._id === book._id
        );

        if (result === undefined) {
          addToCartBtn.classList.remove('visually-hidden');
          removeFromCartBtn.classList.add('visually-hidden');
        } else {
          addToCartBtn.classList.add('visually-hidden');
          removeFromCartBtn.classList.remove('visually-hidden');
        }

      }
    }
  })

}

function closeModal() {

  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);

  modalWrapper.classList.remove('active');
  modalOverlay.classList.remove('active');
}

closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});
// document.body.addEventListener('keyup', function (e) {
//   const key = e.code;

//   if (key === "Escape") {
//     closeModal();
//   }
// });
function escapeListener(e) {
  const key = e.code;

  if (key === "Escape") {
    closeModal();
    document.body.removeEventListener('keyup', esapeListener);
  }
}
export { closeModal }