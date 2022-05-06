import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_lmG4t61s5toJyFHYob-8bo97Rawhufk",
  authDomain: "react-app-curso-14c71.firebaseapp.com",
  projectId: "react-app-curso-14c71",
  storageBucket: "react-app-curso-14c71.appspot.com",
  messagingSenderId: "995162753799",
  appId: "1:995162753799:web:98715637ffd24c0a8d93a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const authProvider = new GoogleAuthProvider();

export { db, authProvider };
