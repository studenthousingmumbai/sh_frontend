import { useLayoutEffect, useState } from "react";
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
import { pickRandomFaqs } from "../../utils/faqs";

export default function BoysHostel({ all_listings, total, gender }) {
  const [listings, setListings] = useState(all_listings);

  const [randomFaqs, setRandomFaqs] = useState([]);

  useLayoutEffect(() => {
    setRandomFaqs(pickRandomFaqs(3));
  }, []);

  return (
    <Layout>
      <HeroBanner
        title={"Boys Hostel"}
        subTitle={
          "Find the perfect stay with modern amenities, security, and a friendly community."
        }
        image={"/hero-banner/boys-hostel-hero-banner.png"}
      />
      <OurRooms data={listings[0]} />

      <div className="my-14 mx-12 lg:mx-48 border border-black opacity-10" />
      <WhyChoose gender="boy" />

      <Quote />

      <RoomOptionsAndPricing data={listings} />

      <Occupancy />

      <Ameities />

      <StudentTestimonials />

      <Queries />

      <FAQ faqs={randomFaqs} />
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
      filters: { publish: true, gender: "male" },
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
      gender: "male",
    },
  };
}
