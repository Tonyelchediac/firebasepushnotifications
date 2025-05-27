// public/firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyD7I_8AE2hWRUUkDlwNOTHlxeajEjsS6-Q",
  authDomain: "fir-pushnotifications2025.firebaseapp.com",
  projectId: "fir-pushnotifications2025",
  storageBucket: "fir-pushnotifications2025.firebasestorage.app",
  messagingSenderId: "465763707770",
  appId: "1:465763707770:web:831a742ac14fc3beb684c3",
  measurementId: "G-91PTLH96E5"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
