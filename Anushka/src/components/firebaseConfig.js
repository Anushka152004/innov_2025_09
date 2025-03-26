import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDBjj-ce_QcqnnWlY9QmTNRVHLGKMqkxw",
  authDomain: "vhg-project-707aa.firebaseapp.com",
  projectId: "vhg-project-707aa",
  storageBucket: "vhg-project-707aa.firebasestorage.app",
  messagingSenderId: "660437596038",
  appId: "1:660437596038:web:497b1e8c4d49a04744de07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };