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
      <div className='h-[75vh]'>
        <div className='flex flex-col lg:flex-row h-full gap-4 sm:gap-6 lg:gap-0'>
          <div className='relative flex w-full lg:w-2/3 h-1/2 lg:h-full mr-5 truncate'>
            {/* <img src='/left-banner-overlay.png' className='absolute hidden lg:block top-0 left-0 h-full rounded-lg'/> */}
            <div className='absolute bg-black-overlay w-full h-full rounded-lg'></div>
            <div className='absolute hidden lg:grid grid-cols justify-center items-center top-80 left-10 p-6'>
              <div className='font-bold text-[60px] text-white leading-[70px] uppercase'>your home</div>
              <div className='font-bold text-[60px] text-white leading-[70px] uppercase'>away from</div>
              <div className='font-bold text-[125px] text-[#ffcc00] leading-[120px] uppercase'>home</div>
              <Link href='/listings'>
                <button className='font-bold bg-[#088b05] text-[26px] py-1 px-6 text-white uppercase rounded-[30px]'>explore now</button>
              </Link>
            </div>
            <div className='absolute flex lg:hidden flex-col justify-center items-center w-full h-full text-center p-6'>
              <div className='font-bold text-4xl sm:text-5xl text-white uppercase'>your home</div>
              <div className='font-bold text-4xl sm:text-5xl text-white uppercase'>away from</div>
              <div className='font-bold text-7xl sm:text-8xl text-[#ffcc00] uppercase'>home</div>
              <Link href='/listings'>
                <button className='font-bold bg-[#088b05] py-1 px-8 xs:px-10 sm:px-12 md:px-14 text-xl sm:text-2xl text-white uppercase rounded-[30px]'>explore now</button>
              </Link>
            </div>
            <img src='/left_banner.png' className='w-full h-full object-cover object-right-bottom rounded-lg'/> 
          </div>

          <div className='lg:hidden flex flex-col h-1/2 gap-4 sm:gap-6'>
            <Link href={{ pathname: '/listings', query: { gender: 'female' } }}>
              <div className='w-full h-1/2 flex hover:scale-[1.04] cursor-pointer transition-all'>
                <div className='relative left-0 bg-[#f8c14c] h-full w-full rounded-2xl flex-1'>
                  <div className='absolute top-[14%] left-[10%] justify-center items-center'>
                    <div className='font-bold text-xl xs:text-2xl sm:text-3xl uppercase leading-none xs:leading-7 sm:leading-8'>female</div>
                    <div className='text-2xl xs:text-3xl sm:text-4xl uppercase leading-none sm:leading-8'>hostels</div>
                    <div className='text-[10px] xs:text-[12px] xs:pl-0.5 sm:pl-1 whitespace-nowrap'>click here to explore now</div>
                    <div className='flex items-center justify-center my-1 xs:my-2 w-7 h-7 xs:w-8 xs:h-8 md:w-10 md:h-10 rounded-full bg-[#088b05] cursor-pointer'>
                      <ChevronRightIcon className='w-5 h-5 xs:w-6 xs:h-6 md:w-7 md:h-7 text-white'/>
                    </div>
                  </div>
                </div>
                <div className='relative flex-1'>
                  <img src='/female-no-bg.png' className='absolute w-full h-full object-cover object-right-bottom rounded-lg'/>
                </div>
              </div>
            </Link>
            <Link href={{ pathname: '/listings', query: { gender: 'male' } }}>
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
            </Link>
            {/* <Link href={{ pathname: '/listings', query: { gender: 'male' } }}>
              <div className='relative w-full h-1/2 hover:scale-[1.04] cursor-pointer transition-all'>
                <img src='/male-no-bg.png' className='absolute w-full h-full object-contain object-right-bottom rounded-lg'/>
                <div className='absolute left-0 bg-[#f8c14c] h-full w-3/6 md:w-2/5  rounded-2xl'></div>
                <div className='relative h-full w-3/6'>
                  <div className='absolute top-4 left-6 justify-center items-center'>
                    <div className='font-bold text-[30px] uppercase leading-9'>male</div>
                    <div className='text-[34px] uppercase  leading-9'>hostels</div>
                    <div className='text-base text-[10px] leading-7 pl-1 whitespace-nowrap'>click here to explore now</div>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full bg-[#088b05] cursor-pointer'>
                      <ChevronRightIcon className='w-6 h-6 text-white'/>
                    </div>
                  </div>
                </div>
              </div>
            </Link> */}
          </div>

          <div className='hidden lg:flex flex-col gap-6 w-full lg:w-1/3 h-2/5 lg:h-full'>
            <Link href={{ pathname: '/listings', query: { gender: 'female' } }}>
              <div className='relative w-full h-1/2 hover:scale-[1.04] cursor-pointer transition-all'>
                <img src='/female-no-bg.png' className='absolute w-full h-[90%] object-cover bottom-0 rounded-lg'/>
                <div className='absolute left-0 bg-[#f8c14c] h-full w-36 rounded-l-lg'></div>
                <div className='relative h-full w-5/6'>
                  <div className='absolute top-1/3 left-12 justify-center items-center'>
                    <div className='font-bold text-4xl uppercase leading-9'>female</div>
                    <div className='text-5xl uppercase leading-10 mt-0.5'>hostels</div>
                    <div className='text-base text-sm pl-1 mt-0.5'>click here to explore now</div>
                    <div className='flex items-center justify-center w-12 h-12 rounded-full bg-[#088b05] cursor-pointer mt-5'>
                        <ChevronRightIcon className='w-6 h-6 text-white'/>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={{ pathname: '/listings', query: { gender: 'male' } }}>
              <div className='relative w-full h-1/2 hover:scale-[1.04] cursor-pointer transition-all'>
                <img src='/male-no-bg.png' className='absolute w-full h-[90%] object-cover bottom-0 rounded-lg'/>
                <div className='absolute left-0 bg-[#f8c14c] h-full w-36 rounded-l-lg'></div>
                <div className='relative h-full w-5/6'>
                  <div className='absolute top-1/3 left-12 justify-center items-center'>
                    <div className='font-bold text-4xl uppercase leading-9'>male</div>
                    <div className='text-5xl uppercase leading-10 mt-0.5'>hostels</div>
                    <div className='text-base text-sm pl-1 mt-0.5'>click here to explore now</div>
                    <div className='flex items-center justify-center w-12 h-12 rounded-full bg-[#088b05] cursor-pointer mt-5'>
                      <ChevronRightIcon className='w-6 h-6 text-white'/>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }