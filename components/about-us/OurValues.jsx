import Image from "next/image";
import { motionConfigDivs } from "../../utils/motionConstants";
import MotionDiv from "../MotionDiv";
import SectionTitle from "../SectionTitle";

const OurValues = () => {
  const values = [
    {
      icon: "/bulb.png",
      title: "Unmatched Amenities",
      subtitle:
        "We maintain the highest standards across all our properties, offering clean, secure, and well-equipped living spaces that promote comfort and peace of mind.",
    },
    {
      icon: "/license.png",
      title: "Constant Innovation",
      subtitle:
        "We believe in evolving with our students. By embracing new technologies and listening to feedback, we continuously enhance our services to better serve modern student needs.",
    },
    {
      icon: "/mood.png",
      title: "Student-Centric Approach",
      subtitle:
        "Students are at the heart of everything we do. From responsive staff to thoughtful amenities, we focus on creating a stress-free, enriching environment for growth.",
    },
    {
      icon: "/settings.png",
      title: "Integrity",
      subtitle:
        "Honesty, transparency, and ethical practices are non-negotiable. Our long-standing relationships with students and parents are built on trust and open communication.",
    },
  ];

  return (
    <div className="">
      <div className="w-full flex flex-col justify-center items-center bg-primaryBg section-y-padding">
        <div className="flex flex-col justify-center items-center mx-auto responsiveCenterPadding">
          <MotionDiv {...motionConfigDivs} className="card-title">
            <SectionTitle title={"Our Values"} className={"mb-9"} />
          </MotionDiv>
          <MotionDiv
            {...motionConfigDivs}
            delay={0.2}
            className="text-center md:px-4 card-subtitle max-w-mobile md:max-w-none mt-3 lg:mt-auto"
          >
            At Student Housing, our values shape every decision we make —
            ensuring each student feels safe, supported, and at home.
          </MotionDiv>
        </div>

        <MotionDiv
          {...motionConfigDivs}
          delay={0.3}
          className="grid grid-cols-1 md:grid-cols-2 mt-10 mx-auto responsiveCenterPadding gap-5 2lg:gap-10"
        >
          {values.map((val, index) => (
            <div key={index} className="flex gap-4 md:gap-6">
              {/* icon */}
              <div className="hidden md:flex justify-center items-center min-w-[40px] h-10 rounded-lg relative bg-[#F8C14C]">
                <Image
                  src={val.icon}
                  alt={`${val.title} icon`}
                  width={15}
                  height={15}
                  style={{ objectFit: "contain" }}
                  loading="lazy"
                />
              </div>

              <div className="flex md:hidden justify-center items-center min-w-[40px] h-10 rounded-lg relative bg-[#F8C14C]">
                <Image
                  src={val.icon}
                  alt={`${val.title} icon`}
                  width={15}
                  height={15}
                  style={{ objectFit: "contain" }}
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col gap-3 md:gap-4">
                <div className="text-xl text-darkText">{val.title}</div>
                <div className=" text-lightText">{val.subtitle}</div>
              </div>
            </div>
          ))}
        </MotionDiv>
      </div>
    </div>
  );
};

export default OurValues;
