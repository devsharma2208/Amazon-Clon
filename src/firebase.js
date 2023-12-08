import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBCnb6TlNOwzR7x-w2e-IvQZ2vDmg1ofI",

  authDomain: "clone-ee980.firebaseapp.com",

  projectId: "clone-ee980",

  // storageBucket: "XXXXXXXXXXXXXXXXXX",

  // messagingSenderId: "XXXXXXXXXXXX",

  // appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
};

// Initialize Firebase

const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);

export const db = getFirestore(firebase);

export default firebase;
