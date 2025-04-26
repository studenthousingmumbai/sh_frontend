import InstitutionImageCollage from "./InstitutionImageCollage";
import SectionTitle from "./SectionTitle";

export default function ExcellenceEducationStudentLife({ data }) {
  return (
    <div className="py-12 h-auto bg-[linear-gradient(to_left,#194128,#194128CC)] flex flex-col gap-8 responsiveCenterPadding">
      {/* Text Content */}
      <SectionTitle
        title={"Excellence in Education & Student Life"}
        className={"mb-9 responsiveCenterPadding z-10 text-white"}
      />

      <div className="flex text-white flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/2">
          <InstitutionImageCollage
            images={[
              data?.images[0]?.url,
              data?.images[1]?.url,
              data?.images[2]?.url,
            ]}
          />
        </div>

        <div className="flex flex-col w-full lg:w-1/2 gap-6 mt-5 lg:mt-auto">
          <div className="font-semibold text-3xl lg:text-4xl">
            About {data.collegeName}
          </div>
          <div className="font-[500] text-lg">{data.aboutCollege}</div>
        </div>
      </div>
    </div>
  );
}
