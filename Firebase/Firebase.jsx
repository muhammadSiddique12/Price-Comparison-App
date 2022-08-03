import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB8Z5j-s6jBh9zwVnn4cDJRJQjtx4cqTqs",
  authDomain: "pricecomparison-7cf78.firebaseapp.com",
  projectId: "pricecomparison-7cf78",
  storageBucket: "pricecomparison-7cf78.appspot.com",
  messagingSenderId: "838286535030",
  appId: "1:838286535030:web:8c66a9de7202c4ba297257",
  measurementId: "G-FWM3T9RSMF",
};

const Firebase = initializeApp(firebaseConfig);

export default Firebase;
