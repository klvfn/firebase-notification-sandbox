import { NextPage } from 'next'
import { AppProps } from 'next/app'
import '../../public/assets/css/index.css'
import Notification from '../components/Notification'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const RootApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const isServer = typeof window === 'undefined'
  return (
    <QueryClientProvider client={queryClient}>
      <Notification isServer={isServer} />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default RootApp
