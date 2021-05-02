import { NextPage } from 'next'
import Link from 'next/link'
import { getToken } from '../services/firebase'
import LoadingSpin from '../components/LoadingSpin'
import { useCreateNotification, NotificationData } from '../queries/notification'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  const { mutate, isLoading } = useCreateNotification()

  const handleSendTest = async () => {
    const token = await getToken()
    const sampleData: NotificationData = {
      token,
      title: 'Hello from firebase notification sandbox',
      body: 'This is the result of your send test',
      icon: 'https://res.cloudinary.com/dh1cni54j/image/upload/v1618051324/favicon.png',
      image:
        'https://images.unsplash.com/photo-1600577916048-804c9191e36c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    }
    mutate(sampleData)
  }
  return (
    <Layout title='Home'>
      <section className='flex justify-center flex-col md:flex-row items-center'>
        <div className='flex flex-col mb-16 items-center text-center md:items-start md:text-left md:p-4 md:m-0 md:w-1/2'>
          <h1 className='text-2xl text-gray-900 font-bold'>Firebase Notification Sandbox</h1>
          <p className='mt-4 leading-relaxed text-lg'>
            Firebase notification sandbox is used to demonstrate push notification on the browser using FCM. You can use
            it for free.
          </p>
          <div className='flex justify-center mt-8'>
            <button
              onClick={handleSendTest}
              disabled={isLoading}
              className={`${
                isLoading ? 'bg-green-600 cursor-wait' : 'bg-green-500'
              } py-2x px-3 rounded-md font-bold text-md shadow-lg text-white focus:ring-2 focus:ring-green-400 focus:outline-none focus:ring-offset-2 hover:bg-green-600 duration-200`}>
              {isLoading ? <LoadingSpin /> : 'Send Test'}
            </button>
            <Link href='/custom-notification'>
              <button className='ml-4 bg-gray-700 py-2 px-3 rounded-md font-bold text-md shadow-lg text-white focus:ring-2 focus:ring-gray-600 focus:outline-none focus:ring-offset-2 hover:bg-gray-600 duration-200'>
                Customize
              </button>
            </Link>
          </div>
        </div>
        <div className='md:ml-6 md:p-4 lg:max-w-2xl md:w-1/2'>
          <img
            className='object-cover rounded-xl'
            alt='Built With Firebase'
            src='/assets/images/firebase-big-image.png'
          />
        </div>
      </section>
    </Layout>
  )
}

export default Home
