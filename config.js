
import firebase from 'firebase';


 const firebaseConfig = {
    apiKey: "AIzaSyCKfhOIzsZ-NUDsGiKIuLSf36IrmYw026o",
    authDomain: "biblioteca-digital-f47cf.firebaseapp.com",
    projectId: "biblioteca-digital-f47cf",
    storageBucket: "biblioteca-digital-f47cf.appspot.com",
    messagingSenderId: "629580142945",
    appId: "1:629580142945:web:45de606c32b6305c5fcd20"
  };

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}// you may remove the if condition if the app is not getting initialized.

export default firebase.firestore();

