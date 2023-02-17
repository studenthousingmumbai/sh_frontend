import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="h-full bg-white antialiased" lang="en">
      <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700;900&display=swap" rel="stylesheet"/>
      </Head>
      <body className='h-full'>
          <Main />
          <NextScript />
      </body>
    </Html>
  )
}