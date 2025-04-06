import CarouselList from "../components/CarouselList";
import { Card, CardContent } from "../components/components/ui/card";
import { MapPin } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function RoomOptionsAndPricing({ title, subTitle, image }) {
  const items = [
    {
      title: "Avenue by Student Housing",
      location: "Vile Parle West, Mumbai",
      price: "₹42,000",
      image: "/banner_1.png",
    },
    {
      title: "Crescenzo",
      location: "Vile Parle West, Mumbai",
      price: "₹42,000",
      image: "/banner_2.png",
    },
    {
      title: "Anand",
      location: "Vile Parle West, Mumbai",
      price: "₹42,000",
      image: "/banner_3.png",
    },
    {
      title: "Avenue by Student Housing",
      location: "Vile Parle West, Mumbai",
      price: "₹42,000",
      image: "/banner_5.png",
    },
    {
      title: "Crescenzo",
      location: "Vile Parle West, Mumbai",
      price: "₹42,000",
      image: "/banner_5.png",
    },
    {
      title: "Anand",
      location: "Vile Parle West, Mumbai",
      price: "₹42,000",
      image: "/banner_5.png",
    },
  ];
  return (
    <div className="my-12">
      <SectionTitle
        title={"Room Options And Pricing"}
        className={"mb-9 responsiveCenterPadding"}
      />
      <div className="px-12 lg:px-0">
        <CarouselList
          items={items}
          renderItem={(item) => (
            <Card className="shadow-sm rounded-[16px] ">
              <CardContent className="flex p-4">
                <div className="flex flex-col gap-3 overflow-hidden">
                  <div className="h-64 md:h-48 relative rounded-[14px] overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#F8C14C] p-2.5 rounded-tr-[14px] rounded-bl-[12px]">
                      <img src="/girl.png" />
                    </div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-[14px]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-[600] text-2xl truncate">
                      {item.title}
                    </h3>
                    <div className="flex gap-2 font-[600] text-[#F8C14C]">
                      <MapPin />
                      <div>{item.location}</div>
                    </div>
                    <p className="text-lg font-semibold ">
                      Starting from {item.price}
                    </p>
                    <p className="text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc tincidunt tristique...
                    </p>
                    <div className="mt-4 flex justify-around">
                      <button className="bg-[#F8C14C] hover:bg-[#F8C14C]/80 text-black text-sm md:text-base font-semibold px-4 py-2 rounded-[8px] flex-1 mr-2">
                        Book Now
                      </button>
                      <button className="bg-white border border-[#F8C14C] hover:text-[#F8C14C] text-sm md:text-base text-black font-semibold px-4 py-2 rounded-[8px] flex-1">
                        Know More
                      </button>
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
