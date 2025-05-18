import Image from "next/image";
import MotionDiv from "../MotionDiv";
import { motionConfigDivs } from "../../utils/motionConstants";

export default function ImageCollage({
  image1 = "",
  image2 = "",
  image3 = "",
  component,
}) {
  const direction =
    component === "about-us"
      ? "right-to-left"
      : component === "our-mission"
      ? "left-to-right"
      : "fade-in";

  return (
    <div className="w-mobile md:w-[556px] h-[500px] md:h-[600px] relative mx-auto">
      {/* Top right image */}
      <div className="absolute hidden md:flex right-0 top-0">
        <MotionDiv
          {...motionConfigDivs}
          direction={direction}
          delay={0.3}
          duration={0.5}
          className="overflow-hidden"
        >
          <Image
            alt="about-us-image"
            className="hover:scale-105 duration-500"
            src={image1}
            width={319}
            height={378}
          />
        </MotionDiv>
      </div>

      {/* Bottom left image */}
      <div className="absolute hidden md:flex left-0 top-1/2 -translate-y-1/2">
        <MotionDiv
          {...motionConfigDivs}
          direction={direction}
          delay={0.4}
          duration={0.5}
          className="overflow-hidden"
        >
          <Image
            className="hover:scale-105 duration-500"
            alt="about-us-image"
            src={image2}
            width={319}
            height={378}
          />
        </MotionDiv>
      </div>

      {/* Bottom image (overlapping lower part) */}
      <div className="absolute hidden md:flex right-16 -bottom-24">
        <MotionDiv
          {...motionConfigDivs}
          direction={direction}
          delay={0.5}
          duration={0.5}
          className="overflow-hidden"
        >
          <Image
            className="hover:scale-105 duration-500"
            alt="about-us-image"
            src={image3}
            width={357}
            height={300}
          />
        </MotionDiv>
      </div>

      {/* Mobile screen */}
      {/* Top right image */}
      <MotionDiv
        {...motionConfigDivs}
        direction={direction}
        delay={0.3}
        duration={0.5}
        className="absolute flex md:hidden right-0 top-0"
      >
        <Image alt="about-us-image" src={image1} width={197} height={234} />
      </MotionDiv>

      {/* Bottom left image */}
      <MotionDiv
        {...motionConfigDivs}
        direction={direction}
        delay={0.5}
        duration={0.5}
        className="absolute flex md:hidden left-0 top-[20%] -translate-y-1/2"
      >
        <Image alt="about-us-image" src={image2} width={197} height={233} />
      </MotionDiv>

      {/* Bottom image (overlapping lower part) */}
      <MotionDiv
        {...motionConfigDivs}
        direction={direction}
        delay={0.5}
        duration={0.5}
        className="absolute flex md:hidden right-10 bottom-16"
      >
        <Image alt="about-us-image" src={image3} width={220} height={185} />
      </MotionDiv>
    </div>
  );
}
