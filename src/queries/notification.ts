import axios from 'axios'
import { useMutation, UseMutationResult } from 'react-query'

// Api func
interface NotificationAction {
  action: string
  icon?: string
  title: string
}

export interface NotificationData {
  token: string
  title: string
  body: string
  icon?: string
  image?: string
  actions?: NotificationAction[]
  click_action?: string
}

export interface NotificationResponse {
  error: Error
  data: string
  message: string
}

export interface Error {
  code: string
  message: string
}

const createNotificationAPI = (data: NotificationData) => {
  return axios.post('/api/push', data).then((res) => res.data)
}

export const useCreateNotification = (): UseMutationResult<
  NotificationResponse,
  NotificationResponse,
  NotificationData,
  unknown
> => {
  return useMutation((data: NotificationData) => createNotificationAPI(data))
}
