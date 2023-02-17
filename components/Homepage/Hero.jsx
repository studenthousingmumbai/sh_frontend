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
          </div>
        </div>
      </div>
    )
  }