import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Layout from '../components/Layout'

const faqs = [
    {
      category: "amenities", 
      questions: [ 
        {
          question: "How many meals will I get in a day?",
          answer:
            "Typically our meal plans include breakfast, lunch and dinner. Tea, coffee, fruits are available throughout the day and so are typically evening snacks. At some locations, we don't offer lunch plans.",
        },
        {
          question: "Who will keep my room and the common areas clean?",
          answer:
            "We take care of that. We have a dedicated housekeeping and maintenance staff in all of our hostels. Houskeeping is conducted daily so coming back to a messy room is the last thing you'd have to worry about",
        },
        {
          question: "If I don't use the amenities, will I be getting any discounts?",
          answer:
            "Our amenities are for all to use, so opting for a discount isn't possible. Everyone who resides with you will use the same facilities, so make the most!",
        },
        {
          question: "Do I get to pick and choose the house amenities?",
          answer:
            "No. Our accommodations are designed in a way that all your daily needs are taken care of and only essential amenties are included.That would be ideal. But our co-living spaces are designed for everyone who’s residing in them at any given point of time. So it’s easier for us to maintain a standard package with the basic amenities available to all.",
        },
        {
          question: "Will I get charged for repair and maintenance services?", 
          answer: "Ideally, no. Our in house team ensures all maintenance and wear and tear is taken care of by us. However if there are any clear indications of intentional harm, then the student responsbile will be liable to pay for it."
        }, 
        {
          question: "Do all accommodations have parking facilities?",
          answer:
            "It differs from accommodation to accommodation. Two-wheeler parking would be available at all locations though.That differs from residence to residence. Just go through them all on the residence page listed on our website. As long as you don't have a stretch limousine, you'll probably find a place with a parking area for your vehicle.",
        },
        {
          question: "What do I have to bring?",
          answer:
            "We recommend you bring your personal care items like blankets, toiletries and your clothes etc. Rest of it, we got you covered!",
        },
      ]
    },
    {
      category: "Booking with student housing", 
      questions: [ 
        {
          question: "How can I book a room for myself?",
          answer: `You can click on book now on your preferred accommodation. While you're choosing your bed, you will also have a "Book by course" checkbox. Tick on it and you will be able to choose a bed and roommates who are in your college and year. Sounds fun? Try it.`,
        },
        {
          question: "How and when can I see the room before booking?",
          answer:
            "Whenever you want to. Get in touch with our team here and you can either schedule a visit if you're in town, or we will arrange for a video call to show you the room. There are virtual tours for each accommodation with which you can check the entire property out.",
        },
        {
          question: "What is the minimum duration of stay?",
          answer:
            "Your annual academic year, ideally lasting 10-11 months is the minimum duration of staying with us.",
        },
        {
          question: "Can I book a accommodation without a visit?",
          answer:
            "Sure, you can book any accommodation through our website without any physical visit. But before that, just to give you a confidence boost, we recommend taking a virtual tour as well as getting on a video call with our team.",
        },
        {
          question: "How do I schedule a visit?",
          answer:
            "You can give us a call here or fill out your basic details here, with which our team will contact you and assist you in your visit.",
        },
      ]
    }, 
    {
      category: "Fees pricing availability", 
      questions: [ 
        {
          question: "Do I need to pay a deposit?",
          answer:
            "No, you don't have to pay any deposit.",
        },
        {
          question: "Can I keep my luggage in the summers at my accommodation outside my contract (academic year), if I am renewing my stay with Student Housing?", 
          answer: "Sure! Most welcome to, just let us know in advance and once all renewal formalities are done you can continue staying there, even during the summers. However, students who are not renewing their stay, will have to vacate their luggage once their academic year is over, ie: exams are completed."
        }, 
        {
          question: "How much do I need to pay if I extend my stay beyond my agreed contract period?",
          answer:
            "We provide you all with a one week grace period post your exams completion to stay with us without additional cost. After that, You need to make full payment for 30 days in case you extend your stay beyond the contract period – even if the extension is for 1 day.You also have to give an advance notice in case you are extending your stay.",
        }
      ]
    }, 
    { 
      category: "General", 
      questions: [ 
        {
          question: "How is Student Housing different from other PGs and hostels?",
          answer:
            "So, within the walls of our professionally-managed residences, you'll be pampered with all kinds of services and amenities. We're talking on-demand professional housekeeping, a customisable menu, regional cuisines. You'll also get to particate in our much-loved community engagement programme. And you'll be able to access all our services through the Stanza Living - Resident app, which makes for a tech-enabled, customisable, new-age living experience that you won't find anywhere else. Certainly not in other PGs and Hostels.",
        },
        {
          question: "What paperwork will I be getting once I pay?",
          answer:
            "You will be getting GST invoices and Rent receipt in terms of the paperwork.",
        },
        {
          question: "If it’s a shared room, who gets to choose the bed?",
          answer: "First come first serve! If your roommate books a bed before you do, he gets it. The vacant bed will be allotted to you, so speed up."
        }, 
        {
          question: "Is there a curfew in the hostels?",
          answer:
            "Yes there is an 11pm curfew. If you want to stay out for the night you can choose to do so by informing your hostel caretaker and parents in advance. You students' safety and well being is something we do not compromise upon.",
        },
      ]
    }, 
    { 
      category: "Refunds & Cancellation", 
      questions: [
        {
          question: "Can I cancel my booking?",
          answer:
            "Nope, sorry. If you have to cancel it, refund will only be possible if a new student books the same bed. Proportionate refund is provided in such a scenario.",
        },
        {
          question: "Do you provide relocation to other Student Housing accommodations?",
          answer:
            "If there is a bed available in the accommodation you want to shift to, we would be happy to see you choose something you like, better!",
        },
      ]
    }, 
    {
      category: "Safety & Security", 
      questions: [ 
        {
          question: "How many people will I share the entire acommodation with?",
          answer:
            "Depends on the accommodation. Ideally, it varies between 10-50 students in one whole premises. However, our properties are designed in a way the space doesn't feel cramped up.",
        },
        { 
          question: "How many people will I have to share my room with?", 
          answer: "We offer single, double, triple, and four sharing-rooms. Choose whichever one works for you."
        }, 
        {
          question: "Are the accommodations unisex?",
          answer:
            "No. Our accommodation follow a strict boys-only or girls-only policy.",
        },
        {
          question: "What are the steps taken to ensure security in the residences?",
          answer:
            "All our accommodations are fully equipped with CCTV camercas, 24*7 security guards at entry and exit, biometric and keycard access. For our girls accommodation, we do not allow any male to enter the same.",
        },
        { 
          question: "Can I bring over my friends and family?", 
          answer: "You can bring your friends over in the common amenities section, not upto your rooms. For families, we provide free accommodation to your parents and siblings, of course subject to availability in our properties."
        }
      ]
    }, 
    { 
      category: "Partner with us / Refer & Earn", 
      questions: [ 
        {
          question: "How do I refer a friend to Student Housing?",
          answer:"It's very simple. Just provide your referral's name and number to our team, and once your referral confirms their booking, you will get your reward. More motivation to live and earn now?",
        },
        {
          question: "I own a property that I feel would be ideal for Student Housing. What can I do about it?",
          answer:"Great. Kindly reach out to us here for our partnership programme.",
        },
        { 
          question: "How much can I earn through referrals?", 
          answer: "We provide as much as Rs. 10,000/-*  for each new referral that you provide to us. Start calling your fellow mates now! *Terms and Conditions apply"
        }
      ]
    }
]; 


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Layout>
      <div className="bg-white mb-12">
        <h1 className='text-3xl capitalize font-semibold mx-auto max-w-7xl px-6 lg:px-8'>Frequently asked questions</h1>
        {
           faqs.map(faq => ( 
            <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 lg:px-8 pt-12 mb-5">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-brandColor capitalize">{faq.category}</h2>
              <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
                {faq.questions.map((item, index) => (
                  <div key={index} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                    <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{item.question}</dt>
                    <dd className="mt-4 lg:col-span-7 lg:mt-0">
                      <p className="text-base leading-7 text-gray-600">{item.answer}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
           ))
        }
      </div>
    </Layout>
  )
}

// export default function Example() {
//   return (
//     <Layout>
//         <div className="bg-white "> 
//         <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
//             <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
//             <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//                 Frequently asked questions
//             </h2>
//             <dl className="mt-6 space-y-6 divide-y divide-gray-200">
//                 {faqs.map((faq) => (
//                 <Disclosure as="div" key={faq.question} className="pt-6">
//                     {({ open }) => (
//                     <>
//                         <dt className="text-lg">
//                         <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
//                             <span className="font-medium text-gray-900">{faq.question}</span>
//                             <span className="ml-6 flex h-7 items-center">
//                             <ChevronDownIcon
//                                 className={classNames(open ? '-rotate-180 transition-all' : 'rotate-0 transition-all', 'h-6 w-6 transform transition-all')}
//                                 aria-hidden="true"
//                             />
//                             </span>
//                         </Disclosure.Button>
//                         </dt>
//                         <Disclosure.Panel as="dd" className="mt-2 pr-12">
//                         <p className="text-base text-gray-500 transition-all">{faq.answer}</p>
//                         </Disclosure.Panel>
//                     </>
//                     )}
//                 </Disclosure>
//                 ))}
//             </dl>
//             </div>
//         </div>
//         </div>
//     </Layout>
//   )
// }