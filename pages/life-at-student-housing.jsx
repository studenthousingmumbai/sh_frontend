import Head from "next/head";
import Link from "next/link";
import { createPortal } from "react-dom";
import Layout from "../components/Layout";
import { useEffect, useRef, useState } from "react";
import BookingModal from "../components/BookingModal";

/* ------------------------------------------------------------------ */
/*  EVENTS DATA                                                        */
/*  Every event uses the same Mosaic layout.                           */
/*  images: [{ src, alt }, ...]  – first item is the hero/lead tile    */
/*  imgs() is a shortcut for /events/<folder>/1.webp ... n.webp.       */
/*                                                                     */
/*  VIDEOS: add items like                                             */
/*    { type: "video", src: "/events/x/clip.webm",                     */
/*      orientation: "vertical" | "horizontal", alt: "..." }           */
/*  vertical   -> takes 2 rows (tall tile)                             */
/*  horizontal -> takes 2 columns (wide tile)                          */
/*  withVideos() inserts videos at a given position in the final list. */
/* ------------------------------------------------------------------ */
const imgs = (folder, n, alt) =>
  Array.from({ length: n }, (_, i) => ({
    src: `/events/${folder}/${i + 1}.webp`,
    alt: `${alt} ${i + 1}`,
  }));

// vids: [{ at: <index in final list>, src, orientation, alt }]  (keep `at` ascending)
const withVideos = (images, vids) => {
  const out = [...images];
  vids.forEach(({ at, ...v }) => out.splice(at, 0, { type: "video", ...v }));
  return out;
};

// encodeURI so file names with spaces / brackets still work
const vid = (path) => encodeURI(path);

const events = [
  {
    month: "DEC",
    year: "2025",
    title: "Sleigh the Night",
    tagline:
      "A magical rooftop Christmas celebration filled with festive lights, music, games, hot chocolate and unforgettable memories.",
    images: withVideos(imgs("christmas", 11, "Sleigh the Night"), [
      {
        at: 3, // position in the final list (0 = hero)
        src: vid("/events/christmas/christmas_video_1.webm"),
        orientation: "horizontal",
        alt: "Sleigh the Night video 1",
      },
      {
        at: 8,
        src: vid("/events/christmas/christmas_video_2.webm"),
        orientation: "vertical",
        alt: "Sleigh the Night video 2",
      },
    ]),
  },

  {
    month: "NOV",
    year: "2025",
    title: "Sunday Banger Run & Coffee Rave",
    tagline:
      "A refreshing 2 km community run through Juhu, ending with a lively coffee rave at Elita by Student Housing.",
    images: imgs("banger-run", 11, "Banger Run"),
  },

  {
    month: "OCT",
    year: "2025",
    title: "The White Affair",
    tagline: "300+ students, all in white, one unforgettable poolside night.",
    images: withVideos(imgs("white-affair", 11, "White Affair"), [
      {
        at: 3,
        src: vid("/events/white-affair/white-affair-video1.webm"),
        orientation: "vertical",
        alt: "White Affair video 1",
      },
      {
        at: 8,
        src: vid("/events/white-affair/white-affair-video2_.webm"),
        orientation: "horizontal",
        alt: "White Affair video 2",
      },
    ]),
  },

  {
    month: "MAR",
    year: "2025",
    title: "The Neon Nirvana",
    tagline:
      "A vibrant Holi celebration filled with neon colours, music, lights, and an energetic pool party with 200+ students.",
    images: withVideos(imgs("holi", 11, "Neon Nirvana"), [
      {
        at: 3,
         src: vid("/events/holi/holi_2_video.webm"),
        orientation: "vertical",
        alt: "Neon Nirvana video 1",
      },
      {
        at: 8,
        src: vid("/events/holi/8B5A7853 (1).webm"),
        orientation: "horizontal",
        alt: "Neon Nirvana video 2",
      },
    ]),
  },
];

/* ------------------------------ helpers ------------------------------ */

const isVideo = (m) => m && m.type === "video";

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

function DateChip({ event }) {
  return (
    <span className="inline-block text-xs font-bold tracking-[0.2em] px-3 py-1 rounded-full bg-[#FFCC29] text-black">
      {event.month} {event.year}
    </span>
  );
}

/* Video tile: muted looping preview that only plays while on screen.   */
function VideoTile({ media }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const p = el.play();
          if (p && p.catch) p.catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={media.src}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={media.alt || "Event video"}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  );
}

function Tile({ img, onClick, className = "" }) {
  if (!img) return null;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isVideo(img) ? "Play video" : "View photo"}
      className={`group relative block w-full h-full overflow-hidden cursor-zoom-in ${className}`}
    >
      {isVideo(img) ? (
        <>
          <VideoTile media={img} />
          {/* small play badge */}
          <span className="pointer-events-none absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur text-white text-xs flex items-center justify-center">
            ▶
          </span>
        </>
      ) : (
        <img
          src={img.src}
          alt={img.alt || "Event photo"}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}
      <span className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </button>
  );
}

/* ---------------------------- MOSAIC --------------------------------- */
/* Bento grid – big hero with title overlay + mixed-size tiles.          */
/* The hero takes 4 cells. Videos take 2 cells each (vertical = row-span-2,
   horizontal = col-span-2). To avoid empty gaps, we double just enough
   photo tiles so the total cell count is a multiple of 4 (desktop).     */

const PHOTO_SPAN_CYCLE = ["row-span-2", "col-span-2", "row-span-2"];

function getSpans(rest) {
  const spans = {};

  // 1) fixed spans for videos
  let cells = 0;
  const photoIdx = [];
  rest.forEach((m, i) => {
    if (isVideo(m)) {
      spans[i] = m.orientation === "vertical" ? "row-span-2" : "col-span-2";
      cells += 2;
    } else {
      photoIdx.push(i);
      cells += 1;
    }
  });

  // 2) double just enough photos to make the total a multiple of 4
  const extra = (4 - (cells % 4)) % 4;
  if (extra > 0 && photoIdx.length > 0) {
    const step = Math.max(1, Math.floor(photoIdx.length / extra));
    for (let k = 0; k < extra; k++) {
      const idx = photoIdx[Math.min(k * step + 1, photoIdx.length - 1)];
      if (!spans[idx]) spans[idx] = PHOTO_SPAN_CYCLE[k % PHOTO_SPAN_CYCLE.length];
    }
  }
  return spans;
}

function Mosaic({ event, open }) {
  const [hero, ...rest] = event.images;
  const spans = getSpans(rest);

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

/* ----------------------------- LIGHTBOX ------------------------------ */
/* Rendered via a portal into <body> with the max z-index so it always   */
/* sits above the site header / any fixed navbar. Supports photos+videos */

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

  if (!state || typeof document === "undefined") return null;

  const img = state.images[state.index];
  const step = (d) =>
    setState({ ...state, index: (state.index + d + state.images.length) % state.images.length });

  return createPortal(
    <div
      className="fixed inset-0 bg-black/95 flex items-center justify-center px-4 py-16"
      style={{ zIndex: 2147483647 }}
      onClick={() => setState(null)}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={() => setState(null)}
        className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/15 hover:bg-[#FFCC29] hover:text-black text-white text-xl transition"
        style={{ zIndex: 1 }}
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
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-[#FFCC29] hover:text-black text-white transition"
        style={{ zIndex: 1 }}
      >
        ←
      </button>

      {isVideo(img) ? (
        <video
          key={img.src}
          src={img.src}
          controls
          autoPlay
          loop
          playsInline
          onClick={(e) => e.stopPropagation()}
          className="max-w-full sm:max-w-[85vw] object-contain rounded-xl"
          style={{ maxHeight: "calc(100vh - 8rem)" }}
        />
      ) : (
        <img
          src={img.src}
          alt={img.alt || "Event photo"}
          onClick={(e) => e.stopPropagation()}
          className="max-w-full sm:max-w-[85vw] object-contain rounded-xl"
          style={{ maxHeight: "calc(100vh - 8rem)" }}
        />
      )}

      <button
        type="button"
        aria-label="Next"
        onClick={(e) => {
          e.stopPropagation();
          step(1);
        }}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-[#FFCC29] hover:text-black text-white transition"
        style={{ zIndex: 1 }}
      >
        →
      </button>

      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-sm tabular-nums">
        {state.index + 1} / {state.images.length}
      </p>
    </div>,
    document.body
  );
}

/* ------------------------------- PAGE -------------------------------- */

export default function LifeAtStudentHousing() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <Head>
        <title>Life @ Student Housing | Hostel Events in Mumbai</title>
        <meta
          name="description"
          content="Pool parties, Student Housing Premier League, festival and birthday celebrations - explore the events that make life at Student Housing unforgettable."
        />
        <meta property="og:url" content="https://www.studenthousing.co.in/life-at-student-housing" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Life @ Student Housing | Hostel Events in Mumbai" />
        <meta
          property="og:description"
          content="Pool parties, Student Housing Premier League, festival and birthday celebrations - explore the events that make life at Student Housing unforgettable."
        />
        <meta property="og:image" content="https://www.studenthousing.co.in/IMG_7505.webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Layout>
        {/* BANNER */}
        <div className="relative flex justify-center bg-gray-100 items-center my-auto h-[150px] lg:h-[250px]">
          <img
            className="w-full h-full object-cover"
            src="/events_homebanner.webp"
            alt="Events at Student Housing"
          />
          <div className="absolute bg-black-overlay w-full h-full"></div>
          <div className="absolute w-full text-center">
            <h1 className="uppercase text-xl lg:text-3xl text-white">
              <b>Life @ Student Housing</b>
            </h1>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-0 pb-20 space-y-10 lg:space-y-16 relative mt-5">
            {/* EVENTS – all use the Mosaic layout */}
            {events.map((event) => (
              <Reveal key={`${event.month}-${event.year}-${event.title}`}>
                <Mosaic
                  event={event}
                  open={(index) => setLightbox({ images: event.images, index })}
                />
              </Reveal>
            ))}

            {/* CTA */}
            {/* <div
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
            </div> */}
          </div>
        </div>
      </Layout>

      <Lightbox state={lightbox} setState={setLightbox} />
      <BookingModal open={bookingOpen} setOpen={setBookingOpen} />
    </>
  );
}