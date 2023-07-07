import { authStates } from './firebase-api.js';
import { toggleLogOutButtonIgListener } from './mobile-menu.js';
import { logOutButtonIg } from './mobile-menu.js';

// openModalBtn: document.querySelector('[data-modal-open]'),
const closeAuthModBtn = document.querySelector('.btn-modal-close');
// const modal= document.querySelector('[data-modal]'),

// refs.openModalBtn.addEventListener('click', openModal);
closeAuthModBtn.addEventListener('click', closeModalAuth);
const overlayAuth = document.querySelector('.modal-auth-overlay');
const modalAuth = document.querySelector('[data-modal]');
overlayAuth.addEventListener('click', closeModalAuth);

function openModalAuth() {
  if (authStates.status === true) {
    toggleLogOutButtonIgListener();
    return;
  }
  invisiblePasswordInput();
  modalAuth.classList.add('active');
  overlayAuth.classList.add('active');

  // const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  // const body = document.body;
  // body.style.position = 'fixed';
  // body.style.top = `-${scrollY}`;
}

function closeModalAuth() {

  // const body = document.body;
  // const scrollY = body.style.top;
  // body.style.position = '';
  // body.style.top = '';
  // window.scrollTo(0, parseInt(scrollY || '0') * -1);

  modalAuth.classList.remove('active');
  overlayAuth.classList.remove('active');
}

document.body.addEventListener('keyup', closeModalEscape);

// window.addEventListener('scroll', () => {
//   document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
// });

function closeModalEscape(e) {
  if (e.code === 'Escape') {
    if (modalAuth.classList.contains('active')) {
      document.querySelector('.modal-main.active').classList.remove('active');
      document
        .querySelector('.modal-auth-overlay.active')
        .classList.remove('active');
      return;
    }
    if (!logOutButtonIg.classList.contains('hidden-ig')) {
      toggleLogOutButtonIgListener();
      return;
    }
  }
}

export { openModalAuth, closeModalAuth };

// Eye
const refsTogglePassword = {
  passwordInput: document.querySelector("input[name='password']"),
  togglePasswordButton: document.querySelector('.toggle-password'),
  togglePasswordSvgS: document.querySelectorAll('.modal-password-eye'),
};

refsTogglePassword.togglePasswordButton.addEventListener(
  'click',
  togglePassword
);

function togglePassword() {
  if (refsTogglePassword.passwordInput.type === 'password') {
    refsTogglePassword.passwordInput.type = 'text';
    refsTogglePassword.togglePasswordButton.setAttribute(
      'aria-label',
      'Show password as plain text. ' +
      'Warning: this will display your password on the screen.'
    );
  } else {
    refsTogglePassword.passwordInput.type = 'password';
    refsTogglePassword.togglePasswordButton.setAttribute(
      'aria-label',
      'Hide password.'
    );
  }
  refsTogglePassword.togglePasswordSvgS.forEach(togglePasswordSvg =>
    togglePasswordSvg.classList.toggle('off')
  );
}

function invisiblePasswordInput() {
  refsTogglePassword.passwordInput.type = 'password';
  refsTogglePassword.togglePasswordButton.setAttribute(
    'aria-label',
    'Hide password.'
  );
  refsTogglePassword.togglePasswordSvgS[0].classList.remove('off');
  refsTogglePassword.togglePasswordSvgS[1].classList.add('off');
}

export { refsTogglePassword, togglePassword, invisiblePasswordInput };
