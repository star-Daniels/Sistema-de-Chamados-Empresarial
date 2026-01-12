import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB6SRt7AVwONipV9Ln-ImvQnLTJMWakPWQ",
  authDomain: "helpdesk-react-4568d.firebaseapp.com",
  projectId: "helpdesk-react-4568d",
  storageBucket: "helpdesk-react-4568d.firebasestorage.app",
  messagingSenderId: "837697727276",
  appId: "1:837697727276:web:9c4d90019cd75ecc99da89"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);