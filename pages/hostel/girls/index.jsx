import HeroBanner from "../../../components/HeroBanner";
import Queries from "../../../components/Queries";
import Quote from "../../../components/Quote";
import Layout from "../../../components/Layout";
import FAQ from "../../../components/FaqAccordion";
import SectionTitle from "../../../components/SectionTitle";

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

      <Quote />

      <Queries />

      <SectionTitle title={"FAQ"} className={"my-9"} />
      <FAQ faqs={faqItems} />
    </Layout>
  );
}
