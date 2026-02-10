import { useEffect, useRef } from "react";

export default function CommunityImageSection() {
  const scrollRef = useRef(null);

  // 👉 ADD YOUR IMAGE URLS HERE (8–10 images)
  const images = [
    "/IMG_5415.webp",
    "/IMG_5419.webp",
    "/IMG_5427.webp",
    "/IMG_5444.webp",
    "/IMG_7464.webp",
    "/IMG_7505.webp",
    "/549A6884.webp",
    "/549A7204.webp",
    "/549A7313.webp"
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
    <div className="flex md:justify-center mb-12">
  <div className="relative inline-block text-left md:text-center">
    <h2 className="text-3xl md:text-5xl font-bold text-black">
      Community Highlights @ Student Housing
    </h2>

    {/* Yellow underline */}
    <span
      className="
        absolute
        left-[24%]
        md:left-[0%]
        -bottom-4
        h-[6px]
        w-40
        bg-[#F8C14C]
        rounded-full
      "
    />
  </div>
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
