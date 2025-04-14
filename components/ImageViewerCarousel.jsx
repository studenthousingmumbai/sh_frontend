import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogClose,
} from "@components/components/ui/dialog";
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

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="flex justify-center items-center bg-transparent p-0 shadow-none border-none max-w-none">
        {/* Wrapper div to control width */}
        <div className="w-[1061px] h-[720px] rounded-lg">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              startIndex,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="w-full h-full flex justify-center items-center rounded-lg"
                >
                  <img
                    src={image?.url}
                    alt={`Image ${index + 1}`}
                    className="object-contain w-full h-full rounded-lg"
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
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild className="flex justify-start items-start">
            <div className="h-[720px] flex justify-start items-start">
              <button className="bg-white w-8 h-8 rounded-lg opacity-70">
                ✖
              </button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
