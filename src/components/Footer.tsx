import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className='p-6'>
      <div className='flex items-center flex-col sm:flex-row sm:justify-between'>
        <div className='flex items-center flex-col sm:flex-row'>
          <Link href='/'>
            <a className='flex items-center justify-center hover:text-gray-500 duration-200'>
              <img className='h-8 object-cover' src='/assets/images/firebase-logo.png' alt='Firebase Logo' />
              <span className='ml-3 text-lg'>Firebase Notification Sandbox</span>
            </a>
          </Link>
          <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:mt-0 mt-4'>
            © 2021 Kelvin Fernandez
          </p>
        </div>
        <div className='flex sm:mt-0 mt-4 justify-center'>
          <a target='blank' className='text-gray-600 hover:text-gray-500 duration-200' href='https://twitter.com/klvfn'>
            <AiFillTwitterCircle className='w-6 h-6' />
          </a>
          <a
            target='blank'
            className='ml-3 text-gray-600 hover:text-gray-500 duration-200'
            href='https://github.com/klvfn'>
            <AiFillGithub className='w-6 h-6' />
          </a>
          <a
            target='blank'
            className='ml-3 text-gray-600 hover:text-gray-500 duration-200'
            href='https://id.linkedin.com/in/kelvinfernandez'>
            <AiFillLinkedin className='w-6 h-6' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
