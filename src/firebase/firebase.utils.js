import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDbp2aNy6jzGnGH1sNPaWp3OYVzb4KpvlY",
  authDomain: "crwn-clothing-9a38a.firebaseapp.com",
  databaseURL: "https://crwn-clothing-9a38a.firebaseio.com",
  projectId: "crwn-clothing-9a38a",
  storageBucket: "crwn-clothing-9a38a.appspot.com",
  messagingSenderId: "1027841984384",
  appId: "1:1027841984384:web:98f4d8171ab49344c0a365",
  measurementId: "G-4R8ZGG5S9T"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
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