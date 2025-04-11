import CarouselList from "../components/CarouselList";
import { Card, CardContent } from "../components/components/ui/card";
import { MapPin } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Link from "next/link";

export default function RoomOptionsAndPricing({ sectionTitle, data }) {
  console.log(data);
  return (
    <div className="relative py-12">
      {/* Graphics - Positioned Behind */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src="/graphic-moneyverse-bussines-calendar.png"
          className="absolute top-10 left-10 rotate-6 w-28"
        />
        <img
          src="/graphic-moneyverse-credit-card.png"
          className="absolute top-20 right-16 -rotate-12 w-24"
        />
        <img
          src="/graphic-moneyverse-folder.png"
          className="absolute bottom-10 left-1/4 rotate-3 w-20"
        />
        <img
          src="/graphic-moneyverse-gifts.png"
          className="absolute bottom-5 right-10 -rotate-6 w-32"
        />
        <img
          src="/graphic-moneyverse-save-money.png"
          className="absolute top-1/3 left-1/3 rotate-12 w-28"
        />
        <img
          src="/graphic-moneyverse-transaction-approved.png"
          className="absolute bottom-1/3 right-1/4 -rotate-3 w-24"
        />
      </div>

      {/* Main Content */}
      <SectionTitle
        title={sectionTitle}
        className={"mb-9 responsiveCenterPadding"}
      />

      <div className="px-12 lg:px-0">
        <CarouselList
          items={data || []}
          autoScroll
          renderItem={(item) => (
            <Card className="shadow-sm rounded-[16px] h-full flex flex-col">
              <CardContent className="flex flex-col p-4 h-full">
                <div className="flex flex-col gap-3 overflow-hidden h-full">
                  <div className="h-64 md:h-48 relative rounded-[14px] overflow-hidden">
                    <div
                      className={`absolute top-0 right-0  ${
                        item.gender === "female"
                          ? "bg-[#FFAEDF]"
                          : "bg-[#99D0FF]"
                      } p-2.5 rounded-tr-[14px] rounded-bl-[12px]`}
                    >
                      <img
                        src={
                          item.gender === "female" ? "/girl.png" : "/boy.png"
                        }
                      />
                    </div>
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-[14px]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 flex-grow">
                    <h3 className="font-[600] text-2xl truncate flex-1">
                      {item.name}
                    </h3>
                    <div className="flex gap-2 font-[600] text-[#F8C14C] flex-1">
                      <MapPin />
                      <div>{`${item.address?.line_1} ${item.address?.line_2}, ${item.address?.city}`}</div>
                    </div>
                    <p className="text-lg font-semibold flex-1">
                      Starting from {item.price}
                    </p>
                    <p className="text-lg flex-grow  flex-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc tincidunt tristique...
                    </p>
                    <div className="mt-4 flex justify-around">
                      <Link
                        href={`/listing/${item.id}`}
                        className="flex-1 mr-2"
                      >
                        <button className="w-full bg-[#F8C14C] hover:bg-[#F8C14C]/80 text-black text-sm md:text-base font-semibold px-4 py-2 rounded-[8px]">
                          Book Now
                        </button>
                      </Link>
                      <Link href={"/contact-us"} className="flex-1">
                        <button className="w-full bg-white border border-[#F8C14C] hover:text-[#F8C14C] text-sm md:text-base text-black font-semibold px-4 py-2 rounded-[8px]">
                          Know More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        />
      </div>
    </div>
  );
}
