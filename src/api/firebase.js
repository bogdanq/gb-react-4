import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyCm1wYV0L8w1dD29MzibMEn0HduP9iPmgE",
  authDomain: "gb4-chat.firebaseapp.com",
  databaseURL:
    "https://gb4-chat-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb4-chat",
  storageBucket: "gb4-chat.appspot.com",
  messagingSenderId: "435483005088",
  appId: "1:435483005088:web:d0d3fa4b1ceb5fef1939c5",
  measurementId: "G-0BLTGH8DP5",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
