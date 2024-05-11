// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDy2OunR8quQR9_4zYxF-n4fkCOuiIHT8Q",
    authDomain: "event-elevate-a0b4e.firebaseapp.com",
    projectId: "event-elevate-a0b4e",
    storageBucket: "event-elevate-a0b4e.appspot.com",
    messagingSenderId: "949959294297",
    appId: "1:949959294297:web:8e5e2a1ae51c796285a048"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;