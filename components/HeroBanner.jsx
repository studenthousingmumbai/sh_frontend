export default function HeroBanner({ title, subTitle, image }) {
  return (
    <div className="h-auto lg:h-[440px] bg-[linear-gradient(to_left,#F8C14C,#F8C14C33)] flex flex-col lg:flex-row">
      {/* Text Content */}
      <div className="lg:w-1/2 p-6 py-12 sm:pl-12 md:pl-32 lg:pl-48 flex flex-col justify-center items-start gap-4">
        {/* Title */}
        <div className="font-[700] text-[36px] md:text-[52px] lg:text-[62px] xl:text-[72px] leading-[100%]">
          {title}
        </div>

        {/* Subtitle */}
        <div className="font-[600] text-[14px] md:text-[16px] lg:text-[22px] leading-[150%] opacity-70">
          {subTitle}
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 w-full rounded-tl-[9999px] max-h-[390px] md:max-h-max overflow-hidden">
        <img
          src={image}
          alt="girls-hostel-hero-banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
