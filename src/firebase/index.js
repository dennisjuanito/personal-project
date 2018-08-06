import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "mentor-me-personal-project.firebaseapp.com",
    databaseURL: "https://mentor-me-personal-project.firebaseio.com",
    projectId: "mentor-me-personal-project",
    storageBucket: "mentor-me-personal-project.appspot.com",
    messagingSenderId: "807478230985"
  };
  firebase.initializeApp(config);

  var storage = firebase.storage();

  export {
    storage, firebase as default
}