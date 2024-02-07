// import firebase from "firebase/app";
// import "firebase/auth";
// import {getAuth} from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: "AIzaSyCcQKZyqegEggotGjk37JZ7S5i15dzDm-k",
//   authDomain: "mobile-diploma.firebaseapp.com",
//   projectId: "mobile-diploma",
//   storageBucket: "mobile-diploma.appspot.com",
//   messagingSenderId: "686159893509",
//   appId: "1:686159893509:web:87ba12833d7e0ed60bb86c",
//   measurementId: "G-01RBZQXGWP",
// };

// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcQKZyqegEggotGjk37JZ7S5i15dzDm-k",
  authDomain: "mobile-diploma.firebaseapp.com",
  projectId: "mobile-diploma",
  storageBucket: "mobile-diploma.appspot.com",
  messagingSenderId: "686159893509",
  appId: "1:686159893509:web:87ba12833d7e0ed60bb86c",
  measurementId: "G-01RBZQXGWP",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };
