import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCKPZvZkYnS38MuOXn1WY_RJijzj6Di15E",
    authDomain: "personal-finance-tracker-dcf1c.firebaseapp.com",
    projectId: "personal-finance-tracker-dcf1c",
    storageBucket: "personal-finance-tracker-dcf1c.appspot.com",
    messagingSenderId: "535282220367",
    appId: "1:535282220367:web:7735c36cf5929c0a0d193a",
    measurementId: "G-45LPTN70BE"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };

