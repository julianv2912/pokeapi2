import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD1a4xo1n6iWbTj2Mj1UgmXciostD5g3YQ",
  authDomain: "pokeapi2-49f6f.firebaseapp.com",
  projectId: "pokeapi2-49f6f",
  storageBucket: "pokeapi2-49f6f.firebasestorage.app",
  messagingSenderId: "996555828361",
  appId: "1:996555828361:web:1452b3f9f25200b48a6a58"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };