import { NextPage } from 'next'
import { AppProps } from 'next/app'
import '../../public/assets/css/index.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Notification from '../components/Notification'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const RootApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const isServer = typeof window === 'undefined'
  return (
    <QueryClientProvider client={queryClient}>
      <Notification isServer={isServer} />
      <div className='flex flex-col h-screen'>
        <Header />
        <div className='px-10 md:px-16 py-16 flex-1'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default RootApp
