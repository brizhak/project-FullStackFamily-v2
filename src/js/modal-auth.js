import { authStates } from './firebase-api.js';
import { toggleLogOutButtonIgListener } from './mobile-menu.js';
import { logOutButtonIg } from './mobile-menu.js';

// openModalBtn: document.querySelector('[data-modal-open]'),
const closeAuthModBtn = document.querySelector('.btn-modal-close');
// const modal= document.querySelector('[data-modal]'),

// refs.openModalBtn.addEventListener('click', openModal);
closeAuthModBtn.addEventListener('click', closeModalAuth);
const overlayAuth = document.querySelector('.overlay');
const modalAuth = document.querySelector('[data-modal]');
overlayAuth.addEventListener('click', closeModalAuth);

function openModalAuth() {
  if (authStates.status === true) {
    toggleLogOutButtonIgListener();
    return;
  }

  modalAuth.classList.add('active');
  overlayAuth.classList.add('active');
}

function closeModalAuth() {
  modalAuth.classList.remove('active');
  overlayAuth.classList.remove('active');
}

document.body.addEventListener('keyup', closeModalEscape);

function closeModalEscape(e) {
  if (e.code === 'Escape') {
    if (modalAuth.classList.contains('active')) {
      document.querySelector('.modal.active').classList.remove('active');
      document.querySelector('.overlay.active').classList.remove('active');
      return;
    }
    if (!logOutButtonIg.classList.contains('hidden-ig')) {
      toggleLogOutButtonIgListener();
      return;
    }
  }
}

export { openModalAuth, closeModalAuth };
