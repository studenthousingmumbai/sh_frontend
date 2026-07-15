import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { useRef, useState } from "react";
import ZigzagScrollPath from "../components/ZigzagScrollPath";
import BookingModal from "../components/BookingModal";

export default function LifeAtStudentHousing() {
  const containerRef = useRef(null);
  const accommodationRef = useRef(null);
  const foodRef = useRef(null);
  const facilitiesRef = useRef(null);
  const pickupRef = useRef(null);
  const eventsRef = useRef(null);
  const reviewsRef = useRef(null);
  const [bookingOpen, setBookingOpen] = useState(false);

const sectionRefs = [
  accommodationRef,
  foodRef,
  facilitiesRef,
  eventsRef,
  reviewsRef,
];

  // Shared classes: white rounded card on mobile, transparent/plain on desktop (lg+)
  const cardClasses =
    "bg-white rounded-3xl shadow-lg shadow-black/5 p-1 sm:p-8 lg:bg-transparent lg:shadow-none lg:p-0 lg:rounded-none grid lg:grid-cols-2 gap-8 lg:gap-10 items-center relative z-10";
  const textClasses = "text-center lg:text-left";
  const paraClasses = "text-gray-600 lg:text-black mt-4 text-base lg:text-lg leading-relaxed";
  const headingClasses = "text-2xl lg:text-3xl font-bold text-gray-900";

  return (
    <>
      <Head>
        <title>Life @ Student Housing | Hostel Living in Mumbai</title>
        <meta
          name="description"
          content="Explore life at Student Housing - fully furnished rooms, home-style food, swimming pool, pickleball & gym, free pick up & drop, events and more."
        />

        <meta property="og:url" content="https://www.studenthousing.co.in/life-at-student-housing" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Life @ Student Housing | Hostel Living in Mumbai" />
        <meta
          property="og:description"
          content="Explore life at Student Housing - fully furnished rooms, home-style food, swimming pool, pickleball & gym, free pick up & drop, events and more."
        />
        <meta property="og:image" content="https://www.studenthousing.co.in/testimonial_9_.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="studenthousing.co.in" />
        <meta property="twitter:url" content="https://www.studenthousing.co.in/life-at-student-housing" />
        <meta name="twitter:title" content="Life @ Student Housing | Hostel Living in Mumbai" />
        <meta
          name="twitter:description"
          content="Explore life at Student Housing - fully furnished rooms, home-style food, swimming pool, pickleball & gym, free pick up & drop, events and more."
        />
        <meta name="twitter:image" content="https://www.studenthousing.co.in/testimonial_9_.webp"></meta>
      </Head>

      <Layout>
        {/* BANNER */}
        <div className="relative flex justify-center bg-gray-100 items-center my-auto h-[500px]">
          <img
            className="w-full h-full object-cover"
            src="/contact-bg.jpeg"
            alt="Life at Student Housing"
          />
          <div className="absolute bg-black-overlay w-full h-full"></div>
          <div className="absolute w-full text-center">
            <h1 className="uppercase text-2xl text-white">
              <b>Life @ Student Housing</b>
            </h1>
          </div>
        </div>

        <div className="bg-[#ffffff]">
         <div
  className="max-w-6xl mx-auto px-4 sm:px-6 pt-0 pb-20 space-y-8 lg:space-y-12 relative"
  ref={containerRef}
>

            <ZigzagScrollPath sectionRefs={sectionRefs} containerRef={containerRef} />

            {/* INTRO */}
            <div className="text-center max-w-2xl mx-auto relative z-10">
              <p className="text-4xl font-bold text-gray-900">
                Start living your best life <span className="text-[#FFCC29]">from day one</span>
              </p>
              <p className="text-black mt-4 text-lg">
                Bring your dreams and ambitions - we'll take care of the rest. From comfortable rooms and wholesome meals to modern amenities and a vibrant community, discover what life at Student Housing is all about.
              </p>
            </div>

            {/* ACCOMMODATION - images left, text right (mobile: images already show first) */}
            <div ref={accommodationRef} className={cardClasses}>
              <div className="relative grid grid-cols-2 gap-4">
                <img
                  src="/DSC06956.webp"
                  alt="Student housing room"
                  className="rounded-2xl shadow-xl object-cover w-full h-[420px]"
                />
                <div className="space-y-4 pt-10">
                  <img
                    src="/DAN09002.webp"
                    alt="Common area"
                    className="rounded-2xl shadow-xl object-cover w-full h-[190px]"
                  />
                  <img
                    src="/DSC06839.webp"
                    alt="Hostel corridor"
                    className="rounded-2xl shadow-xl object-cover w-full h-[190px]"
                  />
                </div>
              </div>
              <div className={textClasses}>
                <h2 className={headingClasses}>
                  Accommodation that feels like <span className="text-[#FFCC29]">home</span>
                </h2>
                <p className={paraClasses}>
                  Fully furnished single, double and triple sharing rooms with
                  attached washrooms, storage, study desks and high-speed WiFi.
                  Housekeeping and linen change are handled for you, so you can
                  focus on college, not chores.
                </p>
              </div>
            </div>

            {/* FOOD - text left, images right on desktop; images shown first on mobile */}
            <div ref={foodRef} className={cardClasses}>
              <div className="order-2 lg:order-none">
                <div className={textClasses}>
                  <h2 className={headingClasses}>
                    Wholesome meals, <span className="text-[#FFCC29]">just like home</span>
                  </h2>
                  <p className={paraClasses}>
                    Wholesome, hygienically prepared meals served through the day
                    - breakfast, lunch, evening snacks and dinner - with a
                    rotating menu so it never feels repetitive.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-none relative grid grid-cols-2 gap-4">
                <img
                  src="/P1009253.webp"
                  alt="Dining area"
                  className="rounded-2xl shadow-xl object-cover w-full h-[420px]"
                />
                <div className="space-y-4 pt-10">
                  <img
                    src="/DAN09233.webp"
                    alt="Meal spread"
                    className="rounded-2xl shadow-xl object-cover w-full h-[190px]"
                  />
                  <img
                    src="/P1009224.webp"
                    alt="Dining hall"
                    className="rounded-2xl shadow-xl object-cover w-full h-[190px]"
                  />
                </div>
              </div>
            </div>

            {/* FACILITIES - images left, text right (mobile: images already show first) */}
            <div ref={facilitiesRef} className={cardClasses}>
              <div className="relative grid grid-cols-2 gap-4">
                <img
                  src="/IMG_2383.webp"
                  alt="gym"
                  className="rounded-2xl shadow-xl object-cover w-full h-[420px]"
                />
                <div className="space-y-4 pt-10">
                  <img
                    src="/DAN09360_.webp"
                    alt="Pickleball court"
                    className="rounded-2xl shadow-xl object-cover w-full h-[190px]"
                  />
                  <img
                    src="/DJI_20260526185058_0019_D_.webp"
                    alt="Swimming pool"
                    className="rounded-2xl shadow-xl object-cover w-full h-[190px]"
                  />
                </div>
              </div>
              <div className={textClasses}>
                <h2 className={headingClasses}>
                  Amenities for every part of <span className="text-[#FFCC29]">Student Life</span>
                </h2>
                <p className={paraClasses}>
                  A break from studying is just an elevator ride away. Cool off
                  after a long day with a dip in our swimming pool, grab a paddle
                  for a pickleball match with your floor, or head to the fully
                  equipped gym whenever you need to sweat it out.
                </p>
                <h2 className={`${headingClasses} mt-4`}>
                  Free pick up & <span className="text-[#FFCC29]">drop</span>
                </h2>
                {/* <p className="text-black mt-4 text-lg leading-relaxed">
                  Moving in shouldn't be stressful. We offer complimentary
                  pick up and drop assistance for residents, so your first
                  day starts on the right note.
                </p> */}
              </div>
            </div>

            {/* FREE PICKUP & DROP - text left, image right 
            <div ref={pickupRef} className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
              <div className="order-2 lg:order-1">
                <div className="bg-indigo-100 p-3 rounded-xl inline-block mb-4">🚐</div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Free pick up & <span className="text-[#FFCC29]">drop</span>
                </h2>
                <p className="text-black mt-4 text-lg leading-relaxed">
                  Moving in shouldn't be stressful. We offer complimentary
                  pick up and drop assistance for residents, so your first
                  day starts on the right note.
                </p>
              </div>
              <img
                src="/life-pickup-drop.webp"
                alt="Pick up and drop service"
                className="order-1 lg:order-2 rounded-2xl shadow-xl object-cover w-full h-[340px]"
              />
            </div>
*/}
            {/* EVENTS - text left, images right on desktop; images shown first on mobile */}
            <div ref={eventsRef} className={cardClasses}>
              <div className="order-2 lg:order-none">
                <div className={textClasses}>
                  <h2 className={headingClasses}>
                    A community that <span className="text-[#FFCC29]">celebrates together</span>
                  </h2>
                  <p className={paraClasses}>
                    From the Student Housing Premier League and Valentine's Day
                    celebrations to birthday and festival parties, there's always
                    something happening to bring residents together.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-none relative grid grid-cols-2 gap-4">
                <img
                  src="/IMG_7505.webp"
                  alt="SHPL event"
                  className="rounded-2xl shadow-xl object-cover w-full h-[420px]"
                />
                <div className="space-y-4 pt-10">
                  <img
                    src="/549A7343.webp"
                    alt="Valentine's Day event"
                    className="rounded-2xl shadow-xl object-cover w-full h-[190px]"
                  />
                  <img
                    src="/shpl_1.webp"
                    alt="Resident parties"
                    className="rounded-2xl shadow-xl object-cover w-full h-[190px]"
                  />
                </div>
              </div>
            </div>

            {/* REVIEWS - images left, text right (mobile: images already show first) */}
            <div ref={reviewsRef} className={cardClasses}>
              <div className="relative grid grid-cols-2 gap-4">
                <img
                  src="/testimonial_1.webp"
                  alt="Resident life"
                  className="rounded-2xl shadow-xl object-cover w-full h-[420px]"
                />
                <div className="space-y-4 pt-10">
                  <img
                    src="/testimonial_9_.webp"
                    alt="Resident life"
                    className="rounded-2xl shadow-xl object-cover w-full h-[190px]"
                  />
                  <img
                    src="/testimonial_10_.webp"
                    alt="Resident life"
                    className="rounded-2xl shadow-xl object-cover w-full h-[190px]"
                  />
                </div>
              </div>
              <div className={textClasses}>
                <h2 className={headingClasses}>
                  What our <span className="text-[#FFCC29]">residents say</span>
                </h2>
                <div className="mt-6 space-y-6">
                  {[
                    {
                      name: "Josna Mathews",
                      text: "Comfortable place to stay. Would definitely recommend non-mumbaikars to avail this luxury.",
                    },
                    {
                      name: "Khushi Kharwa",
                      text: "Great services. Would highly recommend.",
                    },
                    {
                      name: "Saakshi Mishra",
                      text: "Very good housing, 10/10 would recommend",
                    },
                  ].map((review) => (
                    <div key={review.name}>
                      <div className="text-yellow-400 mb-1">★★★★★</div>
                      <p className="text-gray-600 leading-relaxed">"{review.text}"</p>
                      <p className="text-gray-900 font-semibold mt-1">{review.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            {/* STATS - Trusted Student Living */}
            <div
              className="bg-white py-16 rounded-2xl relative z-10"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-black">
                  Trusted Student Living, <span className="text-[#FFCC29]">Built Over the Years</span>
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <p className="text-4xl font-bold text-[#FFCC29]">1250+</p>
                  <p className="text-black mt-2 text-lg">Beds Available</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#FFCC29]">12+</p>
                  <p className="text-black mt-2 text-lg">Premium Hostels</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#FFCC29]">10+</p>
                  <p className="text-black mt-2 text-lg">Years of Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#FFCC29]">6000+</p>
                  <p className="text-black mt-2 text-lg">Students Hosted</p>
                </div>
              </div>
            </div>

            {/* CTA - Find Your New Home */}
            <div
              className="bg-[#f8f8f8] py-16 rounded-2xl relative z-10"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-black">
                  Ready to Find Your New <span className="text-[#FFCC29]">Home Away From Home?</span>
                </h2>
                <p className="text-black mt-4 text-lg leading-relaxed">
                  Experience student living designed around comfort, convenience, and community.
                  Explore fully managed student accommodations with modern rooms, daily meals,
                  essential amenities, and everything you need to make your college journey easier.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
  <Link href="/listings" legacyBehavior>
    <a className="bg-[#FFCC29] text-black font-semibold px-8 py-3 rounded-full hover:opacity-90 transition">
      Explore Hostels
    </a>
  </Link>
  <button
    onClick={() => setBookingOpen(true)}
    className="border-2 border-[#FFCC29] text-black font-semibold px-8 py-3 rounded-full hover:bg-[#FFCC29] transition"
  >
    Book a Visit
  </button>
</div>
              </div>
            </div>

          </div>
        </div>
      </Layout>
       <BookingModal open={bookingOpen} setOpen={setBookingOpen} />
    </>
  );
}