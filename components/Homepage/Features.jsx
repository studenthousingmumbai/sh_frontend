import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    CogIcon,
    LockClosedIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/24/outline'
  import styles from './features.module.css'
  import { motion } from "framer-motion"
  
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

  const textVariantLeftToRight = {
    hidden: { opacity: 0, y: 50},
    visible: { opacity: 1, y: 0, transition: { duration: 0.30 }}
  }
  
  export default function Example() {
    return (
      <div className='w-full max-h-full mb-6 pc'>
        
        <div className="grid grid-cols-2 xs:grid-cols-[40%_40%] sm:grid-cols-[40%_40%] gap-6 xs:gap-8 md:grid-cols-[30%_30%] justify-center lg:grid-cols-4 md:gap-12 lg:gap-8 lg1:gap-16 lg2:gap-24 mb-10 w-full place-items-stretch py-5">
        {/* bg-[url('/am-4.png')] */}
          {features.map((ele) => (
            <div>
              <div className='relative flex items-end justify-center shadow-lg rounded-xl truncate'>
                <img className="w-full h-full object-cover rounded-xl " src={ele.src} alt={ele.name} />
                <div className='absolute flex flex-col justify-center items-center py-8 px-4 bg-gradient-to-b from-transparent to-white w-full rounded-xl'>
                  <div className='hidden lg:block font-bold text-sm xs:text-base sm:text-lg lg1:text-xl lg2:text-2xl uppercase'>{ele.name}</div>
                  <div className='hidden lg:flex items-center justify-center font-bold text-[8px] lg:leading-[0.75rem] lg1:text-[10px] lg1:leading-[0.75rem] lg2:text-xs uppercase break-normal bg-[#FBCF5F] rounded-md px-2'>{ele.content}</div>
                </div>
              </div>
              <div className='flex lg:hidden font-bold justify-center uppercase text-center text-sm xs:text-base sm:text-lg md:text-xl'>{ele.name}</div>
            </div>             
          ))}
        </div>

        <motion.div
          className="w-full h-full flex flex-col lg:flex-row items-start lg:items-center"
          initial="hidden" whileInView="visible"
          transition={{staggerChildren: 0.10}}
          viewport={{ once:false, amount:0.1}}
        >
          <motion.div className='flex lg:hidden text-start lg:text-end' variants={textVariantLeftToRight}>
            <div className='w-full lg:pb-3'>
              <h2 className='font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-end'>Book By Course</h2>
              <h2 className='font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-end text-[#FBCF5F]'>Move in with your batchmates</h2>
            </div>
          </motion.div>
          <div className='w-full lg:w-1/2 h-full py-6 lg:py-0 lg:pr-28'>
            <img className="w-full object-contain rounded-lg" src='/book-by-course.jpg' alt='book by course banner' />
          </div>
          <motion.div
            className='w-full lg:w-1/2 h-full'
          >
            <motion.div className='hidden lg:flex text-center lg:text-end' variants={textVariantLeftToRight}>
              <div className='w-full lg:pb-3'>
                <h2 className='font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-end'>Book By Course</h2>
                <h2 className='font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-end text-[#FBCF5F]'>Move in with your batchmates</h2>
              </div>
            </motion.div>
            <motion.div className='px-3 lg:p-0' variants={textVariantLeftToRight}>
              <p className='text-sm sm:text-base md:text-lg lg1:text-xl text-center lg:text-end text-[#A5A3A3]'>
                Need to move in with your friends? Say no more! Use our newest “Book by course” feature while booking your 
                favourite property & share the same rooms with your friends! 
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    )
  }