/* =========================================================
   GIRLS HOSTEL FAQS
   ========================================================= */

export const girlsFixedFaqs = [
  {
    question: "What girls hostel options does Student Housing offer in Mumbai?",
    answer:
      "Student Housing offers girls hostels in Mumbai, including options in Juhu and Vile Parle. You can explore the available hostels, compare room options and facilities, and choose a location that works for your college and daily commute.",
  },
  {
    question: "How much does a girls hostel in Mumbai cost?",
    answer:
      "The cost depends on the location and the type of room you choose. Student Housing offers different occupancy options at different price points. Visit the individual hostel pages to check current prices and room availability.",
  },
  {
    question: "What facilities are available in Student Housing girls hostels?",
    answer:
      "Student Housing hostels offer facilities such as WiFi, laundry, housekeeping, study spaces and recreational areas. Many also include meals and furnished rooms. Check the individual hostel page to see what's available at your preferred location.",
  },
  {
    question: "Does Student Housing provide a college drop facility?",
    answer:
      "Yes, Student Housing provides a college drop facility to help students commute conveniently from their hostel to college.",
  },
];

export const girlsRandomFaqPool = [
  {
    question: "Does Student Housing offer girls hostels near NMIMS Mumbai?",
    answer:
      "Yes, Student Housing has girls hostel options in Juhu and Vile Parle, including accommodation near NMIMS Mumbai. You can explore the available hostels to find one that suits your college location and room preferences.",
  },
  {
    question:
      "What room-sharing options are available in Student Housing girls hostels?",
    answer:
      "You can choose from single, double, triple or quadruple occupancy, depending on the hostel. Available room types and prices vary between locations.",
  },
  {
    question: "How many meals are provided at Student Housing girls hostels?",
    answer:
      "Meal plans typically include breakfast, lunch and dinner. Tea, coffee, fruits and evening snacks may also be available throughout the day. Meal plans vary by location.",
  },
  {
    question:
      "What security arrangements are available at Student Housing girls hostels?",
    answer:
      "Student Housing hostels have security measures such as CCTV cameras, security personnel and access controls. The specific arrangements may differ between locations, so check the details of your preferred hostel before booking.",
  },
  {
    question: "Who takes care of cleaning and housekeeping at Student Housing hostels?",
    answer:
      "Student Housing has housekeeping and maintenance staff to look after the hostels. Daily housekeeping helps keep rooms and common areas clean, so you can focus on your studies and daily routine.",
  },
  {
    question: "Can I visit a girls hostel before booking?",
    answer:
      "Yes, you can contact the Student Housing team to arrange a visit if you're in Mumbai. If you can't visit in person, ask about a video call or virtual tour to get a better look at the hostel before booking.",
  },
  {
    question:
      "Can I book a Student Housing girls hostel without visiting in person?",
    answer:
      "Yes, you can book online without visiting the hostel first. If you'd like to see the room before making a decision, you can take a virtual tour or speak with the Student Housing team over a video call.",
  },
  {
    question: "What should I bring when moving into a Student Housing girls hostel?",
    answer:
      "Bring your clothes, toiletries, personal care items and any other essentials you use every day. If you're unsure whether bedding or a particular item is provided, check with the team before moving in.",
  },
];

/* =========================================================
   BOYS HOSTEL FAQS
   ========================================================= */

export const boysFixedFaqs = [
  {
    question: "What boys hostel options does Student Housing offer in Mumbai?",
    answer:
      "Student Housing offers boys hostels in Mumbai with different room types and facilities. You can explore the available hostels, compare their locations and choose accommodation that works for your college and everyday needs.",
  },
  {
    question: "How much does a boys hostel in Mumbai cost?",
    answer:
      "The cost depends on the hostel's location and the type of room you choose. Student Housing offers different occupancy options, with prices varying between accommodations. Visit the individual hostel pages to check current prices and room availability.",
  },
  {
    question: "What facilities are available in Student Housing boys hostels?",
    answer:
      "Student Housing hostels offer facilities such as WiFi, laundry, housekeeping, study spaces and recreational areas. Many also include meals and furnished rooms. Check the individual hostel page to see what's available at the location you're considering.",
  },
  {
    question: "Does Student Housing provide a college drop facility?",
    answer:
      "Yes, Student Housing provides a college drop facility to help students commute conveniently from their hostel to college.",
  },
];

export const boysRandomFaqPool = [
  {
    question:
      "What room-sharing options are available in Student Housing boys hostels?",
    answer:
      "You can choose from single, double, triple or quadruple occupancy, depending on the hostel. Available room types and prices vary between locations.",
  },
  {
    question:
      "What security arrangements are available at Student Housing boys hostels?",
    answer:
      "Student Housing hostels have security measures such as CCTV cameras, security personnel and biometric or keycard access. The specific arrangements may differ between locations, so check the details of your preferred hostel.",
  },
  {
    question: "How many meals are provided at Student Housing boys hostels?",
    answer:
      "Meal plans typically include breakfast, lunch and dinner. Tea, coffee, fruits and evening snacks may also be available throughout the day. Meal plans vary by location.",
  },
  {
    question: "Who takes care of cleaning and housekeeping at Student Housing hostels?",
    answer:
      "Student Housing has housekeeping and maintenance staff to look after the hostels. Daily housekeeping helps keep rooms and common areas clean and comfortable for residents.",
  },
  {
    question: "Can I visit a boys hostel before booking?",
    answer:
      "Yes, you can contact the Student Housing team to arrange a visit. If you're unable to visit in person, ask about a video call or virtual tour to see the accommodation before booking.",
  },
  {
    question:
      "Can I book a Student Housing boys hostel without visiting in person?",
    answer:
      "Yes, you can book online without visiting the hostel first. You can also take a virtual tour or speak with the Student Housing team over a video call if you'd like to see the accommodation before making a decision.",
  },
  {
    question: "Can friends and family visit me at a Student Housing hostel?",
    answer:
      "Friends can visit the common amenities areas but cannot enter individual rooms. Complimentary accommodation for parents and siblings may also be available, subject to availability and the property's rules. Contact the team to confirm the arrangements.",
  },
  {
    question: "What is the minimum duration of stay at Student Housing?",
    answer:
      "The minimum stay is typically 10–11 months, covering the academic year. Check with the Student Housing team to confirm the applicable stay duration and contract terms before booking.",
  },
];

/* =========================================================
   HELPER: fixed FAQs first, then N random ones from the pool
   ========================================================= */

/* Adds a unique id to each FAQ (the accordion likely needs it to track open/closed) */
export function withIds(faqs) {
  return faqs.map((faq, index) => ({
    ...faq,
    id: index + 1,
  }));
}

export function getFaqs(fixedFaqs, randomPool, randomCount = 4) {
  // Fisher-Yates shuffle on a copy so the original pool is never mutated
  const shuffled = [...randomPool];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return withIds([...fixedFaqs, ...shuffled.slice(0, randomCount)]);
}