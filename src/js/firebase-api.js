import { refsBtn } from './firebase-main';
import {
  getDatabase,
  ref,
  set,
  child,
  get,
  update,
  push,
} from 'firebase/database';
import { getAuth, signOut } from 'firebase/auth';

import { resetSignInButton } from './mobile-menu.js';
import { letDisabledLink } from './header.js';
import { invisiblePasswordInput } from './modal-auth.js';

const dataUser = {
  userId: '',
  username: 'user',
  email: '',
  shoppingList: '',
};

const authStates = {
  type: 'signup',
  status: false,
};

const firebaseConfig = {
  apiKey: 'AIzaSyAWL009d3fIg7FDNeFa1MpQ8vcCju1UWEQ',
  authDomain: 'project-js-fson82.firebaseapp.com',
  projectId: 'project-js-fson82',
  storageBucket: 'project-js-fson82.appspot.com',
  messagingSenderId: '729076020797',
  appId: '1:729076020797:web:e3a2da2c14a169a281dc54',
};

function onBtnInSelect() {
  if (authStates.type === 'signin') {
    return;
  }
  invisiblePasswordInput();
  authStates.type = 'signin';
  refsBtn.formBtn.textContent = 'sign in';
  refsBtn.btnIn.style.color = 'blue';
  refsBtn.btnIn.style.textDecoration = 'underline';
  refsBtn.btnUp.style.color = '';
  refsBtn.btnUp.style.textDecoration = 'none';
  refsBtn.form.name.value = '';
  refsBtn.form.name.disabled = true;
}

function onBtnUpSelect() {
  if (authStates.type === 'signup') {
    return;
  }
  invisiblePasswordInput();
  authStates.type = 'signup';
  refsBtn.formBtn.textContent = 'sign up';
  refsBtn.btnUp.style.color = 'blue';
  refsBtn.btnUp.style.textDecoration = 'underline';
  refsBtn.btnIn.style.color = '';
  refsBtn.btnIn.style.textDecoration = 'none';
  refsBtn.form.name.disabled = false;
}

async function writeUserData({ userId, username, email, shoppingList }) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: username,
    email: email,
    shoppingList: shoppingList,
  });
}

async function readUserData(userId) {
  const dbRef = ref(getDatabase());

  return get(child(dbRef, `users/${userId}`));
}

async function updateUserData(data, userId) {
  const db = getDatabase();

  const newPostKey = push(child(ref(db), `users/${userId}+/shoppingList/`)).key;
  const updates = {};
  updates['users/' + userId + '/shoppingList/' + newPostKey] = data;
  return update(ref(db), updates);
}

async function onLogout() {
  const auth = getAuth();

  signOut(auth)
    .then(() => {
      authStates.status = false;
      resetSignInButton();
    })
    .catch(error => {});
}

async function readShoppingList(userId) {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, `users/${userId}/shoppingList`));
}

async function pushShoppingList(userId, data) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId + '/shoppingList/'), data);
}

async function removeElShoppingList(userId, elemId) {
  const db = getDatabase();
  const updates = {};

  updates['users/' + userId + '/shoppingList/' + elemId] = null;

  return update(ref(db), updates);
}

export {
  onBtnInSelect,
  onBtnUpSelect,
  firebaseConfig,
  dataUser,
  authStates,
  writeUserData,
  readUserData,
  updateUserData,
  onLogout,
  pushShoppingList,
  readShoppingList,
  removeElShoppingList,
};
