import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfq1En2-kS5lCqBmJ5MyM4QwqDQyNzTCE",
  authDomain: "cura-82240.firebaseapp.com",
  projectId: "cura-82240",
  storageBucket: "cura-82240.appspot.com",
  messagingSenderId: "614365932951",
  appId: "1:614365932951:web:14f233f7ad9c091159a8d2",
  measurementId: "G-TTQ1MXV1XQ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app, auth, db };
