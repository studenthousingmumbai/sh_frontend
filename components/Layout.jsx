import Header from "./Header";
import Footer from "./Footer";
import Marquee from "./MarqeeText";
import { useEffect, useState, useRef } from "react";
import { gql } from "@apollo/client";
import client from "../apolloClient";

export default function Layout(props) {
  const [marqueeOpen, setMarqueeOpen] = useState(true);
  const [marqueeText, setMarqueeText] = useState("");
  const isMounted = useRef(false);

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
    <div className="">
      <div
        className={`z-40 ${
          props?.open === false ? "relative sticky top-0" : ""
        }`}
      >
        {marqueeOpen && (
          <Marquee
            text={marqueeText}
            marqueeOpen={marqueeOpen}
            setMarqueeOpen={setMarqueeOpen}
          />
        )}
        <Header />
      </div>
      <div className="z-30">{props.children}</div>
      <Footer />
    </div>
  );
}
