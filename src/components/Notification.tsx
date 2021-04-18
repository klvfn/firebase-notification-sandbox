import React from 'react'
import { promiseOnMessage } from '../services/firebase'

interface PageProps {
  isServer: boolean
}

const Notification: React.FC<PageProps> = ({ isServer }) => {
  if (!isServer) {
    promiseOnMessage()
  }
  return null
}

export default Notification
