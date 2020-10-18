import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCwE5eXGse0ZCuTYfRm52MhXK1ouA9fQSk",
    authDomain: "crown-db-38a41.firebaseapp.com",
    databaseURL: "https://crown-db-38a41.firebaseio.com",
    projectId: "crown-db-38a41",
    storageBucket: "crown-db-38a41.appspot.com",
    messagingSenderId: "59707310464",
    appId: "1:59707310464:web:6b23135f207eeabb5bc165",
    measurementId: "G-5CM86PYMW2"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
