import { useEffect, useRef, useState } from "react";
import HeroBanner from "../../components/HeroBanner";
import Queries from "../../components/Queries";
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

const faqItems = [
  {
    id: "item-1",
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-2",
    question: "Is it styled?",
    answer:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    id: "item-3",
    question: "Is it animated?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

const mock = {
  slug: "sss",
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
};

export default function HostelsNearLocation({
  all_listings,
  total,
  gender,
  listingDetails,
}) {
  const { getAllListings } = useApi();
  const is_mounted = useRef(false);
  const [listings, setListings] = useState(all_listings);

  return (
    <Layout>
      <HeroBanner
        title={"Find your perfect hostel!"}
        subTitle={
          "Find the perfect stay with modern amenities, security, and a friendly community."
        }
        image={"/hero-banner/hostel-near-location-hero-banner.png"}
      />
      <BestHotelsNearLocation data={listingDetails} />

      <div className="my-8 md:my-14 mx-12 lg:mx-48 border border-black opacity-10" />
      <WhyChooseAlternate />

      <Quote />

      <RoomOptionsAndPricing sectionTitle={"Explore More"} data={listings} />

      <Occupancy />

      <Ameities />

      <StudentTestimonials />

      <InterestedEnquireForm />

      <FAQ faqs={faqItems} />
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
            hostelName
            images {
              url
              id
            }
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
