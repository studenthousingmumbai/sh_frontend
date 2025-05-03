import { useState } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import useApi from "../hooks/useApi";
import Link from "next/link";

export default function Example() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const { locations } = useApi();

  return (
    <Layout>
      <div className="relative flex justify-center bg-gray-100 items-center my-auto h-[500px] ">
        <img
          className="w-full h-full object-cover"
          src="/locations-bg.jpeg"
          alt="locations"
        />
        <div className="absolute bg-black-overlay w-full h-full"></div>
        <div className="absolute w-full text-center">
          <h1 className="uppercase text-2xl text-white">
            <b>Where we are</b>
          </h1>
        </div>
      </div>
      <div className="relative bg-white">
        <div className="absolute inset-0 px-4 sm:px-12 ">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>

        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5 h-full">
          <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-8 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="font-bold text-2xl lg:text-2xl lg1:text-2xl text-start lg:text-start text-[#FBCF5F]">
                Student Housing Ganga Niwas - Boys Accommodation
              </h2>

              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <a
                      href="https://www.google.com/maps/place/Ganga+Niwas+Boys+Hostel-+Student+Housing/@19.102562,72.8333613,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9b27d21464b:0xfa24c72136c1ac3e!8m2!3d19.102562!4d72.83555!16s%2Fg%2F11fln228xf?hl=en-GB&authuser=1&entry=ttu"
                      target="_blank"
                      className="mt-6 max-w-3xl text-base text-indigo-500 underline"
                    >
                      Ganga Niwas, Next to SBI Bank, Vaikunthlal Mehta Road,
                      Across NMIMS, Vile Parle West, Mumbai, Maharashtra 400056
                    </a>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex mb-3">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link href="tel:+91-9819780000" className="ml-3">
                      {" "}
                      +91-9819780000
                    </Link>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link
                      href="mailto:info@studenthousing.co.in"
                      className="ml-3"
                    >
                      info@studenthousing.co.in
                    </Link>
                  </dd>
                  <dd className="flex">
                    <span className="ml-3">Working hours: Open 24 Hours</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-8 lg:px-8 xl:pl-12">
            <div className="mx-auto max-w-lg">
              <h2 className="font-bold text-2xl lg:text-2xl lg1:text-2xl text-start lg:text-start text-[#FBCF5F]">
                Student Housing Crescenzo- Girls Accommodation
              </h2>

              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <a
                      href="https://www.google.com/maps/place/Student+Housing+Hostels:+Crescenzo+Apartment/@19.1024726,72.7630308,13z/data=!3m1!5s0x3be7c9b8bfa30ceb:0xc685c3566f90015d!4m10!1m2!2m1!1screscenzo!3m6!1s0x3be7c90d5e92ad71:0xac4f3339bb7ec057!8m2!3d19.1024726!4d72.8351286!15sCgljcmVzY2Vuem9aCyIJY3Jlc2NlbnpvkgEWc3R1ZGVudF9ob3VzaW5nX2NlbnRlcuABAA!16s%2Fg%2F11qzj3y64s?hl=en-GB&authuser=1&entry=ttu"
                      target="_blank"
                      className="mt-6 max-w-3xl text-base text-indigo-500 underline"
                    >
                      Crescenzo, Floor 3, 4, 5, 6 Crescenzo Residences, Next to
                      HDFC Bank, Vaikunthlal Mehta Rd, JVPD Scheme, Vile Parle
                      West Mumbai Maharashtra 400056
                    </a>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex mb-3">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link href="tel:+91-9004033884" className="ml-3">
                      +91-9004033884
                    </Link>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link
                      href="mailto:info@studenthousing.co.in"
                      className="ml-3"
                    >
                      info@studenthousing.co.in
                    </Link>
                  </dd>
                  <dd className="flex">
                    <span className="ml-3">
                      Working hours: Monday- Sunday 10am- 8pm
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5 h-full">
          <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-8 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="font-bold text-2xl lg:text-2xl lg1:text-2xl text-start lg:text-start text-[#FBCF5F]">
                Student Housing Anand- Boys Accommodation
              </h2>

              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <a
                      href="https://www.google.com/maps/place/Anand+Hostel/@19.1128565,72.8256212,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9e85d19534b:0xba01831676d5570b!8m2!3d19.1128565!4d72.8256212!16s%2Fg%2F1thlxxn4?hl=en-GB&authuser=1&entry=ttu"
                      target="_blank"
                      className="mt-6 max-w-3xl text-base text-indigo-500 underline"
                    >
                      Floor 1, 2, 3, 5, Anand Hostel, 8, Gandhigram Rd, Above
                      Dakshinayan, Juhu, Mumbai, Maharashtra 400049
                    </a>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex mb-3">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link href="tel:+91-9029923757" className="ml-3">
                      +91-9029923757
                    </Link>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link
                      href="mailto:info@studenthousing.co.in"
                      className="ml-3"
                    >
                      info@studenthousing.co.in
                    </Link>
                  </dd>
                  <dd className="flex">
                    <span className="ml-3">Monday- Sunday 10am- 8pm</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-8 lg:px-8 xl:pl-12">
            <div className="mx-auto max-w-lg">
              <h2 className="font-bold text-2xl lg:text-2xl lg1:text-2xl text-start lg:text-start text-[#FBCF5F]">
                Student Housing Bhav Bindu- Girls Accommodation
              </h2>

              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <a
                      href="https://www.google.com/maps/place/Student+Housing+-+Girls+Hostel+in+Mumbai/@19.1052749,72.8325454,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9eed4dff89b:0x245de83cf62eb743!8m2!3d19.1052698!4d72.8351203!16s%2Fg%2F11gk5c32j2?hl=en-GB&authuser=1&entry=ttu"
                      target="_blank"
                      className="mt-6 max-w-3xl text-base text-indigo-500 underline"
                    >
                      Floor 3, 4, 5 Bhav Bindu Building, N S Rd Number 3, JVPD
                      Scheme, Juhu, Mumbai, Maharashtra 400056
                    </a>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex mb-3">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link href="tel:+91-9833797217" className="ml-3">
                      +91-9833797217
                    </Link>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link
                      href="mailto:info@studenthousing.co.in"
                      className="ml-3"
                    >
                      info@studenthousing.co.in
                    </Link>
                  </dd>
                  <dd className="flex">
                    <span className="ml-3">
                      Working hours: Monday- Sunday 10am- 8pm
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5 h-full">
          <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-8 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="font-bold text-2xl lg:text-2xl lg1:text-2xl text-start lg:text-start text-[#FBCF5F]">
                Student Housing Office - Madonna Apartment
              </h2>

              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <a
                      href="https://www.google.com/search?q=Madonna+Student+Housing+Hostel&stick=H4s|AAAAAA"
                      target="_blank"
                      className="mt-6 max-w-3xl text-base text-indigo-500 underline"
                    >
                      Ground floor, Madonna Building, Opp- Bhaidas Hall, Near
                      NMIMS University, Vile Parle West, Mumbai, Maharashtra
                      400056
                    </a>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex mb-3">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link href="tel:+91-8779003845" className="ml-3">
                      +91-8779003845
                    </Link>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link
                      href="mailto:info@studenthousing.co.in"
                      className="ml-3"
                    >
                      info@studenthousing.co.in
                    </Link>
                  </dd>
                  <dd className="flex">
                    <span className="ml-3">Working hours: Open 24 Hours</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-8 lg:px-8 xl:pl-12">
            <div className="mx-auto max-w-lg">
              <h2 className="font-bold text-2xl lg:text-2xl lg1:text-2xl text-start lg:text-start text-[#FBCF5F]">
                Student Housing Bharat - Boys Accommodation
              </h2>

              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <a
                      href="https://www.google.com/maps/place/Student+Housing+Hostels:+Crescenzo+Apartment/@19.1024726,72.7630308,13z/data=!3m1!5s0x3be7c9b8bfa30ceb:0xc685c3566f90015d!4m10!1m2!2m1!1screscenzo!3m6!1s0x3be7c90d5e92ad71:0xac4f3339bb7ec057!8m2!3d19.1024726!4d72.8351286!15sCgljcmVzY2Vuem9aCyIJY3Jlc2NlbnpvkgEWc3R1ZGVudF9ob3VzaW5nX2NlbnRlcuABAA!16s%2Fg%2F11qzj3y64s?hl=en-GB&authuser=1&entry=ttu"
                      target="_blank"
                      className="mt-6 max-w-3xl text-base text-indigo-500 underline"
                    >
                      3RD FLOOR, FLAT NO. 6, BHARAT BUILDING , DIVYATIRTH CHSL,
                      IRLA , VILEPARLE WEST, MUMBAI, Mumbai Suburban,
                      Maharashtra, 400056
                    </a>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex mb-3">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link href="tel:+91-9029930227" className="ml-3">
                      +91-9029930227
                    </Link>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link
                      href="mailto:info@studenthousing.co.in"
                      className="ml-3"
                    >
                      info@studenthousing.co.in
                    </Link>
                  </dd>
                  <dd className="flex">
                    <span className="ml-3">
                      Working hours: Monday- Sunday 10am- 8pm
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5 h-full">
          <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-8 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="font-bold text-2xl lg:text-2xl lg1:text-2xl text-start lg:text-start text-[#FBCF5F]">
                Student Housing Shradha Suman- Girls Accommodation
              </h2>

              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <a
                      href="https://www.google.com/maps/place/Shradha+Suman,+37B+Shradha+Suman,+PRESIDENCY+SOCIETY,+N+S+Rd+Number+6,+Friends+Colony,+JVPD+Scheme,+Juhu,+Mumbai,+Maharashtra+400056/@19.1099786,72.8327097,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9c3e44a9ed7:0x18d24d9b5cb3a8a1!8m2!3d19.1099786!4d72.8327097!16s%2Fg%2F1pty11jzb?hl=en-GB&authuser=1&entry=ttu"
                      target="_blank"
                      className="mt-6 max-w-3xl text-base text-indigo-500 underline"
                    >
                      2nd floor, Shradha Suman, N S Rd Number 6, Juhu, Mumbai,
                      Maharashtra 400056
                    </a>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex mb-3">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link href="tel:+91-8779003845" className="ml-3">
                      +91-8779003845
                    </Link>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link
                      href="mailto:info@studenthousing.co.in"
                      className="ml-3"
                    >
                      info@studenthousing.co.in
                    </Link>
                  </dd>
                  <dd className="flex">
                    <span className="ml-3">
                      Working hours: Monday- Sunday 10am- 8pm
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-8 lg:px-8 xl:pl-12">
            <div className="mx-auto max-w-lg">
              <h2 className="font-bold text-2xl lg:text-2xl lg1:text-2xl text-start lg:text-start text-[#FBCF5F]">
                Student Housing Moti Mahal - Boys Accommodation
              </h2>

              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <a
                      href="https://www.google.com/search?q=maps+moti+mahal&rlz=1C5CHFA_enIN877IN877&sxsrf=APwXEdfFSkWThrXhN-nGJOHtXPDWRCA2ag%3A1684561638686&ei=5l5oZLjMKcXhseMPz4qQ-AU&ved=0ahUKEwi4182QmYP_AhXFcGwGHU8FBF8Q4dUDCA8&uact=5&oq=maps+moti+mahal&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzICCCYyAggmMgIIJjICCCYyAggmOgoIABBHENYEELADOgQIIxAnOggIABCKBRCRAjoICAAQgAQQiwM6DgguEIAEEIsDEJgDEKgDOgUIABCABDoLCAAQigUQkQIQiwM6DQgAEIAEEBQQhwIQsQM6CggAEIAEEBQQhwI6EwgAEIAEEBQQhwIQsQMQgwEQiwM6DgguEIAEEIsDEKgDEJgDOgsIABCABBCxAxCDAToGCAAQFhAeOggIABAWEB4QDzoICAAQigUQhgM6BQghEKABOgcIIRCgARAKSgQIQRgAUNgMWLIxYOMzaAdwAXgAgAGLA4gBhSKSAQgwLjIyLjMuMZgBAKABAcgBCLgBAsABAQ&sclient=gws-wiz-serp&bshm=lcbsc/1,lcbsc/1#rlimm=6182767607223361045"
                      target="_blank"
                      className="mt-6 max-w-3xl text-base text-indigo-500 underline"
                    >
                      Floor 3 4R3P+G96, N S Rd Number 2, Navyug Society, JVPD
                      Scheme, Vile Parle West, Mumbai, Maharashtra 400056
                    </a>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex mb-3">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link href="tel:+91-9867373030" className="ml-3">
                      +91-9867373030
                    </Link>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link
                      href="mailto:info@studenthousing.co.in"
                      className="ml-3"
                    >
                      info@studenthousing.co.in
                    </Link>
                  </dd>
                  <dd className="flex">
                    <span className="ml-3">
                      Working hours: Monday- Sunday 10am- 8pm
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5 h-full">
          <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-8 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="font-bold text-2xl lg:text-2xl lg1:text-2xl text-start lg:text-start text-[#FBCF5F]">
                Student Housing Suraj Sadan - Girls Accommodation
              </h2>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <a
                      href="https://www.google.com/maps/place/HETALI+SURAJ+SADAN/@19.106025,72.835477,17z/data=!3m2!4b1!5s0x3be7c9c71702fb57:0x9ad2a3e442e521c9!4m6!3m5!1s0x3be7c9c721b14617:0xde253fab605b22fd!8m2!3d19.106025!4d72.835477!16s%2Fg%2F11dxdqkk7s?entry=ttu"
                      target="_blank"
                      className="mt-6 max-w-3xl text-base text-indigo-500 underline"
                    >
                      A-13, 4th Floor, Suraj Sadan, N.S. Road No.3, Juhu Scheme,
                      Vile Parle (W) Mumbai., near Cooper Hospital, Mumbai,
                      Maharashtra 400056
                    </a>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex mb-3">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link href="tel:+91-8779003845" className="ml-3">
                      +91-8779003845
                    </Link>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link
                      href="mailto:info@studenthousing.co.in"
                      className="ml-3"
                    >
                      info@studenthousing.co.in
                    </Link>
                  </dd>
                  <dd className="flex">
                    <span className="ml-3">
                      Working hours: Monday- Sunday 10am- 8pm
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-8 lg:px-8 xl:pl-12">
            <div className="mx-auto max-w-lg">
              <h2 className="font-bold text-2xl lg:text-2xl lg1:text-2xl text-start lg:text-start text-[#FBCF5F]">
                Student Housing Kapadia- Boys Accommodation
              </h2>

              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <a
                      href="https://www.google.com/maps/place/Kapadia+Apartments/@19.101582,72.8216026,15z/data=!4m10!1m2!2m1!1skapadia!3m6!1s0x3be7c9b82acbac51:0x71d478fc06b8244a!8m2!3d19.101582!4d72.839627!15sCgdrYXBhZGlhkgEQY29ycG9yYXRlX29mZmljZeABAA!16s%2Fg%2F11f33mlt2_?entry=ttu"
                      target="_blank"
                      className="mt-6 max-w-3xl text-base text-indigo-500 underline"
                    >
                      7th floor, Kapadia Apartments, SV Road, near Bank Of
                      India, Navpada, Kamala Nagar, Vile Parle West, Mumbai,
                      Maharashtra 400056
                    </a>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex mb-3">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link href="tel:+91-9324208885" className="ml-3">
                      +91-9324208885
                    </Link>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link
                      href="mailto:info@studenthousing.co.in"
                      className="ml-3"
                    >
                      info@studenthousing.co.in
                    </Link>
                  </dd>
                  <dd className="flex">
                    <span className="ml-3">
                      Working hours: Monday- Sunday 10am- 8pm
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5 h-full">
          <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-8 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="font-bold text-2xl lg:text-2xl lg1:text-2xl text-start lg:text-start text-[#FBCF5F]">
                Student Housing Megha Villa- Boys Accommodation
              </h2>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <a
                      href="https://www.google.com/maps/place/megha+villa/@19.0963785,72.8397306,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c92a5b2ff957:0x86d0ccd1f969d55a!8m2!3d19.0963785!4d72.8423055!16s%2Fg%2F11g1gt97p1?hl=en-GB&authuser=1&entry=ttu"
                      target="_blank"
                      className="mt-6 max-w-3xl text-base text-indigo-500 underline"
                    >
                      Megha Villa, LIC Colony, Suresh Colony, Vile Parle West,
                      Mumbai, Maharashtra 400047
                    </a>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex mb-3">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link href="tel:+91-8779003845" className="ml-3">
                      +91-8779003845
                    </Link>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link
                      href="mailto:info@studenthousing.co.in"
                      className="ml-3"
                    >
                      info@studenthousing.co.in
                    </Link>
                  </dd>
                  <dd className="flex">
                    <span className="ml-3">
                      Working hours: Monday- Sunday 10am- 8pm
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-8 lg:px-8 xl:pl-12">
            <div className="mx-auto max-w-lg">
              <h2 className="font-bold text-2xl lg:text-2xl lg1:text-2xl text-start lg:text-start text-[#FBCF5F]">
                Elita by Student Housing,
              </h2>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <a
                      href="https://maps.app.goo.gl/uXRKXxb8gEDv73VcA?g_st=ic"
                      target="_blank"
                      className="mt-6 max-w-3xl text-base text-indigo-500 underline"
                    >
                      6th floor, B wing, 45, Juhu Residency, Near Mukesh Patel,
                      Opp. Club Millenium Juhu, Gulmohar Road Juhu, Vile Parle
                      West, Mumbai, Maharashtra 400058
                    </a>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex mb-3">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link href="tel:+91-8779003845" className="ml-3">
                      +91-8779003845
                    </Link>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link
                      href="mailto:info@studenthousing.co.in"
                      className="ml-3"
                    >
                      info@studenthousing.co.in
                    </Link>
                  </dd>
                  <dd className="flex">
                    <span className="ml-3">
                      Working hours: Monday- Sunday 10am- 8pm
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5 h-full">
          <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-8 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="font-bold text-2xl lg:text-2xl lg1:text-2xl text-start lg:text-start text-[#FBCF5F]">
                Avenue by Student Housing,
              </h2>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <a
                      href="https://maps.app.goo.gl/8awC6jMzXegVpg3N7?g_st=ic"
                      target="_blank"
                      className="mt-6 max-w-3xl text-base text-indigo-500 underline"
                    >
                      Avenue, Pujara house, 10th NS Road Juhu., next to Shetty
                      Towers, Nutan Laxmi Society, JVPD Scheme, W, Mumbai,
                      Maharashtra 400049
                    </a>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex mb-3">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link href="tel:+91-8779003845" className="ml-3">
                      +91-8779003845
                    </Link>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <Link
                      href="mailto:info@studenthousing.co.in"
                      className="ml-3"
                    >
                      info@studenthousing.co.in
                    </Link>
                  </dd>
                  <dd className="flex">
                    <span className="ml-3">
                      Working hours: Monday- Sunday 10am- 8pm
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-8 lg:px-8 xl:pl-12"></div>
        </div>
      </div>
    </Layout>
  );
}
