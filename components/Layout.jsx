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
    
    <div className="">
      <span className="fixed bottom-[25px] right-[20px] z-[1000]">
        <WhatsAppButton message={""} />
      </span>
      <Dialog onOpenChange={setEnquireNowOpen} open={enquireNowOpen}>
        <DialogContent>
          <DialogTitle>Enquire Now</DialogTitle>
          <EnquireNowFormNew />
        </DialogContent>
      </Dialog>
      
       <div className="fixed top-0 left-0 w-full z-[1200]">
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
        className="fixed top-1/2 right-5 z-50 w-44 h-12 p-3 bg-[#F8C14C] text-black font-semibold rotate-90 origin-right shadow-md"
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
