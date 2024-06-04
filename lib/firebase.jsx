import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDYNcFFDDxO5rmJ4QNI8j8ZKrBCKcgm49I",
    authDomain: "blogging-triluxo.firebaseapp.com",
    projectId: "blogging-triluxo",
    storageBucket: "blogging-triluxo.appspot.com",
    messagingSenderId: "894160893642",
    appId: "1:894160893642:web:09d5e5373f1a8f3991a633",
    measurementId: "G-YSNE0NZ09Q"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getFirestore()
export const auth = getAuth()