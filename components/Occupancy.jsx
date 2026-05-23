import SectionTitle from "./SectionTitle";

export default function Occupancy() {
  const occupancies = [
    {
      title: "Single Occupancy",
      image: "/occupancies/single-bed.png",
    },
    {
      title: "Double Occupancy",
      image: "/occupancies/double-bed.png",
    },
    {
      title: "Triple Occupancy",
      image: "/occupancies/triple-bed.png",
    },
  ];
  return (
    <div className="pt-10 md:pt-12 pb-14 md:pb-16 bg-[url(/occupancies/occupancy-bg.png)]">
      <SectionTitle
        title={"Occupancy"}
        className={"mb-9 responsiveCenterPadding"}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 responsiveCenterPadding gap-6">
        {occupancies.map((occupancy) => {
          return (
            <div className="flex border border-[rgba(0,0,0,0.08)] rounded-[8px] p-4 md:p-6 gap-4 bg-white">
              <div className="w-[1/12] h-[52px] md:w-2/12 md:h-[64px] rounded-[8px] flex justify-center items-center bg-[linear-gradient(to_left,#FEF7E7,#FFFBF4)]">
                <div className="w-[36px] md:w-[48px] h-[28px] md:h-[36px]">
                  <img
                    src={occupancy.image}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center w-10/12 font-bold text-lg md:text-xl lg:text-xl xl:text-2xl">
                {occupancy.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
