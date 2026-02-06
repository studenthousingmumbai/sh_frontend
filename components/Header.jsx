import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Popover, Transition, Dialog, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import useAuth from "../hooks/useAuth";
import withAuth from "../hooks/withAuth";


const hostels = [
  { name: "Aston - South Mumbai", href: "/listing/aston-by-student-housing" },
  { name: "Atlantis - Juhu, Mumbai", href: "/listing/atlantis-by-student-housing" },
  { name: "Avenue - Juhu, Mumbai", href: "/listing/avenue-by-student-housing" },
  { name: "Arcadia - Andheri, Mumbai", href: "/listing/arcadia-by-student-housing" },
  { name: "Elita - Juhu, Mumbai", href: "/listing/elita-by-student-housing-boys" },
  { name: "Anand - Vile Parle, Mumbai", href: "/listing/anand-by-student-housing" },
  { name: "Crescenzo - Vile Parle, Mumbai", href: "/listing/crescenzo-by-student-housing" },
  { name: "Ganga Niwas - Vile Parle, Mumbai", href: "/listing/ganga-niwas-by-student-housing" },
  { name: "Bharat - Vile Parle, Mumbai", href: "/listing/bharat-by-student-housing" },
  { name: "Shradha Suman - Vile Parle, Mumbai", href: "/listing/shradha-suman-by-student-housing" },
  { name: "Kapadia - Vile Parle, Mumbai", href: "/listing/kapadia-by-student-housing" },
  { name: "Moti Mahal - Vile Parle, Mumbai", href: "/listing/moti-mahal-by-student-housing" },
];

const hostelsNearLocation = [
  { name: "Hostels in Andheri", href: "/hostels-near-location/hostel-in-andheri" },
  { name: "Hostels in Vile Parle", href: "/hostels-near-location/hostel-in-vile-parle" },
  { name: "Hostels in Juhu", href: "/hostels-near-location/hostel-in-juhu" },
  { name: "Hostels in Santacruz", href: "/hostels-near-location/hostel-in-santacruz" },
  { name: "Hostels in Bandra", href: "/hostels-near-location/hostel-in-bandra" },
];

const hostelsNearCollege = [
  { name: "NMIMS Mumbai", href: "/hostels-near-college/hostels-near-nmims-mumbai" },
  { name: "Mukesh Patel College", href: "/hostels-near-college/hostels-near-mukesh-patel-college-mumbai" },
  { name: "Atlas University", href: "/hostels-near-college/hostels-near-atlas-university-mumbai" },
  { name: "Bombay Flying Club", href: "/hostels-near-college/hostels-near-bombay-flying-club-mumbai" },
  { name: "DJ Sanghvi College", href: "/hostels-near-college/hostels-near-dj-sanghvi-college-mumbai" },
  { name: "Mithibai College", href: "/hostels-near-college/hostels-near-mithibai-college-mumbai" },
  { name: "Narsee Monjee College", href: "/hostels-near-college/hostels-near-narsee-monjee-college-mumbai" },
  { name: "UPG College", href: "/hostels-near-college/hostels-near-upg-college-mumbai" },
  { name: "L.S. Raheja College", href: "/hostels-near-college/hostels-near-ls-raheja-college-mumbai" },
  { name: "Cooper Hospital College", href: "/hostels-near-college/hostels-near-cooper-hospital-college-mumbai" },
  { name: "SNDT University", href: "/hostels-near-college/hostels-near-sndt-university-mumbai" },
  { name: "JK Shah Andheri", href: "/hostels-near-college/hostels-near-jk-shah-andheri-mumbai" },
];


const userNavigation = [
  { name: "Your Profile", href: "/profile" },
  { name: "Order History", href: "/order-history" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const router = useRouter();
  const { isLoading, isAuthenticated } = withAuth();
  const { logout } = useAuth();
  const user = useAuth.user;
  const [scrolled, setScrolled] = useState(false);

  const scrollHandler = () => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Popover
      className={`bg-white transition-shadow duration-500 ease-in-out shadow-sm ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto px-4 sm:px-16">
        <div className="flex items-center justify-between  py-6 lg:justify-start lg:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <Link href="/" legacyBehavior>
                <img
                  className="w-auto h-[100px] cursor-pointer"
                  src="/SH.png"
                  alt=""
                />
              </Link>
              {/* <span className="text-[8px]">
                Student Housing India Private Limited
              </span> */}
            </a>
          </div>
          <div className="-my-2 -mr-2 lg:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden space-x-10 lg:flex">

            {/*
            
            <Link href="/" legacyBehavior>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </a>
            </Link>
*/}
            <div className="relative group">
  {/* MAIN LINK (CLICK WORKS) */}
  <Link href="/listings" legacyBehavior>
    <a className="flex items-center gap-1 text-base font-medium text-gray-500 hover:text-gray-900">
      Explore Hostels
      <svg
        className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </a>
  </Link>

  {/* DROPDOWN (HOVER ONLY) */}
  <div className="absolute left-0 mt-3 w-80 rounded-xl bg-white shadow-xl ring-1 ring-black/5
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-200 z-[1100]">
    <div className="h-[190px] overflow-y-auto py-2">
      {hostels.map((hostel) => (
        <Link key={hostel.href} href={hostel.href} legacyBehavior>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {hostel.name}
          </a>
        </Link>
      ))}
    </div>
  </div>
</div>


            <div className="relative group">
  <span className="flex cursor-pointer items-center gap-1 text-base font-medium text-gray-500 hover:text-gray-900">
    Stay Near Campus
    <svg
      className="h-4 w-4 transition-transform group-hover:rotate-180"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </span>

  <div className="absolute left-0 mt-3 w-72 rounded-xl bg-white shadow-xl ring-1 ring-black/5
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-200 z-[1100]">
    <div className="max-h-[260px] overflow-y-auto py-2">
      {hostelsNearCollege.map((item) => (
        <Link key={item.href} href={item.href} legacyBehavior>
          <a
            target="_blank"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {item.name}
          </a>
        </Link>
      ))}
    </div>
  </div>
</div>



            <div className="relative group">
  <span className="flex cursor-pointer items-center gap-1 text-base font-medium text-gray-500 hover:text-gray-900">
    Explore by Area
    <svg
      className="h-4 w-4 transition-transform group-hover:rotate-180"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </span>

  <div className="absolute left-0 mt-3 w-64 rounded-xl bg-white shadow-xl ring-1 ring-black/5
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-200 z-[1100]">
    <div className="py-2">
      {hostelsNearLocation.map((item) => (
        <Link key={item.href} href={item.href} legacyBehavior>
          <a
            target="_blank"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {item.name}
          </a>
        </Link>
      ))}
    </div>
  </div>
</div>


            <Link href="/about-us" legacyBehavior>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                About Us
              </a>
            </Link>

            <Link href="/contact-us" legacyBehavior>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Contact Us
              </a>
            </Link>
            {/* 
            <Link href='/blogs'> 
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Blogs
              </a>          
            </Link> */}

            <Link href="/refer-and-earn" legacyBehavior>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Refer & Earn
              </a>
            </Link>

            {/* <Link href='/terms-and-conditions'> 
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Terms & Conditions
              </a>
            </Link> */}
            <Link href="/faqs" legacyBehavior>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                FAQs
              </a>
            </Link>
          </Popover.Group>

          <div className="hidden items-center justify-end lg:flex lg:flex-1 lg:w-0">
            {(isAuthenticated && (
              <div className="ml-4 flex items-center md:ml-6">
                {/* Profile dropdown */}
                <span className="mr-3 capitalize">
                  {(isAuthenticated &&
                    user &&
                    user.firstname + " " + user.lastname) ||
                    ""}
                </span>

                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 uppercase">
                        <span className="text-sm font-medium leading-none text-white">
                          {(isAuthenticated &&
                            user &&
                            user.firstname[0] + user.lastname[0]) ||
                            ""}
                        </span>
                      </span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link href={item.href} legacyBehavior>
                              <a
                                onClick={() => {
                                  item.name === "Sign out" && logout();
                                }}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                )}
                              >
                                {item.name}
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            )) || (
              <>
                 {/* 
                <Link href="/signin" legacyBehavior>
                  <a
                    href="#"
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Sign in
                  </a>
                </Link>

                <Link href="/signup" legacyBehavior>
                  <a
                    href="#"
                    className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base font-medium text-gray-700 shadow-sm bg-[#ffcc29] hover:bg-[#fad45a]"
                  >
                    Sign up
                  </a>
                </Link>

                */}
              </>
            )}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden z-[1000]"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/" legacyBehavior>
                    <img
                      className="w-[150px] h-[70px] cursor-pointer"
                      src="/SH.png"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href="/" legacyBehavior>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Home
                  </a>
                </Link>
                <Link href="/listings" legacyBehavior>
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Explore Homes
                  </a>
                </Link>
                <Link href="/about-us" legacyBehavior>
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                    About Us
                  </a>
                </Link>
                <Link href="/contact-us" legacyBehavior>
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Contact Us
                  </a>
                </Link>
                <Link href="/blogs" legacyBehavior>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Blogs
                  </a>
                </Link>

                <Link href="/refer-and-earn" legacyBehavior>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Refer & Earn
                  </a>
                </Link>
                {/* <Link href='/terms-and-conditions'> 
                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Terms & Conditions
                  </a>
                </Link> */}
                <Link href="/faqs" legacyBehavior>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    FAQs
                  </a>
                </Link>
              </div>

              {!isAuthenticated && (
                <div>
                  <Link href="/signup" legacyBehavior>
                    <a className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base font-medium text-gray-700 shadow-sm bg-[#ffcc29] hover:bg-[#fad45a]">
                      Sign up
                    </a>
                  </Link>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{" "}
                    <Link href="/signin" legacyBehavior>
                      <a
                        href="#"
                        className="text-yellow-600 hover:text-yellow-500"
                      >
                        Sign in
                      </a>
                    </Link>
                  </p>
                </div>
              )}

              {isAuthenticated && (
                <div>
                  <div className="mb-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 mr-3 bg-yellow-500 uppercase">
                      <span className="text-sm font-medium leading-none text-white">
                        {(isAuthenticated &&
                          user &&
                          user.firstname[0] + user.lastname[0]) ||
                          ""}
                      </span>
                    </span>
                    <span className="mr-3 capitalize">
                      {(isAuthenticated &&
                        user &&
                        user.firstname + " " + user.lastname) ||
                        ""}
                    </span>
                  </div>
                  <div>
                    {userNavigation.map((item) => (
                      <Link href={item.href} legacyBehavior>
                        <a
                          onClick={() => {
                            item.name === "Sign out" && logout();
                          }}
                          className={classNames(
                            "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          )}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
