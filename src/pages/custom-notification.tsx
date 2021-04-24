import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { useState } from 'react'
import { NotificationData, useCreateNotification } from '../queries/notification'
import { getToken } from '../services/firebase'
import LoadingSpin from '../components/LoadingSpin'

interface FormInputs {
  title: string
  body: string
  icon: string
  image: string
  url: string
}

const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  body: yup
    .string()
    .transform((body) => body.trim())
    .required('Body is required'),
  icon: yup.string().url('Icon must be a valid URL'),
  image: yup.string().url('Image must be a valid URL'),
  url: yup.string().url('Url must be a valid URL')
})

const CustomNotification: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>({
    resolver: yupResolver(validationSchema)
  })
  const [isShowFields, setIsShowFields] = useState(false)
  const { mutate, isLoading } = useCreateNotification()

  const handleOnSubmit = async (data: FormInputs) => {
    const { body, title, url, image, icon } = data
    const token = await getToken()
    const payload: NotificationData = {
      title,
      body,
      token,
      icon,
      image,
      click_action: url
    }
    mutate(payload)
  }

  return (
    <section className='flex justify-center items-center flex-col'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Custom Notification</h1>
        <p className='mt-4 text-lg leading-relaxed text-gray-500'>Let's start compose your own notification content</p>
      </div>
      <div className='mt-10 bg-gray-800 rounded-md p-6 shadow w-full sm:max-w-2xl'>
        <form className='' onSubmit={handleSubmit(handleOnSubmit)}>
          <div className='flex flex-col'>
            <label className='text-white' htmlFor='title'>
              Notification Title
            </label>
            <input
              className={`mt-2 rounded-md focus:ring-2  ${
                errors.title ? 'focus:border-red-600 focus:ring-red-600' : 'focus:border-green-600 focus:ring-green-600'
              }`}
              type='text'
              {...register('title')}
              placeholder='Type your notification title'
            />
          </div>
          <div className='flex'>
            {errors.title && (
              <span className='text-red-400 font-semibold text-sm mt-2 shadow-md'>{errors.title.message}</span>
            )}
          </div>

          <div className='flex flex-col mt-6'>
            <label className='text-white' htmlFor='body'>
              Notification Body
            </label>
            <textarea
              className={`mt-2 rounded-md focus:ring-2 h-32 ${
                errors.body ? 'focus:border-red-600 focus:ring-red-600' : 'focus:border-green-600 focus:ring-green-600'
              }`}
              {...register('body')}
              placeholder='Type your notification body'
            />
          </div>
          <div className='flex'>
            {errors.body && (
              <span className='text-red-400 font-semibold text-sm mt-2 shadow-md'>{errors.body.message}</span>
            )}
          </div>

          <span
            onClick={() => setIsShowFields(!isShowFields)}
            className='flex flex-col mt-8 text-center text-green-400 font-bold cursor-pointer hover:text-green-500 duration-200'>
            {isShowFields ? (
              <span className='flex justify-center items-center'>
                Show less
                <HiChevronUp className='w-6 h-6' />
              </span>
            ) : (
              <span className='flex justify-center items-center'>
                Show more
                <HiChevronDown className='w-6 h-6' />
              </span>
            )}
          </span>

          {isShowFields && (
            <>
              <div className='flex flex-col mt-6'>
                <label className='text-white' htmlFor='icon'>
                  Icon URL
                </label>
                <input
                  className={`mt-2 rounded-md focus:ring-2 ${
                    errors.icon
                      ? 'focus:border-red-600 focus:ring-red-600'
                      : 'focus:border-green-600 focus:ring-green-600'
                  }`}
                  type='text'
                  {...register('icon')}
                  placeholder='Type your notification icon url'
                />
              </div>
              <div className='flex'>
                {errors.icon && (
                  <span className='text-red-400 font-semibold text-sm mt-2 shadow-md'>{errors.icon.message}</span>
                )}
              </div>

              <div className='flex flex-col mt-6'>
                <label className='text-white' htmlFor='image'>
                  Image URL
                </label>
                <input
                  className={`mt-2 rounded-md focus:ring-2 ${
                    errors.image
                      ? 'focus:border-red-600 focus:ring-red-600'
                      : 'focus:border-green-600 focus:ring-green-600'
                  }`}
                  type='text'
                  {...register('image')}
                  placeholder='Type your notification image url'
                />
              </div>
              <div className='flex'>
                {errors.image && (
                  <span className='text-red-400 font-semibold text-sm mt-2 shadow-md'>{errors.image.message}</span>
                )}
              </div>

              <div className='flex flex-col mt-6'>
                <label className='text-white' htmlFor='url'>
                  Click Action URL
                </label>
                <input
                  className={`mt-2 rounded-md focus:ring-2 ${
                    errors.url
                      ? 'focus:border-red-600 focus:ring-red-600'
                      : 'focus:border-green-600 focus:ring-green-600'
                  }`}
                  type='text'
                  {...register('url')}
                  placeholder='Type your notification click action url'
                />
              </div>
              <div className='flex'>
                {errors.url && (
                  <span className='text-red-400 font-semibold text-sm mt-2 shadow-md'>{errors.url.message}</span>
                )}
              </div>
            </>
          )}

          <div className='flex justify-center'>
            <button
              type='submit'
              disabled={isLoading}
              className='bg-green-500 w-full py-2 px-3 rounded-md font-bold text-md text-white focus:ring-2 focus:border-green-600 focus:ring-green-600 outline-none focus:outline-none hover:bg-green-600 duration-200 mt-10'>
              {isLoading ? <LoadingSpin /> : 'Send Notification'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default CustomNotification
