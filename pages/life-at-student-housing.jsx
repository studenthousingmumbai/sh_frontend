
import Head from "next/head";
import Layout from "../components/Layout";

export default function LifeAtStudentHousing() {
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
            src="/life-banner.jpeg"
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
          <div className="max-w-6xl mx-auto px-6 py-20 space-y-28">

            {/* INTRO */}
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-4xl font-bold text-gray-900">
                Start living your best life <span className="text-teal-500">from day one</span>
              </p>
              <p className="text-gray-500 mt-4 text-lg">
                Bring a bag full of hopes, dreams and ambitions - everything else,
                a comfortable room, good food, and a community, is already taken care of.
              </p>
            </div>

            {/* ACCOMMODATION - images left, text right */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">
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
                    src="/life-accommodation-3.webp"
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

            {/* FOOD - text left, image right */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-gray-900">
                  Food that tastes like <span className="text-teal-500">home-cooked</span>
                </h2>
                <p className="text-gray-500 mt-4 text-lg leading-relaxed">
                  Wholesome, hygienically prepared meals served through the day
                  - breakfast, lunch, evening snacks and dinner - with a
                  rotating menu so it never feels repetitive.
                </p>
              </div>
              <img
                src="/life-food.webp"
                alt="Dining area"
                className="order-1 lg:order-2 rounded-2xl shadow-xl object-cover w-full h-[340px]"
              />
            </div>

            {/* FACILITIES */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">
                  Facilities built for <span className="text-teal-500">downtime</span>
                </h2>
                <p className="text-gray-500 mt-3 text-lg">
                  A break from studying is just an elevator ride away.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src="/life-facility-pool.webp"
                    alt="Swimming pool"
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="p-6">
                    <div className="bg-indigo-100 p-3 rounded-xl inline-block mb-3">🏊</div>
                    <h3 className="text-xl font-semibold text-gray-900">Swimming Pool</h3>
                    <p className="text-gray-500 mt-2">
                      Cool off after a long day with a dip in our on-site pool.
                    </p>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src="/life-facility-pickleball.webp"
                    alt="Pickleball court"
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="p-6">
                    <div className="bg-green-100 p-3 rounded-xl inline-block mb-3">🏓</div>
                    <h3 className="text-xl font-semibold text-gray-900">Pickleball Court</h3>
                    <p className="text-gray-500 mt-2">
                      Grab a paddle and challenge your floor to a match.
                    </p>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src="/life-facility-gym.webp"
                    alt="Gym"
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="p-6">
                    <div className="bg-yellow-100 p-3 rounded-xl inline-block mb-3">🏋️</div>
                    <h3 className="text-xl font-semibold text-gray-900">Gym</h3>
                    <p className="text-gray-500 mt-2">
                      A fully equipped fitness space, open whenever you are.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FREE PICKUP & DROP - text left, image right */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">
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

            {/* EVENTS */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">
                  A community that <span className="text-teal-500">celebrates together</span>
                </h2>
                <p className="text-gray-500 mt-3 text-lg">
                  From annual fests to festive get-togethers, there's always something happening.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src="/life-event-shpl.webp"
                    alt="SHPL event"
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">SHPL</h3>
                    <p className="text-gray-500 mt-2">
                      Our own Student Housing Premier League - inter-property
                      sports tournaments residents look forward to all year.
                    </p>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src="/life-event-valentines.webp"
                    alt="Valentine's Day event"
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">Valentine's Day</h3>
                    <p className="text-gray-500 mt-2">
                      Themed decor, games and get-togethers that turn the
                      hostel common area into a celebration space.
                    </p>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src="/life-event-parties.webp"
                    alt="Resident parties"
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">Parties</h3>
                    <p className="text-gray-500 mt-2">
                      Birthdays, festivals, exam-week wind-downs - reasons to
                      get together are never in short supply.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* REVIEWS */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">
                  What our <span className="text-teal-500">residents say</span>
                </h2>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
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
                  <div
                    key={review.name}
                    className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-6"
                  >
                    <div className="text-yellow-400 mb-3">★★★★★</div>
                    <p className="text-gray-600 leading-relaxed">"{review.text}"</p>
                    <p className="text-gray-900 font-semibold mt-4">{review.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Ready to make Student Housing your home?
              </h2>
              <p className="text-gray-500 mt-3 text-lg">
                Get in touch and our team will help you find the right room.
              </p>
              
                href="/contact-us"
                className="inline-block mt-6 bg-[#fad45a] text-black px-8 py-3 rounded-xl font-medium"
              <a>
                Contact Us
              </a>
            </div>

          </div>
        </div>
      </Layout>
    </>
  );
}