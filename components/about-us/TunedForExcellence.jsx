import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";
import MotionDiv from "../MotionDiv";
import { motionConfigDivs } from "../../utils/motionConstants";

const TunedForExcellence = () => {
  const values = [
    {
      title: "1100+",
      subtitle: "Beds",
    },
    {
      title: "20+",
      subtitle: "No. of Years",
    },
    {
      title: "4000+",
      subtitle: "Hours support",
    },
  ];

  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const refCurrent = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (refCurrent) {
      observer.observe(refCurrent);
    }

    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, []);

  return (
    <div className="responsiveCenterPadding relative w-full flex flex-col justify-center items-center bg-gradient-to-r from-[#F8C14C] to-[#e9decb] section-y-padding text-black">
      <MotionDiv
        {...motionConfigDivs}
        delay={0.4}
        className="absolute inset-x-0 -bottom-4 h-full bg-[url('/assets/page-header-graphic-3.png')] bg-bottom bg-no-repeat select-none"
      ></MotionDiv>
      <div className="flex flex-col justify-center items-center mx-auto responsive-max-width">
        <MotionDiv {...motionConfigDivs} className="text-center card-title">
          Statistics
        </MotionDiv>
        <MotionDiv
          {...motionConfigDivs}
          delay={0.2}
          className="text-center md:px-4 card-subtitle mt-3"
        >
          {/* description */}
        </MotionDiv>
      </div>

      <MotionDiv
        {...motionConfigDivs}
        direction="fade-in"
        className="grid grid-cols-2 md:grid-cols-3 mt-16 gap-8 md:gap-24 max-w-mobile md:max-w-none"
      >
        {values.map((val, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 justify-start items-center"
            ref={ref}
          >
            {/* icon */}
            {/* <div className="text-5xl md:text-[50px] font-bold"> */}
            {hasStarted && (
              <CountUp
                className="text-5xl md:text-[50px] font-bold"
                start={1000}
                end={parseInt(val.title)}
                duration={1.3}
                useEasing={true}
                useGrouping={true}
                separator=""
                // decimals={4}
                // decimal=","
                suffix={val.title.includes("+") ? "+" : ""}
                // onComplete={onComplete}
                // onStart={onStart}
              />
            )}

            {/* </div> */}
            <div className="text-center text-xl">{val.subtitle}</div>
          </div>
        ))}
      </MotionDiv>
    </div>
  );
};

export default TunedForExcellence;
