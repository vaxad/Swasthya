import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat';
// Optionally import the services that you want to use
import  "firebase/auth";
// import {...} from "firebase/database";
import "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyCMBRnIVqLWAnpbt5A2GAO5Lb4MBIVCWPM",
    authDomain: "swasthya00.firebaseapp.com",
    projectId: "swasthya00",
    storageBucket: "swasthya00.appspot.com",
    messagingSenderId: "1040675780680",
    appId: "1:1040675780680:web:439d42599a4f6fe534407d",
    measurementId: "G-L2PBFE6YFG"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
