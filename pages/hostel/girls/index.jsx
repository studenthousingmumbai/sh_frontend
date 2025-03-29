import HeroBanner from "../../../components/components/hero-banner/HeroBanner";
import Queries from "../../../components/components/queries/Queries";
import Quote from "../../../components/components/quote/Quote";
import Layout from "../../../components/Layout";

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
    </Layout>
  );
}
