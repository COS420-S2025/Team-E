import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQ-7-zmf-vopfjZyFQPrAOw7y8Z2_p6hI",
  authDomain: "speceffect-6f94d.firebaseapp.com",
  projectId: "speceffect-6f94d",
  storageBucket: "speceffect-6f94d.firebasestorage.app",
  messagingSenderId: "405845550053",
  appId: "1:405845550053:web:c19511f5f08a10a668050c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth  = getAuth(app);

// connect to emulator if in a test
if (process.env.NODE_ENV === 'test') {
    connectFirestoreEmulator(db, '127.0.0.1', 8080);
    connectAuthEmulator(auth, "http://127.0.0.1:9099");
}

export {app, db, auth}
