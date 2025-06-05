import { useLayoutEffect, useRef, useState } from "react";
import HeroBanner from "../../components/HeroBanner";
import Quote from "../../components/Quote";
import Layout from "../../components/Layout";
import FAQ from "../../components/FaqAccordion";
import RoomOptionsAndPricing from "../../components/RoomOptionsAndPricing";
import Occupancy from "../../components/Occupancy";
import Ameities from "../../components/Amenities";
import StudentTestimonials from "../../components/StudentTestimonials";
import WhyChooseAlternate from "../../components/WhyChooseAlternate";
import apis from "../../lib/apis";
import useApi from "../../hooks/useApi";
import BestHotelsNearLocation from "../../components/BestHotelsNearLocation";
import { gql } from "@apollo/client";
import client from "../../apolloClient";
import InterestedEnquireForm from "../../components/InterestedEnquireForm";
import { pickRandomFaqs } from "../../utils/faqs";
import Head from "next/head";

export default function HostelsNearLocation({ all_listings, listingDetails }) {
  const [randomFaqs, setRandomFaqs] = useState([]);

  useLayoutEffect(() => {
    setRandomFaqs(pickRandomFaqs(6));
  }, []);

  return (
    <Layout>
      <Head>
        {listingDetails &&
          listingDetails.metaTags.length > 0 &&
          listingDetails.metaTags.map((tag) =>
            tag.metaName ? (
              <meta name={tag.metaName} content={tag.metaContent} />
            ) : tag.metaProperty ? (
              <meta property={tag.metaProperty} content={tag.metaContent} />
            ) : null
          )}

        {listingDetails && listingDetails.schemaMarkup && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: listingDetails.schemaMarkup,
            }}
          />
        )}
      </Head>
      <HeroBanner
        title={`Hostels In ${listingDetails.locationName}`}
        subTitle={
          "Find the perfect stay with modern amenities, security, and a friendly community."
        }
        image={"/hero-banner/hostel-near-location-hero-banner.png"}
      />
      <BestHotelsNearLocation data={listingDetails} />

      <div className="mt-4 mb-8 md:my-14 mx-12 lg:mx-48 border border-black opacity-10" />
      <WhyChooseAlternate />

      <Quote />

      <RoomOptionsAndPricing
        sectionTitle={"Explore More"}
        data={all_listings}
      />

      <Occupancy />

      <Ameities />

      <StudentTestimonials />

      <InterestedEnquireForm />

      <FAQ faqs={randomFaqs} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { gender } = query;
  const { slug } = context.params;

  try {
    // Fetch data from external API
    const gender = null;
    // Fetch data from external API
    const { data: hostelsData } = await client.query({
      query: gql`
        query HostelsOrder${gender ? "($gender: Gender)" : ""} {
          hostelsOrders(first: 1000) {
            hostel${
              gender
                ? "(where: { gender: $gender }), first: 1000)"
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
    const { hostelsOrders } = hostelsData;
    const all_listings = hostelsOrders[0].hostel;

    const { data } = await client.query({
      query: gql`
        query HostelsNearLocation($slug: String!) {
          hostelsNearLocations(where: { slug: $slug }, first: 1000, skip: 0) {
            slug
            locationName
            hostelName
            images {
              url
              id
            }
            metaTags {
              metaName
              metaContent
              metaProperty
            }
            schemaMarkup
            hostelListingLink
            hostelDescription
            gender
            price
            address
          }
        }
      `,
      variables: {
        slug,
      },
    });
    const { hostelsNearLocations } = data;
    const listingDetails = hostelsNearLocations[0];

    // Pass data to the page via props
    return {
      props: {
        listingDetails,
        all_listings,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        listingDetails: null,
        all_listings: [],
      },
    };
  }
}
