import { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <section className='flex justify-center flex-col md:flex-row items-center'>
      <div className='flex flex-col mb-16 items-center text-center md:items-start md:text-left md:p-4 md:m-0 md:w-1/2'>
        <h1 className='text-2xl text-gray-900 font-bold'>Firebase Notification Sandbox</h1>
        <p className='mt-4 leading-relaxed text-lg'>
          Firebase notification sandbox is used to demonstrate push notification on the browser using FCM. You can use
          it for free just use it with responsibility.
        </p>
        <div className='flex justify-center mt-8'>
          <button className='bg-green-500 py-2 px-3 rounded-md font-bold text-md shadow-lg text-white focus:ring-2 focus:ring-green-400 focus:outline-none focus:ring-offset-2 hover:bg-green-600 duration-200'>
            Notify Me Now
          </button>
          <Link href='/custom-notification'>
            <button className='ml-4 bg-gray-700 py-2 px-3 rounded-md font-bold text-md shadow-lg text-white focus:ring-2 focus:ring-gray-600 focus:outline-none focus:ring-offset-2 hover:bg-gray-600 duration-200'>
              Custom Notification
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
  )
}

export default Home
