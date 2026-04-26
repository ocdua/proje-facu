import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNOIPKwpb9L40mDnjQgL1HZfgdYQrfCpM",
  authDomain: "projeto-faculdade-63947.firebaseapp.com",
  projectId: "projeto-faculdade-63947",
  storageBucket: "projeto-faculdade-63947.firebasestorage.app",
  messagingSenderId: "678329412165",
  appId: "1:678329412165:web:67ea7ba3ef5a528504912c",
  measurementId: "G-XCFMBDK959"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
