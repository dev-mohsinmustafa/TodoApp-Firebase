// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optiona

const firebaseConfig = {
  apiKey: "AIzaSyD5MCXzuwqOWqM2C_xv6UYlrkgOSccwseI",
  authDomain: "ssdp-firebase-auth-main.firebaseapp.com",
  projectId: "ssdp-firebase-auth-main",
  storageBucket: "ssdp-firebase-auth-main.appspot.com",
  messagingSenderId: "1077759695748",
  appId: "1:1077759695748:web:a770166f48c7496a569bd1",
  measurementId: "G-3397T7EVSD"
};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app)

export { analytics, auth, firestore }