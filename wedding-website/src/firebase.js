import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgqyZ32j0fX378_QV1MLME4_fKYlbLjIc",
  authDomain: "wedding-c3bb2.firebaseapp.com",
  projectId: "wedding-c3bb2",
  storageBucket: "wedding-c3bb2.appspot.com",
  messagingSenderId: "975386371041",
  appId: "1:975386371041:web:5c9df51c210dba61b928a0",
  measurementId: "G-B40L8JLN9J",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export { database };
