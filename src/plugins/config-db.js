import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDx2PQChZhRRX3TUWsF-25lQ1xRKitkAaE",
  authDomain: "covid19-22808.firebaseapp.com",
  projectId: "covid19-22808",
  storageBucket: "covid19-22808.appspot.com",
  messagingSenderId: "463849135481",
  appId: "1:463849135481:web:ceb74f726c4194300c63a8",
  measurementId: "G-TJEBXL5JRL"
});
const db = getFirestore(firebaseApp);
export default db;
