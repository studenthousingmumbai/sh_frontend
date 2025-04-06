import { useState } from "react";
import SummaryCard from "./SummaryCard";
import ImageViewerCarousel from "../components/ImageViewerCarousel";
import SectionTitle from "./SectionTitle";

export default function () {
  const images = [
    "/banner_1.png",
    "/banner_2.png",
    "/banner_3.png",
    "/banner_5.png",
  ];
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <SectionTitle title={"Our Rooms"} className={"my-9"} />

      <div className="flex flex-col responsiveCenterPadding gap-6 ">
        {/* Image viewer carousel */}
        <ImageViewerCarousel
          images={images}
          startIndex={1}
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        />
        <div className="h-auto md:h-[500px] flex flex-col md:flex-row gap-6 rounded-lg overflow-hidden">
          <div className="w-full md:w-[60%] h-[233px] md:h-auto rounded-lg cursor-pointer overflow-hidden">
            <img
              src="/hostels/girls-rooms-img-1.png"
              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-500"
            />
          </div>

          <div className="flex flex-col h-full gap-6 w-full md:w-[40%]">
            <div className="h-[157px] md:h-1/2 rounded-lg cursor-pointer overflow-hidden">
              <img
                src="/hostels/girls-rooms-img-2.png"
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
                +12
              </div>
              <img
                src="/hostels/girls-rooms-img-3.png"
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        <div className="flex  flex-col md:flex-row gap-6">
          <div className="w-full md:w-5/12">
            <SummaryCard />
          </div>
          <div className="w-full md:w-7/12 font-[400] text-lg leading-[150%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sed nunc et libero finibus interdum. Nam augue urna, dapibus et
            consectetur sed, ullamcorper in nunc. Vestibulum maximus nunc nec
            arcu egestas, congue sollicitudin nibh pellentesque. Praesent
            porttitor nibh id velit gravida, sit amet vehicula dui dictum.
            Nullam ornare quam sed enim volutpat, vel posuere sem porta. Fusce
            tempus, velit id condimentum mollis, libero est maximus diam, luctus
            tristique orci arcu vulputate erat. Nulla fermentum nulla ac rutrum
            finibus. Morbi in nibh aliquam odio ultricies viverra ac ut diam.
          </div>
        </div>
      </div>
    </div>
  );
}
