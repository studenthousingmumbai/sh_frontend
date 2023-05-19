import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    CogIcon,
    LockClosedIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/24/outline'
  import { motion } from "framer-motion"
  import { useState, useEffect } from 'react'

  const textVariantRightToLeft = {
    hidden: { opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: { duration: 0.3 }}
  }
  

  const textVariantLeftToRight = {
    hidden: { opacity: 0, y: 50},
    visible: { opacity: 1, y: 0, transition: { duration: 0.30 }}
  }

  const imageVariantFadeIn = { 
    hidden: { opacity: 0, translateY: "50px" },
    visible: { opacity: 1, translateY: "0px", transition: { duration: 0.6, ease: "easeOut" } }
  }

  export default function Example() {
    const [animationState, setAnimationState] = useState('hidden');
    const animate_once = true; 
    // This effect runs only once when the component mounts
    useEffect(() => {
      setAnimationState('visible');
    }, []);
    
    return (
      <div className='w-full px-4 sm:px-16'>
        <motion.div
          className="w-full h-full flex flex-col lg:flex-row items-start lg:items-center mb-12"
          initial="hidden" 
          whileInView="visible"
          transition={{staggerChildren: 0.10}}
          viewport={{once: animate_once }}
        >
          <motion.div className='w-full h-full'>
            <motion.div className='flex items-center lg:items-end' variants={textVariantRightToLeft}>
              <div className='w-full mb-3 lg:pb-3'>
                <h2 className='font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-start'>Love Cricket? Enjoy Football?</h2>
                <h2 className='font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-start text-[#FBCF5F]'>Exclusive Turf Events for you!</h2>
              </div>
            </motion.div>
            <motion.div className='hidden lg:block px-3 lg:p-0' variants={textVariantRightToLeft}>
              <p className='sm:text-lg md:text-xl lg1:text-3xl text-center lg:text-start text-[#A5A3A3]'>
                Engage in the sports you love. A turf facility to play with your hostel-mates, available any time for all of you at Student Housing!
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={imageVariantFadeIn} className='w-full h-full lg:ml-3 mb-3 lg:mb-0 border-2 border-gray-200 bg-white rounded-lg p-2 shadow-lg'>
            <img className="w-full object-contain rounded-lg" src='/turf-events.png' alt='yourspacelayout' />
          </motion.div>


          <motion.div className='block lg:hidden px-3 lg:p-0' variants={textVariantRightToLeft}>
            <p className='text-xl text-left lg:text-start text-[#A5A3A3]'>
              Engage in the sports you love. A turf facility to play with your hostel-mates, available any time for all of you at Student Housing!
            </p>
          </motion.div>
        </motion.div>


        <motion.div
          className="w-full h-full flex flex-col lg:flex-row items-start lg:items-center mb-12"
          initial="hidden" whileInView="visible"
          transition={{staggerChildren: 0.10}}
          viewport={{ once: animate_once }}
        >
          <motion.div className='flex lg:hidden text-start lg:text-end' variants={textVariantLeftToRight}>
            <div className='w-full mb-3 lg:pb-3'>
              <h2 className='font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-end'>College Drop Facility</h2>
              <h2 className='font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-end text-[#FBCF5F]'>From Hostel to College</h2>
            </div>
          </motion.div>

          <motion.div variants={imageVariantFadeIn} className='w-full h-full lg:mr-3 mb-3 lg:mb-0 border-2 border-gray-200 bg-white rounded-lg p-2 shadow-lg'>
            <img className="w-full object-contain rounded-lg" src='/pick_and_drop.jpg' alt='book by course banner' />
          </motion.div>

          <motion.div
            className='w-full h-full'
          >
            <motion.div className='hidden lg:flex text-center lg:text-end' variants={textVariantLeftToRight}>
              <div className='w-full lg:pb-3'>
                <h2 className='font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-end'>College Drop Facility</h2>
                <h2 className='font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-end text-[#FBCF5F]'>From Hostel to College</h2>
              </div>
            </motion.div>
            <motion.div className='px-3 lg:p-0' variants={textVariantLeftToRight}>
              <p className='text-xl lg1:text-3xl text-left lg:text-center lg:text-end text-[#A5A3A3]'>
                We've got you covered! An exclusive in-hostel facility provided for you at no additional cost
              </p>
            </motion.div>
          </motion.div>
        </motion.div>


        <motion.div
          className="w-full h-full flex flex-col lg:flex-row items-start lg:items-center mb-12"
          initial="hidden" whileInView="visible"
          transition={{staggerChildren: 0.10}}
          viewport={{ once: animate_once }}
        >
          <motion.div className='w-full h-full'>
            <motion.div className='flex items-center lg:items-end' variants={textVariantRightToLeft}>
              <div className='w-full mb-3 lg:pb-3'>
                <h2 className='font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-start'>Housekeeping</h2>
                <h2 className='font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-start text-[#FBCF5F]'>Daily professional cleaning services</h2>
              </div>
            </motion.div>
            <motion.div className='hidden lg:block px-3 lg:p-0' variants={textVariantRightToLeft}>
              <p className='sm:text-lg md:text-xl lg1:text-3xl text-center lg:text-start text-[#A5A3A3]'>
                We make sure that every property is kept clean & tidy to maintain a organised and a healthy home environment for you!
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={imageVariantFadeIn} className='w-full h-full lg:ml-3 mb-3 lg:mb-0 border-2 border-gray-200 bg-white rounded-lg p-2 shadow-lg'>
            <img className="w-full object-contain rounded-lg" src='/new-amenities/housekeeping.png' alt='yourspacelayout' />
          </motion.div>

          <motion.div className='block lg:hidden px-3 lg:p-0' variants={textVariantRightToLeft}>
            <p className='text-xl text-left lg:text-start text-[#A5A3A3]'>
              We make sure that every property is kept clean & tidy to maintain a organised and a healthy home environment for you!
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full h-full flex flex-col lg:flex-row items-start lg:items-center mb-12"
          initial="hidden" whileInView="visible"
          transition={{staggerChildren: 0.10}}
          viewport={{ once: animate_once }}
        >
          <motion.div className='flex lg:hidden text-start lg:text-end' variants={textVariantLeftToRight}>
            <div className='w-full mb-3 lg:pb-3'>
              <h2 className='font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-end'>24/7 Security</h2>
              <h2 className='font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-end text-[#FBCF5F]'>safety is our priority</h2>
            </div>
          </motion.div>

          <motion.div variants={imageVariantFadeIn} className='w-full h-full lg:mr-3 mb-3 lg:mb-0 border-2 border-gray-200 bg-white rounded-lg p-2 shadow-lg'>
            <img className="w-full object-contain rounded-lg" src='/new-amenities/security.png' alt='book by course banner' />
          </motion.div>

          <motion.div
            className='w-full h-full'
          >
            <motion.div className='hidden lg:flex text-center lg:text-end' variants={textVariantLeftToRight}>
              <div className='w-full lg:pb-3'>
                <h2 className='font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-end'>24/7 Security</h2>
                <h2 className='font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-end text-[#FBCF5F]'>safety is our priority</h2>
              </div>
            </motion.div>
            <motion.div className='px-3 lg:p-0' variants={textVariantLeftToRight}>
              <p className='text-xl lg1:text-3xl text-left lg:text-end text-[#A5A3A3]'>
                With CCTV cameras across the property along with security guards you can rest easy knowing that these trained professionals are on duty at all times to keep you and your belongings safe
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full h-full flex flex-col lg:flex-row items-start lg:items-center mb-12"
          initial="hidden" whileInView="visible"
          transition={{staggerChildren: 0.10}}
          viewport={{ once: animate_once }}
        >
          <motion.div className='w-full h-full'>
            <motion.div className='flex items-center lg:items-end' variants={textVariantRightToLeft}>
              <div className='w-full mb-3 lg:pb-3'>
                <h2 className='font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-start'>Laundry Services</h2>
                <h2 className='font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-start text-[#FBCF5F]'>Leave the laundry to us at the hostel!</h2>
              </div>
            </motion.div>
            <motion.div className='hidden lg:block px-3 lg:p-0' variants={textVariantRightToLeft}>
              <p className='text-xl lg1:text-3xl text-center lg:text-start text-[#A5A3A3]'>
                Enjoy fresh and clean clothes without the hassle. Our convenient laundry services make staying clean and comfortable a breeze
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div variants={imageVariantFadeIn} className='w-full h-full lg:ml-3 mb-3 lg:mb-0 border-2 border-gray-200 bg-white rounded-lg p-2 shadow-lg'>
            <img className="w-full object-contain rounded-lg" src='/new-amenities/laundry-2.png' alt='yourspacelayout' />
          </motion.div>

          <motion.div className='block lg:hidden px-3 lg:p-0' variants={textVariantRightToLeft}>
            <p className='text-xl text-left lg:text-start text-[#A5A3A3]'>
              Enjoy fresh and clean clothes without the hassle. Our convenient laundry services make staying clean and comfortable a breeze
            </p>
          </motion.div>
        </motion.div>
      </div>

      // <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      //   <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      //     <h2 className="text-lg font-semibold text-indigo-600">Deploy faster</h2>
      //     <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      //       Everything you need to deploy your app
      //     </p>
      //     <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
      //       Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
      //       malesuada. Eleifend condimentum id viverra nulla.
      //     </p>
      //     <div className="mt-12">
      //       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      //         {features.map((feature) => (
      //           <div key={feature.name} className="pt-6">
      //             <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
      //               <div className="-mt-6">
      //                 <div>
      //                   <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
      //                     <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
      //                   </span>
      //                 </div>
      //                 <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
      //                 <p className="mt-5 text-base text-gray-500">{feature.description}</p>
      //               </div>
      //             </div>
      //           </div>
      //         ))}
      //       </div>
      //     </div>
      //   </div>
      // </div>
    )
  }