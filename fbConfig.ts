// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBZa7JhyMk5xoy9g2db8H0zwPwjoh_i8PQ',
  authDomain: 'fitnesscoach-5c17f.firebaseapp.com',
  projectId: 'fitnesscoach-5c17f',
  storageBucket: 'fitnesscoach-5c17f.appspot.com',
  messagingSenderId: '177682505805',
  appId: '1:177682505805:web:4c0d8c55f213b2581a3c04',
  measurementId: 'G-TFQ7PNPFNT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export default db;
