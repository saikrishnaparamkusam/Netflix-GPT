// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNNWtrf5Yq09AWxWMkG1ZtZiaX6eIu6Ao",
  authDomain: "netflix-gpt-9af58.firebaseapp.com",
  projectId: "netflix-gpt-9af58",
  storageBucket: "netflix-gpt-9af58.appspot.com",
  messagingSenderId: "934754876393",
  appId: "1:934754876393:web:36f481aa3325e2667a6978",
  measurementId: "G-XTRDJ8G3LF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
