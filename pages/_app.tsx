import { NextPage } from 'next'
import { AppProps } from 'next/app'
import '../public/assets/css/index.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const RootApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='px-10 md:px-16 py-16 flex-1'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default RootApp
