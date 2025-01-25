// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCYhaGppOkpdjkOSAloC2dyLswRg36RiR0",
  authDomain: "instaclone-94350.firebaseapp.com",
  projectId: "instaclone-94350",
  storageBucket: "instaclone-94350.firebasestorage.app",
  messagingSenderId: "514631467603",
  appId: "1:514631467603:web:a1b91634653e8d217abca6",
  measurementId: "G-06LJVYGGDH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
