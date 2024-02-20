// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIPJFBO-NXwm6nOH1PNhTBiBGZoeOnMCs",
  authDomain: "mazii-dictionary.firebaseapp.com",
  projectId: "mazii-dictionary",
  storageBucket: "mazii-dictionary.appspot.com",
  messagingSenderId: "206560262642",
  appId: "1:206560262642:web:2ae18a1ba35f92f856136b",
  measurementId: "G-0YT0W14XJG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
