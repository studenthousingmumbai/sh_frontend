import { useState } from "react";
import SummaryCard from "./SummaryCard";
import ImageViewerCarousel from "./ImageViewerCarousel";
import SectionTitle from "./SectionTitle";

export default function BestHotelsNear({ data }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className="relative py-12 responsiveCenterPadding">
      <div className="absolute inset-0 bg-[url(/bg-pattern-2.png)] bg-no-repeat z-0" />
      <SectionTitle
        title={`Best Hostel Near ${data.collegeName}`}
        className={"mb-9 z-10"}
      />

      <div className="flex gap-6 z-20">
        <div className="flex gap-4 bg-[#99D0FFB2] rounded-[8px] px-2 py-3 md:px-3 md:py-4 w-[302px] z-20">
          <div>
            <img src={"/girl.png"} />
          </div>
          <div className="font-semibold text-base md:text-2xl">For Boys</div>
        </div>
        <div className="flex gap-4 bg-[#FFAEDFB2] rounded-[8px] px-2 py-3 md:px-3 md:py-4 w-[302px] z-20">
          <div>
            <img src={"/girl.png"} />
          </div>
          <div className="font-semibold  text-base md:text-2xl">For Girls</div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row z-10 mt-9 gap-6">
        <div className="flex flex-col gap-6 z-30 w-full xl:w-5/12">
          <div className="w-full ">
            <SummaryCard
              {...data}
              address={{
                line_1: data.address.line1,
              }}
              hostelDescription={data.description1}
            />
          </div>
          <div className="w-full font-[400] text-sm md:text-lg leading-[150%]">
            {data.description2}
          </div>
        </div>

        <div className="w-full xl:w-7/12  gap-6 rounded-lg overflow-hidden z-20">
          <div
            className="relative rounded-lg cursor-pointer overflow-hidden group"
            onClick={() => {
              setIsDialogOpen(true);
            }}
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[rgba(0,0,0,0.10)] to-[rgba(0,0,0,0.50)] z-50" />
            <div className="absolute right-8 bottom-6 font-[600] text-[32px] leading-[150%] text-white z-50">
              {data.images?.length > 1 && `+${data.images?.length - 1}`}
            </div>
            <img
              src={data.images[0]?.url}
              className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>

        <ImageViewerCarousel
          images={data.images}
          startIndex={1}
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        />
      </div>
    </div>
  );
}
