import Link from "next/link";

export default function Queries({ title, subTitle, image }) {
  return (
    <div className="relative h-auto lg:h-[440px] bg-[linear-gradient(to_left,#F8C14C,#F8C14C33)] flex flex-col lg:flex-row responsiveCenterPadding">
      <div className="absolute inset-0 bg-[url(/bg-pattern-2.png)] bg-no-repeat z-0" />

      {/* Text Content */}
      <div className="lg:w-1/2 py-12 flex flex-col justify-center items-start gap-4 order-2 lg:order-1 z-20">
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
      <div className="lg:w-1/2  w-full rounded-tl-[9999px] overflow-hidden order-1 lg:order-2">
        <img
          src={"/question-mark.png"}
          alt="girls-hostel-hero-banner"
          className="w-full h-full object-cover hidden lg:block"
        />
        <img
          src={"/question-mark-mobile.png"}
          alt="girls-hostel-hero-banner"
          className="w-full h-full object-cover block lg:hidden"
        />
      </div>
    </div>
  );
}
