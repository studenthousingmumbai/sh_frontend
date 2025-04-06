import SectionTitle from "./SectionTitle";

export default function Ameities() {
  const options = [
    {
      title: "WiFi",
      image: "/why-choose/lock.png",
    },
    {
      title: "Laundry",
      image: "/why-choose/fork.png",
    },
    {
      title: "Housekeeping",
      image: "/why-choose/bed.png",
    },
    {
      title: "Study Lounge",
      image: "/why-choose/pin.png",
    },
    {
      title: "24x7 Security",
      image: "/why-choose/broom.png",
    },
    {
      title: "Indoor Games",
      image: "/why-choose/graduate.png",
    },
  ];
  return (
    <div className="responsiveCenterPadding relative flex flex-col md:flex-row gap-8 md:gap-4 pt-12 pb-16 bg-[linear-gradient(to_left,#111827,#222E4B)]">
      <div className="absolute inset-0 bg-[url(/bg-pattern-1.png)] z-10" />

      <div className="w-full md:w-2/6 z-20">
        <SectionTitle title={"Amenities"} className={"text-white"} />
      </div>
      <div className="w-full md:w-4/6 grid grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 z-30">
        {options.map((items) => (
          <div className="flex flex-col gap-4">
            <div className="w-[68px] h-[64px] rounded-[8px] flex justify-center items-center bg-[linear-gradient(to_left,#FEF7E7,#FFFBF4)]">
              <div className="w-[36px] h-[54px]">
                <img
                  src={items.image}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col w-10/12">
              <div className="font-semibold text-[20px] text-white lg:text-[30px]">
                {items.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
