import ImageCollage from "./ImageCollege";

import MotionDiv from "../MotionDiv";
import { motionConfigDivs } from "../../utils/motionConstants";
import SectionTitle from "../SectionTitle";

const OurMission = () => {
  return (
    <div className="flex w-full items-center gap-4 relative md:mb-20">
      {/* Make sure the parent has `relative` positioning */}

      <div className="flex flex-col lg:flex-row section-y-padding mx-auto responsiveCenterPadding gap-4 z-20">
        <div className="w-full order-2 lg:order-1 mt-12 lg:mt-auto">
          <ImageCollage
            image1="/assets/about-us/image-collage-2-1.png"
            image2="/assets/about-us/image-collage-2-2.png"
            image3="/assets/about-us/image-collage-2-3.png"
            component="our-mission"
          />
        </div>
        <div className="w-full order-1 lg:order-2 flex flex-col items-center lg:items-start justify-start lg:justify-center gap-3">
          <MotionDiv {...motionConfigDivs} className="card-title">
            <SectionTitle title={"Our Mission"} className={"mb-9 "} />
          </MotionDiv>
          <MotionDiv
            {...motionConfigDivs}
            delay={0.2}
            className="text-center lg:text-start card-subtitle"
          >
            <p>
              We aim to offer the ultimate student experience — with world-class
              amenities, safety, comfort, and care, so the only reason to leave
              is for college. We're always innovating to make student life
              easier and parents worry-free. Our vision? To bring quality
              student housing to every education-focused city in India, ensuring
              no student has to compromise on learning due to lack of proper
              accommodation.
            </p>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
