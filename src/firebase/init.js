// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj71NlkBCIaqqctKRdJo4yYc-UdmlBXJE",
  authDomain: "pawmate-d5bdf.firebaseapp.com",
  projectId: "pawmate-d5bdf",
  storageBucket: "pawmate-d5bdf.appspot.com",
  messagingSenderId: "421053714644",
  appId: "1:421053714644:web:c699cf2ca9221a79feab41",
  measurementId: "G-NGV8D6DE0Y"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
console.log(app.length)

export const auth = getAuth();
