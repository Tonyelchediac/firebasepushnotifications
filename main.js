import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging.js";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyD7I_8AE2hWRUUkDlwNOTHlxeajEjsS6-Q",
  authDomain: "fir-pushnotifications2025.firebaseapp.com",
  projectId: "fir-pushnotifications2025",
  storageBucket: "fir-pushnotifications2025.firebasestorage.app",
  messagingSenderId: "465763707770",
  appId: "1:465763707770:web:831a742ac14fc3beb684c3",
  measurementId: "G-91PTLH96E5"
});

const messaging = getMessaging(firebaseApp);

// Register service worker
navigator.serviceWorker.register('/firebase-messaging-sw.js')
  .then((registration) => {
    console.log('SW Registered:', registration);

    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        getToken(messaging, {
          vapidKey: 'BNqp2cczO1500ff9J8J8TuRLUctYSYwWEEkX3lp2e9BjZsPoLEgTk6HjvMKqrZH_p9rUHdmnYgv-Ozs2xas8Mf4',
          serviceWorkerRegistration: registration
        }).then((currentToken) => {
          if (currentToken) {
            console.log('FCM Token:', currentToken);
            // TODO: Send token to your server
          } else {
            console.log('No token retrieved');
          }
        }).catch((err) => {
          console.error('Token error:', err);
        });
      } else {
        console.warn('Notification permission denied');
      }
    });

    // Foreground messages
    onMessage(messaging, (payload) => {
      console.log('Message received in foreground:', payload);
      alert(`[Foreground] ${payload.notification.title}: ${payload.notification.body}`);
    });

  }).catch(err => {
    console.error('Service Worker Error:', err);
  });
