// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b0304.firebaseapp.com",
  projectId: "mern-blog-b0304",
  storageBucket: "mern-blog-b0304.appspot.com",
  messagingSenderId: "835863895479",
  appId: "1:835863895479:web:11a0ff11c1c4bd800b1c32"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);