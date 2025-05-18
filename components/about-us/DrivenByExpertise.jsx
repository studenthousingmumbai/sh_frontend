import Image from "next/image";
import MotionDiv from "../MotionDiv";
import { motionConfigDivs } from "../../utils/motionConstants";

const DrivenByExpertise = () => {
  const values = [
    {
      img: "/assets/about-us/team/Mr. Ravi B Darira-Managing-Director.png",
      title: "Mr. Kamlesh Bhathena",
      subtitle: "Founder and Chief Managing Director",
    },
    {
      img: "/assets/about-us/team/Mr.-Prashant-Mungekar---General-Manager.png",
      title: "Mr. Rakesh Bhathena",
      subtitle: "Director and Finance",
    },
    {
      img: "/assets/about-us/team/Mr. Gaurav Darira - Managing Director.png",
      title: "Mrs. Nipa Bhathena",
      subtitle: "Co-Founder and Sales",
    },
    {
      img: "/assets/about-us/team/Mr. Monojit Karmakar _ Certification & Product Development.png",
      title: "Mr. Gaurav Bhathena",
      subtitle: "Director and Marketing",
    },
  ];

  return (
    <div className="relative w-full flex flex-col justify-center items-center section-y-padding mx-auto responsiveCenterPadding">
      <div className="flex flex-col justify-center items-center">
        <MotionDiv {...motionConfigDivs} className="card-title text-center">
          Individual Roles & Pictures
        </MotionDiv>
        <MotionDiv
          {...motionConfigDivs}
          delay={0.2}
          className="text-center card-subtitle mt-2 md:mt-auto"
        >
          {/* description */}
        </MotionDiv>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 mt-12 md:mt-16 w-full gap-6">
        {values.map((val, index) => (
          <MotionDiv
            {...motionConfigDivs}
            direction="fade-in"
            delay={index * 0.2}
            key={index}
            className="flex flex-col gap-3 justify-start items-start hover-scale"
          >
            <div className="w-full h-80 relative">
              <Image
                src={val.img}
                alt="expertise-image"
                fill
                objectFit="cover"
                quality={100}
                className=" rounded-lg"
              />
            </div>
            <div className="text-lg font-semibold mt-3">{val.title}</div>
            <div className="text">{val.subtitle}</div>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};

export default DrivenByExpertise;
