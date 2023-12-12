import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDHEnHQeJt1y2jYkLzBSIhW9kL-LlCGJIU",
  authDomain: "olx-clone-a67c6.firebaseapp.com",
  projectId: "olx-clone-a67c6",
  storageBucket: "olx-clone-a67c6.appspot.com",
  messagingSenderId: "880583480713",
  appId: "1:880583480713:web:3973a0a996e8b47f4a7d58",
  measurementId: "G-WVE5FY8LRS"
};

export default firebase.initializeApp(firebaseConfig)