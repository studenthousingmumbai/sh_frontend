import { MapPin } from "lucide-react";

export default function SummaryCard({
  title,
  location,
  cost,
  description,
  bookNowLink,
  knowMoreLink,
  gender,
}) {
  return (
    <div className="relative w-full h-full rounded-2xl border border-[rgba(0,0,0,0.10)] p-4 flex flex-col gap-2">
      <div className="absolute top-0 right-0 bg-[#F8C14C] p-2.5 rounded-tr-[12px] rounded-bl-[12px]">
        <img src="/girl.png" />
      </div>

      <div className="font-[600] text-2xl leading-[150%]">
        Aster A by Student Housing
      </div>

      <div className="flex gap-2 font-[600] text-[#F8C14C]">
        <MapPin />
        <div>Vile Parle West, Mumbai</div>
      </div>

      <div className="font-[700] text-lg leading-[170%]">
        Starting from ₹42,000
      </div>

      <div className="font-[400] text-lg leading-[150%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt
        tristique tempus. Maecenas sit amet mattis mauris. Nam et augue vitae
        massa efficitur hendreritmelogy...
      </div>

      <div className="mt-4 flex justify-around">
        <button className="bg-[#F8C14C] hover:bg-[#F8C14C]/80 text-black font-[600] px-4 py-2 rounded-[8px] flex-1 mr-2">
          Book Now
        </button>
        <button className="bg-white border border-[#F8C14C] hover:text-[#F8C14C] text-black font-[600] px-4 py-2 rounded-[8px] flex-1">
          Know More
        </button>
      </div>
    </div>
  );
}
