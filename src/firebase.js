// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlBcrt7CDvZBVwJoheQcXFyw5QPUYjIUk",
  authDomain: "coe-197-smart-parking.firebaseapp.com",
  databaseURL: "https://coe-197-smart-parking-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "coe-197-smart-parking",
  storageBucket: "coe-197-smart-parking.appspot.com",
  messagingSenderId: "143703455523",
  appId: "1:143703455523:web:174ce4693da353e74e7e96",
  measurementId: "G-9516405QB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app) 