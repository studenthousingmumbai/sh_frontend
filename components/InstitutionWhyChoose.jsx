import InstitutionImageCollage from "./InstitutionImageCollage";
import SectionTitle from "./SectionTitle";

export default function InstitutionWhyChoose({ data }) {
  return (
    <div className="py-12 h-auto flex flex-col gap-8 responsiveCenterPadding">
      {/* Text Content */}
      <SectionTitle
        title={`Why Choose ${data.collegeName}`}
        className={"mb-9 responsiveCenterPadding z-10 "}
      />

      <div className="flex  flex-col lg:flex-row gap-4">
        <div className="flex flex-col w-full lg:w-1/2 gap-6">
          {data.collegeSellingPoints.map((wChoose) => {
            return (
              <div className="" key={wChoose.title}>
                <div className="text-lg md:text-2xl">
                  <span className="font-bold ">{wChoose.title} – </span>
                  <span>{wChoose.description}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full lg:w-1/2 mt-5 lg:mt-auto">
          <InstitutionImageCollage
            images={[
              data?.images[3]?.url,
              data?.images[4]?.url,
              data?.images[5]?.url,
            ]}
          />
        </div>
      </div>
    </div>
  );
}
