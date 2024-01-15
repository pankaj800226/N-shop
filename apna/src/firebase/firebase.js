import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCSgwMpez6b0qc2D4Lk5i5razg3ZhvFbK0",
    authDomain: "e-commerce-app-1ee0e.firebaseapp.com",
    projectId: "e-commerce-app-1ee0e",
    storageBucket: "e-commerce-app-1ee0e.appspot.com",
    messagingSenderId: "549046373307",
    appId: "1:549046373307:web:ec56cdb566e5000485d29e",
    databaseURL: "https://e-commerce-app-1ee0e-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig)