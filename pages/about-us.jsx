import Head from "next/head";
import Layout from "../components/Layout";
import OurStory from "../components/about-us/OurStory";
import AboutUsComponent from "../components/about-us/AboutUsComponent";
import OurMission from "../components/about-us/OurMission";
import OurValues from "../components/about-us/OurValues";
import TunedForExcellence from "../components/about-us/TunedForExcellence";
import DrivenByExpertise from "../components/about-us/DrivenByExpertise";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>
          Book Student Housing in Mumbai, Vile Parle | Student Housing
        </title>
        <meta
          name="description"
          content="Student housing in Mumbai offers spacious rooms with regular cleaning services, meals, and laundry. It is a home away from home with additional services like recreational activities, a lounge area in some of our flats gives an unwinding space to students after a long day."
        />
      </Head>

      <Layout>
        <AboutUsComponent />

        <OurStory />

        <OurMission />

        <OurValues />

        <TunedForExcellence />

        <DrivenByExpertise />
      </Layout>
    </>
  );
}
