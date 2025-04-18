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
            images={[data.images[0], data.images[1], data.images[2]]}
          />
        </div>

        <div className="flex flex-col w-full lg:w-1/2 gap-6">
          <div className="font-semibold text-4xl">About {data.collegeName}</div>
          <div className="font-[500] text-lg">{data.hostelDescription1}</div>
        </div>
      </div>
    </div>
  );
}
