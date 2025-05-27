const sendPushNotification = async (token, title, body) => {
  const response = await fetch('https://fcm.googleapis.com/fcm/send', {
    method: 'POST',
    headers: {
      'Authorization': 'key=YOUR_SERVER_KEY',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      notification: {
        title,
        body,
        icon: 'icon.png'
      },
      to: token
    }),
  });

  const data = await response.json();
  console.log('Push Response:', data);
};
