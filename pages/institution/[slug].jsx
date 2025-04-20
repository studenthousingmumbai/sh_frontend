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

const mock = {
  slug: "sss",
  collegeName: "Mithibai College",
  locationName: "Mithibai College",
  hostelName: "Aster A by Student Housing",
  hostelListingLink: "#",
  hostelDescription1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed nunc et libero finibus interdum. Nam augue urna, dapibus et consectetur sed, ullamcorper in nunc. Vestibulum maximus nunc nec arcu",
  hostelDescription2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed nunc et libero finibus interdum. Nam augue urna, dapibus et consectetur sed, ullamcorper in nunc. Vestibulum maximus nunc nec arcu egestas, congue sollicitudin nibh pellentesque. Praesent porttitor nibh id velit gravida, sit amet vehicula dui dictum. Nullam ornare quam sed enim volutpat, vel posuere sem porta. Fusce tempus, velit id condimentum mollis, libero est maximus diam, luctus tristique orci arcu vulputate erat. Nulla fermentum nulla ac rutrum finibus. Morbi in nibh aliquam odio ultricies viverra ac ut diam",
  images: [
    "/hostels/girls-rooms-img-1.png",
    "/hostels/girls-rooms-img-2.png",
    "/hostels/girls-rooms-img-3.png",
    "/hostels/girls-rooms-img-1.png",
    "/hostels/girls-rooms-img-2.png",
    "/hostels/girls-rooms-img-3.png",
    "/hostels/girls-rooms-img-1.png",
    "/hostels/girls-rooms-img-2.png",
    "/hostels/girls-rooms-img-3.png",
    "/hostels/girls-rooms-img-1.png",
    "/hostels/girls-rooms-img-2.png",
    "/hostels/girls-rooms-img-3.png",
    "/hostels/girls-rooms-img-1.png",
    "/hostels/girls-rooms-img-2.png",
    "/hostels/girls-rooms-img-3.png",
  ],

  whyChoose: [
    {
      title: "Academic Excellence",
      subTitle:
        "A top-ranked institution with highly qualified faculty and a strong curriculum",
    },

    {
      title: "State-of-the-Art Facilities",
      subTitle:
        "A top-ranked institution with highly qualified faculty and a strong curriculum",
    },
    {
      title: "Vibrant Campus Life",
      subTitle:
        "A top-ranked institution with highly qualified faculty and a strong curriculum",
    },
    {
      title: "Industry Exposure",
      subTitle:
        "A top-ranked institution with highly qualified faculty and a strong curriculum",
    },
    {
      title: "Prime Location",
      subTitle:
        "A top-ranked institution with highly qualified faculty and a strong curriculum",
    },
  ],
};

export default function Institutions({
  all_listings,
  total,
  gender,
  listingDetails,
}) {
  console.log("listing details", listingDetails);
  console.log("all listing", all_listings);

  const [randomFaqs, setRandomFaqs] = useState([]);

  useLayoutEffect(() => {
    setRandomFaqs(pickRandomFaqs(6));
  }, []);

  return (
    <Layout>
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
        query Institution($slug: String!) {
          institutions(where: { slug: $slug }, first: 1, skip: 0) {
            slug
            collegeName
            aboutCollege
            collegeSellingPoints {
              title
              description
            }
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
