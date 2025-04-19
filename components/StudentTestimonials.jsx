import CarouselList from "./CarouselList";
import SectionTitle from "./SectionTitle";

export default function StudentTestimonials({ title, subTitle, image }) {
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
    <div className="relative py-12">
      <div className="absolute inset-0 bg-[url(/bg-pattern-1.png)] z-0" />

      <SectionTitle
        title={"Student Testimonials"}
        className={"mb-9 responsiveCenterPadding z-10"}
      />

      <div className="px-12 lg:px-0 z-20">
        <CarouselList
          autoScroll={true}
          items={items}
          componentName={"student-testimonials"}
          renderItem={(item) => (
            <div className="relative bg-[#F8C14C]/10 p-6 rounded-lg xl:max-w-[845px]">
              <div className="absolute inset-x-0 mx-auto top-5 w-[91px] h-[70px] lg:translate-x-0">
                <img
                  src="/double-quotes.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 italic mb-6 text-center">
                "This hostel is absolutely superb, the team is friendly,
                helpful, full of knowledge and goes the extra mile. The rooms
                are cleaned daily, rooms are spacious, air conditioned with all
                required facilities with 24*7 housekeepers. The best part is
                they allow a trial of 2-3 days with food and stay for us to get
                comfortable and then book. I think they are very keen to give
                the best services hence this place makes the best of hostels."
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
  );
}
