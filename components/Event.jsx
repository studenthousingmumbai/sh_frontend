import { useEffect, useRef } from "react";

export default function CommunityImageSection() {
  const scrollRef = useRef(null);

  // 👉 ADD YOUR IMAGE URLS HERE (8–10 images)
  const images = [
    "/Events/IMG_5415.webp",
    "/Events/IMG_5419.webp",
    "/Events/IMG_5427.webp",
    "/Events/IMG_5444.webp",
    "/Events/IMG_7464.webp",
    "/Events/IMG_7505.webp",
    "/Events/549A6884.webp",
    "/Events/549A7204.webp",
    "/Events/549A7313.webp"
  ];

  // Duplicate for seamless looping
  const loopedImages = [...images, ...images];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;

    const startAutoScroll = () => {
      animationId = setInterval(() => {
        container.scrollLeft += 1;

        // Reset scroll for infinite loop
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }, 20); // speed (lower = faster)
    };

    startAutoScroll();

    // Pause on hover
    const stopScroll = () => clearInterval(animationId);

    container.addEventListener("mouseenter", stopScroll);
    container.addEventListener("mouseleave", startAutoScroll);

    return () => {
      clearInterval(animationId);
      container.removeEventListener("mouseenter", stopScroll);
      container.removeEventListener("mouseleave", startAutoScroll);
    };
  }, []);

  return (
    <section className="py-16 bg-[#f8f9fb] overflow-hidden">
      <div className="px-4 sm:px-16">

        {/* Heading (NO ICON) */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold tracking-wide">
            Community Highlights @ Student Housing
          </h2>
        </div>

        {/* Auto-scrolling image feed */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-6"
        >
          {loopedImages.map((img, index) => (
            <div
              key={index}
              className="min-w-[320px] flex-shrink-0 rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={img}
                alt="Student Housing Community"
                className="w-full h-[220px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Optional CTA 
        <div className="text-center mt-8">
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f3360] text-white rounded-full font-semibold hover:opacity-90"
          >
            View More Moments
          </a>
        </div>
*/}
      </div>
    </section>
  );
}
