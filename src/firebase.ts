import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCzb-9kxUYYn4fl7ZAJqqyB8dCIk0EUM7o",
  authDomain: "hackosquadvuln.firebaseapp.com",
  projectId: "hackosquadvuln",
  storageBucket: "hackosquadvuln.appspot.com",
  messagingSenderId: "244320816518",
  appId: "1:244320816518:web:18759dddee26f0c4107007",
  measurementId: "G-G0EK9Y6SD1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, db, analytics };
