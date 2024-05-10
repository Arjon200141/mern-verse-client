// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzN5RsQ3_hyeWuqpuzh7o48md8IEHmLyo",
  authDomain: "mern-verse.firebaseapp.com",
  projectId: "mern-verse",
  storageBucket: "mern-verse.appspot.com",
  messagingSenderId: "540854988866",
  appId: "1:540854988866:web:90aaa8c63069f4a5837ddb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default  app;

