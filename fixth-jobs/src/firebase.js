import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Replace these values with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyC2hV69xlACNee7ENHC2nd8IdXOwUxIimk",
  authDomain: "fixth-59933.firebaseapp.com",
  projectId: "fixth-59933",
  storageBucket: "fixth-59933.firebasestorage.app",
  messagingSenderId: "16158237355",
  appId: "1:16158237355:web:bca16c5ac92cf673918dee",
  measurementId: "G-45KGKTNL7B"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
