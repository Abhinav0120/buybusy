// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB49WPX74hqWFla9hrw6OujM3UGb_nl5ck",
  authDomain: "buybusy-b3256.firebaseapp.com",
  projectId: "buybusy-b3256",
  storageBucket: "buybusy-b3256.appspot.com",
  messagingSenderId: "740662992110",
  appId: "1:740662992110:web:8ad2b003a96ddb661067ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();