import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import FacebookPixel from '../components/FacebookPixel';

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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DEFDC3GBPL"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-DEFDC3GBPL');
            `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-75045456-1"></script>
        <script
            dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
  
              gtag('config', 'UA-75045456-1');
            `,
          }}
        />
        <script type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "hf3i0kvqqu");
            `,
          }}
        />
        {/* <script type='text/javascript'
          dangerouslySetInnerHTML={{ 
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '983766016309702');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=983766016309702&ev=PageView&noscript=1"/></noscript> */}
      </Head>

      {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DEFDC3GBPL" strategy='afterInteractive'></Script>
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
      </Script> */}
      
      <body className='h-full'>
          <Main />
          <NextScript />
          <FacebookPixel />
      </body>
    </Html>
  )
}