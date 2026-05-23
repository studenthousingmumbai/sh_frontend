import HeroBanner from "../../components/HeroBanner";
import Queries from "../../components/Queries";
import Layout from "../../components/Layout";
import FAQ from "../../components/FaqAccordion";
import RoomOptionsAndPricing from "../../components/RoomOptionsAndPricing";
import Ameities from "../../components/Amenities";
import StudentTestimonials from "../../components/StudentTestimonials";
import apis from "../../lib/apis";
import ExcellenceEducationStudentLife from "../../components/ExcellenceEducationStudentLife";
import InstitutionWhyChoose from "../../components/InstitutionWhyChoose";
import client from "../../apolloClient";
import { gql } from "@apollo/client";
import { pickRandomFaqs } from "../../utils/faqs";
import { useLayoutEffect, useState } from "react";
import InterestedEnquireForm from "../../components/InterestedEnquireForm";
import Head from "next/head";

export default function Institutions({ all_listings, listingDetails }) {
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
        {listingDetails && listingDetails.pageTitle && (
          <title>{listingDetails.pageTitle}</title>
        )}
      </Head>
      <HeroBanner
        title={listingDetails.collegeName}
        subTitle={
          "Find the perfect stay with modern amenities, security, and a friendly community."
        }
        image={"/hero-banner/institution-hero-banner.png"}
      />

      <ExcellenceEducationStudentLife data={listingDetails} />

      <InstitutionWhyChoose data={listingDetails} />

      <Ameities />

      <StudentTestimonials />

      <RoomOptionsAndPricing
        sectionTitle={"Recommended Hostels"}
        data={all_listings}
      />

      <InterestedEnquireForm />

      <FAQ faqs={randomFaqs} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { gender } = query;
  const { slug } = context.params;

  console.log("slug", slug);

  try {
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
        query Institution($slug: String!) {
          institutions(where: { slug: $slug }, first: 1, skip: 0) {
            slug
            pageTitle
            collegeName
            aboutCollege
            collegeSellingPoints {
              title
              description
            }
            metaTags {
              metaName
              metaContent
              metaProperty
            }
            schemaMarkup
            images {
              id
              url
            }
          }
        }
      `,
      variables: {
        slug,
      },
    });
    const { institutions } = data;
    const listingDetails = institutions[0];

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
