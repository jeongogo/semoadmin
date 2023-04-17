// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHg0knEN8RO2VT1AlJTQdhztlRfenO7Qg",
  authDomain: "semomongchan.firebaseapp.com",
  projectId: "semomongchan",
  storageBucket: "semomongchan.appspot.com",
  messagingSenderId: "264318790633",
  appId: "1:264318790633:web:2fd97e76d6782303f67978",
  measurementId: "G-KFJCBJ30C6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);
 
export { db, auth };