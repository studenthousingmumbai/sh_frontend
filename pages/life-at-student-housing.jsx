import Head from "next/head";
import Layout from "../components/Layout";

function AltSection({ reverse, eyebrow, highlight, text, imgSrc, imgAlt }) {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <div className={reverse ? "order-2 lg:order-1" : ""}>
        <h2 className="text-3xl font-bold text-gray-900">
          {eyebrow} <span className="text-teal-500">{highlight}</span>
        </h2>
        <p className="text-gray-500 mt-4 text-lg leading-relaxed">{text}</p>
      </div>
      <img
        src={imgSrc}
        alt={imgAlt}
        className={`rounded-2xl shadow-xl object-cover w-full h-[340px] ${
          reverse ? "order-1 lg:order-2" : ""
        }`}
      />
    </div>
  );
}

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
          <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">

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

            {/* ACCOMMODATION */}
            <AltSection
              eyebrow="Accommodation that feels like"
              highlight="home"
              text="Fully furnished single, double and triple sharing rooms with attached washrooms, storage, study desks and high-speed WiFi. Housekeeping and linen change are handled for you, so you can focus on college, not chores."
              imgSrc="/life-accommodation.webp"
              imgAlt="Student housing room"
            />

            {/* FOOD */}
            <AltSection
              reverse
              eyebrow="Food that tastes like"
              highlight="home-cooked"
              text="Wholesome, hygienically prepared meals served through the day - breakfast, lunch, evening snacks and dinner - with a rotating menu so it never feels repetitive."
              imgSrc="/life-food.webp"
              imgAlt="Dining area"
            />

            {/* FACILITIES - Swimming Pool */}
            <AltSection
              eyebrow="Cool off at the"
              highlight="Swimming Pool"
              text="Take a break between classes or unwind after a long day with a dip in our on-site swimming pool, open to all residents."
              imgSrc="/life-facility-pool.webp"
              imgAlt="Swimming pool"
            />

            {/* FACILITIES - Pickleball */}
            <AltSection
              reverse
              eyebrow="Grab a paddle at the"
              highlight="Pickleball Court"
              text="Challenge your floor to a match on our dedicated pickleball court - a fun, easy way to stay active and meet fellow residents."
              imgSrc="/life-facility-pickleball.webp"
              imgAlt="Pickleball court"
            />

            {/* FACILITIES - Gym */}
            <AltSection
              eyebrow="Stay fit at the"
              highlight="Gym"
              text="A fully equipped fitness space, open whenever you are, so skipping a workout is never about access."
              imgSrc="/life-facility-gym.webp"
              imgAlt="Gym"
            />

            {/* FREE PICKUP & DROP */}
            <AltSection
              reverse
              eyebrow="Free pick up &"
              highlight="drop"
              text="Moving in shouldn't be stressful. We offer complimentary pick up and drop assistance for residents, so your first day starts on the right note."
              imgSrc="/life-pickup-drop.webp"
              imgAlt="Pick up and drop service"
            />

            {/* EVENTS - SHPL */}
            <AltSection
              eyebrow="Compete in the"
              highlight="SHPL"
              text="Our own Student Housing Premier League - inter-property sports tournaments residents look forward to all year."
              imgSrc="/life-event-shpl.webp"
              imgAlt="SHPL event"
            />

            {/* EVENTS - Valentine's Day */}
            <AltSection
              reverse
              eyebrow="Celebrate"
              highlight="Valentine's Day"
              text="Themed decor, games and get-togethers that turn the hostel common area into a celebration space every February."
              imgSrc="/life-event-valentines.webp"
              imgAlt="Valentine's Day event"
            />

            {/* EVENTS - Parties */}
            <AltSection
              eyebrow="Never miss a"
              highlight="Party"
              text="Birthdays, festivals, exam-week wind-downs - reasons to get together are never in short supply."
              imgSrc="/life-event-parties.webp"
              imgAlt="Resident parties"
            />

            {/* REVIEWS */}
            <AltSection
              eyebrow="What Ananya R."
              highlight="says"
              text="&ldquo;The food and housekeeping made moving away from home so much easier. It genuinely feels like a second home.&rdquo;"
              imgSrc="/life-review-ananya.webp"
              imgAlt="Resident Ananya R."
            />

            <AltSection
              reverse
              eyebrow="What Rohan S."
              highlight="says"
              text="&ldquo;Loved the SHPL tournaments - made so many friends across floors I'd never have met otherwise.&rdquo;"
              imgSrc="/life-review-rohan.webp"
              imgAlt="Resident Rohan S."
            />

            <AltSection
              eyebrow="What Priya K."
              highlight="says"
              text="&ldquo;Free pick up on day one was such a relief. The pool and gym make weekends actually fun.&rdquo;"
              imgSrc="/life-review-priya.webp"
              imgAlt="Resident Priya K."
            />

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