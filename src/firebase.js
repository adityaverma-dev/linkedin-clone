import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBiIr2KagO3XjeYIAzn0agVzE3dPRmfW50",
    authDomain: "linkedin-clone-ed4f7.firebaseapp.com",
    projectId: "linkedin-clone-ed4f7",
    storageBucket: "linkedin-clone-ed4f7.appspot.com",
    messagingSenderId: "287252841324",
    appId: "1:287252841324:web:6c6a49fd26b7eb1dfaa949"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth= firebase.auth();
const {FieldValue} = firebase.firestore

export { FieldValue, db, auth};