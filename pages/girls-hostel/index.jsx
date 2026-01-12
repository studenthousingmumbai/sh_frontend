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
import { useLayoutEffect, useState } from "react";
import { pickRandomFaqs } from "../../utils/faqs";
import client from "../../apolloClient";
import { gql } from "@apollo/client";
import Head from "next/head";

export default function GirlsHostel({ all_listings }) {
  const [randomFaqs, setRandomFaqs] = useState([]);

  useLayoutEffect(() => {
    setRandomFaqs(pickRandomFaqs(6));
  }, []);

  return (
    <>

      <Head>
  <title>Girls Hostel in India | Safe Student Housing</title>
  <meta
    name="description"
    content="Explore safe and secure girls hostels with premium facilities and trusted management across India."
  />
</Head>
      
    <Layout>
      <HeroBanner
        title={"Girls Hostel"}
        subTitle={
          "Find the perfect stay with modern amenities, security, and a friendly community."
        }
        image={"/hero-banner/girls-hostel-hero-banner.png"}
      />
      <OurRooms data={all_listings[0]} />

      <div className="my-14 mx-12 lg:mx-48 border border-black opacity-10" />
      <WhyChoose gender="girl" />

      <Quote />

      <RoomOptionsAndPricing data={all_listings} />

      <Occupancy />

      <Ameities />

      <StudentTestimonials />

      <Queries />

      <FAQ faqs={randomFaqs} />
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
    const { hostelsOrders } = data;
    const hostels = hostelsOrders[0].hostel;
    return {
      props: {
        all_listings: hostels ?? null,
      },
    };
  } catch (e) {
    console.error("Error fetching data:", e);
    return {
      props: {
        all_listings: null,
      },
    };
  }
}
