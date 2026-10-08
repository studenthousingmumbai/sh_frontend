import React, { useState, useEffect, useRef, memo } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import dynamic from "next/dynamic";
import { gql } from "@apollo/client";
import client from "../apolloClient";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import WhatsAppButton from "../components/common/WhatsappButton";
import { pickRandomFaqs } from "../utils/faqs";
import { heroPageModalCTAButton } from "../constants";

/* ------------------------------------------------------------------ */
/* Code-split everything that isn't needed for the first paint         */
/* ------------------------------------------------------------------ */
const Carousel = dynamic(() => import("../components/common/Carousel"), {
  ssr: false,
});
const Modal = dynamic(() => import("../components/common/Modal"), {
  ssr: false,
});
const Event = dynamic(() => import("../components/Event"), { ssr: false });

// SSR kept on for SEO-relevant sections, but split into separate chunks
const Quote = dynamic(() => import("../components/Quote"));
const RoomOptionsAndPricing = dynamic(() =>
  import("../components/RoomOptionsAndPricing")
);
const FAQ = dynamic(() => import("../components/FaqAccordion"));
const InstitutionImageCollage = dynamic(() =>
  import("../components/InstitutionImageCollage")
);

// Below-the-fold, mounted only when scrolled near (see LazyOnView)
const Awards = dynamic(() => import("../components/Homepage/Awards"));
const StudentTestimonials = dynamic(() =>
  import("../components/StudentTestimonials")
);
const Queries = dynamic(() => import("../components/Queries"));
const CarouselList = dynamic(() => import("../components/CarouselList"));

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

// Runs cb after the window "load" event + an idle moment (+ optional delay)
function runAfterLoad(cb, delay = 0) {
  let timer;
  let idle;
  const start = () => {
    timer = setTimeout(() => {
      if ("requestIdleCallback" in window) {
        idle = window.requestIdleCallback(cb, { timeout: 2000 });
      } else {
        cb();
      }
    }, delay);
  };
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });

  return () => {
    clearTimeout(timer);
    if (idle && "cancelIdleCallback" in window) window.cancelIdleCallback(idle);
    window.removeEventListener("load", start);
  };
}

// Mounts children (and therefore downloads their JS/images) only when the
// placeholder gets near the viewport.
function LazyOnView({ children, minHeight = 400, rootMargin = "500px" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible, rootMargin]);

  return (
    <div ref={ref} style={visible ? undefined : { minHeight }}>
      {visible ? children : null}
    </div>
  );
}

/**
 * Removes exact duplicate <meta> / canonical tags from <head> after Next.js
 * hydrates. Keeps the LAST copy. Only watches for a few seconds so it
 * doesn't sit on the main thread for the whole session.
 */
function HeadDedupe() {
  useEffect(() => {
    let frame;

    const keyOf = (el) =>
      el.tagName +
      "|" +
      Array.from(el.attributes)
        .map((a) => `${a.name}=${a.value}`)
        .sort()
        .join("|");

    const dedupe = () => {
      const seen = new Set();
      const nodes = Array.from(
        document.head.querySelectorAll(
          "meta[charset], meta[name], meta[property], link[rel='canonical']"
        )
      );
      for (let i = nodes.length - 1; i >= 0; i--) {
        const key = keyOf(nodes[i]);
        if (seen.has(key)) nodes[i].remove();
        else seen.add(key);
      }
    };

    const observer = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(dedupe);
    });
    observer.observe(document.head, { childList: true });
    dedupe();
    const stop = setTimeout(() => observer.disconnect(), 5000);

    return () => {
      clearTimeout(stop);
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}

/* ------------------------------------------------------------------ */
/* Static data                                                         */
/* ------------------------------------------------------------------ */
const images = [
  "/banner-1.webp",
  "/banner-2.webp",
  "/banner-3.webp",
  "/banner-5.webp",
];

const institutions = [
  { title: "NMIMS university", image: "/institutions/NMIMS.webp" },
  { title: "Mukesh Patel college", image: "/institutions/mukesh-patel.webp" },
  { title: "Narsee Monjee", image: "/institutions/NM.webp" },
  { title: "Mithibai College", image: "/institutions/mithibai.webp" },
  { title: "Atlas University", image: "/institutions/atlas.webp" },
  { title: "HR college", image: "/institutions/hr.webp" },
];

const usps = [
  {
    title: "Housekeeping",
    icon: "🧹",
    desc: "Daily professional cleaning services to keep your living space spotless and comfortable.",
    image: "/new-amenities/housekeeping.webp",
  },
  {
    title: "24x7 Security",
    icon: "🔒",
    desc: "Your safety is our top priority with round‑the‑clock surveillance and security systems.",
    image: "/new-amenities/security.webp",
  },
  {
    title: "Indoor Games",
    icon: "🎮",
    desc: "Dedicated entertainment zones for recreation and relaxation.",
    image: "/am-1.webp",
  },
  {
    title: "Laundry Services",
    icon: "🧺",
    desc: "Hassle‑free steam ironing, pickup, and drop‑off laundry services to save your time.",
    image: "/new-amenities/laundry-2.webp",
  },
  {
    title: "College Drop Facility",
    icon: "🚗",
    desc: "An exclusive in‑hostel facility—rides to college in cars at no extra cost.",
    image: "/pick_and_drop.webp",
  },
  {
    title: "Turf Facility",
    icon: "⚽",
    desc: "Play your favourite sports any time—you and your hostel‑mates are covered at Student Housing!",
    image: "/turf-events.webp",
  },
];

const journeyOptions = [
  {
    title: "1,250+ Beds",
    icon: "🛏️",
    description:
      "Plenty of accommodation options with over 1100+ comfortable and well-maintained beds, ensuring a safe and cozy stay for students.",
  },
  {
    title: "15+ Locations",
    icon: "🏠",
    description:
      "Choose from a variety of 20+ hostels across prime student locations, offering modern amenities and a secure living environment.",
  },
  {
    title: "6000+ Happy Students",
    icon: "😊",
    description:
      "Join a thriving community of 4000+ students who have found their perfect home away from home with us.",
  },
];

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */
function Journey() {
  return (
    <div className="responsiveCenterPadding relative flex flex-col md:flex-row gap-8 md:gap-4 pt-12 pb-16 bg-[linear-gradient(to_left,#111827,#222E4B)]">
      <div className="absolute inset-0 bg-[url(/bg-pattern-1.png)] z-10" />

      <div className="w-full md:w-2/6 z-20">
        <SectionTitle
          title={"Journey of Success"}
          className={"text-white mb-9"}
        />
      </div>
      <div className="w-full md:w-4/6 grid grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 z-30">
        {journeyOptions.map((item) => (
          <div className="flex flex-col gap-4" key={item.title}>
            <div className="w-[68px] h-[64px] rounded-[8px] flex justify-center items-center bg-[linear-gradient(to_left,#FEF7E7,#FFFBF4)]">
              <div className="w-[36px] h-[54px] flex justify-center items-center">
                <span className="text-3xl">{item.icon}</span>
              </div>
            </div>

            <div className="flex flex-col w-10/12">
              <div className="font-semibold text-[20px] text-white lg:text-[30px]">
                {item.title}
              </div>
              <div className="hidden md:block text-sm text-gray-400">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Hover image layer is only mounted on hover, so the 6 hidden background
// images are no longer downloaded on page load.
const USPCard = memo(function USPCard({ title, icon, desc, image }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative h-56 sm:h-64 rounded-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onTouchStart={() => setHovered(true)}
    >
      {hovered && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              backgroundImage: `url('${image}')`,
              backgroundBlendMode: "overlay",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <h3 className="text-lg sm:text-xl font-semibold mb-1">{title}</h3>
            <p className="text-xs sm:text-sm">{desc}</p>
          </div>
        </>
      )}

      {/* Default white card content */}
      <div className="relative z-10 bg-white rounded-lg shadow h-full flex flex-col items-center text-center p-4 sm:p-6 group-hover:opacity-0 transition-opacity">
        <div className="bg-gradient-to-l from-[#F8C14C80] to-[#F8C14C33] p-2 sm:p-3 rounded-lg mb-2 sm:mb-3 inline-flex items-center justify-center">
          <span className="text-xl sm:text-2xl">{icon}</span>
        </div>
        <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
});

function USPsSection() {
  // Warm the browser cache for hover images AFTER the page has loaded
  useEffect(
    () =>
      runAfterLoad(() => {
        usps.forEach((u) => {
          const img = new window.Image();
          img.src = u.image;
        });
      }, 4000),
    []
  );

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle title={"Why Choose Us"} className={"mb-9"} />

        <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
          {usps.map((u) => (
            <USPCard key={u.title} {...u} />
          ))}
        </div>
      </div>
    </section>
  );
}

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselReady, setCarouselReady] = useState(false);

  // The first banner is rendered as a plain priority <Image> (instant LCP).
  // The heavy carousel (all 4 banners) is only mounted after the page loads.
  useEffect(() => runAfterLoad(() => setCarouselReady(true), 1500), []);

  return (
    <div className="relative w-full h-screen">
      {/* LCP image: preloaded + high priority by next/image */}
      <Image
        src={images[0]}
        alt="Student hostel in Mumbai"
        fill
        priority
        quality={70}
        sizes="100vw"
        className="object-cover"
      />

      {carouselReady && (
        <div className="absolute inset-0">
          <Carousel
            slideDuration={5000}
            images={images}
            width="w-full"
            height="h-full"
            hideArrows={true}
            animationStyle="slide"
            imageClass="object-cover"
            onImageIndexChange={setCurrentIndex}
          />
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 pointer-events-none"></div>

      {/* Content on Top */}
      <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-around px-8 py-16 text-white">
        {/* Left Section: Text */}
        <div className="max-w-lg mb-3">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Find Your Perfect Student Home
          </h1>
          <p className="text-base sm:text-lg mb-6">
            Explore verified hostels for boys & girls near your campus.
          </p>
          <div className="flex space-x-2">
            {images.map((_, index) => (
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
            <div className="relative w-full h-48 lg:w-96 lg:h-64 bg-pink-500 rounded-lg overflow-hidden flex items-end p-4 border-[#FE019A] border-4 hover:scale-[1.06] cursor-pointer transition-transform">
              <Image
                src="/about-us/549A6884.webp"
                alt="Girls Hostel"
                fill
                sizes="(min-width: 1024px) 384px, 100vw"
                quality={70}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="relative z-10 flex justify-between items-center w-full">
                <h3 className="text-lg font-semibold">Girls Hostel</h3>
                <div className="flex items-center justify-center p-3 rounded-md bg-[#F8C14C]">
                  <img
                    src="/arrow-up-right.webp"
                    alt="Arrow Right"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Boys Hostel Card */}
          <Link href="/boys-hostel">
            <div className="relative w-full h-48 lg:w-96 lg:h-64 bg-blue-500 rounded-lg overflow-hidden flex items-end p-4 border-[#0088FC] border-4 hover:scale-[1.04] cursor-pointer transition-transform">
              <Image
                src="/about-us/IMG_5415.webp"
                alt="Boys Hostel"
                fill
                sizes="(min-width: 1024px) 384px, 100vw"
                quality={70}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="relative z-10 flex justify-between items-center w-full">
                <h3 className="text-lg font-semibold">Boys Hostel</h3>
                <div className="flex items-center justify-center p-3 rounded-md bg-[#F8C14C]">
                  <img
                    src="/arrow-up-right.webp"
                    alt="Arrow Right"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const InstitutionsSection = () => {
  return (
    <div className="mb-12 mt-12">
      <SectionTitle
        title={"Institutions Near Our Hostels"}
        className={"mb-9"}
      />
      <CarouselList
        autoScroll={true}
        items={institutions}
        renderItem={(item) => (
          <div className="text-center">
            <Image
              src={item.image}
              alt={item.title}
              width={296}
              height={386}
              sizes="296px"
              quality={70}
              className="w-[296px] h-[386px] object-cover rounded-full mx-auto"
            />
            <h3 className="text-lg font-bold mt-2">{item.title}</h3>
          </div>
        )}
      />
    </div>
  );
};

function AboutSection() {
  return (
    <div className="py-12 h-auto bg-[linear-gradient(to_left,#194128,#194128CC)] flex flex-col gap-8 responsiveCenterPadding">
      <SectionTitle
        title={"About Student Housing"}
        className={"mb-9 responsiveCenterPadding z-10 text-white"}
      />

      <div className="flex text-white flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/2">
          <InstitutionImageCollage
            images={[
              "/girls-rooms-img-1.webp",
              "/girls-rooms-img-2.webp",
              "/girls-rooms-img-3.webp",
            ]}
          />
        </div>

        <div className="flex flex-col  lg:w-1/2 gap-6">
          <div className="font-[500] text-lg mb-3">
            At Student Housing, we provide safe, comfortable, and well-equipped
            hostels designed for students looking for a hassle-free living
            experience. With 1,100+ beds across 20+ hostels, we ensure a vibrant
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

          <Link href="/about-us">
            <button className="rounded-md py-4 px-4 text-sm font-semibold text-white shadow-sm text-gray-700 bg-[#eba510] hover:bg-[#e0a82f]">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const ReferSection = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full p-6 py-16 sm:py-24 bg-refer-and-earn-banner bg-cover bg-no-repeat gap-4 lg:gap-0">
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center gap-4 lg:gap-8">
        <div className="w-full sm:w-[80%] lg:w-[70%] text-2xl sm:text-3xl lg:text-[41px] leading-7 sm:leading-9 lg:leading-[52px] text-center lg:text-left font-semibold">
          Earn Rewards While Helping Your Friends!
        </div>

        <div className="w-full sm:w-[80%] lg:w-[70%] text-sm sm:text-lg lg:text-xl font-medium text-center lg:text-left">
          Share the comfort! Invite your friends to our hostels, and for every
          successful booking through your referral, you both earn exciting
          rewards. The more you refer, the more you earn.
        </div>

        <div className="w-full sm:w-[80%] lg:w-[70%] text-center lg:text-left">
          <Link
            href="/refer-and-earn"
            className="rounded-md py-3 sm:py-4 px-4 text-sm sm:text-base font-semibold text-white shadow-sm bg-[#eba510] hover:bg-[#e0a82f]"
          >
            Refer Now!
          </Link>
        </div>
      </div>
    </div>
  );
};

const formatDate = (value) => {
  try {
    return new Date(value).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "";
  }
};

const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);

  // Rendered inside <LazyOnView>, so this only runs when the user scrolls
  // near it. Apollo is imported on demand to keep it out of the main bundle.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [{ default: apollo }, { gql: gqlTag }] = await Promise.all([
          import("../apolloClient"),
          import("@apollo/client"),
        ]);
        const { data } = await apollo.query({
          query: gqlTag`
            query Blogs {
              blogs(first: 3, orderBy: createdAt_DESC) {
                coverPhoto {
                  url
                }
                createdAt
                createdOn
                description
                id
                slug
                publishedAt
                title
                updatedAt
              }
            }
          `,
        });
        if (!cancelled) setBlogs(data.blogs || []);
      } catch (e) {
        console.error("Error fetching blogs:", e);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="bg-[#F9FAFB] py-3">
      <SectionTitle title={"Blogs"} className={"mb-9"} />
      <div className="w-[80%] mx-auto my-12 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <Link
              href={`/blogs/${blog.slug}`}
              className="border bg-white border-gray-200 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.01] hover:shadow-md hover:border-gray-400 transform transition duration-300 ease-in-out"
              key={blog.id || blog.slug}
            >
              <div className="rounded-lg w-full h-full">
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={blog?.coverPhoto?.url}
                  alt={blog.title || "blog_image"}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div>
                <div className="mt-3 sm:mt-4 text-xs md:text-base font-semibold text-brandColor">
                  {formatDate(blog.createdOn)}
                </div>

                <div className="mt-2 sm:mt-3 font-bold text-sm sm:text-lg md:text-2xl">
                  {blog.title}
                </div>

                <div className="mt-2 sm:mt-3 flex-grow text-sm sm:text-base">
                  {blog.description}
                </div>
              </div>

              <div className="mt-3 text-brandColor font-semibold self-start text-xs sm:text-base">
                Read more...
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
const Homepage = ({ announcementImages = [], listings = [] }) => {
  const [randomFaqs, setRandomFaqs] = useState([]);
  const [showModal, setShowModal] = useState(false); // mounted late
  const [open, setOpen] = useState(true);

  // Popup no longer fights the hero for LCP: it mounts a few seconds after
  // the page has fully loaded, and only if there is something to show.
  useEffect(() => {
    if (!announcementImages.length) return;
    return runAfterLoad(() => setShowModal(true), 2500);
  }, [announcementImages.length]);

  useEffect(() => {
    if (showModal && open) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [showModal, open]);

  useEffect(() => {
    setRandomFaqs(pickRandomFaqs(6));
  }, []);

  return (
    <>
      {/* Removes duplicate meta tags Next.js leaves behind in <head> */}
      <HeadDedupe />

      <Head>
        <title key="title">
          Book Hostels in Mumbai for college students | Student Housing
        </title>

        <meta
          name="description"
          content="Student Housing offers fully furnished student hostels in Mumbai near top colleges across Vile Parle, Juhu, and Andheri with secure and comfortable living"
          key="description"
        />

        {/* OPEN GRAPH */}
        <meta
          property="og:url"
          content="https://www.studenthousing.co.in/"
          key="og:url"
        />
        <meta property="og:type" content="website" key="og:type" />
        <meta
          property="og:title"
          content="Book Hostels in Mumbai for college students | Student Housing"
          key="og:title"
        />
        <meta
          property="og:description"
          content="Student Housing offers fully furnished student hostels in Mumbai near top colleges across Vile Parle, Juhu, and Andheri with secure and comfortable living"
          key="og:description"
        />
        <meta
          property="og:image"
          content="https://www.studenthousing.co.in/DAN09168.webp"
          key="og:image"
        />

        {/* TWITTER */}
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twitter:card"
        />
        <meta
          name="twitter:title"
          content="Student Hostels in Mumbai for Boys & Girls | Student Housing"
          key="twitter:title"
        />
        <meta
          name="twitter:description"
          content="Student Housing offers fully furnished student hostels in Mumbai near top colleges across Vile Parle, Juhu, and Andheri with secure and comfortable living"
          key="twitter:description"
        />
        <meta
          name="twitter:image"
          content="https://www.studenthousing.co.in/DAN09168.webp"
          key="twitter:image"
        />
        <meta
          name="twitter:domain"
          content="studenthousing.co.in"
          key="twitter:domain"
        />
        <meta
          name="twitter:url"
          content="https://www.studenthousing.co.in/"
          key="twitter:url"
        />

        {/* FAVICON */}
        <link rel="icon" href="/sh_logo.png" key="favicon" />

        {/* LOCAL BUSINESS SCHEMA */}
        <script
          type="application/ld+json"
          key="local-business-schema"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Student Housing India Limited",
              image: "https://www.studenthousing.co.in/SH.png",
              url: "https://www.studenthousing.co.in/",
              telephone: "+919819780000",
              priceRange: "₹₹₹",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Avenue By Student Housing, Shree Krishna building, NS Mankikar Rd, next to Shetty tower, Nutan Laxmi Society, JVPD Scheme, Vile Parle West",
                addressLocality: "Mumbai",
                postalCode: "400049",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 19.10831612604247,
                longitude: 72.83014687940613,
              },
              sameAs: [
                "https://www.facebook.com/StudentHousingIN",
                "https://www.instagram.com/studenthousing_mumbai/",
                "https://www.youtube.com/@studenthousingmumbai",
                "https://in.linkedin.com/company/student-housing-india",
                "https://www.studenthousing.co.in/",
              ],
            }),
          }}
        />
      </Head>

      {/* Instagram embed: third-party, so load it only once the page is idle */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        id="instagram-embed"
      />

      {showModal && (
        <div className="z-50">
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            title={"Luxury 15 storey Girls Hostel, next to NMIMS Mumbai at: "}
          >
            <div className="flex flex-col gap-4">
              <Carousel images={announcementImages} />
              <div className="flex justify-center gap-4 ">
                <a
                  href={heroPageModalCTAButton.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-center w-[40%] sm:w-[30%] cursor-pointer select-none justify-center rounded-md border border-transparent px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base font-medium text-gray-700 shadow-sm bg-[#ffcc29] hover:bg-[#fad45a]"
                >
                  Visit us now
                </a>
                <a
                  href={`tel:${heroPageModalCTAButton?.call}`}
                  className="inline-flex items-center text-center w-[40%] sm:w-[30%] justify-center rounded-md border border-transparent px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base font-medium text-gray-700 shadow-sm bg-[#ffcc29] hover:bg-[#fad45a]"
                >
                  Call now
                </a>
              </div>
            </div>
          </Modal>
        </div>
      )}

      <Layout
        open={true}
        title="Homepage"
        description="Find your perfect student home"
      >
        <HeroSection />
        <USPsSection />
        <Quote />
        <RoomOptionsAndPricing
          sectionTitle={`Our premium student hostels`}
          data={listings}
        />
        <Journey />

        <LazyOnView minHeight={500}>
          <Awards />
        </LazyOnView>
        <LazyOnView minHeight={500}>
          <StudentTestimonials />
        </LazyOnView>
        <LazyOnView minHeight={500}>
          <Event />
        </LazyOnView>

        <AboutSection />
        <ReferSection />

        <LazyOnView minHeight={600}>
          <InstitutionsSection />
        </LazyOnView>
        <LazyOnView minHeight={400}>
          <Queries />
        </LazyOnView>

        <FAQ faqs={randomFaqs} />

        <LazyOnView minHeight={500}>
          <BlogsSection />
        </LazyOnView>

        <span className="fixed bottom-[25px] right-[20px] z-[1000]">
          <WhatsAppButton message={""} />
        </span>
      </Layout>
    </>
  );
};

export default Homepage;

/* ------------------------------------------------------------------ */
/* Data: statically generated + revalidated (was getServerSideProps)   */
/* ------------------------------------------------------------------ */
const ANNOUNCEMENT_QUERY = gql`
  query Announcement {
    announcements {
      images {
        url
      }
    }
  }
`;

const HOSTELS_QUERY = gql`
  query HostelsOrder {
    hostelsOrders(first: 1000) {
      hostel {
        name
        slug
        description
        address {
          line1
          line2
          city
          state
          zip
        }
        amenities
        images {
          url
          id
        }
        metatags {
          metaName
          metaContent
          metaProperty
        }
        schemaMarkup
        mapEmbed
        total_price
        price
        gender
        foodMenu {
          id
          url
        }
        video_link
        faqs {
          question
          answer
        }
        occupancies {
          price
          description
          total_beds
          period
        }
        collegesNearby {
          name
          distance
        }
      }
    }
  }
`;

export async function getStaticProps() {
  try {
    // Run both requests in parallel instead of one after the other
    const [announcementRes, hostelsRes] = await Promise.all([
      client.query({ query: ANNOUNCEMENT_QUERY }),
      client.query({ query: HOSTELS_QUERY }),
    ]);

    const announcements = announcementRes.data?.announcements || [];
    const announcementImages = (announcements[0]?.images || []).map(
      (image) => image.url
    );
    const hostels = hostelsRes.data?.hostelsOrders?.[0]?.hostel || [];

    return {
      props: { announcementImages, listings: hostels },
      revalidate: 60, // rebuild in the background at most once a minute
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { announcementImages: [], listings: [] },
      revalidate: 10, // retry soon if the CMS was down
    };
  }
}