import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
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
    question: "Is there a curfew in the hostels?",
    answer:
      "Yes there is an 11pm curfew. If you want to stay out for the night you can choose to do so by informing your hostel caretaker and parents in advance. You students' safety and well being is something we do not compromise upon.",
  },
  {
    question: "Do you provide relocation to other Student Housing accommodations?",
    answer:
      "If there is a bed available in the accommodation you want to shift to, we would be happy to see you choose something you like, better!",
  },
  {
    question: "How many meals will I get in a day?",
    answer:
      "Typically our meal plans include breakfast, lunch and dinner. Tea, coffee, fruits are available throughout the day and so are typically evening snacks. At some locations, we don't offer lunch plans.",
  },
   {
    question: "How do I schedule a visit?",
    answer:
      "You can give us a call here or fill out your basic details here, with which our team will contact you and assist you in your visit.",
  },
  {
    question: "How many people will I share the entire acommodation with?",
    answer:
      "Depends on the accommodation. Ideally, it varies between 10-50 students in one whole premises. However, our properties are designed in a way the space doesn't feel cramped up.",
  },
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-white h-[100vh] flex ">
      <div className="m-auto mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180 transition-all' : 'rotate-0 transition-all', 'h-6 w-6 transform transition-all')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500 transition-all">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}