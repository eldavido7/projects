import app from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyCaRwfqNv4S6jK0x2extHJDd-UZmN1wzeY",
  
    authDomain: "yep-project-aebe3.firebaseapp.com",
  
    databaseURL: "https://yep-project-aebe3-default-rtdb.firebaseio.com",
  
    projectId: "yep-project-aebe3",
  
    storageBucket: "yep-project-aebe3.appspot.com",
  
    messagingSenderId: "783008614699",
  
    appId: "1:783008614699:web:08ad8e80a4292f64fb1d6e",
  
  };
  
  
  // Initialize Firebase
  
  const firebase = app.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();

  export { firebase, firestore, app };