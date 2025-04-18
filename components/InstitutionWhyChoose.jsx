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
          {data.whyChoose.map((wChoose) => {
            return (
              <div className="" key={wChoose.title}>
                <div className="text-2xl">
                  <span className="font-bold ">{wChoose.title} – </span>
                  <span>{wChoose.subTitle}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full lg:w-1/2">
          <InstitutionImageCollage
            images={[data.images[3], data.images[4], data.images[5]]}
          />
        </div>
      </div>
    </div>
  );
}
