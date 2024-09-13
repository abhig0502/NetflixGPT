// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9lHmRwh6cu7uFX7EuwWsDH0KcfQEEGRQ",
  authDomain: "netflixgpt-a71c8.firebaseapp.com",
  projectId: "netflixgpt-a71c8",
  storageBucket: "netflixgpt-a71c8.appspot.com",
  messagingSenderId: "1016709081788",
  appId: "1:1016709081788:web:3ba4ab43907b93fa163eb9",
  measurementId: "G-J36784TEQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();