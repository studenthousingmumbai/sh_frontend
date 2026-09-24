import "../styles/globals.css";
import "../styles/nprogress.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import { Montserrat, Inter } from "next/font/google";
import TopProgressBar from "../components/TopProgressBar";

// ---------------------------------------------------------------
// Fonts (self-hosted by Next, replaces the render-blocking
// rsms.me/inter and fonts.googleapis.com links from _document).
// They are exposed as CSS variables below: --font-montserrat / --font-inter
// ---------------------------------------------------------------
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"], // drop any weight you don't use
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const FB_PIXEL_ID = "983766016309702";

// Single Meta Pixel (remove the one in components/Layout.jsx).
// Inits once, then fires PageView on every client-side route change.
function FacebookPixel() {
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;
    let ReactPixel;
    const onRouteChange = () => ReactPixel?.pageView();

    import("react-facebook-pixel").then((x) => {
      if (cancelled) return;
      ReactPixel = x.default;
      ReactPixel.init(FB_PIXEL_ID);
      ReactPixel.pageView();
      router.events.on("routeChangeComplete", onRouteChange);
    });

    return () => {
      cancelled = true;
      router.events.off("routeChangeComplete", onRouteChange);
    };
  }, [router.events]);

  return null;
}

function MyApp({ Component, pageProps }) {
  const google_client_id = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  useEffect(() => {
    window.addEventListener("phx:page-loading-stop", (event) => {
      // trigger flowbite events
      window.document.dispatchEvent(
        new Event("DOMContentLoaded", {
          bubbles: true,
          cancelable: true,
        })
      );
    });

    // NOTE: these two are heavy and load on every page. If only a few
    // components use them, import them in those components instead.
    const use = async () => {
      (await import("tw-elements")).default;
      (await import("flowbite")).default;
    };
    use();
  }, []);

  return (
    <>
      {/* Font variables on :root so portals (modals/dialogs) get them too */}
      <style jsx global>{`
        :root {
          --font-montserrat: ${montserrat.style.fontFamily};
          --font-inter: ${inter.style.fontFamily};
        }
      `}</style>

      <GoogleOAuthProvider clientId={google_client_id}>
        <FacebookPixel />
        <TopProgressBar />
        <Component {...pageProps} />
      </GoogleOAuthProvider>

      {/* ---------------- Third-party scripts ---------------- */}

      {/* Google Tag Manager */}
      <Script id="gtm" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TJ4M6SS3');
        `}
      </Script>

      {/* GA4 + Google Ads: ONE gtag.js load, two configs.
          (UA-75045456-1 removed: Universal Analytics no longer collects data.)
          If your GTM container already contains the GA4 and Ads tags,
          delete these two <Script> blocks to avoid double counting. */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DEFDC3GBPL"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DEFDC3GBPL');
          gtag('config', 'AW-925883133');
        `}
      </Script>

      {/* Microsoft Clarity — loads when the browser is idle */}
      <Script id="clarity" strategy="lazyOnload">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "hf3i0kvqqu");
        `}
      </Script>

      {/* Tawk.to live chat — loads when the browser is idle */}
      <Script id="tawk" strategy="lazyOnload">
        {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/65b0f5130ff6374032c44bc4/1hktjql51';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `}
      </Script>
    </>
  );
}

export default MyApp;