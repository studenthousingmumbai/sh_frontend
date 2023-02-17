import React from 'react'
import { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import Listing from '../components/Listings/Listing';
import ProfileLayout from '../components/common/ProfileLayout';
import ProfileSidebar from '../components/common/ProfileSidebar';

const listings = [ 
    {
        id: 1, 
        name: 'Ganga Nivas', 
        description: 'Home away from home', 
        price: 20000, 
        images: ['https://lh5.googleusercontent.com/p/AF1QipMD8uMloIMenAHDHnRg77jXZOdWXkr64pWC57VC=w348-h160-k-no'], 
        amenities: [
            { name: 'Air conditioning', images: [] }, 
            { name: 'Attached Washroom', images: [] }, 
            { name: 'Spacious Cubboards', images: [] }, 
        ], 
        address: '123 Ganga Nivas, 34th Street, Juhu, Mumbai 401202'
    }, 
    { 
        id: 2, 
        name: 'Ganga Nivas', 
        description: 'Home away from home', 
        price: 20000, 
        images: ['https://imganuncios.mitula.net/medium/2_bhk_apartment_in_andheri_west_for_rent_mumbai_the_reference_number_is_10493020_3370002667829082565.jpg'], 
        amenities: [
            { name: 'Air conditioning', images: [] }, 
            { name: 'Attached Washroom', images: [] }, 
            { name: 'Spacious Cubboards', images: [] }, 
        ], 
        address: '123 Ganga Nivas, 34th Street, Juhu, Mumbai 401202'
    }, 
    { 
        id: 3, 
        name: 'Ganga Nivas', 
        description: 'Home away from home', 
        price: 20000, 
        images: ['data:image/jpeg;base64,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'], 
        amenities: [
            { name: 'Air conditioning', images: [] }, 
            { name: 'Attached Washroom', images: [] }, 
            { name: 'Spacious Cubboards', images: [] }, 
        ], 
        address: '123 Ganga Nivas, 34th Street, Juhu, Mumbai 401202'
    }, 
    { 
        id: 4, 
        name: 'Ganga Nivas', 
        description: 'Home away from home', 
        price: 20000, 
        images: ['data:image/jpeg;base64,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'], 
        amenities: [
            { name: 'Air conditioning', images: [] }, 
            { name: 'Attached Washroom', images: [] }, 
            { name: 'Spacious Cubboards', images: [] }, 
        ], 
        address: '123 Ganga Nivas, 34th Street, Juhu, Mumbai 401202'
    }, 
    { 
        id: 5, 
        name: 'Ganga Nivas', 
        description: 'Home away from home', 
        price: 20000, 
        images: ['data:image/jpeg;base64,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'], 
        amenities: [
            { name: 'Air conditioning', images: [] }, 
            { name: 'Attached Washroom', images: [] }, 
            { name: 'Spacious Cubboards', images: [] }, 
        ], 
        address: '123 Ganga Nivas, 34th Street, Juhu, Mumbai 401202'
    }
]

const initialvalues = { 
    firstname: "Tanay", 
    lastname: "Kulkarni",
    phone_number: '8097029342',
    email: "tanaykulkarni7@gmail.com", 
    academic_year: "FY.Bsc", 
    college: "K.C College", 
    gender: "male", 
    dob: "1998/10/21", 
    addres: { 
        city: "Mumbai", 
        state: "Maharashtra"
    },
    course: 'b.tech'
}

export default function Example() {
    const [user, setUser] = useState(initialvalues)
    const [editBasicInfo, setEditBasicInfo] = useState(false)
    const [editContactInfo, setEditContactInfo] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }

    const calculateAge = dob => {
        return Math.abs(new Date(Date.now() - new Date(dob).getTime()).getUTCFullYear() - 1970)
    }

    return (
    <ProfileLayout>
        <ProfileSidebar user={user && {firstname: user?.firstname, lastname: user?.lastname}}/>
        <div className="w-full lg:w-3/4 py-6">
            <div className='flex flex-col min-w-max max-h-max'>

                {/* header */}
                <div className='flex items-center'>
                    <img className='h-10' src="/icon_person.png" alt="" />
                    <h3 className='font-medium text-4xl uppercase'>About</h3>
                </div>
                <div className='bg-gray-300 mb-6'><div className='w-44 border border-yellow-300'></div></div>
                
                {/* subheader 1 */}
                <div className='flex justify-between lg:justify-start items-center mb-6'> 
                    <h1 className='uppercase text-2xl'>contact information</h1>
                    <img className='h-6 ml-4 cursor-pointer' src="/icon_edit_2_outline.png" alt="" onClick={() => setEditContactInfo(true)} />
                </div>

                {/* contact information */}
                <div className='flex lg:w-1/2 justify-start items-center mb-6'>
                    <div className='w-1/2 capitalize text-xl'>phone number:</div>
                    <div className={`w-1/2 capitalize ${editContactInfo && 'hidden'}`}>{user?.phone_number}</div>
                    <input
                        name='phone_number'
                        value={user?.phone_number}
                        className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editContactInfo && 'hidden'}`}
                        onChange={handleChange}
                    />
                </div>
                
                <div className='flex lg:w-1/2 justify-start items-center mb-6'>
                    <div className='w-1/2 capitalize text-xl'>email address:</div>
                    <div className={`w-1/2 capitalize ${editContactInfo && 'hidden'}`}>{user?.email}</div>
                    <input
                        name='email'
                        value={user?.email}
                        className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editContactInfo && 'hidden'}`}
                        onChange={handleChange}
                    />
                </div>
                
                <div className='flex lg:w-1/2 justify-start items-center mb-6'>
                    <div className='w-1/2 capitalize text-xl'>academic year:</div>
                    <div className={`w-1/2 capitalize ${editContactInfo && 'hidden'}`}>{user?.academic_year}</div>
                    <input
                        name='academic_year'
                        value={user?.academic_year}
                        className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editContactInfo && 'hidden'}`}
                        onChange={handleChange}
                    />
                </div>
                
                <div className={`flex lg:w-1/2 justify-start items-center ${!editContactInfo && 'mb-6'}`}>
                    <div className='w-1/2 capitalize text-xl'>college:</div>
                    <div className={`w-1/2 capitalize ${editContactInfo && 'hidden'}`}>{user?.college}</div>
                    <input
                        name='college'
                        value={user?.college}
                        className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editContactInfo && 'hidden'}`}
                        onChange={handleChange}
                    />
                </div>


                <div className={`flex lg:w-1/2 justify-start items-center ${!editContactInfo && 'mb-6'}`}>
                    <div className='w-1/2 capitalize text-xl'>course:</div>
                    <div className={`w-1/2 uppercase ${editContactInfo && 'hidden'}`}>{user?.course}</div>
                    <input
                        name='course'
                        value={user?.course}
                        className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editContactInfo && 'hidden'}`}
                        onChange={handleChange}
                    />
                </div>

                {editContactInfo && (
                    <div className='flex my-3 mx-3'>
                        <button className='bg-[#ffcc29] hover:bg-[#fad45a] py-1 px-6 rounded-lg' onClick={() => setEditContactInfo(false)}>Save</button>
                        <button className='bg-[#ffcc29] hover:bg-[#fad45a] py-1 px-6 ml-4 rounded-lg' onClick={() => setUser(initialvalues)}>Reset</button>
                    </div>
                )}

                {/* subheader 2 */}
                <div className='flex justify-between lg:justify-start items-center mb-6'> 
                    <h1 className='uppercase text-2xl'>Basic information</h1>
                    <img className='h-6 ml-4 cursor-pointer' src="/icon_edit_2_outline.png" alt="" onClick={() => setEditBasicInfo(true)} />
                </div>

                {/* basic information */}
                <div className='flex lg:w-1/2 justify-start items-center mb-6'>
                    <div className='w-1/2 capitalize text-xl'>gender:</div>
                    <div className={`w-1/2 capitalize ${editBasicInfo && 'hidden'}`}>{user?.gender}</div>
                    <input
                        name='gender'
                        value={user?.gender}
                        className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editBasicInfo && 'hidden'}`}
                        onChange={handleChange}
                    />
                </div>
                
                <div className='flex lg:w-1/2 justify-start items-center mb-6'>
                    <div className='w-1/2 capitalize text-xl'>age:</div>
                    <div className={`w-1/2 capitalize ${editBasicInfo && 'hidden'}`}>{calculateAge(user?.dob)}</div>
                    <input
                        name='gender'
                        value={calculateAge(user?.dob)}
                        disabled
                        className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editBasicInfo && 'hidden'}`}
                    />
                </div>
                
                <div className='flex lg:w-1/2 justify-start items-center mb-6'>
                    <div className='w-1/2 capitalize text-xl'>birthday:</div>
                    <div className={`w-1/2 capitalize ${editBasicInfo && 'hidden'}`}>{user?.dob}</div>
                    <input
                        name='dob'
                        value={user?.dob}
                        className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editBasicInfo && 'hidden'}`}
                        onChange={handleChange}
                    />
                </div>
                
                <div className={`flex lg:w-1/2 justify-start items-center ${!editBasicInfo && 'mb-6'}`}>
                    <div className='w-1/2 capitalize text-xl'>location:</div>
                    <div className={`w-1/2 capitalize ${editBasicInfo && 'hidden'}`}>{user?.addres?.city}, {user?.addres?.state} </div>
                    <input
                        name='addres'
                        value={user?.location}
                        className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editBasicInfo && 'hidden'}`}
                        onChange={handleChange}
                    />
                </div>

                {editBasicInfo && (
                    <div className='flex my-3 mx-3'>
                        <button className='bg-[#ffcc29] hover:bg-[#fad45a] py-1 px-6 rounded-lg' onClick={() => setEditBasicInfo(false)}>Save</button>
                        <button className='bg-[#ffcc29] hover:bg-[#fad45a] py-1 px-6 ml-4 rounded-lg' onClick={() => setUser(initialvalues)}>Reset</button>
                    </div>
                )}

            </div>
        </div> 
    </ProfileLayout>
  )
}
