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

export default function Institutions({
  all_listings,
  total,
  gender,
  listingDetails,
}) {
  const { getAllListings } = useApi();
  const is_mounted = useRef(false);
  const [listings, setListings] = useState(all_listings);
  const [loading, setLoading] = useState(false);
  const [listingGender, setListingGender] = useState("all");

  const fetchListings = async (filters = {}, skip = 0, limit = 0) => {
    setLoading(true);

    const { listings: all_listings, total } = await getAllListings({
      filters,
      skip,
      limit,
    });

    setListings(all_listings);
    setLoading(false);
  };

  useEffect(() => {
    if (!is_mounted.current) {
      is_mounted.current = true;
    } else {
      if (listingGender === "all") {
        fetchListings({ publish: true });
      } else {
        fetchListings({ gender: listingGender, publish: true });
      }
    }
  }, [listingGender]);

  return (
    <Layout>
      <HeroBanner
        title={"Find your perfect hostel!"}
        subTitle={
          "Find the perfect stay with modern amenities, security, and a friendly community."
        }
        image={"/hero-banner/institution-hero-banner.png"}
      />
      <Ameities />

      <StudentTestimonials />

      <RoomOptionsAndPricing
        sectionTitle={"Recommended Hostels"}
        data={listings}
      />

      <Queries />

      <FAQ faqs={faqItems} />
    </Layout>
  );
}
