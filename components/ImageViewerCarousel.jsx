import React, { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent } from "@components/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@components/components/ui/carousel";
import Image from "next/image";

export default function ImageViewerCarousel({
  images,
  startIndex = 0,
  isOpen,
  onOpenChange,
  absolutePositionCarousel = true,
}) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);

    // Autoplay logic
    startAutoplay();

    return () => {
      api.off("select", onSelect);
      stopAutoplay();
    };
  }, [api]);

  const startAutoplay = () => {
    stopAutoplay(); // Clear if already running
    intervalRef.current = setInterval(() => {
      if (api) api.scrollNext();
    }, 4000); // 4 seconds between slides (you can make it slower by increasing)
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className="w-full max-w-3xl mx-auto bg-transparent p-0 shadow-none border-none [&>button:last-child]:hidden flex  items-center justify-center"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
            startIndex,
          }}
          className="w-full max-w-3xl mx-auto"
          setApi={setApi}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Image
                  src={image.url}
                  alt={`Image ${index + 1}`}
                  width={600}
                  height={400}
                  className="object-contain w-full h-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={() => api?.scrollTo(current - 1)}
              className={`rounded-md bg-[#F8C14C] hover:bg-[#F8C14C]/80 p-2 ${
                absolutePositionCarousel
                  ? "absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-[120%]"
                  : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              onClick={() => api?.scrollTo(current + 1)}
              className={`rounded-md bg-[#F8C14C] hover:bg-[#F8C14C]/80 p-2 ${
                absolutePositionCarousel
                  ? "absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-[120%]"
                  : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
