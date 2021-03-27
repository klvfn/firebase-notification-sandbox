import { NextPage } from 'next'

const CustomNotification: NextPage = () => {
  return (
    <section className='flex justify-center items-center flex-col'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Custom Notification</h1>
        <p className='mt-4 text-lg leading-relaxed text-gray-500'>Let's start compose your own notification content</p>
      </div>
      <div className='mt-10 bg-gray-700 rounded-md p-6 shadow w-full sm:max-w-2xl'>
        <form className=''>
          <div className='flex flex-col'>
            <label className='text-white' htmlFor='title'>
              Notification Title
            </label>
            <input
              className='mt-2 rounded-md focus:ring-2 focus:border-green-600 focus:ring-green-600'
              type='text'
              name='title'
              placeholder='Type your notification title'
            />
          </div>

          <div className='flex flex-col mt-6'>
            <label className='text-white' htmlFor='body'>
              Notification Body
            </label>
            <textarea
              className='mt-2 rounded-md focus:ring-2 focus:border-green-600 focus:ring-green-600 h-32'
              name='body'
              placeholder='Type your notification body'
            />
          </div>

          <div className='flex flex-col mt-6'>
            <label className='text-white' htmlFor='icon'>
              Icon URL
            </label>
            <input
              className='mt-2 rounded-md focus:ring-2 focus:border-green-600 focus:ring-green-600'
              type='text'
              name='icon'
              placeholder='Type your notification icon url'
            />
          </div>

          <div className='flex flex-col mt-6'>
            <label className='text-white' htmlFor='image'>
              Image URL
            </label>
            <input
              className='mt-2 rounded-md focus:ring-2 focus:border-green-600 focus:ring-green-600'
              type='text'
              name='image'
              placeholder='Type your notification image url'
            />
          </div>

          <div className='flex flex-col mt-6'>
            <label className='text-white' htmlFor='url'>
              Click Action URL
            </label>
            <input
              className='mt-2 rounded-md focus:ring-2 focus:border-green-600 focus:ring-green-600'
              type='text'
              name='url'
              placeholder='Type your notification click action url'
            />
          </div>

          <div className='flex justify-center'>
            <button
              type='submit'
              className='bg-green-500 w-full py-2 px-3 rounded-md font-bold text-md text-white focus:ring-2 focus:border-green-600 focus:ring-green-600 outline-none focus:outline-none hover:bg-green-600 duration-200 mt-10'>
              Send Notification
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default CustomNotification
