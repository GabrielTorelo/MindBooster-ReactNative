import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyARjeXf0ycU3ds7tW4QShzNAee8tW-pO4o",
  authDomain: "app-prog-dm2.firebaseapp.com",
  projectId: "app-prog-dm2",
  storageBucket: "app-prog-dm2.appspot.com",
  messagingSenderId: "753745607433",
  appId: "1:753745607433:web:56c0074996460f3fd771d8"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
