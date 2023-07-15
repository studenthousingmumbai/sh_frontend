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
        <div className='h-[600px] flex w-full p-6 bg-yellow-100'>
            <div className='w-1/2 flex flex-col items-end justify-center gap-8'>
                <div className='w-[70%] text-[41px] leading-[52px] font-semibold'>
                    Refer your friends to the Student Housing and get Vouchers upto 1000/- INR.
                </div>
                <div className='w-[70%] text-xl font-semibold'>
                    You are just steps away to get your reward
                </div>
            </div>
            <div className='w-1/2 flex justify-start items-center'>
                <div className='w-[55%] bg-white rounded-xl ml-24 flex flex-col p-6 items-center'>
                    
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
        <div className='w-full flex flex-col justify-center items-center py-16'>
            <div className='text-5xl font-bold capitalize'>how to refer your friends</div>
        </div>
    
        
        
    </Layout>
  )
}
