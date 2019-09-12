import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBTkWvvDvew6eFcwPU2NWQ1d11c2nJbFEI",
  authDomain: "crown-db-7fc45.firebaseapp.com",
  databaseURL: "https://crown-db-7fc45.firebaseio.com",
  projectId: "crown-db-7fc45",
  storageBucket: "",
  messagingSenderId: "371630658648",
  appId: "1:371630658648:web:c95f1cc60733d238f2262d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
