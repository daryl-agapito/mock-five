// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "mern-realestate-963d8.firebaseapp.com",
  projectId: "mern-realestate-963d8",
  storageBucket: "mern-realestate-963d8.appspot.com",
  messagingSenderId: "169663457930",
  appId: "1:169663457930:web:099588c2a10d00b1721b73",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
