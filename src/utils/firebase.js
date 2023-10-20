// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtiE1o168K8HLj0AqeDHeCAnpKNRJWVrI",
  authDomain: "ott-gpt-b206f.firebaseapp.com",
  projectId: "ott-gpt-b206f",
  storageBucket: "ott-gpt-b206f.appspot.com",
  messagingSenderId: "995389417727",
  appId: "1:995389417727:web:14093f4a6d5a691d0104ca",
  measurementId: "G-VKXYLKH3NE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
