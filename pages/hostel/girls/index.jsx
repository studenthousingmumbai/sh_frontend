import HeroBanner from "../../../components/HeroBanner";
import Queries from "../../../components/Queries";
import Quote from "../../../components/Quote";
import Layout from "../../../components/Layout";
import FAQ from "../../../components/FaqAccordion";
import SectionTitle from "../../../components/SectionTitle";
import OurRooms from "../../../components/OurRooms";
import WhyChoose from "../../../components/WhyChoose";
import RoomOptionsAndPricing from "../../../components/RoomOptionsAndPricing";
import Occupancy from "../../../components/Occupancy";
import Ameities from "../../../components/Amenities";
import StudentTestimonials from "../../../components/StudentTestimonials";

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

export default function GirlsHostel() {
  return (
    <Layout>
      <HeroBanner
        title={"Girls Hostel"}
        subTitle={
          "Find the perfect stay with modern amenities, security, and a friendly community."
        }
        image={"/hero-banner/girls-hostel-hero-banner.png"}
      />
      <OurRooms />

      <div className="my-14 mx-12 lg:mx-48 border border-black opacity-10" />
      <WhyChoose />

      <Quote />

      <RoomOptionsAndPricing />

      <Occupancy />

      <Ameities />

      <StudentTestimonials />

      <Queries />

      <FAQ faqs={faqItems} />
    </Layout>
  );
}
