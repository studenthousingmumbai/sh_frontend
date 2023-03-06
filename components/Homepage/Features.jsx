import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    CogIcon,
    LockClosedIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/24/outline'
  import styles from './features.module.css'
  
  const features = [
    {
      name: 'housekeeping',
      src: '/am-4.png',
      content: 'daily professional cleaning services'
    },
    {
      name: '24x7 security',
      src: '/am-2.png',
      content: 'your safety is our priority always'
    },
    {
      name: 'indoor games',
      src: '/am-1.png',
      content: 'entertainment zones for recreation'
    },
    {
      name: 'laundry services',
      src: '/am-3.png',
      content: 'steam ironing & pickup & drop services'
    }
  ]
  
  export default function Example() {
    return (
      <div className='w-full max-h-full mb-6'>
        <div className=" grid grid-cols-2 xs:grid-cols-[40%_40%] sm:grid-cols-[40%_40%] gap-6 xs:gap-8 md:grid-cols-[30%_30%] justify-center lg:grid-cols-4 md:gap-12 lg:gap-8 lg1:gap-16 lg2:gap-24 mb-12 w-full place-items-stretch ">
        {/* bg-[url('/am-4.png')] */}
          {features.map((ele) => (
            <div className='relative flex items-end justify-center shadow-lg rounded-xl truncate'>
              <img className="w-full h-full object-cover rounded-xl " src={ele.src} alt={ele.name} />
              <div className='absolute flex flex-col justify-center items-center py-8 px-4 bg-gradient-to-b from-transparent to-white w-full rounded-xl'>
                <div className='font-bold text-sm xs:text-base sm:text-lg lg1:text-xl lg2:text-2xl uppercase'>{ele.name}</div>
                <div className='flex items-center justify-center font-bold text-[6.5px] xs:text-[7px] sm:text-[9px] md:text-[8px] lg:text-[8px] lg:leading-[0.75rem] lg1:text-[10px] lg1:leading-[0.75rem] lg2:text-xs uppercase break-normal bg-[#FBCF5F] rounded-sm px-1'>{ele.content}</div>
              </div>
            </div>
              
          ))}
                        {/* <div className='absolute flex-col justify-center items-bottom'>
                <div className='uppercase font-bold text-2xl text-center'>
                  {ele.name}
                </div>
                <div className='uppercase text-xs text-center'>
                  {ele.content}
                </div>
              </div> */}
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <div className='w-full h-full row-span-4 order-2 lg:order-none py-6 lg:py-0 lg:pr-28'>
            <img className="w-full object-contain rounded-lg" src='/furniturelayout.png' alt='furniturelayout' />
          </div>
          <div className='row-span-2 flex items-center lg:items-end lg:order-none'>
            <div className='w-full lg:pb-3'>
              <h2 className='font-bold text-3xl lg:text-4xl text-start lg:text-end'>Welcoming Adobe!</h2>
              <h2 className='font-bold text-3xl lg:text-4xl text-start lg:text-end text-[#FBCF5F]'>Your Home, away from home</h2>
            </div>
          </div>
          <div className='row-span-2 px-3 lg:p-0 order-last lg:order-none'>
            <p className='text-1xl lg:text-xl text-center lg:text-end text-[#A5A3A3]'>In a city of lively contemporary culture, our range of homes combines modern
              technology with tasteful décor to create a heaven for our guests, welcoming 
              students with warm gracious in our home-like hostels
            </p>
          </div>
        </div>
      </div>

    // <div className='w-full max-h-full mb-6'>
    // <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8 md:gap-0 lg:gap-[10%] pb-6 lg:pb-12">
    //   {features.map((ele) => (
    //     <img className="object-cover w-full h-full md:p-12 lg:p-0 rounded-lg" src={ele.src} alt={ele.name} />
    //   ))}
    // </div>
    // <div className="w-full grid grid-cols-1 lg:grid-cols-2">
    //   <div className='w-full h-full row-span-4 order-2 lg:order-none py-6 lg:py-0 lg:pr-28'>
    //     <img className="w-full object-contain rounded-lg" src='/furniturelayout.png' alt='furniturelayout' />
    //   </div>
    //   <div className='row-span-2 flex items-center lg:items-end lg:order-none'>
    //     <div className='w-full lg:pb-3'>
    //       <h2 className='font-bold text-3xl lg:text-4xl text-start lg:text-end'>Welcoming Adobe!</h2>
    //       <h2 className='font-bold text-3xl lg:text-4xl text-start lg:text-end text-[#FBCF5F]'>Your Home, away from home</h2>
    //     </div>
    //   </div>
    //   <div className='row-span-2 px-3 lg:p-0 order-last lg:order-none'>
    //     <p className='text-1xl lg:text-xl text-center lg:text-end text-[#A5A3A3]'>In a city of lively contemporary culture, our range of homes combines modern
    //       technology with tasteful décor to create a heaven for our guests, welcoming 
    //       students with warm gracious in our home-like hostels
    //     </p>
    //   </div>
    // </div>
    // </div>
    )
  }