import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html className="h-full bg-white antialiased" lang="en">
      <Head>
          <title>Student Housing</title>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700;900&display=swap" rel="stylesheet"/>
          <meta name="description" content="Student Housing in Mumbai" />
          <link rel="icon" href="/sh_logo.png" />
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-DEFDC3GBPL"></script> */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-DEFDC3GBPL');
              `,
            }}
          /> */}
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-75045456-1"></script> */}
          {/* <script
             dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
    
                gtag('config', 'UA-75045456-1');
              `,
            }}
          /> */}
          {/* <script type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "hf3i0kvqqu");
              `,
            }}
          /> */}
      </Head>

      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DEFDC3GBPL" strategy='afterInteractive'></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DEFDC3GBPL');
        `}
      </Script>

      <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-75045456-1" strategy='afterInteractive'></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-75045456-1');
        `}
      </Script>

      <Script strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "hf3i0kvqqu");
        `}
      </Script>
      
      <body className='h-full'>
          <Main />
          <NextScript />
      </body>
    </Html>
  )
}