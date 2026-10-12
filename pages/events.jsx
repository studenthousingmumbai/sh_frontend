import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { useEffect, useRef, useState } from "react";
import BookingModal from "../components/BookingModal";

/* ------------------------------------------------------------------ */
/*  EVENTS DATA                                                        */
/*  layout: "mosaic" | "filmstrip" | "editorial" | "masonry" | "gallery"
/*  images: [{ src, alt }, ...]  – first image is the hero/lead image  */
/*  imgs() is just a shortcut for /events/<folder>/1.webp ... n.webp.  */
/*  Replace with an explicit array of your own URLs any time.          */
/* ------------------------------------------------------------------ */
const imgs = (folder, n, alt) =>
  Array.from({ length: n }, (_, i) => ({
    src: `/events/${folder}/${i + 1}.webp`,
    alt: `${alt} ${i + 1}`,
  }));

const events = [
  {
    layout: "mosaic",
    month: "OCT",
    year: "2025",
    title: "The White Affair",
    tagline: "300+ students, all in white, one unforgettable poolside night.",
    images: imgs("white-affair", 9, "White Affair"),
  },
  {
    layout: "filmstrip",
    month: "DEC",
    year: "2025",
    title: "Premier League",
    tagline: "Our annual SHPL - cricket, cheers and bragging rights.",
    images: imgs("shpl", 8, "SHPL"),
  },
  {
    layout: "editorial",
    month: "FEB",
    year: "2026",
    title: "Valentine's Night",
    tagline: "Fairy lights, good food and great company.",
    images: imgs("valentine", 8, "Valentine's Night"),
  },
  {
    layout: "masonry",
    month: "NOV",
    year: "2025",
    title: "Festival of Lights",
    tagline: "Diyas, rangoli and a hostel full of colour.",
    images: imgs("diwali", 12, "Festival celebration"),
  },
  {
    layout: "gallery",
    month: "MAR",
    year: "2026",
    title: "Birthday Bashes",
    tagline: "Because every resident's birthday deserves a party.",
    images: imgs("birthdays", 8, "Birthday party"),
  },
];

/* ------------------------------ helpers ------------------------------ */

function Reveal({ children, className = "" }) {
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
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function DateChip({ event, dark = false }) {
  return (
    <span
      className={`inline-block text-xs font-bold tracking-[0.2em] px-3 py-1 rounded-full ${
        dark ? "bg-black text-white" : "bg-[#FFCC29] text-black"
      }`}
    >
      {event.month} {event.year}
    </span>
  );
}

function Tile({ img, onClick, className = "" }) {
  if (!img) return null;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="View photo"
      className={`group relative block w-full h-full overflow-hidden cursor-zoom-in ${className}`}
    >
      <img
        src={img.src}
        alt={img.alt || "Event photo"}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <span className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </button>
  );
}

/* ---------------------------- 1. MOSAIC ------------------------------ */
/* Bento grid – big hero with title overlay + mixed-size tiles            */

function Mosaic({ event, open }) {
  const [hero, ...rest] = event.images;
  const spans = ["", "row-span-2", "", "col-span-2", "", ""];

  return (
    <section className="rounded-3xl bg-white p-2 sm:p-3 shadow-lg shadow-black/5 border border-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense auto-rows-[150px] sm:auto-rows-[190px] md:auto-rows-[200px] gap-2 sm:gap-3">
        <div className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden">
          <Tile img={hero} onClick={() => open(0)} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-0 p-5 sm:p-8 text-white">
            <DateChip event={event} />
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold uppercase leading-none">
              {event.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-white/85 max-w-sm">{event.tagline}</p>
          </div>
        </div>

        {rest.map((img, i) => (
          <div key={i} className={`rounded-2xl overflow-hidden ${spans[i] || ""}`}>
            <Tile img={img} onClick={() => open(i + 1)} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- 2. FILMSTRIP ---------------------------- */
/* Dark section, huge title, horizontal swipe row of tall photos         */

function Filmstrip({ event, open }) {
  const ref = useRef(null);
  const scroll = (dir) =>
    ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: "smooth" });

  return (
    <section className="rounded-3xl bg-[#111] text-white py-8 sm:py-12 overflow-hidden">
      <div className="px-5 sm:px-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
        <div>
          <DateChip event={event} />
          <h2 className="mt-3 text-4xl sm:text-6xl font-extrabold uppercase leading-none">
            {event.title}
          </h2>
          <p className="mt-3 text-white/70 max-w-md text-sm sm:text-base">{event.tagline}</p>
        </div>
        <div className="flex gap-3">
          {[
            ["←", -1, "Previous"],
            ["→", 1, "Next"],
          ].map(([label, dir, aria]) => (
            <button
              key={aria}
              type="button"
              aria-label={aria}
              onClick={() => scroll(dir)}
              className="w-11 h-11 rounded-full border border-white/30 hover:bg-[#FFCC29] hover:text-black hover:border-[#FFCC29] transition"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={ref}
        className="mt-8 flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 sm:px-10 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {event.images.map((img, i) => (
          <div
            key={i}
            className={`snap-center shrink-0 w-[78%] sm:w-[44%] lg:w-[30%] h-[380px] sm:h-[440px] rounded-2xl overflow-hidden ${
              i % 2 ? "mt-10" : ""
            }`}
          >
            <Tile img={img} onClick={() => open(i)} />
          </div>
        ))}
        <div className="shrink-0 w-2" />
      </div>
    </section>
  );
}

/* --------------------------- 3. EDITORIAL ---------------------------- */
/* Giant outlined title that the photos overlap, magazine style          */

function Editorial({ event, open }) {
  const [a, b, c, d, ...strip] = event.images;

  return (
    <section className="rounded-3xl bg-[#FFF6D6] px-4 sm:px-8 pt-8 sm:pt-10 pb-4 sm:pb-8">
      <div className="flex flex-wrap items-center gap-3">
        <DateChip event={event} />
        <p className="text-sm sm:text-base text-gray-800 max-w-md">{event.tagline}</p>
      </div>

      <h2
        className="relative z-0 mt-4 text-6xl sm:text-8xl font-black uppercase leading-[0.85] text-[#FFCC29] break-words"
        style={{ WebkitTextStroke: "2px #111" }}
      >
        {event.title}
      </h2>

      <div className="relative z-10 -mt-5 sm:-mt-10 grid lg:grid-cols-12 gap-3">
        <div className="lg:col-span-7 h-[300px] sm:h-[460px] rounded-2xl overflow-hidden shadow-xl">
          <Tile img={a} onClick={() => open(0)} />
        </div>
        <div className="lg:col-span-5 grid grid-cols-2 grid-rows-2 gap-3 h-[320px] sm:h-[460px]">
          <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl">
            <Tile img={b} onClick={() => open(1)} />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Tile img={c} onClick={() => open(2)} />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Tile img={d} onClick={() => open(3)} />
          </div>
        </div>
      </div>

      {strip.length > 0 && (
        <div className="relative z-10 mt-3 grid grid-cols-2 sm:grid-cols-4 auto-rows-[140px] sm:auto-rows-[190px] gap-3">
          {strip.map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-lg">
              <Tile img={img} onClick={() => open(i + 4)} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

/* ---------------------------- 4. MASONRY ----------------------------- */
/* Centered header, then a Pinterest-style wall of mixed-ratio photos    */

function Masonry({ event, open }) {
  const ratios = [
    "aspect-[3/4]",
    "aspect-square",
    "aspect-[4/5]",
    "aspect-[4/3]",
    "aspect-[3/4]",
    "aspect-square",
    "aspect-[4/5]",
  ];

  return (
    <section className="rounded-3xl bg-[#f4f4f4] px-3 sm:px-8 py-8 sm:py-12">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <DateChip event={event} />
        <h2 className="mt-3 text-4xl sm:text-6xl font-extrabold uppercase leading-none text-gray-900">
          {event.title}
        </h2>
        <p className="mt-3 text-gray-600">{event.tagline}</p>
      </div>

      <div className="columns-2 md:columns-3 gap-2 sm:gap-3">
        {event.images.map((img, i) => (
          <Tile
            key={i}
            img={img}
            onClick={() => open(i)}
            className={`mb-2 sm:mb-3 break-inside-avoid rounded-2xl !h-auto ${ratios[i % ratios.length]}`}
          />
        ))}
      </div>
    </section>
  );
}

/* ---------------------------- 5. GALLERY ----------------------------- */
/* Yellow block, big featured photo + clickable thumbnails + counter     */

function Gallery({ event, open }) {
  const [active, setActive] = useState(0);
  const total = event.images.length;
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section className="rounded-3xl bg-[#FFCC29] p-4 sm:p-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <DateChip event={event} dark />
          <h2 className="mt-3 text-4xl sm:text-6xl font-extrabold uppercase leading-none text-black">
            {event.title}
          </h2>
          <p className="mt-2 text-black/75 text-sm sm:text-base max-w-md">{event.tagline}</p>
        </div>
        <p className="text-3xl sm:text-5xl font-black text-black/80 tabular-nums shrink-0">
          {pad(active + 1)}
          <span className="text-black/40"> / {pad(total)}</span>
        </p>
      </div>

      <div className="mt-6 grid lg:grid-cols-[1fr_140px] gap-3">
        <button
          type="button"
          onClick={() => open(active)}
          aria-label="Open photo"
          className="relative h-[320px] sm:h-[480px] lg:h-[540px] rounded-2xl overflow-hidden bg-black cursor-zoom-in"
        >
          {event.images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt || "Event photo"}
              loading={i === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </button>

        <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto lg:h-[540px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {event.images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show photo ${i + 1}`}
              className={`shrink-0 w-24 h-20 lg:w-full lg:h-[100px] rounded-xl overflow-hidden transition ${
                i === active ? "ring-4 ring-black" : "opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={img.src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

const layouts = {
  mosaic: Mosaic,
  filmstrip: Filmstrip,
  editorial: Editorial,
  masonry: Masonry,
  gallery: Gallery,
};

/* ----------------------------- LIGHTBOX ------------------------------ */

function Lightbox({ state, setState }) {
  useEffect(() => {
    if (!state) return;
    const close = () => setState(null);
    const step = (d) =>
      setState((s) => (s ? { ...s, index: (s.index + d + s.images.length) % s.images.length } : s));

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [state, setState]);

  if (!state) return null;
  const img = state.images[state.index];
  const step = (d) =>
    setState({ ...state, index: (state.index + d + state.images.length) % state.images.length });

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
      onClick={() => setState(null)}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={() => setState(null)}
        className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-[#FFCC29] hover:text-black text-white text-xl transition"
      >
        ✕
      </button>
      <button
        type="button"
        aria-label="Previous"
        onClick={(e) => {
          e.stopPropagation();
          step(-1);
        }}
        className="absolute left-3 sm:left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-[#FFCC29] hover:text-black text-white transition"
      >
        ←
      </button>
      <img
        src={img.src}
        alt={img.alt || "Event photo"}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] max-w-full sm:max-w-[85vw] object-contain rounded-xl"
      />
      <button
        type="button"
        aria-label="Next"
        onClick={(e) => {
          e.stopPropagation();
          step(1);
        }}
        className="absolute right-3 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-[#FFCC29] hover:text-black text-white transition"
      >
        →
      </button>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm tabular-nums">
        {state.index + 1} / {state.images.length}
      </p>
    </div>
  );
}

/* ------------------------------- PAGE -------------------------------- */

export default function Events() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

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
                Parties, leagues and festivals - here's a look at life when the books are closed.
              </p>
            </div>

            {/* EVENTS – each with its own layout */}
            {events.map((event) => {
              const Section = layouts[event.layout] || Mosaic;
              return (
                <Reveal key={`${event.month}-${event.year}-${event.title}`}>
                  <Section
                    event={event}
                    open={(index) => setLightbox({ images: event.images, index })}
                  />
                </Reveal>
              );
            })}

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
                  Come see the community in person. Explore our hostels or book a visit and find
                  your place at Student Housing.
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

      <Lightbox state={lightbox} setState={setLightbox} />
      <BookingModal open={bookingOpen} setOpen={setBookingOpen} />
    </>
  );
}