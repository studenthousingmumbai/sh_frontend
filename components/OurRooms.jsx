import { useState } from "react";
import SummaryCard from "./SummaryCard";
import ImageViewerCarousel from "../components/ImageViewerCarousel";
import SectionTitle from "./SectionTitle";

export default function ({ data }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  console.log(data);

  return (
    <div className="relative py-12">
      <div className="absolute inset-0 bg-[url(/bg-pattern-2.png)] bg-no-repeat z-0" />
      <SectionTitle title={"Our Rooms"} className={"mb-9 z-10"} />

      <div className="flex flex-col responsiveCenterPadding gap-6 z-10">
        {/* Image viewer carousel */}
        <ImageViewerCarousel
          images={data.images?.map((imgs) => {
            return {
              url: imgs,
            };
          })}
          startIndex={1}
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        />
        <div className="h-auto md:h-[500px] flex flex-col md:flex-row gap-6 rounded-lg overflow-hidden z-20">
          <div className="w-full md:w-[60%] h-[233px] md:h-auto rounded-lg cursor-pointer overflow-hidden">
            <img
              src={data.images[0]}
              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-500"
            />
          </div>

          <div className="flex flex-col h-full gap-6 w-full md:w-[40%]">
            <div className="h-[157px] md:h-1/2 rounded-lg cursor-pointer overflow-hidden">
              <img
                src={data.images[1]}
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-500"
              />
            </div>
            <div
              className="relative h-[157px] md:h-1/2 rounded-lg cursor-pointer overflow-hidden group"
              onClick={() => {
                setIsDialogOpen(true);
              }}
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[rgba(0,0,0,0.10)] to-[rgba(0,0,0,0.50)] z-50" />
              <div className="absolute right-8 bottom-6 font-[600] text-[32px] leading-[150%] text-white z-50">
                {data.images.length > 3 && `+${data.images.length - 3}`}
              </div>
              <img
                src={data.images[2]}
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        <div className="flex  flex-col md:flex-row gap-6 z-30">
          <div className="w-full md:w-5/12">
            <SummaryCard
              {...data}
              hostelDescription={data.description}
              address={{
                line_1: `${data?.address?.line_1}, `,
                line_2: `${data?.address?.line_2}, `,
                city: `${data?.address?.city}`,
              }}
            />
          </div>
          <div className="w-full md:w-7/12 font-[400] text-sm md:text-lg leading-[150%]">
            {data.description}
          </div>
        </div>
      </div>
    </div>
  );
}
