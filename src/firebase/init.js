import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDuCKUXduDKgNdy0It70Eb-5eV4-lB5P4Q",
    authDomain: "udemy-ninja-smoothies-2d77c.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-2d77c.firebaseio.com",
    projectId: "udemy-ninja-smoothies-2d77c",
    storageBucket: "udemy-ninja-smoothies-2d77c.appspot.com",
    messagingSenderId: "377166893044"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true});

  //export firestore database
  export default firebaseApp.firestore()
