import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVQfJNhOKnzLDW96wRre2G9XdayVQD37o",
    authDomain: "my--clone-7c098.firebaseapp.com",
    databaseURL: "https://my--clone-7c098.firebaseio.com",
    projectId: "my--clone-7c098",
    storageBucket: "my--clone-7c098.appspot.com",
    messagingSenderId: "900330479917",
    appId: "1:900330479917:web:4261cd22e95ee1bfeb73a4",
    measurementId: "G-GRGGB4WT33"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };