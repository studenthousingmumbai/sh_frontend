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

export default function HostelsNearLocation({
  all_listings,
  total,
  gender,
  listingDetails,
}) {
  const { getAllListings } = useApi();
  const is_mounted = useRef(false);
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
        title={`Hostels Near ${listingDetails.locationName}`}
        subTitle={
          "Find the perfect stay with modern amenities, security, and a friendly community."
        }
        image={"/hero-banner/hostel-near-location-hero-banner.png"}
      />
      <BestHotelsNearLocation data={listingDetails} />

      <div className="mt-4 mb-8 md:my-14 mx-12 lg:mx-48 border border-black opacity-10" />
      <WhyChooseAlternate />

      <Quote />

      <RoomOptionsAndPricing sectionTitle={"Explore More"} data={listings} />

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
