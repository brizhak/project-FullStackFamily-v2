import {  refsBtn} from "./firebase-main";
import { getDatabase, ref, set, child, get, update } from 'firebase/database'; 
import { getAuth, signOut } from 'firebase/auth';



const dataUser = {
  userId: '',
  username: 'user',
  email: '',
  shoppingList: '',
 
};

const authStates = {
  type: "signup",
  status: false,
}

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
  refsBtn.btnUp.style.color = 'black';
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
  refsBtn.btnIn.style.color = 'black';
  refsBtn.btnIn.style.textDecoration = 'none';
}


async function writeUserData({ userId, username, email,  shoppingList }) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: username,
    email: email,
    shoppingList: shoppingList,
    
  });
}


async function readUserData(userId) {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${userId}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        
        const { email, shoppingList, username } = snapshot.val();
          
        dataUser.email = email;
        dataUser.username = username;
        dataUser.shoppingList = shoppingList;
        if (dataUser.shoppingList === '') {
          dataUser.shoppingList = [];
        }
          
                
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
}


async function updateUserData({ shoppingList, userId }) {
  const db = getDatabase();
  if (shoppingList.length===0) {
    shoppingList = '';
  }
  const postData = shoppingList;
  const updates = {};
  updates['users/' + userId + '/shoppingList/'] = postData;
  console.log('updates: ', updates);
  return update(ref(db), updates);
}



async function onLogout() {
      const auth = getAuth();
signOut(auth).then(() => {
  authStates.status = false;
  // disabledEnabledFormBtn(authStates);
}).catch((error) => {
  
});
}





export { onBtnInSelect, onBtnUpSelect, firebaseConfig, dataUser,authStates , writeUserData,readUserData,updateUserData,onLogout};