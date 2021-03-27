import React, { useState } from 'react'
import Link from 'next/link'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className='bg-gray-700 text-white font-bold sm:flex sm:justify-between sm:p-6'>
      <div className='flex p-6 justify-between items-center sm:p-0'>
        <div className='flex items-center hover:text-gray-300 duration-200 cursor-pointer'>
          <Link href='/'>
            <a className='flex items-center'>
              <img className='h-8 object-cover' src='/assets/images/firebase-logo.png' alt='Firebase Logo' />
              <div className='ml-4'>Firebase Notification Sandbox</div>
            </a>
          </Link>
        </div>
        <div
          className='cursor-pointer hover:text-gray-300 duration-200 sm:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <HiOutlineX className='w-8 h-8' /> : <HiOutlineMenuAlt3 className='w-8 h-8' />}
        </div>
      </div>
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`${isMenuOpen ? 'block' : 'hidden'} px-4 pb-6 sm:flex sm:p-0`}>
        <Link href='/'>
          <a className='block font-semibold p-2 rounded hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>Home</a>
        </Link>
        <Link href='/about'>
          <a className='block font-semibold p-2 rounded hover:bg-gray-600 focus:bg-gray-600 focus:outline-none mt-1 sm:mt-0 sm:ml-2'>
            About
          </a>
        </Link>
        <Link href='/custom-notification'>
          <a className='block font-semibold p-2 rounded hover:bg-gray-600 focus:bg-gray-600 focus:outline-none mt-1 sm:mt-0 sm:ml-2'>
            Custom Notification
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header
