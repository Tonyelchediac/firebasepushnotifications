// main.js
import { messaging } from './firebase-config.js';
import { getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js";

const subscribeButton = document.getElementById('subscribe');

subscribeButton.addEventListener('click', async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const currentToken = await getToken(messaging, {
        vapidKey: 'BNqp2cczO1500ff9J8J8TuRLUctYSYwWEEkX3lp2e9BjZsPoLEgTk6HjvMKqrZH_p9rUHdmnYgv-Ozs2xas8Mf4',
      });

      if (currentToken) {
        console.log('FCM Token:\n', currentToken);
        // Save this token to your server to send push later
        alert("Token received and ready to receive push notifications.");
      } else {
        console.log('No registration token available.');
      }
    } else {
      console.error('Permission not granted for Notification');
    }
  } catch (err) {
    console.error('An error occurred while retrieving token. ', err);
  }
});

// Show notifications while page is open
onMessage(messaging, (payload) => {
  console.log('Message received: ', payload);
  alert(`Notification: ${payload.notification.title}`);
});
