import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import Marquee from "./MarqeeText";
import { useEffect, useState, useRef } from "react";
import { gql } from "@apollo/client";
import client from "../apolloClient";
import Modal from "../components/common/Modal";
import { XMarkIcon } from "@heroicons/react/24/outline";
import useApi from "../hooks/useApi";
import { Dialog, DialogContent, DialogTitle } from "./components/ui/dialog";
import EnquireNowFormNew from "./EnquireNowFormNew";
import WhatsAppButton from "./common/WhatsappButton";
 import Script from "next/script";

export default function Layout({ children, canonical }) {
  const [marqueeOpen, setMarqueeOpen] = useState(true);
  const [marqueeText, setMarqueeText] = useState("");
  const isMounted = useRef(false);
  const [enquireNowOpen, setEnquireNowOpen] = useState(false);

  
  const router = useRouter();

const fallbackCanonical = (
  "https://www.studenthousing.co.in" +
  (router.asPath === "/" ? "" : router.asPath)
).split("?")[0];

const canonicalUrl = canonical || fallbackCanonical;

  useEffect(() => {
    if (!isMounted.current) {
      fetchMarqueeText();
    } else {
      isMounted.current = true;
    }
  }, []);

  const fetchMarqueeText = async () => {
    console.log("fetdch marquee text called!");
    try {
      const { data } = await client.query({
        query: gql`
          query Announcement {
            announcements {
              marquee
            }
          }
        `,
      });
      const { announcements } = data;
      const { marquee } = announcements[0];
      setMarqueeText(marquee);
    } catch (err) {
      console.error("Error occured while fetching marquee text: ", err);
    }
  };

  return (

    <>
  

<Head>
  <link rel="canonical" href={canonicalUrl} />
</Head>

{/* Meta Pixel */}
<Script id="facebook-pixel" strategy="afterInteractive">
  {`
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
  `}
</Script>

{/* NoScript fallback */}
<noscript>
  <img
    height="1"
    width="1"
    style={{ display: "none" }}
    src="https://www.facebook.com/tr?id=983766016309702&ev=PageView&noscript=1"
  />
</noscript>
    
    <div className="">
      <span className="fixed bottom-[25px] right-[20px] z-[2000]">
        <WhatsAppButton message={""} />
      </span>
      <Dialog onOpenChange={setEnquireNowOpen} open={enquireNowOpen}>
     <DialogContent className="top-[58%] md:top-1/2 max-h-[90vh] overflow-y-auto">
  <DialogTitle>Enquire Now</DialogTitle>
  <EnquireNowFormNew />
</DialogContent>
      </Dialog>
      
       <div className="fixed top-0 left-0 w-full z-[2000]">
  {marqueeOpen && (
    <Marquee
      text={marqueeText}
      marqueeOpen={marqueeOpen}
      setMarqueeOpen={setMarqueeOpen}
    />
  )}
  <Header />
</div>
      
      <button
        className="fixed top-[58%] md:top-1/2 right-5 z-50 w-44 h-12 p-3 bg-[#F8C14C] text-black font-semibold rotate-90 origin-right shadow-md"
        style={{
          border: "1px solid #00000029",
          boxShadow: "0px 4px 20px #00000014",
          clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
        }}
        onClick={() => setEnquireNowOpen(true)}
      >
        Enquire now
      </button>
      
      <div className="pt-[185px] z-30">
  {children}
</div>
      
      <Footer />
    </div>
   </>
      
  );
}
