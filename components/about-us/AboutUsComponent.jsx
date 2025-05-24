import ImageCollage from "./ImageCollege";
import SectionTitle from "../SectionTitle";
import MotionDiv from "../MotionDiv";
import { motionConfigDivs } from "../../utils/motionConstants";

const AboutUsComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row mx-auto responsiveCenterPadding items-center section-y-padding lg:gap-4">
      <div className="w-full lg:w-1/2 flex flex-col justify-start gap-3 order-2 lg:order-1">
        <MotionDiv
          {...motionConfigDivs}
          className="card-title flex justify-start"
        >
          <SectionTitle title={"About Us"} className={"mb-9 "} />
        </MotionDiv>

        <MotionDiv {...motionConfigDivs} delay={0.2} className="">
          <p className="card-subtitle">
            FOR OUR STUDENTS, OF OUR STUDENTS Your comfort is our priority — all
            4,000+ of you. <br /> Student Housing has been Mumbai’s favourite
            student hostel since 2015.
            <br /> We know student life isn’t easy, especially away from home.
            That’s why we’ve built a warm, supportive space where you can grow —
            both academically and socially.
          </p>
          <p className="mt-2 card-subtitle">
            {" "}
            A THRIVING ECOSYSTEM OF GROWTH With 10+ years of expertise, our 20+
            hostels near top colleges like NMIMS, Mithibai, and Atlas offer
            premium amenities — from infinity pools to pickleball courts and the
            best in-house food in town.
            <br /> Friendly staff, regular events, and a community that feels
            like home — this is Student Housing.
          </p>
        </MotionDiv>
      </div>
      <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-0 2sm:mb-24 lg:mb-0">
        <ImageCollage
          image1="/about-us/asian-indian-group-college-students-having-tea-coffee-together-break-campus-premises-outdoors-having-chit-chat.jpg"
          image2="/about-us/small-juvenile-bedroom-arrangement.jpg"
          image3="/about-us/mumbai-skyline-skyscrapers-construction.jpg"
          component="about-us"
        />
      </div>
    </div>
  );
};

export default AboutUsComponent;
