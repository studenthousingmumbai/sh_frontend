import React, { useLayoutEffect, useState } from "react";
import HeroBanner from "../../components/HeroBanner";
import Queries from "../../components/Queries";
import Quote from "../../components/Quote";
import Layout from "../../components/Layout";
import FAQ from "../../components/FaqAccordion";
import RoomOptionsAndPricing from "../../components/RoomOptionsAndPricing";
import Occupancy from "../../components/Occupancy";
import Ameities from "../../components/Amenities";
import StudentTestimonials from "../../components/StudentTestimonials";
import BestHotelsNear from "../../components/BestHotelsNear";
import WhyChooseAlternate from "../../components/WhyChooseAlternate";
import apis from "../../lib/apis";
import { gql } from "@apollo/client";
import client from "../../apolloClient";
import { pickRandomFaqs } from "../../utils/faqs";
import Head from "next/head";

export default function HostelsNearCollege({ all_listings, listingDetails }) {
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
        title={`Hostels Near ${listingDetails.collegeName}`}
        subTitle={
          "Find the perfect stay with modern amenities, security, and a friendly community."
        }
        image={"/hero-banner/hostel-near-college-hero-banner.png"}
      />
      <BestHotelsNear data={listingDetails} />

      <div className="my-8 md:my-14 mx-12 lg:mx-48 border border-black opacity-10" />
      <WhyChooseAlternate />

      <Quote />

      <RoomOptionsAndPricing
        sectionTitle={`Hostels Near ${listingDetails.collegeName}`}
        data={all_listings}
      />

      <Occupancy />

      <Ameities />

      <StudentTestimonials />

      <Queries />

      <FAQ faqs={randomFaqs} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  console.log("Slug: ", slug);

  try {
    const gender = null;
    // Fetch data from external API
    const { data: hostelsData } = await client.query({
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
    const { hostelsOrders } = hostelsData;
    const all_listings = hostelsOrders[0].hostel;

    const { data } = await client.query({
      query: gql`
        query FilterHostelsNearCollege($slug: String!) {
          hostelsNearColleges(first: 1, skip: 0, where: { slug: $slug }) {
            collegeName
            slug
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
            description1
            description2
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
    console.log("Data: ", data);
    const { hostelsNearColleges } = data;
    const listingDetails = hostelsNearColleges[0];

    // Pass data to the page via props
    return {
      props: {
        listingDetails: listingDetails ?? null,
        all_listings: all_listings,
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
