import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQv47PxhPNAlMhKUQsEhvAjux48OqT2OE",
  authDomain: "outpour-4a343.firebaseapp.com",
  projectId: "outpour-4a343",
  storageBucket: "outpour-4a343.appspot.com",
  messagingSenderId: "118718868553",
  appId: "1:118718868553:web:1faa77f2ef4597fb0da398",
  measurementId: "G-MQFTMEPSDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };