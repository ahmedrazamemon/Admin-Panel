import { initializeApp } from "firebase/app";
// import {getfirestore} from 'firebase/fire'
import { getAuth } from "firebase/auth";
import {getDatabase} from 'firebase/database'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyBWbYrHAUPTzzQfN7AJU8jm11z6qYgGz8I",
    authDomain: "myapp-cc562.firebaseapp.com",
    databaseURL: "https://myapp-cc562-default-rtdb.firebaseio.com",
    projectId: "myapp-cc562",
    storageBucket: "myapp-cc562.appspot.com",
    messagingSenderId: "245930277647",
    appId: "1:245930277647:web:c76ccc546dbb5d57e65c7a"
  };
//   const firestore = f
  const app = initializeApp(firebaseConfig);
  // const auth = getAuth(app)
  // const db = getDatabase(app)
  const storage = getStorage(app)
  const firestore = getFirestore(app);
  export {firestore,storage}