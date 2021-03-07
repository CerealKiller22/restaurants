import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyB7ZRQ-i6UhTDZXD1G0BtU8Sg4fPxvpgRY",
    authDomain: "restaurants-fc2f2.firebaseapp.com",
    projectId: "restaurants-fc2f2",
    storageBucket: "restaurants-fc2f2.appspot.com",
    messagingSenderId: "1016271628490",
    appId: "1:1016271628490:web:2d0bff06d7c17fb8d82c33"
  };
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);
