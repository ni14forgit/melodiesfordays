import firebase from "firebase";

//console.log(process.env.REACT_APP_FIREBASE_KEY);

var firebaseConfig = {
  apiKey: "AIzaSyCD8L8Pdud70nd9Up-klF2HkpZI1WBXJaw",
  authDomain: "melodiesfordays.firebaseapp.com",
  databaseURL: "https://melodiesfordays.firebaseio.com",
  projectId: "melodiesfordays",
  storageBucket: "melodiesfordays.appspot.com",
  messagingSenderId: "213617142382",
  appId: "1:213617142382:web:2740c1e06702e26917d47f",
  measurementId: "G-DS669PMMFQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
