import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDrNITFGS3OEa_79BwitlGoR5aSllGSJwo',
  authDomain: 'prayastock-4bf9b.firebaseapp.com',
  databaseURL:
    'https://prayastock-4bf9b-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'prayastock-4bf9b',
  storageBucket: 'prayastock-4bf9b.firebasestorage.app',
  messagingSenderId: '859978011664',
  appId: '1:859978011664:web:3611828f7a9bca1570e695',
  measurementId: 'G-KZ94HR3WKT',
};

// Initialize Firebase only if no apps exist
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

// Enable offline persistence
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    console.error(
      'Multiple tabs open, persistence can only be enabled in one tab at a time.'
    );
  } else if (err.code === 'unimplemented') {
    console.error("The current browser doesn't support persistence.");
  }
});

export { db };
