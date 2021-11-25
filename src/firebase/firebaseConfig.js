// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY6cGXL2RU_SoUTeBckB2ikAWY5JXFZZ4",
  authDomain: "quizz-4d484.firebaseapp.com",
  databaseURL:
    "https://quizz-4d484-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quizz-4d484",
  storageBucket: "quizz-4d484.appspot.com",
  messagingSenderId: "328551642602",
  appId: "1:328551642602:web:dd457b06f7c976d768ae93",
  measurementId: "G-2YLY0W9HXV",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default firebase;
