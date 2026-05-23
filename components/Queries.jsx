import Link from "next/link";
import EnquireNowFormNew from "./EnquireNowFormNew";

export default function Queries({ title, subTitle, image }) {
  return (
    <div className="relative bg-[linear-gradient(to_left,#F8C14C,#F8C14C33)] flex flex-col lg:flex-row responsiveCenterPadding">
      <div className="absolute inset-0 bg-[url(/bg-pattern-2.png)] bg-no-repeat z-0" />

      {/* Text Content */}
      <div className="lg:w-1/2 py-7 lg:py-auto flex flex-col justify-center items-start gap-4 z-20">
        {/* Title */}
        <div className="font-[700] text-[36px] md:text-[42px] lg:text-[48px] leading-[100%]">
          Got some queries?
        </div>

        {/* Subtitle */}
        <div className="font-[500] text-[18px] md:text-[20px] lg:text-[24px] leading-[150%] opacity-70">
          We&#39;re here to help! Whether you have questions about hostels,
          amenities, pricing, or anything else, our team is ready to assist you.
        </div>

        <Link href={"/contact-us"}>
          <button className="bg-[#F8C14C] hover:bg-[#F8C14C]/80 text-black font-[600] px-4 py-2 rounded-[8px] mr-2">
            Reach Out to Us Anytime!
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center overflow-hidden z-20 lg:mt-auto py-10 lg:py-auto">
        <div className="bg-white w-full md:w-[80%] lg:w-[70%] p-6 rounded-2xl flex flex-col justify-center items-center">
          <div className="font-semibold text-2xl">Enquire Now</div>
          <EnquireNowFormNew open={true} />
        </div>
      </div>
    </div>
  );
}
