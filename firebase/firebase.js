// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCwbxMLkkRIEC8mA4KU-mJGXKIUMuYIEnU",
    authDomain: "ventive-web.firebaseapp.com",
    projectId: "ventive-web",
    storageBucket: "ventive-web.appspot.com",
    messagingSenderId: "863667596332",
    appId: "1:863667596332:web:c28c26f0fafdb3b8793589",
    measurementId: "G-YQM5ETRJEF"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);