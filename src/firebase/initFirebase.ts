import firebase from 'firebase/app';
import '@firebase/firestore';

if (!firebase.apps.length) {
  
  // Dear diary real configuration
  var config = {
    apiKey: process.env.firebase_browser_key,
    authDomain: 'deardiary-aeca1.firebaseapp.com',
    databaseURL: 'https://deardiary-aeca1.firebaseio.com',
    projectId: 'molemica',
    storageBucket: 'deardiary-aeca1.appspot.com',
    messagingSenderId: '614530160945',
    appId: '1:614530160945:web:e89752f6b4158c7a2ef810',
  };

  // Local environment override
  firebase.initializeApp({ projectId: "molemica" });
  firebase.firestore().settings({ host: 'localhost:8080', ssl: false });
}

export const db = firebase.firestore();