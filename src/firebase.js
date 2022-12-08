// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBHFqYsZLAlrZP-fxMa_cOAs5PDzyGJsWM",
    authDomain: "clone-60545.firebaseapp.com",
    projectId: "clone-60545",
    storageBucket: "clone-60545.appspot.com",
    messagingSenderId: "759277547552",
    appId: "1:759277547552:web:78604884442e3a3f6e8c45",
    measurementId: "G-2PFEDG2JDX"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};


