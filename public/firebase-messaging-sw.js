/* eslint-disable no-restricted-globals */
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

const buildNotification = (payload) => {
  const { body, image, title, data, icon, actions } = payload
  const notification = {}
  if (title && body) {
    notification.title = title
    notification.options = {
      body,
      icon,
      image,
      data,
      actions
    }
  }
  return notification
}

// Handle background notification
fcm.onBackgroundMessage((payload) => {
  const { title, options } = buildNotification(payload.notification)
  if (title && options) {
    self.registration.showNotification(title, options)
  }
})

// Handle foreground notification
self.addEventListener('message', (event) => {
  const { title, options } = buildNotification(event.data.notification)
  event.waitUntil(self.registration.showNotification(title, options))
})

// Handle notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
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
    event.waitUntil(clients.openWindow(destURL))
  }
})
