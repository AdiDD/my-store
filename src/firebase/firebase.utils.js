import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD1N1xpr7l66tSzf2xmeopwHSlBo1Tq21k",
  authDomain: "my-store-48202.firebaseapp.com",
  databaseURL: "https://my-store-48202.firebaseio.com",
  projectId: "my-store-48202",
  storageBucket: "my-store-48202.appspot.com",
  messagingSenderId: "190987836587",
  appId: "1:190987836587:web:6c70482dbd0c694bdeebee",
  measurementId: "G-V2W6ELX8V7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
