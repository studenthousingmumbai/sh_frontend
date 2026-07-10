import Head from "next/head";
import Layout from "../components/Layout";
import { useRef } from "react";
import ZigzagScrollPath from "../components/ZigzagScrollPath";

export default function LifeAtStudentHousing() {
  const containerRef = useRef(null);
  const accommodationRef = useRef(null);
  const foodRef = useRef(null);
  const facilitiesRef = useRef(null);
  const pickupRef = useRef(null);
  const eventsRef = useRef(null);
  const reviewsRef = useRef(null);

const sectionRefs = [
  accommodationRef,
  foodRef,
  facilitiesRef,
  eventsRef,
  reviewsRef,
];

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
        <meta property="og:image" content="https://www.studenthousing.co.in/DAN09378.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="studenthousing.co.in" />
        <meta property="twitter:url" content="https://www.studenthousing.co.in/life-at-student-housing" />
        <meta name="twitter:title" content="Life @ Student Housing | Hostel Living in Mumbai" />
        <meta
          name="twitter:description"
          content="Explore life at Student Housing - fully furnished rooms, home-style food, swimming pool, pickleball & gym, free pick up & drop, events and more."
        />
        <meta name="twitter:image" content="https://www.studenthousing.co.in/DAN09378.webp"></meta>
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

        <div className="bg-gradient-to-br from-[#f8fafc] to-[#eef2ff]">
          <div className="max-w-6xl mx-auto px-6 py-20 space-y-28 relative" ref={containerRef}>

            <ZigzagScrollPath sectionRefs={sectionRefs} containerRef={containerRef} />

            {/* INTRO */}
            <div className="text-center max-w-2xl mx-auto relative z-10">
              <p className="text-4xl font-bold text-gray-900">
                Start living your best life <span className="text-teal-500">from day one</span>
              </p>
              <p className="text-gray-500 mt-4 text-lg">
                Bring a bag full of hopes, dreams and ambitions - everything else,
                a comfortable room, good food, and a community, is already taken care of.
              </p>
            </div>

            {/* ACCOMMODATION - images left, text right */}
            <div ref={accommodationRef} className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
              <div className="relative grid grid-cols-2 gap-4">
                <img
                  src="/life-accommodation-1.webp"
                  alt="Student housing room"
                  className="rounded-2xl shadow-xl object-cover w-full h-[420px]"
                />
                <div className="space-y-4 pt-10">
                  <img
                    src="/life-accommodation-2.webp"
                    alt="Common area"
                    className="rounded-2xl shadow-xl object-cover w-full h-[190px]"
                  />
                  <img
                    src="/contact-bg.jpeg"
                    alt="Hostel corridor"
                    className="rounded-2xl shadow-xl object-cover w-full h-[190px]"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Accommodation that feels like <span className="text-teal-500">home</span>
                </h2>
                <p className="text-gray-500 mt-4 text-lg leading-relaxed">
                  Fully furnished single, double and triple sharing rooms with
                  attached washrooms, storage, study desks and high-speed WiFi.
                  Housekeeping and linen change are handled for you, so you can
                  focus on college, not chores.
                </p>
              </div>
            </div>

            {/* FOOD - text left, images right */}
            <div ref={foodRef} className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Food that tastes like <span className="text-teal-500">home-cooked</span>
                </h2>
                <p className="text-gray-500 mt-4 text-lg leading-relaxed">
                  Wholesome, hygienically prepared meals served through the day
                  - breakfast, lunch, evening snacks and dinner - with a
                  rotating menu so it never feels repetitive.
                </p>
              </div>
              <div className="relative grid grid-cols-2 gap-4">
                <img
                  src="/life-food-1.webp"
                  alt="Dining area"
                  className="rounded-2xl shadow-xl object-cover w-full h-[420px]"
                />
                <div className="space-y-4 pt-10">
                  <img
                    src="/life-food-2.webp"
                    alt="Meal spread"
                    className="rounded-2xl shadow-xl object-cover w-full h-[190px]"
                  />
                  <img
                    src="/life-food-3.webp"
                    alt="Dining hall"
                    className="rounded-2xl shadow-xl object-cover w-full h-[190px]"
                  />
                </div>
              </div>
            </div>

            {/* FACILITIES - images left, text right */}
            <div ref={facilitiesRef} className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
              <div className="relative grid grid-cols-2 gap-4">
                <img
                  src="/life-facility-pool.webp"
                  alt="Swimming pool"
                  className="rounded-2xl shadow-xl object-cover w-full h-[420px]"
                />
                <div className="space-y-4 pt-10">
                  <img
                    src="/life-facility-pickleball.webp"
                    alt="Pickleball court"
                    className="rounded-2xl shadow-xl object-cover w-full h-[190px]"
                  />
                  <img
                    src="/life-facility-gym.webp"
                    alt="Gym"
                    className="rounded-2xl shadow-xl object-cover w-full h-[190px]"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Facilities built for <span className="text-teal-500">downtime</span>
                </h2>
                <p className="text-gray-500 mt-4 text-lg leading-relaxed">
                  A break from studying is just an elevator ride away. Cool off
                  after a long day with a dip in our swimming pool, grab a paddle
                  for a pickleball match with your floor, or head to the fully
                  equipped gym whenever you need to sweat it out.
                </p>
                <h2 className="text-3xl font-bold text-gray-900">
                  Free pick up & <span className="text-teal-500">drop</span>
                </h2>
                <p className="text-gray-500 mt-4 text-lg leading-relaxed">
                  Moving in shouldn't be stressful. We offer complimentary
                  pick up and drop assistance for residents, so your first
                  day starts on the right note.
                </p>
              </div>
            </div>

            {/* FREE PICKUP & DROP - text left, image right 
            <div ref={pickupRef} className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
              <div className="order-2 lg:order-1">
                <div className="bg-indigo-100 p-3 rounded-xl inline-block mb-4">🚐</div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Free pick up & <span className="text-teal-500">drop</span>
                </h2>
                <p className="text-gray-500 mt-4 text-lg leading-relaxed">
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
           
           {/* EVENTS - images left, text right */}
<div ref={eventsRef} className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
  <div className="relative grid grid-cols-2 gap-4">
    <img
      src="/life-event-shpl.webp"
      alt="SHPL event"
      className="rounded-2xl shadow-xl object-cover w-full h-[420px]"
    />
    <div className="space-y-4 pt-10">
      <img
        src="/life-event-valentines.webp"
        alt="Valentine's Day event"
        className="rounded-2xl shadow-xl object-cover w-full h-[190px]"
      />
      <img
        src="/life-event-parties.webp"
        alt="Resident parties"
        className="rounded-2xl shadow-xl object-cover w-full h-[190px]"
      />
    </div>
  </div>
  <div>
    <h2 className="text-3xl font-bold text-gray-900">
      A community that <span className="text-teal-500">celebrates together</span>
    </h2>
    <p className="text-gray-500 mt-4 text-lg leading-relaxed">
      From the Student Housing Premier League and Valentine's Day
      celebrations to birthday and festival parties, there's always
      something happening to bring residents together.
    </p>
  </div>
</div>

            {/* REVIEWS - images left, text right */}
         {/* REVIEWS - text left, images right */}
<div ref={reviewsRef} className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
  <div>
    <h2 className="text-3xl font-bold text-gray-900">
      What our <span className="text-teal-500">residents say</span>
    </h2>
    <div className="mt-6 space-y-6">
      {[
        {
          name: "Ananya R.",
          text: "The food and housekeeping made moving away from home so much easier. It genuinely feels like a second home.",
        },
        {
          name: "Rohan S.",
          text: "Loved the SHPL tournaments - made so many friends across floors I'd never have met otherwise.",
        },
        {
          name: "Priya K.",
          text: "Free pick up on day one was such a relief. The pool and gym make weekends actually fun.",
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
  <div className="relative grid grid-cols-2 gap-4">
    <img
      src="/life-review-1.webp"
      alt="Resident life"
      className="rounded-2xl shadow-xl object-cover w-full h-[420px]"
    />
    <div className="space-y-4 pt-10">
      <img
        src="/life-review-2.webp"
        alt="Resident life"
        className="rounded-2xl shadow-xl object-cover w-full h-[190px]"
      />
      <img
        src="/life-review-3.webp"
        alt="Resident life"
        className="rounded-2xl shadow-xl object-cover w-full h-[190px]"
      />
    </div>
  </div>
</div>

          </div>
        </div>
      </Layout>
    </>
  );
}