// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU0RIxegiB2AZ8gZUVzWGKC0G1mbuLyqY",
  authDomain: "workout-app-498b1.firebaseapp.com",
  projectId: "workout-app-498b1",
  storageBucket: "workout-app-498b1.appspot.com",
  messagingSenderId: "595596484905",
  appId: "1:595596484905:web:366b45f9ae5a3fb08f9738",
  measurementId: "G-YNNNTPNHTY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebaseConfig as firebase };
