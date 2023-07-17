import React, { useState } from 'react'
import Layout from '../components/Layout'

export default function ReferAndEarn() {

  const initialValues = {
    name: "",
    contact: "",
    housingProperty: "",
    referralName: "",
    referralContact: "",
    referralHousingProperty: "",
  }

  const banners = [
    {
      id: '1',
      img: '/moneyverse-sitting.png',
      content: 'Refer your friend to book a student housing hostel',
      width: '100px'
    },
    {
      id: '2',
      img: '/moneyverse-bitcoin-balance.png',
      content: 'Inform our team at info@studenthousing.co.in or 9819780000 about your referral',
      width: '100px'
    },
    {
      id: '3',
      img: '/moneyverse-money.png',
      content: 'Get a flat ₹10,000 bonus for every student that you refer to Student Housing! *',
      width: '100px'
    }
  ]

  const [values, setValues] = useState(initialValues)

  const handleChange = (e) => {
    const { name, value } = e.target

    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('submit')
  }

  return (
    <Layout>
        <div className='flex flex-col lg:flex-row w-full p-6 bg-refer-and-earn-banner bg-cover bg-no-repeat gap-4 lg:gap-0'>
            <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center gap-4 lg:gap-8'>
                <div className='w-[70%] text-[41px] leading-[52px] text-center lg:text-left font-semibold'>
                    Refer your friends to the Student Housing and get Vouchers upto 1000/- INR.
                </div>
                <div className='w-[70%] text-xl font-semibold text-center lg:text-left'>
                    You are just steps away to get your reward
                </div>
            </div>

            <div className='w-full lg:w-1/2 flex justify-center lg:justify-start items-center p-3'>
                <div className='w-[85%] sm:w-[70%] md:w-[65%] lg:w-[60%] lg2:w-[55%] bg-white rounded-xl lg:ml-24 flex flex-col p-6 items-center'>
                    <div className='font-semibold text-xl'>
                        Refer & Earn
                    </div>
                    <form action="submit" onSubmit={handleSubmit}>
                        <input name='name' id='name' type="text" className='outline-none rounded-md w-full mt-4 border-gray-300 bg-gray-100 focus:outline-none text-xs py-3' placeholder='Full Name *' onChange={handleChange} />
                        <input name='contact' id='contact' type="text" className='outline-none rounded-md w-full mt-4 border-gray-300 bg-gray-100 focus:outline-none text-xs py-3' placeholder='Contact Number *' onChange={handleChange} />
                        <input name='housingProperty' id='housingProperty' type="text" className='outline-none rounded-md w-full mt-4 border-gray-300 bg-gray-100 focus:outline-none text-xs py-3' placeholder='Student Housing Property Are You Staying? *' onChange={handleChange} />
                        <input name='referralName' id='referralName' type="text" className='outline-none rounded-md w-full mt-4 border-gray-300 bg-gray-100 focus:outline-none text-xs py-3' placeholder="Friends / Referral's Full Name*" onChange={handleChange} />
                        <input name='referralContact' id='#' type="text" className='outline-none rounded-md w-full mt-4 border-gray-300 bg-gray-100 focus:outline-none text-xs py-3' placeholder='His / Her Contact Number *' onChange={handleChange} />
                        <input name='referralHousingProperty' id='#' type="text" className='outline-none rounded-md w-full mt-4 border-gray-300 bg-gray-100 focus:outline-none text-xs py-3' placeholder='Student Housing Property Will Your Friend Be Staying? *' onChange={handleChange} />
                        <button type="submit" className='w-full mt-6 bg-brandColor py-3 rounded-lg font-semibold text-sm'>Submit</button>
                    </form>
                </div>
            </div>
        </div>

        <div className='w-full flex flex-col justify-center items-center mt-12 lg:mt-16'>
            <div className=''>
              <span className='text-4xl lg:text-5xl font-bold capitalize'>
                how to refer your friends
              </span>
              <div className='border-b-4 border-brandColor mt-3 w-[20%]' />
            </div>
        </div>
    
        <div className='w-full flex flex-col lg:flex-row justify-center items-center lg:items-stretch mt-12 lg:mt-16 gap-3'>
          {banners.map((val, index) => {
            return (
              <>
                <div className='flex flex-col p-4 justify-center items-center w-[50%] sm:w-[45%] md:w-[30%] lg:w-[20%] bg-brandColorBg border border-gray-200 rounded-lg gap-3' key={index}>
                  <img src={val.img} alt="test" width={val.width} />
                  <div className='text-center font-semibold text-sm'>
                    {val.content.includes('info@studenthousing.co.in') ? (
                      <>
                        {val.content.split('info@studenthousing.co.in')[0]}
                        <a className='underline text-brandColor cursor-pointer' href="#">info@studenthousing.co.in</a>
                        {val.content.split('info@studenthousing.co.in')[1]}
                      </>
                    ) : (
                      val.content
                    )}
                  </div>
                </div>
                
                {index !== banners.length - 1 && (
                  <div className='hidden lg:flex items-center'>
                    <img src="/refer-and-earn-arrow.png" alt="" />
                  </div>
                )}
              </>
            )
          })}
        </div>
        <div className='w-[70%] mx-auto mt-3 mb-12 lg:mb-16 text-sm text-gray-400 text-center lg:text-end'>
          *T&C apply.
        </div>
    </Layout>
  )
}
