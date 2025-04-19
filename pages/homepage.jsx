import React, { useLayoutEffect, useState } from "react";
import Layout from "../components/Layout";
import Carousel from "../components/common/Carousel";
import Quote from "../components/Quote";
import StudentTestimonials from "../components/StudentTestimonials";
import FAQ from "../components/FaqAccordion";
import Queries from "../components/Queries";
import CarouselList from "../components/CarouselList";
import SectionTitle from "../components/SectionTitle";
import Link from "next/link";
import InstitutionImageCollage from "../components/InstitutionImageCollage";
import Awards from "../components/Homepage/Awards";
import RoomOptionsAndPricing from "../components/RoomOptionsAndPricing";
import apis from "../lib/apis";
import client from "../apolloClient";
import { gql } from "@apollo/client";
import moment from "moment";
import { pickRandomFaqs } from "../utils/faqs";

const images = [
  "/banner_1.png",
  "/banner_2.png",
  "/banner_3.png",
  "/banner_5.png",
];

const institutions = [
  {
    title: "NMIMS university",
    image: "/banner_1.png",
  },
  {
    title: "Mukesh Patel college",
    image: "/banner_2.png",
  },
  {
    title: "Narsee Monjee",
    image: "/banner_3.png",
  },
  {
    title: "Mithibai College",
    image: "/banner_5.png",
  },
  {
    title: "Atlas University",
    image: "/banner_5.png",
  },
  {
    title: "HR college",
    image: "/banner_5.png",
  },
];

const usps = [
  {
    title: "Housekeeping",
    icon: "🧹",
    desc: "Daily professional cleaning services to keep your living space spotless and comfortable.",
    image: "/new-amenities/housekeeping.png", // ← your hover‐image
  },
  {
    title: "24x7 Security",
    icon: "🔒",
    desc: "Your safety is our top priority with round‑the‑clock surveillance and security systems.",
    image: "/new-amenities/security.png", // ← your hover‐image
  },
  {
    title: "Indoor Games",
    icon: "🎮",
    desc: "Dedicated entertainment zones for recreation and relaxation.",
    image: "/am-1.png",
  },
  {
    title: "Laundry Services",
    icon: "🧺",
    desc: "Hassle‑free steam ironing, pickup, and drop‑off laundry services to save your time.",
    image: "/new-amenities/laundry-2.png",
  },
  {
    title: "College Drop Facility",
    icon: "🚗",
    desc: "An exclusive in‑hostel facility—rides to college in cars at no extra cost.",
    image: "/pick_and_drop.jpg",
  },
  {
    title: "Turf Facility",
    icon: "⚽",
    desc: "Play your favourite sports any time—you and your hostel‑mates are covered at Student Housing!",
    image: "/turf-events.png",
  },
];

function Journey() {
  const options = [
    {
      title: "800+ Beds",
      icon: "🛏️",
      description:
        "Plenty of accommodation options with over 800 comfortable and well-maintained beds, ensuring a safe and cozy stay for students.",
    },
    {
      title: "20+ Hostels",
      icon: "🏠",
      description:
        "Choose from a variety of 20+ hostels across prime student locations, offering modern amenities and a secure living environment.",
    },
    {
      title: "4000+ Happy Students",
      icon: "😊",
      description:
        "Join a thriving community of 4000+ students who have found their perfect home away from home with us.",
    },
  ];
  return (
    <div className="responsiveCenterPadding relative flex flex-col md:flex-row gap-8 md:gap-4 pt-12 pb-16 bg-[linear-gradient(to_left,#111827,#222E4B)]">
      <div className="absolute inset-0 bg-[url(/bg-pattern-1.png)] z-10" />

      <div className="w-full md:w-2/6 z-20">
        <SectionTitle title={"Journey of Success"} className={"text-white"} />
      </div>
      <div className="w-full md:w-4/6 grid grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 z-30">
        {options.map((item) => (
          <div className="flex flex-col gap-4">
            <div className="w-[68px] h-[64px] rounded-[8px] flex justify-center items-center bg-[linear-gradient(to_left,#FEF7E7,#FFFBF4)]">
              <div className="w-[36px] h-[54px] flex justify-center items-center">
                <span className="text-3xl">{item.icon}</span>
              </div>
            </div>

            <div className="flex flex-col w-10/12">
              <div className="font-semibold text-[20px] text-white lg:text-[30px]">
                {item.title}
              </div>
              <div className="text-sm text-gray-400">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function USPsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle title={"USPs"} className={"mb-9"} />

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {usps.map(({ title, icon, desc, image }) => (
            <div
              key={title}
              className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
            >
              {/* Hover‐state background + overlay + text */}
              <div
                className="
                  absolute inset-0 
                  bg-cover bg-center 
                  bg-black bg-opacity-50 
                  opacity-0 group-hover:opacity-100 
                  transition"
                style={{
                  backgroundImage: `url('${image}')`,
                  backgroundBlendMode: "overlay",
                }}
              />
              <div
                className="
                  absolute bottom-0 left-0 right-0 
                  p-6 
                  text-white 
                  opacity-0 group-hover:opacity-100 
                  transition"
              >
                <h3 className="text-xl font-semibold mb-1">{title}</h3>
                <p className="text-sm">{desc}</p>
              </div>

              {/* Default white card content */}
              <div
                className="
                  relative z-10 
                  bg-white rounded-lg shadow 
                  h-full flex flex-col items-center text-center 
                  p-6 
                  group-hover:opacity-0 
                  transition"
              >
                <div
                  className="
                    bg-gradient-to-l from-[#F8C14C80] to-[#F8C14C33] 
                    p-3 rounded-lg mb-3 inline-flex 
                    items-center justify-center
                  "
                >
                  <span className="text-2xl">{icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const onImageIndexChange = (index) => {
    console.log("Current Image Index:", index);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Carousel as Background */}
      <Carousel
        slideDuration={5000}
        images={images}
        width="w-full"
        height="h-full"
        hideArrows={true}
        animationStyle="slide"
        imageClass="object-cover"
        onImageIndexChange={onImageIndexChange}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content on Top */}
      <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-around px-8 py-16 text-white">
        {/* Left Section: Text */}
        <div className="max-w-lg">
          <h1 className="text-6xl font-bold mb-4">
            Find Your Perfect Student Home
          </h1>
          <p className="text-lg mb-6">
            Explore verified hostels for boys & girls near your campus.
          </p>
          <div className="flex space-x-2">
            {Array(images.length)
              .fill(0)
              .map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex
                      ? "bg-[#F8C14C]"
                      : "bg-white opacity-50"
                  }`}
                ></span>
              ))}
          </div>
        </div>

        {/* Right Section: Cards */}
        <div className="flex flex-col space-y-6">
          <Link href="/girls-hostel">
            <div
              className="relative w-96 h-64 bg-pink-500 rounded-lg overflow-hidden flex items-end p-4 border border-[#FE019A] border-4 hover:scale-[1.06] cursor-pointer transition-all"
              style={{
                backgroundImage: "url('/hero-girl.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="relative z-10 flex justify-between items-center w-full">
                <h3 className="text-lg font-semibold">Girls Hostel</h3>

                <img
                  src="/arrow-up-right.png"
                  alt="Arrow Right"
                  className="w-6 h-6"
                />
              </div>
            </div>
          </Link>

          {/* Boys Hostel Card */}
          <Link href="/boys-hostel">
            <div
              className="relative w-96 h-64 bg-blue-500 rounded-lg overflow-hidden flex items-end p-4 border border-[#0088FC] border-4 hover:scale-[1.04] cursor-pointer transition-all"
              style={{
                backgroundImage: "url('/hero-boy.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="relative z-10 flex justify-between items-center w-full">
                <h3 className="text-lg font-semibold">Boys Hostel</h3>
                <img
                  src="/arrow-up-right.png"
                  alt="Arrow Right"
                  className="w-6 h-6"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const InistitutionsSection = () => {
  return (
    <div className="mb-12 mt-12">
      <SectionTitle title={"Institutions"} className={"mb-9"} />
      {/* Institutions list carousel */}
      <CarouselList
        items={institutions}
        renderItem={(item) => (
          <div className="text-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-[296px] h-[386px] object-cover rounded-full mx-auto"
            />
            <h3 className="text-lg font-bold mt-2">{item.title}</h3>
          </div>
        )}
      />
    </div>
  );
};

function AboutSection({ data }) {
  return (
    <div className="py-12 h-auto bg-[linear-gradient(to_left,#194128,#194128CC)] flex flex-col gap-8 responsiveCenterPadding">
      {/* Text Content */}
      <SectionTitle
        title={"About Student Housing"}
        className={"mb-9 responsiveCenterPadding z-10 text-white"}
      />

      <div className="flex text-white flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/2">
          <InstitutionImageCollage
            images={[
              "/hostels/girls-rooms-img-1.png",
              "/hostels/girls-rooms-img-2.png",
              "/hostels/girls-rooms-img-3.png",
            ]}
          />
        </div>

        <div className="flex flex-col w-full lg:w-1/2 gap-6">
          {/* <div className="font-semibold text-4xl">{data.collegeName}</div> */}
          <div className="font-[500] text-lg mb-3">
            At Student Housing, we provide safe, comfortable, and well-equipped
            hostels designed for students looking for a hassle-free living
            experience. With 800+ beds across 20+ hostels, we ensure a vibrant
            and secure environment where students can focus on their studies
            while enjoying premium amenities. Our commitment to quality, safety,
            and convenience has made us the preferred choice for 4,000+ happy
            students.
          </div>
          <p className="font-[500] text-lg mb-3">
            🏡 Safe & Secure | Fully Furnished | Nutritious Meals | Prime
            Locations
          </p>

          <p className="font-[500] text-lg mb-3">
            📍 Want to know more about us?
          </p>
        </div>
      </div>
    </div>
  );
}

const ReferSection = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full p-6 py-32 bg-refer-and-earn-banner bg-cover bg-no-repeat gap-4 lg:gap-0">
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center gap-4 lg:gap-8">
        <div className="w-[70%] text-[41px] leading-[52px] text-center lg:text-left font-semibold">
          Earn Rewards While Helping Your Friends!
        </div>
        <div className="w-[70%] text-xl font-semibold text-center lg:text-left">
          Share the comfort! Invite your friends to our hostels, and for every
          successful booking through your referral, you both earn exciting
          rewards. The more you refer, the more you earn.
        </div>
        <div className="w-[70%] text-center lg:text-left">
          <Link
            href="/refer-and-earn"
            className="rounded-md py-4 px-4 text-sm font-semibold text-white shadow-sm text-gray-700 bg-[#eba510] hover:bg-[#e0a82f]"
          >
            Refer Now!
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);
  useLayoutEffect(() => {
    // Fetch data from external API
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const { data } = await client.query({
      query: gql`
        query Blogs {
          blogs(first: 3) {
            coverPhoto {
              url
            }
            createdAt
            createdOn
            description
            id
            publishedAt
            title
            updatedAt
          }
        }
      `,
    });
    const { blogs } = data;
    console.log("Blogs: ", blogs);
    setBlogs(blogs);
  };

  return (
    <div className="bg-[#F9FAFB] py-3">
      <SectionTitle title={"Blogs"} className={"mb-9"} />
      <div className="w-[80%] mx-auto my-12 ">
        {/* flex layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog, index) => {
            return (
              <Link
                href={`/blogs/${blog.id}`}
                className={`border bg-white border-gray-200 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.01] hover:shadow-md hover:border-gray-400 transform transition duration-300 ease-in-out`}
                key={index}
              >
                {/* blog image */}
                <div className="rounded-lg w-full h-full">
                  <img
                    className="rounded-lg  w-full h-full object-cover"
                    src={blog?.coverPhoto?.url}
                    alt="blog_image"
                  />
                </div>

                <div>
                  {/* created at */}
                  <div className="mt-3 sm:mt-4 text-xs md:text-base font-semibold text-brandColor">
                    {moment(blog.createdOn).format("ll")}
                  </div>

                  {/* title */}
                  <div className="mt-2 sm:mt-3 font-bold text-sm sm:text-lg md:text-2xl">
                    {blog.title}
                  </div>

                  {/* description */}
                  <div className="mt-2 sm:mt-3 flex-grow text-sm sm:text-base">
                    {blog.description}
                  </div>
                </div>

                {/* link to */}
                <div className="mt-3 text-brandColor font-semibold self-start text-xs sm:text-base">
                  Read more...
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Homepage = () => {
  const [randomFaqs, setRandomFaqs] = useState([]);
  const [listings, setListings] = useState([]);

  useLayoutEffect(() => {
    // Fetch data from external API and set random faqs
    setRandomFaqs(pickRandomFaqs(6));
    fetchListings();
  }, []);

  const fetchListings = async () => {
    const { listings: all_listings, total } = await apis.getAllListings(
      process.env.NEXT_PUBLIC_API_BASE_URL,
      {
        filters: { publish: true },
        skip: 0,
        limit: 0,
      }
    );
    setListings(all_listings);
  };

  return (
    <Layout title="Homepage" description="Find your perfect student home">
      {/* Hero Section */}
      <HeroSection />
      <USPsSection />
      <Quote />
      <RoomOptionsAndPricing sectionTitle={`Our Rooms`} data={listings} />
      <Journey />
      <Awards />
      <StudentTestimonials />
      <AboutSection />
      <ReferSection />
      <InistitutionsSection />
      <Queries />
      <FAQ faqs={randomFaqs} />
      <BlogsSection />
    </Layout>
  );
};

export default Homepage;
