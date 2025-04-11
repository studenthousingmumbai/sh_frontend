import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./components/ui/carousel";
import { motion } from "framer-motion";

export default function CarouselSize({
  items,
  renderItem,
  absolutePosition = false,
  componentName,
  autoScroll,
}) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  console.log(componentName);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const intervalTime = 2000; // Adjust the interval as needed (5000ms = 5 seconds)

  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        api?.scrollTo(current + 1);
      }, intervalTime);

      return () => clearInterval(interval);
    }
  }, [api, current, autoScroll]);

  return (
    <Carousel
      opts={{
        // align: "start",
        loop: true,
      }}
      className="w-full"
      setApi={setApi}
    >
      <CarouselContent>
        {/* <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
          }}
        > */}
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            className={`${
              componentName === "student-testimonials"
                ? "basis-full md:basis-1/2 flex justify-center items-center"
                : "basis-full md:basis-1/2 lg:basis-1/3 2xl:basis-1/5"
            }`}
          >
            {renderItem(item)}
          </CarouselItem>
        ))}
        {/* </motion.div> */}
      </CarouselContent>
      <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={() => api?.scrollTo(current - 1)}
          className={`rounded-md bg-[#F8C14C] hover:bg-[#F8C14C]/80 p-2 ${
            absolutePosition
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
            absolutePosition
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
  );
}
