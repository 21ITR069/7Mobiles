// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-douhVC0qaEs5jTbkhkQhoev_Mha5zzU",
    authDomain: "myecom-62472.firebaseapp.com",
    projectId: "myecom-62472",
    storageBucket: "myecom-62472.appspot.com",
    messagingSenderId: "501017834496",
    appId: "1:501017834496:web:042470498a3ca6848a94e5"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }