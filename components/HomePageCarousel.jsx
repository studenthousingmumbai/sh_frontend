import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from "next/link"

const FlowBiteCarousel = dynamic(() => import('flowbite').then(module => module.FlowBiteCarousel), { ssr: false });

const HomepageCarousel = () => {
  const [carousel, setCarousel] = useState(null);

  // useEffect(() => {
  //   if (carousel) {
  //     carousel.destroy();
  //   }

  //   setCarousel(new FlowBiteCarousel('.carousel', {
  //     // options
  //   }));

  //   return () => {
  //     if (carousel) {
  //       carousel.destroy();
  //     }
  //   };
  // }, []);

  return (
    <div className='relative flex w-full lg:w-2/3 h-1/2 lg:h-full mr-5 truncate'>
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
  );
};

export default HomepageCarousel;