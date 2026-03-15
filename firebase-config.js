// Firebase Configuration for Ganesha Balaga
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBftT16hgwnfrIonX2fCmjFBmGnbvdEwo",
  authDomain: "ganesha-balaga.firebaseapp.com",
  projectId: "ganesha-balaga",
  storageBucket: "ganesha-balaga.firebasestorage.app",
  messagingSenderId: "1070110513022",
  appId: "1:1070110513022:web:ea32b9d09e99d95648852f",
  measurementId: "G-4P238BKZ4B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };