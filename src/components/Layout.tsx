import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

interface PageProps {
  title: string
}

const Layout: React.FC<PageProps> = ({ title, children }) => {
  return (
    <div className='flex flex-col h-screen'>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className='px-6 md:px-16 py-16 flex-1'>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
