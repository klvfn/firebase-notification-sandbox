import { NextApiRequest, NextApiResponse } from 'next'
import firebaseAdmin from 'firebase-admin'
import serviceAccount from '../../../service-account.json'
import { JWT } from 'google-auth-library'
import { NotificationData } from '../../queries/notification'

const getAuthAccessToken = async () => {
  try {
    const jwtClient = new JWT({
      email: serviceAccount.client_email,
      key: serviceAccount.private_key,
      scopes: ['https://www.googleapis.com/auth/firebase.messaging']
    })
    const credentials = await jwtClient.authorize()
    return credentials.access_token
  } catch (error) {
    return null
  }
}

const getFirebaseAdmin = (): firebaseAdmin.app.App => {
  if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert({
        clientEmail: serviceAccount.client_email,
        privateKey: serviceAccount.private_key,
        projectId: serviceAccount.project_id
      })
    })
  }
  return firebaseAdmin.app()
}

const pushNotification = async (message: firebaseAdmin.messaging.Message): Promise<string | null | undefined> => {
  try {
    const admin = getFirebaseAdmin()
    const token = await getAuthAccessToken()
    if (token) {
      return await admin.messaging().send(message)
    }
  } catch (error) {
    throw error
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const { token, title, body, image, icon, actions, click_action }: NotificationData = req.body
    const message: firebaseAdmin.messaging.TokenMessage = {
      token,
      webpush: {
        notification: {
          title,
          body,
          image,
          icon,
          data: {
            click_action
          },
          actions
        }
      }
    }
    const response = await pushNotification(message)
    res.send({
      error: {},
      data: response,
      message: 'success'
    })
  } catch (error) {
    res.send({
      error,
      data: {},
      message: 'failed'
    })
  }
}

export default handler
