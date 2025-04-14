import React, { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Transition } from "@headlessui/react";

const Carousel = ({
  images,
  slideDuration = 3000,
  width = "w-full",
  height = "h-64",
  hideArrows = false,
  imageClass = "object-contain",
  onImageIndexChange = () => {},
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const autoRotate = useRef();

  useEffect(() => {
    autoRotate.current = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
      setDirection("next");
    }, slideDuration);

    return () => {
      clearInterval(autoRotate.current);
    };
  }, [currentIndex, slideDuration, images.length]);

  useEffect(() => {
    onImageIndexChange(currentIndex);
  }, [currentIndex]);

  const prevSlide = () => {
    clearInterval(autoRotate.current);
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    setDirection("prev");
  };

  const nextSlide = () => {
    clearInterval(autoRotate.current);
    setCurrentIndex((currentIndex + 1) % images.length);
    setDirection("next");
  };

  return (
    <div className={`relative overflow-hidden ${width} ${height} rounded-lg`}>
      {images.map((image, index) => (
        <Transition
          key={index}
          show={currentIndex === index}
          enter={`transform transition-transform duration-300 ease-in-out`}
          enterFrom={
            direction === "next" ? "-translate-x-full" : "translate-x-full"
          }
          enterTo="translate-x-0"
          leave={`transform transition-transform duration-300 ease-in-out`}
          leaveFrom="translate-x-0"
          leaveTo={
            direction === "next" ? "translate-x-full" : "-translate-x-full"
          }
          className={`absolute top-0 left-0 object-cover w-full h-full`}
        >
          <img
            src={image}
            alt={`carousel-img-${index}`}
            className={`h-full w-full ${imageClass}`}
          />
        </Transition>
      ))}
      {!hideArrows && (
        <>
          <button
            className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 p-2 rounded-md shadow-md focus:outline-none"
            onClick={prevSlide}
          >
            <FiChevronLeft className="text-xl" />
          </button>
          <button
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 p-2 rounded-md shadow-md focus:outline-none"
            onClick={nextSlide}
          >
            <FiChevronRight className="text-xl" />
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
