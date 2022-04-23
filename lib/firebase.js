// Import the functions you need from the SDKs you need

const app = require("firebase/app");
const fb_auth = require("firebase/auth");
export const firestore = require("firebase/firestore");
export const storage = require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyCcTERf6v37OJDVrAS3-w1BAWWjS1T5f5s",
  authDomain: "cryptotickers-3bbeb.firebaseapp.com",
  projectId: "cryptotickers-3bbeb",
  storageBucket: "cryptotickers-3bbeb.appspot.com",
  messagingSenderId: "267136189484",
  appId: "1:267136189484:web:42e38abca8622a8dfabd89",
  measurementId: "G-B74FRX05B0",
};

// Initialize Firebase
export const firebase = app.initializeApp(firebaseConfig);

// Auth exports
export const auth = fb_auth.getAuth();

export const googleAuthProvider = new fb_auth.GoogleAuthProvider();
export const signInWithPopup = fb_auth.signInWithPopup;

// Firestore exports
export const serverTimestamp = firestore.FieldValue.serverTimestamp;
export const fromMillis = firestore.Timestamp.fromMillis;
export const increment = firestore.FieldValue.increment;

// Storage exports
console.log(storage);
export const STATE_CHANGED = storage._TaskEvent.STATE_CHANGED;
