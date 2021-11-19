import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFjQW9A2-p1otHLGksDiWB-3miVJcGNOM",
    authDomain: "appcg-fd88e.firebaseapp.com",
    projectId: "appcg-fd88e",
    storageBucket: "appcg-fd88e.appspot.com",
    messagingSenderId: "399378487032",
    appId: "1:399378487032:web:c321177332406e18318d0d"
  }
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig)

  export const firestore = firebase.firestore(app)