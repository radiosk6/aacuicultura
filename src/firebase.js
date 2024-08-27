// src/firebase.js
const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCslYzzJB4eEm1v9XoY1KV_vNC7NZXUbNM",
  authDomain: "acuicultura-en-guatemala.firebaseapp.com",
  projectId: "acuicultura-en-guatemala",
  storageBucket: "acuicultura-en-guatemala.appspot.com",
  messagingSenderId: "97582539671",
  appId: "1:97582539671:web:feecded778fd1ac7ee5ad2",
  measurementId: "G-J72H87FTSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

module.exports = { auth, db };
