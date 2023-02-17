import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {ChevronRightIcon} from '@heroicons/react/24/outline';

import styles from './hero.module.css'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]
  
  export default function Example() {
    return (
      <div className='h-[80vh]'>
        <div className='flex flex-col lg:flex-row h-full gap-6 lg:gap-0'>
          <div className='relative flex w-full lg:w-2/3 h-1/2 lg:h-full mr-5'>
            <img src='/left-banner-overlay.png' className='absolute hidden lg:block top-0 left-0 h-full rounded-lg'/>
            <div className='absolute lg:hidden bg-black-overlay w-full h-full rounded-lg'></div>
            {/* <div className='absolute grid grid-cols overflow-hidden justify-center items-center top-[30%] w-[40%] left-0 p-6'>
              <div className='font-bold text-[60px] text-white leading-[70px] uppercase'>your home</div>
              <div className='font-bold text-[60px] text-white leading-[70px] uppercase'>away from</div>
              <div className='font-bold text-[125px] text-[#ffcc00] leading-[120px] uppercase'>home</div>
              <button className='font-bold bg-[#088b05] text-[26px] text-white leading-[38px] uppercase rounded-[30px]'>explore now</button>
            </div> */}
            <div className='absolute top-0 left-0 h-[100px] w-full bg-[rgba(0, 0, 0, 0.4)]'></div>
            <img src='/left_banner.png' className='w-full h-full object-cover object-right-bottom rounded-lg'/> 
          </div>

          <div className='lg:hidden flex flex-col h-1/2 gap-6'>
            <div className='relative w-full h-1/2'>
              <img src='/female-no-bg.png' className='absolute w-full h-[90%] object-cover bottom-0 rounded-lg'/>
              <div className='absolute left-0 bg-[#f8c14c] h-full w-2/5 rounded-2xl'></div>
              <div className='relative h-full w-3/6'>
                <div className='absolute top-4 left-6 justify-center items-center'>
                  <div className='font-bold text-[30px] uppercase  leading-9'>female</div>
                  <div className='text-[34px] uppercase  leading-9'>hostels</div>
                  <div className='text-base text-[10px] leading-7 pl-1 whitespace-nowrap'>click here to explore <b>the perfect housing solution</b></div>
                  <div className='flex items-center justify-center w-8 h-8 rounded-full bg-[#088b05] cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative w-full h-1/2'>
              <img src='/male-no-bg.png' className='absolute w-full h-full  object-contain object-right-bottom rounded-lg'/>
              <div className='absolute left-0 bg-[#f8c14c] h-full w-2/5 rounded-2xl'></div>
              <div className='relative h-full w-3/6'>
                <div className='absolute top-4 left-6 justify-center items-center'>
                  <div className='font-bold text-[30px] uppercase  leading-9'>male</div>
                  <div className='text-[34px] uppercase  leading-9'>hostels</div>
                  <div className='text-base text-[10px] leading-7 pl-1 whitespace-nowrap'>click here to explore <b>the perfect housing solution</b></div>
                  <div className='flex items-center justify-center w-8 h-8 rounded-full bg-[#088b05] cursor-pointer'>
                    <ChevronRightIcon className='w-8 h-8'/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='hidden lg:flex flex-col gap-6 w-full lg:w-1/3 h-2/5 lg:h-full'>

            <div className='relative w-full h-1/2'>
              <img src='/female-no-bg.png' className='absolute w-full h-[90%] object-cover bottom-0 rounded-lg'/>
              <div className='absolute left-0 bg-[#f8c14c] h-full w-36 rounded-l-lg'></div>
              <div className='relative h-full w-5/6'>
                <div className='absolute top-1/3 left-12 justify-center items-center'>
                  <div className='font-bold text-[38px] uppercase  leading-9'>female</div>
                  <div className='text-[40px] uppercase  leading-9'>hostels</div>
                  <div className='text-base text-[12px] leading-7 pl-1'>click here to explore <b>the perfect housing solution</b></div>
                  <div className='flex items-center justify-center w-12 h-12 rounded-full bg-[#088b05] cursor-pointer mt-6'>
                    <ChevronRightIcon className='w-6 h-6 text-white'/>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative w-full h-1/2'>
              <img src='/male-no-bg.png' className='absolute w-full h-[90%] object-cover bottom-0 rounded-lg'/>
              <div className='absolute left-0 bg-[#f8c14c] h-full w-36 rounded-l-lg'></div>
              <div className='relative h-full w-5/6'>
                <div className='absolute top-1/3 left-12 justify-center items-center'>
                  <div className='font-bold text-[38px] uppercase  leading-9'>male</div>
                  <div className='text-[40px] uppercase  leading-9'>hostels</div>
                  <div className='text-base text-[12px] leading-7 pl-1'>click here to explore <b>the perfect housing solution</b></div>
                  <div className='flex items-center justify-center w-12 h-12 rounded-full bg-[#088b05] cursor-pointer mt-6'>
                  <ChevronRightIcon className='w-6 h-6 text-white'/>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className='hidden relative w-full h-full mb-5 pb-1/4 overflow-hidden rounded-md'>
              <img src='/female-no-bg.png' className='h-full w-full object-cover rounded-lg absolute'/>
              <div className='absolute bg-[#f8c14c] rounded-l-lg bg-left h-full w-36 p-10'></div>
              <div className='absolute top-1/4 left-0 p-6'>
                <h3 class="font-bold text-[38px] uppercase leading-9">Female</h3>
                <h3 class="text-[40px] uppercase leading-9">Hostels</h3>
                <p class="text-base text-[12px] leading-7">click here to explore <b>the perfect housing solution</b></p>
              </div>
            </div> 
            <div className='hidden relative w-full h-full overflow-hidden pb-1/4'>
              <img src='/male-no-bg.png' className='h-full w-full object-cover rounded-lg absolute'/>
              <div className='absolute bg-[#f8c14c] rounded-l-lg bg-left h-full w-36 p-10'></div>
              <div className='absolute top-1/4 left-0 p-6'>
                <h3 class="font-bold text-[38px] uppercase leading-9">male</h3>
                <h3 class="text-[40px] uppercase leading-9">hostels</h3>
                <p class="text-base text-[12px] leading-7">click here to explore <b>the perfect housing solution</b></p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      // <div className="relative overflow-hidden bg-white my-5">
      //   <div className="hidden lg:absolute lg:inset-0 lg:block" aria-hidden="true">
      //     <svg
      //       className="absolute top-0 left-1/2 translate-x-64 -translate-y-8 transform"
      //       width={640}
      //       height={784}
      //       fill="none"
      //       viewBox="0 0 640 784"
      //     >
      //       <defs>
      //         <pattern
      //           id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
      //           x={118}
      //           y={0}
      //           width={20}
      //           height={20}
      //           patternUnits="userSpaceOnUse"
      //         >
      //           <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
      //         </pattern>
      //       </defs>
      //       <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
      //       <rect x={118} width={404} height={784} fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
      //     </svg>
      //   </div>
  
      //   <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32 ">
      //     <Popover>
      //       <Transition
      //         as={Fragment}
      //         enter="duration-150 ease-out"
      //         enterFrom="opacity-0 scale-95"
      //         enterTo="opacity-100 scale-100"
      //         leave="duration-100 ease-in"
      //         leaveFrom="opacity-100 scale-100"
      //         leaveTo="opacity-0 scale-95"
      //       >
      //         <Popover.Panel
      //           focus
      //           className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
      //         >
      //           <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
      //             <div className="flex items-center justify-between px-5 pt-4">
      //               <div>
      //                 <img
      //                   className="h-8 w-auto"
      //                   src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
      //                   alt=""
      //                 />
      //               </div>
      //               <div className="-mr-2">
      //                 <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
      //                   <span className="sr-only">Close main menu</span>
      //                   <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      //                 </Popover.Button>
      //               </div>
      //             </div>
      //             <div className="space-y-1 px-2 pt-2 pb-3">
      //               {navigation.map((item) => (
      //                 <a
      //                   key={item.name}
      //                   href={item.href}
      //                   className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
      //                 >
      //                   {item.name}
      //                 </a>
      //               ))}
      //             </div>
      //             <a
      //               href="#"
      //               className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
      //             >
      //               Log in
      //             </a>
      //           </div>
      //         </Popover.Panel>
      //       </Transition>
      //     </Popover>
  
      //     <main className="mx-auto mt-16 px-4 sm:mt-24 sm:px-6 lg:mt-32  ">
      //       <div className="lg:grid lg:grid-cols-12 lg:gap-8 p-3 ">
      //         <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left ">
      //           <h1>
      //             <span className="block text-base font-semibold text-gray-500 sm:text-lg lg:text-base xl:text-lg">
      //               Coming soon
      //             </span>
      //             <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
      //               <span className="block text-gray-900">Data to enrich your</span>
      //               <span className="block text-indigo-600">online business</span>
      //             </span>
      //           </h1>
      //           <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
      //             Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
      //             fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.
      //           </p>
      //           <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
      //             <p className="text-base font-medium text-gray-900">Sign up to get notified when it’s ready.</p>
      //             <form action="#" method="POST" className="mt-3 sm:flex">
      //               <label htmlFor="email" className="sr-only">
      //                 Email
      //               </label>
      //               <input
      //                 type="email"
      //                 name="email"
      //                 id="email"
      //                 className="block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:flex-1"
      //                 placeholder="Enter your email"
      //               />
      //               <button
      //                 type="submit"
      //                 className="mt-3 w-full rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
      //               >
      //                 Notify me
      //               </button>
      //             </form>
      //             <p className="mt-3 text-sm text-gray-500">
      //               We care about the protection of your data. Read our &nbsp;
      //               <a href="#" className="font-medium text-gray-900 underline">
      //                 Privacy Policy
      //               </a>
      //               .
      //             </p>
      //           </div>
      //         </div>
      //         <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center ">
      //           <svg
      //             className="absolute top-0 left-1/2 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden"
      //             width={640}
      //             height={784}
      //             fill="none"
      //             viewBox="0 0 640 784"
      //             aria-hidden="true"
      //           >
      //             <defs>
      //               <pattern
      //                 id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
      //                 x={118}
      //                 y={0}
      //                 width={20}
      //                 height={20}
      //                 patternUnits="userSpaceOnUse"
      //               >
      //                 <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
      //               </pattern>
      //             </defs>
      //             <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
      //             <rect x={118} width={404} height={784} fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
      //           </svg>
      //           <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md flex flex-col">
      //             <button
      //               type="button"
      //               className="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-5"
      //             >
      //               <span className="sr-only">Watch our video to learn more</span>
      //               <img
      //                 className="w-full"
      //                 src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      //                 alt=""
      //               />
      //               <span className="absolute inset-0 flex h-full w-full items-center justify-center" aria-hidden="true">
      //                 <svg className="h-20 w-20 text-indigo-500" fill="currentColor" viewBox="0 0 84 84">
      //                   <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
      //                   <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
      //                 </svg>
      //               </span>
      //             </button>

      //             <button
      //               type="button"
      //               className="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      //             >
      //               <span className="sr-only">Watch our video to learn more</span>
      //               <img
      //                 className="w-full"
      //                 src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      //                 alt=""
      //               />
      //               <span className="absolute inset-0 flex h-full w-full items-center justify-center" aria-hidden="true">
      //                 <svg className="h-20 w-20 text-indigo-500" fill="currentColor" viewBox="0 0 84 84">
      //                   <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
      //                   <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
      //                 </svg>
      //               </span>
      //             </button>
      //           </div>
      //         </div>
      //       </div>
      //     </main>
      //   </div>
      // </div>
    )
  }