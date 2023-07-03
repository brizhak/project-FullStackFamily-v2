import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
   setPersistence, browserSessionPersistence 
} from 'firebase/auth';

import { onBtnInSelect, onBtnUpSelect, firebaseConfig, dataUser, authStates, writeUserData,readUserData,onLogout } from './firebase-api.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refsBtn = {
     btnUp : document.querySelector('button[data-action=signup]'),
     btnIn : document.querySelector('button[data-action=signin]'),
    //  btnLogout : document.querySelector('button[data-action=logout]'),
     form : document.querySelector('.modal-form'),
     
     formBtn: document.querySelector(".btn-modal-submit"),
     
}


 refsBtn.btnUp.style.color = '#4f2ee8';
 refsBtn.btnUp.style.textDecoration = 'underline';

refsBtn.form.addEventListener('submit', onFormSubmit);
refsBtn.btnUp.addEventListener('click', onBtnUpSelect);
refsBtn.btnIn.addEventListener('click', onBtnInSelect);
// refsBtn.btnLogout.addEventListener('click', onLogout);

Notify.init({
    width: '300px',
    fontSize: '18px',
    position: 'center-top',
    timeout: '3000',
    messageMaxLength: 150,
    distance: '20px',
    showOnlyTheLastOne: true,
    warning: {
        background: 'rgba(190, 194, 79, 1)',
        textColor: '#fff',
        childClassName: 'notiflix-notify-warning',
        notiflixIconColor: 'rgba(0,0,0,0.2)',
        fontAwesomeClassName: 'fas fa-exclamation-circle',
        fontAwesomeIconColor: 'rgba(0,0,0,1)',
        backOverlayColor: 'rgba(238,191,49,0.2)',
    },
});


function onFormSubmit(event) {

  event.preventDefault();
  
  dataUser.username = event.target.name.value;
  dataUser.email = event.target.email.value;
  const password = event.target.password.value;
  dataUser.shoppingList = '';
    
  
  refsBtn.form.name.value = '';
  refsBtn.form.email.value = '';
  refsBtn.form.password.value = '';
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  if (authStates.type === 'signup') {
    createUserWithEmailAndPassword(auth, dataUser.email,password)
      .then(userCredential => {
        
        const user = userCredential.user;
        dataUser.userId = user.uid;
        writeUserData(dataUser);
        authStates.status = true;
        // disabledEnabledFormBtn(authStates);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Notify.warning(errorMessage);
         });
  } else if (authStates.type === 'signin') {
      
    signInWithEmailAndPassword(auth, dataUser.email,password)
      .then(userCredential => {
       
        const user = userCredential.user;
        dataUser.userId = user.uid;
        readUserData();    
        authStates.status = true;
        
         
        
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Notify.warning(errorMessage);
      });
  }

  }



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

setPersistence(auth, browserSessionPersistence)
    .then(() => {
               
        signInWithEmailAndPassword(auth, email, password);
      })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


async function startLoadingSets() {
  try {
    
    const storageData = sessionStorage.getItem('firebase:authUser:AIzaSyAWL009d3fIg7FDNeFa1MpQ8vcCju1UWEQ:[DEFAULT]');

    if (storageData === null) {
      authStates.status = false;
      // disabledEnabledFormBtn(authStates);
      return;
    }
    else {
      const parsedDataSS = JSON.parse(storageData);
      dataUser.userId = parsedDataSS.uid;
      authStates.status = true;
      // disabledEnabledFormBtn(authStates);
      readUserData(dataUser.userId);
    }
  }
  catch (e) {
    console.log('тут ошибка');
    return;
  }

  try {
    const localStorageData = localStorage.getItem('firebase:authUser:AIzaSyAWL009d3fIg7FDNeFa1MpQ8vcCju1UWEQ:[DEFAULT]');
    
    if (localStorageData === null) {
      authStates.status = false;
      // disabledEnabledFormBtn(authStates);
      return;
    }
    else {
      const parsedDataLS = JSON.parse(storageData);
      dataUser.userId = parsedDataLS.uid;
      authStates.status = true; 
      readUserData(dataUser.userId);
      // disabledEnabledFormBtn(authStates);
    }
  }
  catch(e) {
       return;
  }
}

startLoadingSets();



export {  refsBtn};
