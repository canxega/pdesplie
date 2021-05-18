import firebase from 'firebase'
import 'firebase/auth'

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAFF34NgRMaat-7KzmPcIGRtlUKtJ3-w60",
    authDomain: "restaurantigua.firebaseapp.com",
    projectId: "restaurantigua",
    storageBucket: "restaurantigua.appspot.com",
    messagingSenderId: "1096231275234",
    appId: "1:1096231275234:web:fcbc43984154a82d0d2cbb",
    measurementId: "G-SZ0LMECR7S"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  const auth = fire.auth()
  const fireanalitic = firebase.analytics();

  export{auth}