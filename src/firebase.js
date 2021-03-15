import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCQfktHjxFo0jZ1OjDvleniflPnkKkSFzM",
    authDomain: "discord-clone-personal.firebaseapp.com",
    projectId: "discord-clone-personal",
    storageBucket: "discord-clone-personal.appspot.com",
    messagingSenderId: "616540798506",
    appId: "1:616540798506:web:8dd1336da756194bce8d53",
    measurementId: "G-5CJQPCCGFT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;