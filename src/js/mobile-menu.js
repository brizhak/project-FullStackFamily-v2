import { openModalAuth } from './modal-auth.js';
import { handleThemeToggle } from './dark.js';
import { onLogout } from './firebase-api.js';

const mobileMenu = document.getElementById('modal-mobile');
const openMenuBtn = document.getElementById('open-modal-mobile');
const closeMenuBtn = document.getElementById('close-modal-mobile');
// const mobileMenuLinks = document.querySelectorAll('.mobile-menu_link');
const signUpButton = document.getElementById('sign-up');
const themeSwitch = document.getElementById('theme-switch');
const logoutButton = document.querySelector('.log-btn.hidden');

// opening mobile menu
openMenuBtn.addEventListener('click', function () {
mobileMenu.style.display = 'block';
});

// closing mobile menu
closeMenuBtn.addEventListener('click', function () {
mobileMenu.style.display = 'none';
});

// opening modal authentication
signUpButton.addEventListener('click', openModalAuth);

// theme switch
themeSwitch.addEventListener('change', handleThemeToggle);

// logging out
logoutButton.addEventListener('click', function () {
const logoutButton = document.querySelector('.log-btn');
logoutButton.classList.add('hidden');

const loginButton = document.querySelector('.log-btn.singup');
loginButton.classList.remove('hidden');
loginButton.addEventListener('click', toggleMenu);
onLogout();
});
