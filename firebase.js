// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Für die Authentifizierung
import { getFirestore } from "firebase/firestore"; // Falls du eine Datenbank brauchst

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCodcOliPJ4uhFsPjV4FUH9W6OSRH8xg",
  authDomain: "ai-universal-wealth.firebaseapp.com",
  projectId: "ai-universal-wealth",
  storageBucket: "ai-universal-wealth.appspot.com",
  messagingSenderId: "332578445860",
  appId: "1:332578445860:web:82226bcb6de68b2d5256b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Exporte die Instanzen für Authentifizierung und Firestore
export { app, auth, db };