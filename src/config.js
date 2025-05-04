import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyC7qfdvS38S2yGVZE0P6S0oECVpAj75iPc",
  authDomain: "chisendwebsite.firebaseapp.com",
  databaseURL: "https://chisendwebsite-default-rtdb.firebaseio.com",
  projectId: "chisendwebsite",
  storageBucket: "chisendwebsite.firebasestorage.app",
  messagingSenderId: "129465630714",
  appId: "1:129465630714:web:c7cedbc79391c4408bae43",
  measurementId: "G-FWYG6QNV73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services using the modular SDK
const db = getDatabase(app);


export { db };