// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2uhD4C1XwYHQcI8Zti3eNnepb75J6Tfk",
  authDomain: "app-expenses-67d4c.firebaseapp.com",
  projectId: "app-expenses-67d4c",
  storageBucket: "app-expenses-67d4c.appspot.com",
  messagingSenderId: "442392368404",
  appId: "1:442392368404:web:764134bfefd86c6b9ade01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);