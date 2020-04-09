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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
      console.log("Created new user");
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
