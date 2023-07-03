import { openModalAuth } from './modal-auth.js';
import { handleThemeToggle } from './dark.js';
import { onLogout } from './firebase-api.js';

  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu_link');
  const signUpButton = document.getElementById('sign-up');
  const themeSwitch = document.getElementById('theme-switch');

  signUpButton.addEventListener('click', openModalAuth);
  themeSwitch.addEventListener('change', handleThemeToggle);

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === true || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
  };

  const closeMenuOnOrientationChange = () => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
    }
  };

  const addMenuEventListeners = () => {
    openMenuBtn.addEventListener('click', toggleMenu);
    if (closeMenuBtn) {
      closeMenuBtn.addEventListener('click', toggleMenu);
    }
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', toggleMenu);
    });
  };

  addMenuEventListeners();

  window.matchMedia('(min-width: 768px)').addEventListener('change', closeMenuOnOrientationChange);

  // Оновити розмітку після виходу з системи
  function updateUIOnLogout() {
    const logoutButton = document.querySelector('.log-btn');
    logoutButton.classList.add('hidden');

    const loginButton = document.querySelector('.log-btn.singup');
    loginButton.classList.remove('hidden');
    loginButton.addEventListener('click', toggleMenu);
    onLogout();
  }

  // Додати слухача для кнопки "Logout"
  const logoutButton = document.querySelector('.log-btn.hidden');
  logoutButton.addEventListener('click', updateUIOnLogout);

 /*   function openModalAuth() {
     ModalAuth();
   }

 
   function handleThemeToggle() {
     handleThemeToggle();
   } */
