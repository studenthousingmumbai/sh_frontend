export default function HeroBanner({ title, subTitle, image }) {
  return (
    <div className="h-auto lg:h-[440px] bg-[linear-gradient(to_left,#F8C14C,#F8C14C33)] flex flex-col lg:flex-row">
      {/* Text Content */}
      <div className="lg:w-1/2 p-8 lg:pl-48 flex flex-col justify-center items-start gap-4">
        {/* Title */}
        <div className="font-[700] text-[48px] md:text-[56px] lg:text-[72px] leading-[100%]">
          {title}
        </div>

        {/* Subtitle */}
        <div className="font-[600] text-[18px] md:text-[20px] lg:text-[24px] leading-[150%] opacity-70">
          {subTitle}
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2  w-full rounded-tl-[9999px] overflow-hidden">
        <img
          src={image}
          alt="girls-hostel-hero-banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
