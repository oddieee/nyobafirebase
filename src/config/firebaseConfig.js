import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "",
  authDomain: "note-collection-aa894.firebaseapp.com",
  projectId: "note-collection-aa894",
  storageBucket: "note-collection-aa894.appspot.com",
  messagingSenderId: "567347729850",
  appId: "1:567347729850:web:59c3e6625b49a62905b983",
  measurementId: "G-5948TMP0R3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
