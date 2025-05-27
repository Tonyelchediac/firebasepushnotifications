// main.js or firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging.js";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyD7I_8AE2hWRUUkDlwNOTHlxeajEjsS6-Q",
  authDomain: "fir-pushnotifications2025.firebaseapp.com",
  projectId: "fir-pushnotifications2025",
  storageBucket: "fir-pushnotifications2025.firebasestorage.app",
  messagingSenderId: "465763707770",
  appId: "1:465763707770:web:831a742ac14fc3beb684c3",
});

const messaging = getMessaging(firebaseApp);

navigator.serviceWorker.register('/firebase-messaging-sw.js')
  .then((registration) => {
    console.log('Service Worker registered:', registration);

    getToken(messaging, {
      vapidKey: "BNqp2cczO1500ff9J8J8TuRLUctYSYwWEEkX3lp2e9BjZsPoLEgTk6HjvMKqrZH_p9rUHdmnYgv-Ozs2xas8Mf4",
      serviceWorkerRegistration: registration,
    }).then((currentToken) => {
      if (currentToken) {
        console.log('Token received:', currentToken);
        // Send this token to your server or use it in FCM send
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.error('An error occurred while retrieving token. ', err);
    });
  });
