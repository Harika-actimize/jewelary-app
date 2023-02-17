import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
// import firebase from "";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpYkXKTWsGrURq_Dlmm7J87ehsQr8fDsQ",
  authDomain: "reduxcrud-de950.firebaseapp.com",
  databaseURL: "https://reduxcrud-de950-default-rtdb.firebaseio.com",
  projectId: "reduxcrud-de950",
  storageBucket: "reduxcrud-de950.appspot.com",
  messagingSenderId: "419239889275",
  appId: "1:419239889275:web:7918a3f7ee398febee95de"
};

// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig);

export const database = db.database();

export const dbRef = db.database().ref().push();