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
import { useState } from "react";

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

const ourRoomsData = {
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
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed nunc et libero finibus interdum. Nam augue urna, dapibus et consectetur sed, ullamcorper in nunc. Vestibulum maximus nunc nec arcu egestas, congue sollicitudin nibh pellentesque. Praesent porttitor nibh id velit gravida, sit amet vehicula dui dictum. Nullam ornare quam sed enim volutpat, vel posuere sem porta. Fusce tempus, velit id condimentum mollis, libero est maximus diam, luctus tristique orci arcu vulputate erat. Nulla fermentum nulla ac rutrum finibus. Morbi in nibh aliquam odio ultricies viverra ac ut diam.",
  name: "Aster A by Student Housing",
  location: "Vile Parle West, Mumbai",
  startingFromCost: "42,000",
  gender: "girl",
  hostelName: "Aster A by Student Housing",
  hostelListingLink: "#",
  hostelDescription1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed nunc et libero finibus interdum. Nam augue urna, dapibus et consectetur sed, ullamcorper in nunc. Vestibulum maximus nunc nec arcu",
  hostelDescription2: "fdsalkjsadg",
  location: "Ville Parle",
  startingFromCost: "₹42,000",
};

export default function GirlsHostel({ all_listings, total, gender }) {
  const [listings, setListings] = useState(all_listings);

  return (
    <Layout>
      <HeroBanner
        title={"Girls Hostel"}
        subTitle={
          "Find the perfect stay with modern amenities, security, and a friendly community."
        }
        image={"/hero-banner/girls-hostel-hero-banner.png"}
      />
      <OurRooms data={listings[0]} />

      <div className="my-14 mx-12 lg:mx-48 border border-black opacity-10" />
      <WhyChoose gender="girl" />

      <Quote />

      <RoomOptionsAndPricing data={listings} />

      <Occupancy />

      <Ameities />

      <StudentTestimonials />

      <Queries />

      <FAQ faqs={faqItems} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  console.log("Get server side props called!");
  const { query } = context;

  // Fetch data from external API
  const { listings: all_listings, total } = await apis.getAllListings(
    process.env.NEXT_PUBLIC_API_BASE_URL,
    {
      filters: { publish: true, gender: "female" },
      skip: 0,
      limit: 0,
    }
  );

  console.log("All listings: ", all_listings, " total: ", total);

  // Pass data to the page via props
  return {
    props: {
      all_listings,
      total,
      gender: "female",
    },
  };
}
