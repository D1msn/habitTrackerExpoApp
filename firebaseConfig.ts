import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCsmzGdOm8Vw1VG5myQgbjsOwArLfUIBvY',
  authDomain: 'habittracker-ada8f.firebaseapp.com',
  projectId: 'habittracker-ada8f',
  storageBucket: 'habittracker-ada8f.appspot.com',
  messagingSenderId: '242395017664',
  appId: '1:242395017664:web:32686bc40cf0b7f0cd9825',
  measurementId: 'G-1HP51Q1WCP',
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
