import Document, { Html, Head, Main, NextScript } from 'next/document'

class RootDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap' rel='stylesheet' />
        </Head>
        <body className='bg-white font-quicksand text-gray-700'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default RootDocument
