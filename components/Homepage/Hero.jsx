import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {ChevronRightIcon} from '@heroicons/react/24/outline';
import Link from "next/link"

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
        <div className='flex flex-col lg:flex-row h-full gap-4 sm:gap-6 lg:gap-0'>
          <div className='relative flex w-full lg:w-2/3 h-1/2 lg:h-full mr-5 truncate'>

            {/* left banner carousel */}
            <div className='absolute w-full h-full rounded-lg z-0'data-carousel="slide">
              <div className="z-1 hidden duration-700 ease-in-out rounded-lg" data-carousel-item>
                <img src='/left_banner.png' className='w-full h-full object-cover object-right-bottom rounded-lg'/> 
              </div>
              <div className="z-1 hidden duration-700 ease-in-out rounded-lg" data-carousel-item>
                <img src='/left_banner.png' className='w-full h-full object-cover object-right-bottom rounded-lg'/> 
              </div>
              <div className="z-1 hidden duration-700 ease-in-out rounded-lg" data-carousel-item>
                <img src='/left_banner.png' className='w-full h-full object-cover object-right-bottom rounded-lg'/> 
              </div>
              {/* <div className="z-30 absolute right-4 bottom-4 sm:right-6 sm:bottom-6 space-x-2 lg:space-x-3 flex">
                <button type="button" className="w-4 h-1 sm:w-6 sm:h-1 lg:w-8 lg:h-1 bg-gray-100 rounded-sm" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-4 h-1 sm:w-6 sm:h-1 lg:w-8 lg:h-1 bg-gray-100 rounded-sm" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-4 h-1 sm:w-6 sm:h-1 lg:w-8 lg:h-1 bg-gray-100 rounded-sm" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              </div> */}
            </div>  

            {/* <img src='/left-banner-overlay.png' className='absolute hidden lg:block top-0 left-0 h-full rounded-lg'/> */}
            <div className='absolute bg-black-overlay w-full h-full rounded-lg z-0'></div>

            {/* left banner text for large and above screens */}
            <div className='absolute hidden lg:grid grid-cols justify-center items-center bottom-5 left-5 p-6'>
              <div className='font-bold text-6xl text-white uppercase px-3'>your home</div>
              <div className='font-bold text-6xl text-white uppercase text-center'>away from</div>
              <div className='font-bold text-[125px] text-[#ffcc00] leading-[110px] uppercase'>home</div>
              <Link href='/listings'>
                <button className='font-bold bg-[#088b05] text-[26px] mt-3 py-1 px-6 text-white uppercase rounded-[30px]'>explore now</button>
              </Link>
            </div>

            {/* left banner text for large and below screens */}
            <div className='absolute flex lg:hidden flex-col justify-center items-center w-full h-full text-center p-6'>
              <div className='font-bold text-4xl sm:text-5xl text-white uppercase'>your home</div>
              <div className='font-bold text-4xl sm:text-5xl text-white uppercase'>away from</div>
              <div className='font-bold text-7xl sm:text-8xl text-[#ffcc00] uppercase'>home</div>
              <Link href='/listings'>
                <button className='font-bold bg-[#088b05] py-1 px-8 xs:px-10 sm:px-12 md:px-14 text-xl sm:text-2xl text-white uppercase rounded-[30px]'>explore now</button>
              </Link>
            </div>
          </div>

          {/* right male and female banners for medium and below screens */}
          <div className='lg:hidden flex flex-col gap-4 sm:gap-6 h-1/2 z-50'>
            <Link href={{ pathname: '/listings', query: { gender: 'female' } }}>
              <div className='relative z-[1] w-full h-1/2 hover:scale-[1.04] cursor-pointer transition-all rounded-lg bg-female-banner bg-[bottom_right_-1rem] bg-no-repeat bg-contain'>
                <div className='absolute z-[-1] left-0 bg-[#f8c14c] h-full w-1/2 rounded-l-lg rounded-r-lg transition-all lg2:rounded-r-none'></div>
                <div className='flex flex-col justify-center h-full pl-3 xs:pl-4 sm:pl-6 '>
                  <div className='font-bold text-xl xs:text-2xl sm:text-3xl md:text-4xl uppercase leading-9 md:pl-0.5'>female</div>
                  <div className='text-2xl xs:text-3xl sm:text-4xl md:text-5xl uppercase leading-3 xs:leading-5 sm:leading-6 md:leading-9'>hostels</div>
                  <div className='text-[10px] xs:text-xs sm:text-sm md:text-base pl-0.5 mt-1'>click here to explore now</div>
                  <div className='flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#088b05] cursor-pointer my-2 xs:my-3 sm:my-2'>
                      <ChevronRightIcon className='w-4 h-4 md:w-6 md:h-6 text-white'/>
                  </div>
                </div>
              </div>
            </Link>

          {/* right male and female banners for large and above screens */}
            <Link href={{ pathname: '/listings', query: { gender: 'male' } }}>
              <div className='relative z-[1] w-full h-1/2 hover:scale-[1.04] cursor-pointer transition-all rounded-lg bg-male-banner bg-[bottom_right_-1rem] bg-no-repeat bg-contain'>
                <div className='absolute z-[-1] left-0 bg-[#f8c14c] h-full w-1/2 rounded-l-lg rounded-r-lg transition-all lg2:rounded-r-none'></div>
                <div className='flex flex-col justify-center h-full pl-3 xs:pl-4 sm:pl-6 '>
                  <div className='font-bold text-xl xs:text-2xl sm:text-3xl md:text-4xl uppercase leading-9 md:pl-0.5'>male</div>
                  <div className='text-2xl xs:text-3xl sm:text-4xl md:text-5xl uppercase leading-3 xs:leading-5 sm:leading-6 md:leading-9'>hostels</div>
                  <div className='text-[10px] xs:text-xs sm:text-sm md:text-base pl-0.5 mt-1'>click here to explore now</div>
                  <div className='flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#088b05] cursor-pointer my-2 xs:my-3 sm:my-2'>
                      <ChevronRightIcon className='w-4 h-4 md:w-6 md:h-6 text-white'/>
                  </div>
                </div>
              </div>
            </Link>
            {/* <Link href={{ pathname: '/listings', query: { gender: 'male' } }}>
              <div className='w-full h-1/2 flex hover:scale-[1.04] cursor-pointer transition-all'>
                <div className='relative left-0 bg-[#f8c14c] h-full w-full rounded-2xl flex-1'>
                  <div className='absolute top-[14%] left-[10%] justify-center items-center'>
                    <div className='font-bold text-xl xs:text-2xl sm:text-3xl uppercase leading-none xs:leading-7 sm:leading-8'>male</div>
                    <div className='text-2xl xs:text-3xl sm:text-4xl uppercase leading-none sm:leading-8'>hostels</div>
                    <div className='text-[10px] xs:text-[12px] xs:pl-0.5 sm:pl-1 whitespace-nowrap'>click here to explore now</div>
                    <div className='flex items-center justify-center my-1 xs:my-2 w-7 h-7 xs:w-8 xs:h-8 md:w-10 md:h-10 rounded-full bg-[#088b05] cursor-pointer'>
                      <ChevronRightIcon className='w-5 h-5 xs:w-6 xs:h-6 md:w-7 md:h-7 text-white'/>
                    </div>
                  </div>
                </div>
                <div className='relative flex-1'>
                  <img src='/male-no-bg.png' className='absolute w-full h-full object-cover object-right-bottom rounded-lg'/>
                </div>
              </div>
            </Link> */}
          </div>

          {/* right male and female banners for large and above screens */}
          <div className='hidden lg:flex flex-col gap-6 w-1/3 h-full'>
            <Link href={{ pathname: '/listings', query: { gender: 'female' } }}>
              <div className="relative z-[1] w-full h-1/2 hover:scale-[1.04] cursor-pointer transition-all rounded-lg bg-female-banner-cropped bg-[bottom_right_-2rem] bg-no-repeat bg-contain">
                <div className='absolute z-[-1] left-0 bg-gradient-to-r from-[#f8c14c] to-yellow-100 lg2:bg-none lg2:bg-[#f8c14c] h-full w-full lg2:w-3/12 rounded-l-lg rounded-r-lg transition-all lg2:rounded-r-none'></div>
                
                <div className='lg2:flex hidden flex-col justify-center h-full w-full pl-10'>
                    <div className='font-bold text-4xl uppercase leading-9'>female</div>
                    <div className='text-5xl uppercase leading-10 mt-0.5'>hostels</div>
                    <div className='text-sm pl-1 mt-0.5'>click here to explore now</div>
                    <div className='hidden lg2:flex items-center justify-center w-12 h-12 rounded-full bg-[#088b05] cursor-pointer mt-5'>
                        <ChevronRightIcon className='w-6 h-6 text-white'/>
                    </div>
                </div>

                <div className='flex lg2:hidden justify-center h-full w-full items-center space-x-4 lg1:space-x-12 px-2'>
                  <div className='flex flex-col'>
                    <div className='font-bold pl-0.5 text-4xl lg1:text-5xl uppercase leading-9 transition-all'>female</div>
                    <div className='text-5xl lg1:text-6xl uppercase leading-7 lg1:leading-10 mt-1 lg1:mt-1.5 transition-all'>hostels</div>
                    <div className='text-base lg1:text-lg pl-1 mt-1 transition-all'>click here to explore now</div>
                  </div>
                    <div className='flex items-center justify-center w-9 h-9 lg1:w-12 lg1:h-12 rounded-full bg-[#088b05] cursor-pointer mt-5'>
                        <ChevronRightIcon className='w-6 h-6 text-white'/>
                    </div>
                </div>
              </div>
            </Link>

            <Link href={{ pathname: '/listings', query: { gender: 'male' } }}>
              <div className="relative z-[1] w-full h-1/2 hover:scale-[1.04] cursor-pointer transition-all rounded-lg bg-male-banner-cropped bg-[bottom_right_-4rem] bg-no-repeat bg-contain">
                <div className='absolute z-[-1] left-0 bg-gradient-to-r from-[#f8c14c] to-yellow-100 lg2:bg-none lg2:bg-[#f8c14c] h-full w-full lg2:w-3/12 rounded-l-lg rounded-r-lg transition-all lg2:rounded-r-none'></div>
                
                <div className='lg2:flex hidden flex-col justify-center h-full w-full pl-10'>
                    <div className='font-bold text-4xl uppercase leading-9'>male</div>
                    <div className='text-5xl uppercase leading-10 mt-0.5'>hostels</div>
                    <div className='text-sm pl-1 mt-0.5'>click here to explore now</div>
                    <div className='hidden lg2:flex items-center justify-center w-12 h-12 rounded-full bg-[#088b05] cursor-pointer mt-5'>
                        <ChevronRightIcon className='w-6 h-6 text-white'/>
                    </div>
                </div>

                <div className='flex lg2:hidden justify-center h-full w-full items-center space-x-4 lg1:space-x-12 px-2'>
                  <div className='flex flex-col'>
                    <div className='font-bold pl-0.5 text-4xl lg1:text-5xl uppercase leading-9 transition-all'>male</div>
                    <div className='text-5xl lg1:text-6xl uppercase leading-7 lg1:leading-10 mt-1 lg1:mt-1.5 transition-all'>hostels</div>
                    <div className='text-base lg1:text-lg pl-1 mt-1 transition-all'>click here to explore now</div>
                  </div>
                    <div className='flex items-center justify-center w-9 h-9 lg1:w-12 lg1:h-12 rounded-full bg-[#088b05] cursor-pointer mt-5'>
                        <ChevronRightIcon className='w-6 h-6 text-white'/>
                    </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }