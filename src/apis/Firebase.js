// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: apiKey,
  apiKey: "AIzaSyDhh8NR_9PGOJE0-92G8lyFJRPy7H4cAdU",
  authDomain: "fab-news.firebaseapp.com",
  projectId: "fab-news",
  storageBucket: "fab-news.appspot.com",
  messagingSenderId: "24545891840",
  appId: "1:24545891840:web:bf55d9244f79170ad12ae5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
