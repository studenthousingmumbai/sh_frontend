import { useState } from "react";
import CarouselList from "../components/CarouselList";
import ImageViewerCarousel from "../components/ImageViewerCarousel";
import { Card, CardContent } from "../components/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/components/ui/accordion";
import FaqAccordion from "../components/FaqAccordion";

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

const images = [
  "/banner_1.png",
  "/banner_2.png",
  "/banner_3.png",
  "/banner_5.png",
];

const faqItems = [
  {
    id: "item-1",
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-2",
    question: "Is it styled?",
    answer:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    id: "item-3",
    question: "Is it animated?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (index) => {
    setIsDialogOpen(true);
  };

  return (
    <div className="w-full">
      <FaqAccordion faqs={faqItems} className="mt-4 px-6 rounded-lg" />
      <div className="w-full px-20 ">
        <div className="mb-12">
          {/* Hostels list carousel */}
          <CarouselList
            items={items}
            renderItem={(item) => (
              <div className="p-1">
                <Card className="shadow-sm">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.location}</p>
                        <p className="text-lg font-semibold mt-2">
                          Starting from {item.price}
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc tincidunt tristique...
                        </p>
                        <div className="mt-4 flex justify-around">
                          <button className="bg-[#F8C14C] hover:bg-[#F8C14C]/80 text-black px-4 py-2 rounded flex-1 mr-2">
                            Book Now
                          </button>
                          <button className="bg-white border border-[#F8C14C] hover:text-[#F8C14C] text-black px-4 py-2 rounded flex-1">
                            Know More
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          />
        </div>

        <button onClick={() => setIsDialogOpen(true)}>View images</button>

        <div className="mb-12">
          {/* Image viewer carousel */}
          <ImageViewerCarousel
            images={images}
            startIndex={1}
            isOpen={isDialogOpen}
            onOpenChange={setIsDialogOpen}
          />
        </div>

        <div className="mb-12">
          {/* Institutions list carousel */}
          <CarouselList
            items={items}
            renderItem={(item) => (
              <div className="text-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[296px] h-[386px] object-cover rounded-full mx-auto"
                />
                <h3 className="text-lg font-bold mt-2">{item.title}</h3>
              </div>
            )}
          />
        </div>

        <div className="mb-12">
          {/* Reviews list carousel */}
          <CarouselList
            items={items}
            renderItem={(item) => (
              <div className="bg-[#F8C14C]/10 p-6 rounded-lg">
                <p className="text-gray-700 italic mb-6">
                  "This hostel is absolutely superb, the team is friendly,
                  helpful, full of knowledge and goes the extra mile. The rooms
                  are cleaned daily, rooms are spacious, air conditioned with
                  all required facilities with 24*7 housekeepers. The best part
                  is they allow a trial of 2-3 days with food and stay for us to
                  get comfortable and then book. I think they are very keen to
                  give the best services hence this place makes the best of
                  hostels."
                </p>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <p className="font-semibold text-center">~ {item.title}</p>
                  <div className="text-center flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
}
