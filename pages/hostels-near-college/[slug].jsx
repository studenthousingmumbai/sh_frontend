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

export default function HostelsNearCollege({
  all_listings,
  total,
  gender,
  listingDetails,
}) {
  const [listings, setListings] = useState(all_listings);
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
              <meta name="description" content={tag.content} />
            ) : tag.metaProperty ? (
              <meta property={tag.metaProperty} content={tag.content} />
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
        data={listings}
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
  const { query } = context;
  const { gender } = query;
  const { slug } = context.params;
  console.log("Slug: ", slug);

  try {
    // Fetch data from external API
    const { listings: all_listings, total } = await apis.getAllListings(
      process.env.NEXT_PUBLIC_API_BASE_URL,
      {
        filters: gender ? { publish: true, gender } : { publish: true },
        skip: 0,
        limit: 0,
      }
    );

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
        total,
        gender: (gender && gender) || null,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        listingDetails: null,
        all_listings: [],
        total: 0,
        gender: (gender && gender) || null,
      },
    };
  }
}
