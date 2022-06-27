import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyADsnmMhWU6WLeGNG-vK95YUhdK0lWBiUM",
  authDomain: "app-prog-dm2-4741b.firebaseapp.com",
  projectId: "app-prog-dm2-4741b",
  storageBucket: "app-prog-dm2-4741b.appspot.com",
  messagingSenderId: "33888733809",
  appId: "1:33888733809:web:1f5c46397b60aa808f29d0"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
