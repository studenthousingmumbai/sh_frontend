import { useState, useEffect } from "react";
import Head from "next/head";
import Hero from "../components/Homepage/Hero";
import Features from "../components/Homepage/Features";
import Awards from "../components/Homepage/Awards";
import Amenities from "../components/Homepage/Amenities";

// import Reviews from '../components/Homepage/Reviews';
import Faqs from "../components/Homepage/Faqs";
import Contact from "../components/Homepage/Contact";
import LogoCloud from "../components/Homepage/LogoCloud";
import Layout from "../components/Layout";
import { Reviews } from "../components/Homepage/Testimonials";
import WhatsAppButton from "../components/common/WhatsappButton";
import Modal from "../components/common/Modal";
import Carousel from "../components/common/Carousel";
import { heroPageModalCTAButton } from "../constants";
import { gql } from "@apollo/client";
import client from "../apolloClient";

export default function Home({ announcementImages }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (open) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    // remove class when component unmounts
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [open]);

  return (
    <div>
      <Head>
        <title>
          Book Hostels in Mumbai For College Students | Student Housing
        </title>
        <meta
          name="description"
          content="Student housing offers hostels in Mumbai for college students at a reasonable price. A fully functional clean apartment with regular cleaning services. We also provide additional services like meals, laundry and drop off to college."
        />
        <link rel="icon" href="/sh_logo.png" />
      </Head>

      <div className="z-50">
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={"Queen sized beds, first time in hostel industry at:"}
        >
          <div className="flex flex-col gap-4">
            <Carousel images={announcementImages} />
            <div className="flex justify-center gap-4 ">
              <a
                href={heroPageModalCTAButton.visit}
                target="_blank"
                className="inline-flex items-center text-center w-[40%] sm:w-[30%] cursor-pointer select-none justify-center rounded-md border border-transparent px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base font-medium text-gray-700 shadow-sm bg-[#ffcc29] hover:bg-[#fad45a]"
              >
                Visit us now
              </a>
              <a
                href={`tel:${heroPageModalCTAButton?.call}`}
                className="inline-flex items-center text-center w-[40%] sm:w-[30%] justify-center rounded-md border border-transparent px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base font-medium text-gray-700 shadow-sm bg-[#ffcc29] hover:bg-[#fad45a]"
              >
                Call now
              </a>
            </div>
          </div>
        </Modal>
      </div>

      <div className="z-40">
        <Layout open={open}>
          <span className="fixed bottom-[25px] right-[20px] z-[1000]">
            <WhatsAppButton message={""} />
          </span>
          <Hero />
          <LogoCloud />
          <Features />
          <Amenities />
          <Awards />
          <Reviews />
          <Faqs />
          <Contact />
        </Layout>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const { data } = await client.query({
      query: gql`
        query Announcement {
          announcements {
            images {
              url
            }
          }
        }
      `,
    });
    const { announcements } = data;
    const { images } = announcements[0];
    const announcementImages = images.map((image) => image.url);

    return {
      props: {
        announcementImages,
      },
    };
  } catch (error) {
    return {
      props: {
        announcementImages: [],
      },
    };
  }
}
