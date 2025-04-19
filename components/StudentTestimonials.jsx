import CarouselList from "./CarouselList";
import SectionTitle from "./SectionTitle";

export default function StudentTestimonials({ title, subTitle, image }) {
  const reviews = [
    {
      // title: 'It really works.',
      body: "Wonderful place to stay. The managing team really goes out of their way to make sure everyone gets what they need. I was greeted with such kindness and this continued throughout my stay. I had a great time staying",
      author: "Devanshi Vaidya ",
      rating: 5,
    },
    {
      // title: 'You need this app.',
      body: "Amazing place to stay if you're studying in NMIMS. They provide 3 meals a day and do all your laundry and ironing. It is 1 minute away from campus and is very conveniently located.",
      author: "Krishna Kankani",
      rating: 5,
    },
    {
      // title: 'This shouldn’t be legal.',
      body: "Been here for 4 months now, very much satisfied and happy with all the facilities provided. Best thing of all is that they provide trial, they let students and parents stay before booking to experience the stay and comfort level",
      author: "Yashasvi Agarwal",
      rating: 5,
    },
    {
      // title: 'Screw financial advisors.',
      body: "This hostel is really comfortable, very affordable relative to others, the owners are really cool. Feels like home with delicious meals.I recommend to just look in before you decide to join others as they provide us with free trials along with food so that one finds it cozy and then decides.",
      author: "Om Jha",
      rating: 5,
    },
    {
      // title: 'Too good to be true.',
      body: "My stay here has been very comforting. The facilities in the pg made my stay much easier. The caretakers take care of all my needs and keep the pg clean everyday. They had also given us a trial stay with our parents in the pg to know the experience.",
      author: "Kunal Mody",
      rating: 5,
    },
    {
      // title: 'Too good to be true.',
      body: "Great accommodation and hospitality by the entire team. The chefs cook really amazing food ❤️. Food is not repeated that much which is great.View from the accommodation was also good, you can see the Juhu airport. Overall great 💯",
      author: "Ankit Gupta",
      rating: 5,
    },
    {
      // title: 'Too good to be true.',
      body: "Student Housing hostels happen to be one of the finest accommodations for students to live. It's near Juhu, in Vile Parle West, Mumbai. Especially if you are planning to Study at NMIMS or Mithibai college, then this is the go-to place you should prefer to stay. Good food, clean rooms, regular housekeeping and the perfect location.",
      author: "Prem Raval",
      rating: 5,
    },
    {
      // title: 'Too good to be true.',
      body: "Very luxurious student housing truly a home away from home 5 stars!",
      author: "Shubham More",
      rating: 5,
    },
    {
      // title: 'Too good to be true.',
      body: "It is one of the best hostels for students living in Mumbai. Offers all the necessities in price. It provides good quality food, caretaker services 24*7 and zumba classes too.",
      author: "Vrinda Agarwal",
      rating: 5,
    },
    {
      // title: 'Too good to be true.',
      body: "This hostel is absolutely superb, the team is friendly, helpful, full of knowledge and goes the extra mile. The rooms are cleaned daily, rooms are spacious, air conditioned with all required facilities with 24*7 housekeepers. The best part is they allow a trial of 2-3 days with food and stay for us to get comfortable and then book. I think they are very keen to give the best services hence this place makes the best of hostels. ",
      author: "Shivani Jha",
      rating: 5,
    },
    {
      // title: 'Too good to be true.',
      body: "Very good place to live, good food and comfortable stay. I always refer others to this hostel, and the facilities are THE BEST!",
      author: "Bhavya Bhasin",
      rating: 5,
    },
    {
      // title: 'Too good to be true.',
      body: "Crazy rooms and reasonable prices, easily accessible with proper rules and hygiene. Best 5 years of my life. Thank you Student Housing!",
      author: "Harsh Srivastava",
      rating: 5,
    },
    {
      // title: 'Too good to be true.',
      body: "Comfortable place to stay. Would definitely recommend non-mumbaikars to avail this luxury.",
      author: "Josna Mathews",
      rating: 5,
    },
    {
      // title: 'Too good to be true.',
      body: "I have spent a good amount of time here, people are very nice, everyone is friendly and it definitely is a very homely environment! From services to food, everything was just perfect!",
      author: "Vaishnavi Ahuja",
      rating: 5,
    },
    {
      // title: 'Too good to be true.',
      body: "Great services. Would highly recommend.",
      author: "Khushi Kharwa",
      rating: 5,
    },
    {
      // title: 'Too good to be true.',
      body: "Very good housing, would highly recommend",
      author: "Anushka Kapoor",
      rating: 5,
    },
    {
      // title: 'Too good to be true.',
      body: "Very good housing, 10/10 would recommend",
      author: "Saakshi Mishra",
      rating: 5,
    },
    {
      // title: 'Too good to be true.',
      body: "Truly amazing and very professional",
      author: "Aan Chandra",
      rating: 5,
    },
    {
      // title: 'Too good to be true.',
      body: "Hospitable environment and professional services",
      author: "Abhinav Bhushan",
      rating: 5,
    },
    {
      // title: 'Too good to be true.',
      body: "Clean and quiet place which gives you a feeling of home away from home.",
      author: "Niharika Singh",
      rating: 5,
    },
  ];
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
          items={reviews}
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
                {item.body}
              </p>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 uppercase">
                    <span className="text-sm font-medium leading-none text-white">
                      {(item && item.author[0]) || ""}
                    </span>
                  </span>
                </div>
                <p className="font-semibold text-center">~ {item.author}</p>
                <div className="text-center flex text-yellow-400">
                  {"★".repeat(item.rating)}
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
}
