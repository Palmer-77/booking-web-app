import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBqhkTiiJ1R2Nnht-WVUka_rkgiBogg8go",
    authDomain: "booking-web-c7c9d.firebaseapp.com",
    projectId: "booking-web-c7c9d",
    storageBucket: "booking-web-c7c9d.appspot.com",
    messagingSenderId: "242934155917",
    appId: "1:242934155917:web:467248a7ec878eb04d70c4",
    measurementId: "G-ZJ6JG8CW15"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const firestore = firebaseApp.firestore();
  export const auth = firebaseApp.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  
  export default firebaseApp;