import { useState } from "react";
import Image from "next/image";

import MotionDiv from "../MotionDiv";
import {
  motionConfigDivs,
  motionConfigGraphics,
} from "../../utils/motionConstants";
import SectionTitle from "../SectionTitle";

const OurStory = () => {
  const years = {
    2016: {
      content:
        "Expanded to 100+ beds across 5+ hostels for boys and girls, driven by strong customer support and reviews.",
      image: "/about-us/our-story.png",
    },
    2019: {
      content: "Grew to a 50+ member team, serving 1,000+ happy students.",
      image: "/about-us/our-story.png",
    },
    2020: {
      content:
        'Won "Best Student Housing of India" by Indian Education Awards in Bangalore.',
      image: "/about-us/our-story.png",
    },
    2021: {
      content: "Faced COVID-19 challenges but bounced back stronger.",
      image: "/about-us/our-story.png",
    },
    2022: {
      content: "Increased capacity to 300+ beds despite pandemic setbacks.",
      image: "/about-us/our-story.png",
    },
    2023: {
      content:
        "Launched Avenue by Student Housing — Mumbai’s most luxurious student hostel with an infinity pool; community grew to 4,000+ students.",
      image: "/about-us/our-story.png",
    },
    2024: {
      content:
        "Introduced Elita by Student Housing, featuring hostel rooms 4x larger than average, with premium amenities including a Pickleball court and a 4,000+ sq. ft. fitness centre; crossed 800+ beds.",
      image: "/about-us/our-story.png",
    },
    2025: {
      content: `Celebrating 10 years with two premium launches:
•	Arcadia (Andheri West): 17-storey ultra-luxury hostel with 170+ beds, pool, turf, and garden.
•	Atlantis (Vile Parle West): 200+ bed exclusive girls’ hostel near NMIMS.
Total capacity reached 1,100+ beds.
`,
      image: "/about-us/our-story.png",
    },
  };

  const [active, setActive] = useState("2016");

  return (
    <div className="md:mt-24 relative">
      {/* desktop screens */}
      <div className="hidden md:flex md:flex-col">
        {/* Content */}
        <div className="w-full flex flex-col justify-center items-center bg-primaryBg section-y-padding relative responsiveCenterPadding">
          <div className="flex flex-col justify-center items-center mx-auto  z-20 ">
            <MotionDiv {...motionConfigDivs} className="card-title">
              <SectionTitle title={"Our Story"} className={"mb-9 "} />
            </MotionDiv>
            <MotionDiv
              {...motionConfigDivs}
              delay={0.2}
              className="text-center card-subtitle"
            >
              Established in {active}, with a dream to provide all students with
              the BEST, only. Mr. Kamlesh Bhathena, the founder, noticed a
              pattern of emptiness around the outstation students that were
              studying in Mumbai regarding the absence of proper facilities that
              could house them and give all round solutions. No doubt, there
              were housing options, but none that could completely give them a
              hassle-free year, with all quality services and amenities under
              one roof. Started with 1 hostel- Bharat by Student Housing with 30
              beds, in Vile Parle West, Mumbai.
            </MotionDiv>

            {/* Timeline with clickable years */}
            <MotionDiv
              {...motionConfigDivs}
              delay={0.2}
              className="relative w-full mt-9"
            >
              <div className="flex flex-wrap justify-center gap-4 md:gap-9 text-lg md:text-2xl">
                {Object.keys(years).map((yr) => (
                  <div
                    key={yr}
                    onClick={() => setActive(yr)}
                    className={`font-bold cursor-pointer hover-scale ${
                      active === yr
                        ? "text-darkText"
                        : "text-lightText opacity-40"
                    }`}
                  >
                    {yr}
                  </div>
                ))}
              </div>
            </MotionDiv>

            {/* Content based on selected year */}
            <MotionDiv
              {...motionConfigDivs}
              direction="fade-in"
              key={active}
              delay={0.2}
              duration={0.1}
              className="relative bg-white p-6 rounded-lg shadow-lg z-30 max-w-fit mx-auto mt-6" // Higher z-index for content
            >
              <div className="relative overflow-hidden rounded-lg w-full h-[400px]">
                <Image
                  src={years[active]?.image}
                  alt="Selected Year"
                  className="rounded-lg  hover:scale-105 w-full h-full duration-500 object-cover"
                  width={765}
                  height={400}
                />
              </div>
              <div className="text-center text-[18px] font-normal text-darkText max-w-[765px] mt-3">
                {years[active]?.content}
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>

      {/* mobile screens */}
      <div className="block md:hidden">
        <div className="w-full flex flex-col justify-center items-center bg-primaryBg section-y-padding">
          <div className="flex flex-col justify-center items-center mx-auto responsiveCenterPadding">
            <MotionDiv {...motionConfigDivs} className="text-[43px] font-bold">
              Our Story
            </MotionDiv>
            <MotionDiv
              {...motionConfigDivs}
              delay={0.2}
              className="text-center opacity-75 mt-3"
            >
              Established in {active}, with a dream to provide all students with
              the BEST, only. Mr. Kamlesh Bhathena, the founder, noticed a
              pattern of emptiness around the outstation students that were
              studying in Mumbai regarding the absence of proper facilities that
              could house them and give all round solutions. No doubt, there
              were housing options, but none that could completely give them a
              hassle-free year, with all quality services and amenities under
              one roof. Started with 1 hostel- Bharat by Student Housing with 30
              beds, in Vile Parle West, Mumbai.
            </MotionDiv>

            {/* Timeline with clickable years */}
            <MotionDiv className="flex max-w-mobile mt-8 justify-between gap-5">
              <div className=" flex flex-col w-2/4 items-center justify-evenly py-5 gap-4 md:gap-9 text-lg md:text-2xl mb-2">
                {Object.keys(years).map((yr) => (
                  <div
                    key={yr}
                    onClick={() => setActive(yr)}
                    className={`font-bold cursor-pointer ${
                      active === yr
                        ? "text-darkText"
                        : "text-lightText opacity-40"
                    }`}
                  >
                    {yr}
                  </div>
                ))}
              </div>

              {/* Content based on selected year */}
              <MotionDiv
                key={active}
                className="relative flex flex-col bg-white p-2 md:p-6 rounded-lg shadow-lg z-30 mx-auto gap-3" // Higher z-index for content
              >
                <div className="overflow-hidden rounded-md w-full h-5/6">
                  <img
                    src={years[active]?.image}
                    alt="Selected Year"
                    className="rounded-md w-full h-full object-cover"
                  />
                </div>

                <div className="text-start md:text-center text-sm md:text-base text-gray-600">
                  {years[active]?.content}
                </div>
              </MotionDiv>
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
