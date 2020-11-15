import firebase from 'firebase'
import 'firebase/database' 
import 'firebase/auth'
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyDrBUvOYDRU1xMWEe_CfFkT9Lq6s8OkQ9g",
    authDomain: "react-309aa.firebaseapp.com",
    databaseURL: "https://react-309aa.firebaseio.com",
    projectId: "react-309aa",
    storageBucket: "react-309aa.appspot.com",
    messagingSenderId: "151914949587",
    appId: "1:151914949587:web:b10e8e90ce019b99249d26",
    measurementId: "G-R5Z0GSENXF"
  };
  var Firebase = firebase.initializeApp(firebaseConfig);
  export default Firebase 
