import firebase from 'firebase/app'
import 'firebase/messaging'

// Firebase Client
const firebaseConfig = {
  apiKey: 'AIzaSyCKwr1ziLlwGwemjpcezdp-ND5VaXvir58',
  projectId: 'fir-notification-sandbox',
  messagingSenderId: '716286023465',
  appId: '1:716286023465:web:350c383b3c1bfbd7074938'
}

const getFirebaseApp = (): firebase.app.App => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  return firebase.app()
}

const getFcm = (app: firebase.app.App): firebase.messaging.Messaging => {
  return firebase.messaging(app)
}

const getToken = async (): Promise<string> => {
  try {
    const app = getFirebaseApp()
    const fcm = getFcm(app)
    await Notification.requestPermission()
    const token = await fcm.getToken()
    return token
  } catch (error) {
    return ''
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const promiseOnMessage = (): Promise<void> =>
  new Promise((resolve, reject) => {
    const app = getFirebaseApp()
    const fcm = getFcm(app)
    fcm.onMessage((payload: firebase.messaging.MessagePayload) => {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        const activeServiceWorker = registrations[0].active
        if (activeServiceWorker) {
          activeServiceWorker.postMessage(payload)
        }
        resolve()
      })
    })
  })

export { getFirebaseApp, getToken, getFcm, promiseOnMessage }
