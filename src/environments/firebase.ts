import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Importe o Firestore
export const firebaseConfig = {
    apiKey: "AIzaSyA-q38NJqsLx2zY5dgS6gDKP3OB3TvSYEk",
    authDomain: "timeline-fb0aa.firebaseapp.com",
    projectId: "timeline-fb0aa",
    storageBucket: "timeline-fb0aa.firebasestorage.app",
    messagingSenderId: "625198981715",
    appId: "1:625198981715:web:3eb30782d89e2a75b6dca6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app); // Obtenha a instância do Firestore