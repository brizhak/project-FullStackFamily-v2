
import {  refsBtn} from "./firebase-main";
import { getDatabase, ref, set, child, get, update,push } from 'firebase/database'; 
import { getAuth, signOut } from 'firebase/auth';
import {resetSignInButton} from './mobile-menu.js'
import { updateSignInButton } from './mobile-menu.js'

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

  authStates.type = 'signin';
  refsBtn.formBtn.textContent = 'SIGN IN';
  refsBtn.btnIn.style.color = 'blue';
  refsBtn.btnIn.style.textDecoration = 'underline';
  refsBtn.btnUp.style.color = '';
  refsBtn.btnUp.style.textDecoration = 'none';
}

function onBtnUpSelect() {
  if (authStates.type === 'signup') {
    return;
  }

  authStates.type = 'signup';
  refsBtn.formBtn.textContent = 'SIGN UP';
  refsBtn.btnUp.style.color = 'blue';
  refsBtn.btnUp.style.textDecoration = 'underline';
  refsBtn.btnIn.style.color = '';
  refsBtn.btnIn.style.textDecoration = 'none';
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
    // .then(snapshot => {
    //   if (snapshot.exists()) {
    //     console.log('snap', snapshot.val());
        
    //     const { email, shoppingList, username } = snapshot.val();
    //     console.log(shoppingList["-NZUy2Otr3H3ov2xTry5"]);
        
    //     console.log(Object.keys(shoppingList));
    //     if (authStates.status === true) {
    //       updateSignInButton(username);
    //     }
    //   }
      
    // })
    // .catch(error => {
      
    //   console.error(error);
      
    // });
}


async function updateUserData( data, userId ) {
  const db = getDatabase();
  
        // const newPostKey = push(child(ref(db), 'shoppingList'));
        const newPostKey = push(child(ref(db), `users/${userId}+/shoppingList/`)).key;
        
        const updates = {};
        updates['users/' + userId + '/shoppingList/'+newPostKey] = data;
        console.log('updates: ', updates);
        return update(ref(db), updates);
      }
        // const postData = shoppingList.push(data);
        // const updates = {};
        // updates['users/' + userId + '/shoppingList/'] = postData;
        // console.log('updates: ', updates);
        // return update(ref(db), updates);
      
   
  // if (shoppingList.length===0) {
  //   shoppingList = '';
  // }
  // const postData = shoppingList;
  // const updates = {};
  // updates['users/' + userId + '/shoppingList/'] = postData;
  // console.log('updates: ', updates);
  // return update(ref(db), updates);



async function onLogout() {

      const auth = getAuth();
signOut(auth).then(() => {
  authStates.status = false;
  resetSignInButton();
  // disabledEnabledFormBtn(authStates);
}).catch((error) => {
  
});
}

async function readShoppingList(userId) {
  const dbRef = ref(getDatabase());
 return  get(child(dbRef, `users/${userId}/shoppingList`));
    // .then(snapshot => {
    //   if (snapshot.exists()) {
    //     // console.log(snapshot.val());
        
    //     const { email, shoppingList, username } = snapshot.val();
    //     console.log('Shop',shoppingList);
    //   }
      
    // })
    // .catch(error => {
      
    //   console.error(error);
      
    // });
}

async function pushShoppingList(userId,data) {
  const db = getDatabase();
    
  set(ref(db, 'users/' + userId+'/shoppingList/'),data  );
  
      }
       
    
// function shopListStatus({ status }) {
//   const shopList = document.querySelector(".nav-list");
//   console.log(shopList.lastElementChild);
//   if (status === false) {
//     shopList.lastElementChild.classList.add('visually-hidden');
//   } else {
//    shopList.lastElementChild.classList.remove('visually-hidden');
//   }
// }







export { onBtnInSelect, onBtnUpSelect, firebaseConfig, dataUser,authStates , writeUserData,readUserData,updateUserData,onLogout,pushShoppingList,readShoppingList};



