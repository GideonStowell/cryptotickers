// Import the functions you need from the SDKs you need

const app = require("firebase/app");
const fb_auth = require("firebase/auth");
import "firebase/firestore";
import "firebase/storage";

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
console.log(app);
export const firebase = app.initializeApp(firebaseConfig);

// Auth exports
export const auth = fb_auth.getAuth();
console.log(auth);

export const googleAuthProvider = new fb_auth.GoogleAuthProvider();
export const signInWithPopup = fb_auth.signInWithPopup;

// // Firestore exports
// export const firestore = firebase.firestore();
// export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
// export const fromMillis = firebase.firestore.Timestamp.fromMillis;
// export const increment = firebase.firestore.FieldValue.increment;

// // Storage exports
// export const storage = firebase.storage();
// export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
