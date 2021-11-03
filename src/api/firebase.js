import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyDnMJEExfgd4yr5rJv_a9nbkaHZWxADvC4",
  authDomain: "gb-react-chat-1ee4d.firebaseapp.com",
  databaseURL: "https://gb-react-chat-1ee4d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-react-chat-1ee4d",
  storageBucket: "gb-react-chat-1ee4d.appspot.com",
  messagingSenderId: "625000217777",
  appId: "1:625000217777:web:48780b49ba65e4f8d1f690",
  measurementId: "G-6C2DD9XDMQ"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
