export default function WhyChooseAlternate() {
  const options = [
    {
      title: "Safe & Secure",
      subTitle: "24x7 surveillance, biometric access, and female wardens.",
      image: "/why-choose/lock.png",
    },
    {
      title: "Nutritious Meals",
      subTitle: "Healthy, home-style food with multiple cuisine options.",
      image: "/why-choose/fork.png",
    },
    {
      title: "Fully Furnished Rooms",
      subTitle: "Spacious, well-equipped with beds, desks, and storage.",
      image: "/why-choose/bed.png",
    },
    {
      title: "Prime Location",
      subTitle: "Stay close to colleges, transport, and markets.",
      image: "/why-choose/pin.png",
    },
    {
      title: "Hygienic & Comfortable",
      subTitle:
        "Regular housekeeping, attached bathrooms, and air conditioning.",
      image: "/why-choose/broom.png",
    },
    {
      title: "Vibrant Community",
      subTitle: "Connect, study, and grow with like-minded students.",
      image: "/why-choose/graduate.png",
    },
  ];
  return (
    <div className="responsiveCenterPadding md:gap-4 pb-12">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {options.map((items) => (
          <div className="flex gap-4">
            <div className="w-[1/12] h-[52px] md:w-2/12 md:h-[64px] rounded-[8px] flex justify-center items-center bg-[linear-gradient(to_left,#FEF7E7,#FFFBF4)]">
              <div className="w-[24px] h-[34px] md:w-[32px] md:h-[54px]">
                <img
                  src={items.image}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center w-10/12">
              <div className=" font-[600] text-[18px] md:text-[24px]  lg:text-[32px] leading-[150%]">
                {items.title}
              </div>
              <div className="hidden md:block font-[400] text-[18px] leading-[150%]">
                {items.subTitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
