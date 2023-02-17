import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    CogIcon,
    LockClosedIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/24/outline'
  
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
  
  export default function Example() {
    return (
      <div className='w-full h-[100vh] mb-6'>
        <div className='flex flex-col lg:flex-row h-1/2 lg:h-2/5 gap-4 lg:gap-16 justify-center items-center'>
            <div className='w-1/2 h-full'>
                <iframe className='rounded-xl w-full h-full' src="https://www.youtube.com/embed/K4TOrB7at0Y" title="Demo Background Sample Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='w-1/2 h-full'>
                <iframe className='rounded-xl w-full h-full' src="https://www.youtube.com/embed/K4TOrB7at0Y" title="Demo Background Sample Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        <div className='flex h-1/2 lg:h-3/5'>
            <div className='w-1/2 h-full'>reviews</div>
        </div>
      </div>
    )
  }