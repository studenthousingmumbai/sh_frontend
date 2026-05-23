import Link from "next/link";
import EnquireNowFormNew from "./EnquireNowFormNew";
import { useState } from "react";

export default function InterestedEnquireForm({ title, subTitle, image }) {
  const [enquireNowOpen, setEnquireNowOpen] = useState(false);

  return (
    <div className="relative h-auto py-16  bg-[linear-gradient(to_left,#F8C14C,#F8C14C33)] flex flex-col gap-4 lg:flex-row responsiveCenterPadding">
      <div className="absolute inset-0 bg-[url(/bg-pattern-2.png)] bg-no-repeat z-0" />

      {/* Text Content */}
      <div className="lg:w-1/2 flex flex-col justify-center items-start gap-6 z-10">
        {/* Title */}
        <div className="font-[700] text-[30px] md:text-[36px] lg:text-[42px] leading-[100%] z-20">
          Interested in this Hostel?
        </div>

        {/* Subtitle */}
        <div className="font-[500] text-[16px] md:text-[20px] lg:text-[24px] leading-[150%] opacity-70">
          Looking for a safe, comfortable, and well-equipped place to stay? Our
          hostel offers the perfect blend of security, convenience, and modern
          amenities to make your student life stress-free. Whether you prefer
          single, double, or triple occupancy, we have the right space for you.
        </div>

        <div className=" text-black font-[600] text-2xl rounded-[8px] mr-2">
          Book a visit today or enquire now for more information!
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center overflow-hidden z-20 mt-5 lg:mt-auto">
        <div className="bg-white w-full md:w-[80%] lg:w-[70%] p-6 rounded-2xl flex flex-col justify-center items-center">
          <div className="font-semibold text-2xl">Enquire Now</div>
          <EnquireNowFormNew open={true} />
        </div>
      </div>
    </div>
  );
}
