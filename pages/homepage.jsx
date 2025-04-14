import React from "react";
import Layout from "../components/Layout";
import Carousel from "../components/common/Carousel";

const images = [
  "/banner_1.png",
  "/banner_2.png",
  "/banner_3.png",
  "/banner_5.png",
];

const Homepage = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onImageIndexChange = (index) => {
    console.log("Current Image Index:", index);
    setCurrentIndex(index);
  };

  return (
    <Layout title="Homepage" description="Find your perfect student home">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        {/* Carousel as Background */}
        <Carousel
          slideDuration={5000}
          images={images}
          width="w-full"
          height="h-full"
          hideArrows={true}
          animationStyle="slide"
          imageClass="object-cover"
          onImageIndexChange={onImageIndexChange}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content on Top */}
        <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-around px-8 py-16 text-white">
          {/* Left Section: Text */}
          <div className="max-w-lg">
            <h1 className="text-6xl font-bold mb-4">
              Find Your Perfect Student Home
            </h1>
            <p className="text-lg mb-6">
              Explore verified hostels for boys & girls near your campus.
            </p>
            <div className="flex space-x-2">
              {Array(images.length)
                .fill(0)
                .map((_, index) => (
                  <span
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex
                        ? "bg-[#F8C14C]"
                        : "bg-white opacity-50"
                    }`}
                  ></span>
                ))}
            </div>
          </div>

          {/* Right Section: Cards */}
          <div className="flex flex-col space-y-6">
            <div
              className="relative w-96 h-64 bg-pink-500 rounded-lg overflow-hidden flex items-end p-4 border border-[#FE019A] border-4 hover:scale-[1.06] cursor-pointer transition-all"
              style={{
                backgroundImage: "url('/hero-girl.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="relative z-10 flex justify-between items-center w-full">
                <h3 className="text-lg font-semibold">Girls Hostel</h3>
                <a
                  href="#"
                  className="text-white text-xl bg-[#F8C14C] p-2 rounded-md"
                >
                  <img
                    src="/arrow-up-right.png"
                    alt="Arrow Right"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>
            {/* Boys Hostel Card */}
            <div
              className="relative w-96 h-64 bg-blue-500 rounded-lg overflow-hidden flex items-end p-4 border border-[#0088FC] border-4 hover:scale-[1.04] cursor-pointer transition-all"
              style={{
                backgroundImage: "url('/hero-boy.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="relative z-10 flex justify-between items-center w-full">
                <h3 className="text-lg font-semibold">Boys Hostel</h3>
                <a
                  href="#"
                  className="text-white text-xl bg-[#F8C14C] p-2 rounded-md"
                >
                  <img
                    src="/arrow-up-right.png"
                    alt="Arrow Right"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
