import { Fragment } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router'; 
import { Popover, Transition, Dialog, Menu } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import useAuth from '../hooks/useAuth';
import withAuth from '../hooks/withAuth'; 

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Sign out', href: '#' },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
	const router = useRouter(); 
  const { isLoading, isAuthenticated } = withAuth(); 
  const { logout } = useAuth(); 
  const user = useAuth.user; 

  return (
    <Popover className="relative bg-white">
      <div className="mx-auto px-4 sm:px-16">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <Link href='/'>
                <img
                  className="h-8 w-auto sm:h-10 cursor-pointer"
                  src="https://studenthousing.co.in/wp-content/uploads/2020/03/SH_LogoR.png"
                  alt=""
                />
              </Link> 
              
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Link href='/listings'> 
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Explore Homes 
              </a>          
            </Link>

            <Link href='/about-us'> 
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                About Us
              </a>
            </Link>

            <Link href='/contact-us'> 
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Contact Us
              </a>          
            </Link>
          </Popover.Group>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">

          {
            isAuthenticated && 
            ( 
                <div className="ml-4 flex items-center md:ml-6">
                    {/* Profile dropdown */}
                    <span className='mr-3'>
                      {isAuthenticated && user && ( user.firstname + " " + user.lastname) || ""}
                    </span>

                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500">
                            <span className="text-sm font-medium leading-none text-white">{isAuthenticated && user && ( user.firstname[0] + user.lastname[0]) || ""}</span>
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
                            <Menu.Item key={item.name} onClick={() => {item.name === 'Sign out' && logout();}}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                </div>
            )  || 
            <>
              <Link href="/signin">
                <a
                  href="#"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"

                >
                  Sign in
                </a>
              </Link>
            
              <Link href='/signup'>
                <a
                  href="#"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600  px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-indigo-700 bg-[#ffcc29] hover:bg-[#fad45a]"
                >
                  Sign up
                </a>
              </Link>
            </>
          }
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
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href='/listings'>
                  <a
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Explore Homes
                  </a>
                </Link>
                <Link href='/about-us'> 
                  <a
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    About Us
                  </a>
                </Link>
                <Link href='/contact-us'> 
                  <a
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Contact Us
                  </a>
                </Link>
              </div>

              <div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
