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
          About Student Housing | Student Hostels in Mumbai
        </title>
        <meta
          name="description"
          content="Learn about Student Housing, offering well-managed student hostels in Mumbai with modern amenities, convenient locations & comfortable student living"
        />

        <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: `{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Student Housing India Limited",
        "image": "https://www.studenthousing.co.in/SH.png",
        "url": "https://www.studenthousing.co.in/",
        "telephone": "+919819780000",
        "priceRange": "₹₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Avenue By Student Housing, Shree Krishna building, NS Mankikar Rd, next to Shetty tower, Nutan Laxmi Society, JVPD Scheme, Vile Parle West",
          "addressLocality": "Mumbai",
          "postalCode": "400049",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 19.10831612604247,
          "longitude": 72.83014687940613
        },
        "sameAs": [
          "https://www.facebook.com/StudentHousingIN",
          "https://www.instagram.com/studenthousing_mumbai/",
          "https://www.youtube.com/@studenthousingmumbai",
          "https://in.linkedin.com/company/student-housing-india",
          "https://www.studenthousing.co.in/"
        ]
      }`,
    }}
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
