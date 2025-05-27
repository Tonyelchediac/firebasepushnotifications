// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyD7I_8AE2hWRUUkDlwNOTHlxeajEjsS6-Q",
  authDomain: "fir-pushnotifications2025.firebaseapp.com",
  projectId: "fir-pushnotifications2025",
  storageBucket: "fir-pushnotifications2025.firebasestorage.app",
  messagingSenderId: "465763707770",
  appId: "1:465763707770:web:831a742ac14fc3beb684c3",
  measurementId: "G-91PTLH96E5"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging };
