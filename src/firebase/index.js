// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjLOVty1VXj53ss_9rfjXWaMtw1iAwA5I",
  authDomain: "coderhouse-ecommerce-40a89.firebaseapp.com",
  projectId: "coderhouse-ecommerce-40a89",
  storageBucket: "coderhouse-ecommerce-40a89.appspot.com",
  messagingSenderId: "869693644433",
  appId: "1:869693644433:web:ad592b9996c6de91846930"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getData = () => getFirestore(app)