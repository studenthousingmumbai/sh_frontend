import React from "react";
import SectionTitle from "../SectionTitle";

const awards = [
  {
    name: "ias",
    src: "/award-2.png",
  },
  {
    name: "Kamlesh_award",
    src: "/kamlesh-award.png",
  },
  {
    name: "ISOcertification2",
    src: "/ISOcertification2.png",
  },
  {
    name: "NSHA",
    src: "/award-1.png",
  },
];

export default function Awards() {
  return (
    <div
      className="py-12 px-4 md:px-12 lg:px-32"
      style={{
        backgroundImage: "url('/awards-bg.jpg')",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="flex flex-col items-center justify-center mt-12">
        <SectionTitle
          title="Awards and recognition"
          className={"responsiveCenterPadding"}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-8">
        {awards.map((ele) => (
          <img
            className="h-40 w-40 mx-auto rounded-lg object-contain "
            src={ele.src}
            alt={ele.name}
          />
        ))}
      </div>
    </div>
  );
}
