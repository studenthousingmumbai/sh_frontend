import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { useEffect, useRef, useState } from "react";
import BookingModal from "../components/BookingModal";

/* ------------------------------------------------------------------ */
/*  EVENTS DATA – add a new object here and a new section appears.     */
/*  main   = big hero photo                                            */
/*  photos = polaroids (up to 8 are placed; more are ignored)          */
/* ------------------------------------------------------------------ */
const events = [
  {
    month: "OCT",
    year: "2025",
    prefix: "The",
    title: "White Affair",
    tagline:
      "The grand podium launch celebrated with style, music, and an unforgettable poolside party.",
    paragraphs: [
      "The launch of our spectacular podium was celebrated with The White Affair - an unforgettable evening of elegance, music, and celebration.",
      "Over 300 students, dressed in all white, came together for a vibrant poolside party featuring live entertainment, exciting activities, and an electric atmosphere.",
    ],
    main: { src: "/events/white-affair-main.webp", alt: "White Affair pool party" },
    photos: [
      { src: "/events/white-affair-1.webp", alt: "Glow cups" },
      { src: "/events/white-affair-2.webp", alt: "Students at tables" },
      { src: "/events/white-affair-3.webp", alt: "Friends posing" },
      { src: "/events/white-affair-4.webp", alt: "Group celebration" },
      { src: "/events/white-affair-5.webp", alt: "DJ console" },
      { src: "/events/white-affair-6.webp", alt: "Clubhouse welcome board" },
      { src: "/events/white-affair-7.webp", alt: "On stage" },
      { src: "/events/white-affair-8.webp", alt: "Group photo" },
    ],
  },
  {
    month: "FEB",
    year: "2026",
    prefix: "A",
    title: "Valentine's Night",
    tagline: "Fairy lights, good food and a night to celebrate every kind of love.",
    paragraphs: [
      "Write a short description of the event here.",
      "Add a second paragraph with highlights, numbers or a memorable moment.",
    ],
    main: { src: "/events/valentine-main.webp", alt: "Valentine's Day event" },
    photos: [
      { src: "/events/valentine-1.webp", alt: "Decor" },
      { src: "/events/valentine-2.webp", alt: "Residents" },
      { src: "/events/valentine-3.webp", alt: "Dinner" },
      { src: "/events/valentine-4.webp", alt: "Games" },
      { src: "/events/valentine-5.webp", alt: "Group photo" },
    ],
  },
];

/* Desktop positions for polaroids (% of the collage area) + tilt */
const slots = [
  { l: "61%", t: "0%", w: "17%", r: "5deg", tape: true },
  { l: "79%", t: "3%", w: "20%", r: "-4deg", tape: true },
  { l: "1%", t: "69%", w: "20%", r: "-3deg", tape: false },
  { l: "22%", t: "72%", w: "19%", r: "4deg", tape: true },
  { l: "43%", t: "70%", w: "18%", r: "-5deg", tape: false },
  { l: "62%", t: "38%", w: "17%", r: "3deg", tape: false },
  { l: "80%", t: "37%", w: "19%", r: "-3deg", tape: true },
  { l: "80%", t: "68%", w: "19%", r: "4deg", tape: false },
];

/* Rough "paint brush" edge for the main photo */
const brushClip =
  "polygon(2% 6%, 9% 1%, 20% 4%, 33% 0%, 47% 3%, 61% 0%, 76% 4%, 90% 1%, 98% 7%, 100% 22%, 97% 38%, 100% 54%, 98% 70%, 100% 86%, 94% 98%, 80% 96%, 64% 100%, 48% 97%, 32% 100%, 17% 96%, 4% 99%, 0% 84%, 3% 68%, 0% 52%, 3% 36%, 0% 20%)";

/* Fade/slide in when scrolled into view */
function Reveal({ children, delay = 0, className = "", style = {} }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

function Polaroid({ photo, slot, index }) {
  return (
    <Reveal
      delay={150 + index * 90}
      className="w-full lg:absolute lg:left-[var(--l)] lg:top-[var(--l-t)] lg:w-[var(--w)] hover:z-30"
      style={{ "--l": slot.l, "--l-t": slot.t, "--w": slot.w }}
    >
      <div
        className="relative bg-[#f7f3ea] p-2 pb-6 sm:p-2.5 sm:pb-8 shadow-[0_8px_22px_rgba(0,0,0,0.18)] rotate-[var(--r)] hover:rotate-0 hover:scale-105 transition-transform duration-300"
        style={{ "--r": slot.r }}
      >
        {slot.tape && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-3 w-16 h-5 bg-[#d9cfae]/80 shadow-sm" />
        )}
        <img
          src={photo.src}
          alt={photo.alt || "Event photo"}
          loading="lazy"
          className="w-full aspect-[4/5] object-cover"
        />
      </div>
    </Reveal>
  );
}

function EventSection({ event }) {
  const photos = event.photos.slice(0, slots.length);

  return (
    <section className="relative bg-[#ece6d8] rounded-3xl shadow-lg shadow-black/5 overflow-hidden p-5 sm:p-8 lg:p-10 grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-8 z-10">
      {/* LEFT: date ribbon + text */}
      <div className="relative lg:pt-2">
        <Reveal>
          <div
            className="inline-flex flex-col items-center justify-center bg-[#FFCC29] text-black w-16 pt-3 pb-6 leading-none"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 86%, 0 100%)" }}
          >
            <span className="text-xs font-bold tracking-widest">{event.month}</span>
            <span className="text-xl font-bold mt-1">{event.year.slice(0, 2)}</span>
            <span className="text-xl font-bold">{event.year.slice(2)}</span>
          </div>

          <p
            className="mt-6 text-3xl italic text-[#b8893a]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {event.prefix}
          </p>
          <h2
            className="uppercase text-4xl sm:text-5xl font-semibold leading-[1.05] text-gray-900"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {event.title}
          </h2>

          <p className="mt-5 font-bold text-gray-900 leading-snug">{event.tagline}</p>
          {event.paragraphs.map((p, i) => (
            <p key={i} className="mt-3 text-sm text-gray-700 leading-relaxed">
              {p}
            </p>
          ))}
        </Reveal>
      </div>

      {/* RIGHT: scrapbook collage */}
      <div className="grid grid-cols-2 gap-5 lg:gap-0 lg:block lg:relative lg:h-[620px]">
        <Reveal
          className="col-span-2 lg:absolute lg:left-0 lg:top-[2%] lg:w-[60%] lg:h-[66%]"
        >
          <div
            className="h-[260px] sm:h-[360px] lg:h-full w-full overflow-hidden shadow-xl"
            style={{ clipPath: brushClip }}
          >
            <img
              src={event.main.src}
              alt={event.main.alt}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </Reveal>

        {photos.map((photo, i) => (
          <Polaroid key={i} photo={photo} slot={slots[i]} index={i} />
        ))}
      </div>
    </section>
  );
}

export default function Events() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Events @ Student Housing | Hostel Events in Mumbai</title>
        <meta
          name="description"
          content="Pool parties, Student Housing Premier League, festival and birthday celebrations - explore the events that make life at Student Housing unforgettable."
        />
        <meta property="og:url" content="https://www.studenthousing.co.in/events" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Events @ Student Housing | Hostel Events in Mumbai" />
        <meta
          property="og:description"
          content="Pool parties, Student Housing Premier League, festival and birthday celebrations - explore the events that make life at Student Housing unforgettable."
        />
        <meta property="og:image" content="https://www.studenthousing.co.in/IMG_7505.webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Layout>
        {/* BANNER */}
        <div className="relative flex justify-center bg-gray-100 items-center my-auto h-[500px]">
          <img
            className="w-full h-full object-cover"
            src="/contact-bg.jpeg"
            alt="Events at Student Housing"
          />
          <div className="absolute bg-black-overlay w-full h-full"></div>
          <div className="absolute w-full text-center">
            <h1 className="uppercase text-2xl text-white">
              <b>Events @ Student Housing</b>
            </h1>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-0 pb-20 space-y-10 lg:space-y-16 relative">
            {/* INTRO */}
            <div className="text-center max-w-2xl mx-auto relative z-10">
              <p className="text-4xl font-bold text-gray-900">
                Memories made <span className="text-[#FFCC29]">together</span>
              </p>
              <p className="text-black mt-4 text-lg">
                From poolside parties to sports leagues and festival nights, there's always
                something happening at Student Housing. Here are some of our favourite moments.
              </p>
            </div>

            {/* EVENTS – one below the other */}
            {events.map((event) => (
              <EventSection key={`${event.month}-${event.year}-${event.title}`} event={event} />
            ))}

            {/* CTA */}
            <div
              className="bg-[#f8f8f8] py-16 rounded-2xl relative z-10"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl font-bold text-black">
                  Be Part of the Next <span className="text-[#FFCC29]">Big Event</span>
                </h2>
                <p className="text-black mt-4 text-lg leading-relaxed">
                  Come see the community in person. Explore our hostels or book a visit and
                  find your place at Student Housing.
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