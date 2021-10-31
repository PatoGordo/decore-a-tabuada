import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBv4a93clXUOtZrx-2UgmhU-tf0cwUsA14",
  authDomain: "decore-a-tabuada.firebaseapp.com",
  projectId: "decore-a-tabuada",
  storageBucket: "decore-a-tabuada.appspot.com",
  messagingSenderId: "680012542128",
  appId: "1:680012542128:web:0e0560fdf912d4c9dc8b75",
  measurementId: "G-7KV2S25SQ4",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

// Initialize analytics on App.vue
getAnalytics(app);

export { app, db, auth };
