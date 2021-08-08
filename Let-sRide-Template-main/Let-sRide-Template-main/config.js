import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyCkX7nyUSA0iBSDG719JzdciamC8Jxwvlo",
  authDomain: "lets-ride-6c729.firebaseapp.com",
  projectId: "lets-ride-6c729",
  storageBucket: "lets-ride-6c729.appspot.com",
  messagingSenderId: "603765552684",
  appId: "1:603765552684:web:0f5a3afa5e7c86de08c389"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

