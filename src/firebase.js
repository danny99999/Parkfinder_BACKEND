import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDd6AFN_byotD3ygsIOyVwwlrkfcKkJN9w",
    authDomain: "parkfinder-60514.firebaseapp.com",
    projectId: "parkfinder-60514",
    storageBucket: "parkfinder-60514.appspot.com",
    messagingSenderId: "451517424885",
    appId: "1:451517424885:web:0c02b2be2b6bee39c211bc",
    measurementId: "G-67QXR0SNEZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export { firebase };