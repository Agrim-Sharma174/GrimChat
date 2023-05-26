import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import dotenv from 'dotenv';
// dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyBrBUBvMzpnowsFEMq0Ti1AG7Rpkl00FoQ",
  authDomain: "agrim-chat.firebaseapp.com",
  projectId: "agrim-chat",
  storageBucket: "agrim-chat.appspot.com",
  messagingSenderId: "173097816538",
  appId: "1:173097816538:web:11b69ccad9a2e2cb5770e3",
};

let app;

try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  if (!/already exists/.test(error.message)) {
    console.error("Firebase initialization error", error.stack);
  }
}

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const storage = getStorage(app);
