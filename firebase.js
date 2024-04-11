import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Storage and get a reference to the service
export const storage = getStorage(app);

export {createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail};