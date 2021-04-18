/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js')

const firebaseConfig = {
  apiKey: 'AIzaSyCKwr1ziLlwGwemjpcezdp-ND5VaXvir58',
  projectId: 'fir-notification-sandbox',
  messagingSenderId: '716286023465',
  appId: '1:716286023465:web:350c383b3c1bfbd7074938'
}

firebase.initializeApp(firebaseConfig)
const fcm = firebase.messaging()

const showNotification = (payload) => {
  const { body, image, title, data, icon, actions } = payload
  if (title && body) {
    const notificationTitle = title
    const notificationOptions = {
      body,
      icon,
      image,
      data,
      actions
    }
    this.registration.showNotification(notificationTitle, notificationOptions)
  }
}

// Handle background notification
fcm.onBackgroundMessage((payload) => {
  showNotification(payload.notification)
})

// Handle foreground notification
this.addEventListener('message', (e) => {
  showNotification(e.data.notification)
})

this.addEventListener('notificationclick', (event) => {
  // Currently click action only support going to a specific url
  let destURL = ''

  // Check whether it's a custom action button that being click or just the notification
  // User click the custom action button
  if (event.action && event.notification.actions.length > 0) {
    destURL = event.action
  } else {
    // User just click the notification
    if (event.notification.data && event.notification.data.click_action) {
      destURL = event.notification.data.click_action
    }
  }

  if (destURL) {
    clients.openWindow(destURL)
  }

  event.notification.close()
})
