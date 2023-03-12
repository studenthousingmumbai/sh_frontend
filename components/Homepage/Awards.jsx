import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    CogIcon,
    LockClosedIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/24/outline'
  import { motion } from "framer-motion"
  
  const awards = [
    {
      name: 'ias',
      src: '/IASaward.png',
    },
    {
      name: 'ISOcertification',
      src: '/ISOcertification.png',
    },
    {
      name: 'ISOcertification2',
      src: '/ISOcertification2.png',
    },
    {
      name: 'NSHA',
      src: '/NSHA.png',
    }
  ]

  const textVariantRightToLeft = {
    hidden: { opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: { duration: 0.65 }}
  }
  
  export default function Example() {
    return (
      <div className='w-full max-h-full mb-6'>

        <motion.div
          className="w-full h-full flex flex-col lg:flex-row items-start lg:items-center"
          initial="hidden" whileInView="visible"
          transition={{staggerChildren: 0.45}}
          viewport={{once:false, amount:0.3}}
        >

          <motion.div className=''>
            <motion.div className='flex items-center lg:items-end' variants={textVariantRightToLeft}>
              <div className='w-full lg:pb-3'>
                <h2 className='font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-start'>You need your space,</h2>
                <h2 className='font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-start text-[#FBCF5F]'>Always!</h2>
              </div>
            </motion.div>
            <motion.div className='hidden lg:block px-3 lg:p-0' variants={textVariantRightToLeft}>
              <p className='text-sm sm:text-base md:text-lg lg1:text-xl text-center lg:text-start text-[#A5A3A3]'>
                with spacious & luxuiries homes, you get your space & privacy promised & with 24/7 
                round the clock security, safety is never comprimised & always delivered. 
              </p>
            </motion.div>
          </motion.div>
          <div className='w-full h-full row-span-4 py-6 lg:py-0 lg:pl-28'>
            <img className="w-full object-contain rounded-lg" src='/YourSpace.png' alt='yourspacelayout' />
          </div>
          <motion.div className='block lg:hidden px-3 lg:p-0' variants={textVariantRightToLeft}>
            <p className='text-sm sm:text-base md:text-lg lg1:text-xl text-center lg:text-start text-[#A5A3A3]'>
              with spacious & luxuiries homes, you get your space & privacy promised & with 24/7 
              round the clock security, safety is never comprimised & always delivered. 
            </p>
          </motion.div>

        </motion.div>


        <div className='flex flex-col items-center justify-center mt-12 mb-8'>
          <h1 className='font-bold text-4xl lg:text-5xl text-[#FBCF5F] text-center mb-2'>Awards & Recognition</h1>
          <h1 className='text-xl md:text-2xl lg:text-3xl text-[#A5A3A3] text-center'>Striving to be the best for you, always!</h1>
        </div>
        <div className="grid grid-cols-4 pt-8">
          {awards.map((ele) => (
            <img className="h-40 w-40 mx-auto rounded-lg object-contain" src={ele.src} alt={ele.name} />
          ))}
        </div>
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