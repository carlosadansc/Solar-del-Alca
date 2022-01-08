import firebase from 'firebase/app';
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyC_YGBIkZhavY_LvrsloybrV1OAg6O_Fno",
    authDomain: "solardelalca-bb049.firebaseapp.com",
    projectId: "solardelalca-bb049",
    storageBucket: "solardelalca-bb049.appspot.com",
    messagingSenderId: "858371660379",
    appId: "1:858371660379:web:af3c2e2823bec8fa5b7d7e",
    measurementId: "G-YRJ29F1073"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

export { db, firebase };