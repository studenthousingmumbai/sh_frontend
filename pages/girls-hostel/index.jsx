import { useLayoutEffect, useState } from "react";
import HeroBanner from "../../components/HeroBanner";
import Queries from "../../components/Queries";
import Quote from "../../components/Quote";
import Layout from "../../components/Layout";
import FAQ from "../../components/FaqAccordion";
import OurRooms from "../../components/OurRooms";
import WhyChoose from "../../components/WhyChoose";
import RoomOptionsAndPricing from "../../components/RoomOptionsAndPricing";
import Occupancy from "../../components/Occupancy";
import Ameities from "../../components/Amenities";
import StudentTestimonials from "../../components/StudentTestimonials";
import apis from "../../lib/apis";
import {
  girlsFixedFaqs,
  girlsRandomFaqPool,
  getFaqs,
  withIds,
} from "../../utils/hostelFaqs";
import client from "../../apolloClient";
import { gql } from "@apollo/client";
import Head from "next/head";

export default function GirlsHostel({ all_listings = [] }) {
  // Start with the fixed FAQs so the server render matches the first client render
  const [faqs, setFaqs] = useState(withIds(girlsFixedFaqs));

  useLayoutEffect(() => {
    // 4 fixed + 4 random from the pool of 8
    setFaqs(getFaqs(girlsFixedFaqs, girlsRandomFaqPool, 4));
  }, []);

  const firstListing = all_listings?.[0];

  return (
    <>
      <Head>
        <title>Girls Hostel in Mumbai Near Top Colleges | Student Housing</title>
        <meta
          name="description"
          content="Looking for a girls hostel in Mumbai? Student Housing offers furnished student accommodation with meals, WiFi, housekeeping & security near top colleges"
        />
      </Head>

      <Layout>
        <HeroBanner
          title={"Girls Hostel"}
          subTitle={
            "Find the perfect stay with modern amenities, security, and a friendly community."
          }
          image={"/hero-banner/Image-1.webp"}
        />

        {firstListing && <OurRooms data={firstListing} />}

        <div className="my-14 mx-12 lg:mx-48 border border-black opacity-10" />
        <WhyChoose gender="girl" />

        <Quote />

        {all_listings?.length > 0 && (
          <RoomOptionsAndPricing data={all_listings} />
        )}

        <Occupancy />

        <Ameities />

        <StudentTestimonials />

        <Queries />

        <FAQ faqs={faqs} />
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const gender = "female";
    const { data } = await client.query({
      query: gql`
        query HostelsOrder${gender ? "($gender: Gender)" : ""} {
          hostelsOrders(first: 1000) {
            hostel${
              gender
                ? "(where: { gender: $gender }, first: 1000)"
                : "(first: 1000)"
            } {
              name
              slug
              description
              address {
                line1
                line2
                city
                state
                zip
              }
              amenities
              images {
                url
                id
              }
              metatags {
                metaName
                metaContent
                metaProperty
              }
              schemaMarkup
              mapEmbed
              total_price
              price
              gender
              foodMenu {
                id
                url
              }
              video_link
              faqs {
                question
                answer
              }
              occupancies {
                price
                description
                total_beds
                period
              }
              collegesNearby {
                name
                distance
              }
            }
          }
        }
      `,
      variables: {
        gender,
      },
    });

    const hostels = data?.hostelsOrders?.[0]?.hostel ?? [];

    return {
      props: {
        all_listings: hostels,
      },
    };
  } catch (e) {
    console.error("Error fetching data:", e);
    return {
      props: {
        all_listings: [],
      },
    };
  }
}