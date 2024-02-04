import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0xnKGg47W6NKWXk4ho_maToKqn_pQdOs",
  authDomain: "cashcontrol-e9fe6.firebaseapp.com",
  projectId: "cashcontrol-e9fe6",
  storageBucket: "cashcontrol-e9fe6.appspot.com",
  messagingSenderId: "1012518277173",
  appId: "1:1012518277173:web:969e71204310d42b65e17c",
  measurementId: "G-3QFSTMT461",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);

export default app;
