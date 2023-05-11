import React from 'react'


const awards = [
  {
    name: 'ias',
    src: '/award-2.png',
  },
  {
    name: 'Kamlesh_award',
    src: '/kamlesh-award.png',
  },
  {
    name: 'ISOcertification2',
    src: '/ISOcertification2.png',
  },
  {
    name: 'NSHA',
    src: '/award-1.png',
  }
]


export default function Awards() {
  return (
    <div className='bg-gray-50 py-12 px-4 md:px-12 lg:px-32'> 
      <div className='flex flex-col items-center justify-center mt-12'>
        <div className='m-auto text-center'> 
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl w-full mb-3">
            Awards and recognition
          </h2>
          <div className='border-[5px] w-[60px] border-b border-brandColor text-center'></div> 
        </div>
        {/* <h1 className='text-2xl text-[#A5A3A3] text-center'>Striving to be the best for you, always!</h1> */}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-8">
        {awards.map((ele) => (
          <img className="h-40 w-40 mx-auto rounded-lg object-contain " src={ele.src} alt={ele.name} />
        ))}
      </div>
    </div>
  )
}
