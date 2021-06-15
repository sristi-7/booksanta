import firebase from "firebase";
require("@firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyDy71R6j7-qhAzu1RBwNL6nt_ll-Kk54TI",
    authDomain: "booksanta-fdae4.firebaseapp.com",
    projectId: "booksanta-fdae4",
    storageBucket: "booksanta-fdae4.appspot.com",
    messagingSenderId: "103864668341",
    appId: "1:103864668341:web:c17d3c119f8292f3222efc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()