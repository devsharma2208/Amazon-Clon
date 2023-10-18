import { initializeApp } from "firebase/app";

import { GoogleAuthProvider, getAuth } from "firebase/auth";

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

export default firebase;
