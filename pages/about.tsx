import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <section className='flex justify-center flex-col'>
      <div>
        <h1 className='text-4xl font-bold'>About FCM</h1>
        <p className='mt-4 text-lg leading-relaxed text-justify'>
          Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at
          no cost. Using FCM, you can notify a client app that new email or other data is available to sync. You can
          send notification messages to drive user re-engagement and retention. For use cases such as instant messaging,
          a message can transfer a payload of up to 4KB to a client app.
        </p>
      </div>
      <div className='mt-16'>
        <h1 className='text-xl font-bold'>Key Capabilities</h1>
        <table className='table-auto w-full text-md text-left leading-relaxed whitespace-no-wrap mt-6'>
          <tbody>
            <tr className='border-t-2 border-gray-300'>
              <td className='p-6'>Send notification messages or data messages</td>
              <td className='p-6'>
                Send notification messages that are displayed to your user. Or send data messages and determine
                completely what happens in your application code. See&nbsp;
                <a
                  className='text-green-500 font-semibold'
                  target='blank'
                  href='https://firebase.google.com/docs/cloud-messaging/concept-options#notifications_and_data_messages'>
                  message types.
                </a>
              </td>
            </tr>
            <tr className='border-t-2 border-gray-300'>
              <td className='p-6'>Versatile message targeting</td>
              <td className='p-6'>
                Distribute messages to your client app in any of 3 ways—to single devices, to groups of devices, or to
                devices subscribed to topics.
              </td>
            </tr>
            <tr className='border-t-2 border-gray-300'>
              <td className='p-6'>Send messages from client apps</td>
              <td className='p-6'>
                Send acknowledgments, chats, and other messages from devices back to your server over FCM’s reliable and
                battery-efficient connection channel.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='mt-16'>
        <h1 className='text-xl font-bold'>Learn More About FCM</h1>
        <p className='mt-4 text-lg leading-relaxed'>
          If you want to deep dive into FCM, click here to&nbsp;
          <a
            className='text-green-500 font-semibold'
            target='blank'
            href='https://firebase.google.com/docs/cloud-messaging'>
            learn more.
          </a>
        </p>
      </div>
    </section>
  )
}

export default Home
