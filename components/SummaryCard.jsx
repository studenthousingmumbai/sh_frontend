import { MapPin } from "lucide-react";
import { truncateText } from "../utils/truncateText";
import Link from "next/link";

export default function SummaryCard({
  id,
  hostelName,
  address,
  startingFromCost,
  description2,
  gender,
}) {
  return (
    <div className="relative w-full h-full rounded-2xl border border-[rgba(0,0,0,0.10)] p-4 flex flex-col gap-2 bg-white">
      {gender && (
        <div
          className={`absolute top-0 right-0 ${
            gender === "female" ? "bg-[#FFAEDF]" : "bg-[#99D0FF]"
          } p-2.5 rounded-tr-[12px] rounded-bl-[12px]`}
        >
          <img src={gender === "female" ? "/girl.png" : "/boy.png"} />
        </div>
      )}

      <div className="font-[600] text-2xl leading-[150%]">{hostelName}</div>

      <div className="flex gap-2 font-[600] text-[#F8C14C]">
        <MapPin />
        <div>{`${address?.line_1} ${address?.line_2} ${address?.city}`}</div>
      </div>

      <div className="font-[700] text-lg leading-[170%]">
        Starting from ₹{startingFromCost}
      </div>

      <div className="font-[400] text-lg leading-[150%]">
        {truncateText(description2, 30)}
      </div>

      <div className="mt-4 flex justify-around">
        <Link href={`/listing/${id}`} className="flex-1 mr-2">
          <button className="w-full bg-[#F8C14C] hover:bg-[#F8C14C]/80 text-black font-[600] px-4 py-2 rounded-[8px]">
            Book Now
          </button>
        </Link>

        <Link href={"/contact-us"} className="flex-1">
          <button className="w-full bg-white border border-[#F8C14C] hover:text-[#F8C14C] text-black font-[600] px-4 py-2 rounded-[8px]">
            Know More
          </button>
        </Link>
      </div>
    </div>
  );
}
