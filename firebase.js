import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyChYuucHpUlt43ZDbFiddMGS0AQFLyHP6c",
  authDomain: "stockpro-inventory-system.firebaseapp.com",
  projectId: "stockpro-inventory-system",
  storageBucket: "stockpro-inventory-system.firebasestorage.app",
  messagingSenderId: "42946254030",
  appId: "1:42946254030:web:556dcb1d07b711507d2c9f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
