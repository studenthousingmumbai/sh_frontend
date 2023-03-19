import React from 'react'
import { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import Listing from '../components/Listings/Listing';
import ProfileLayout from '../components/common/ProfileLayout';
import ProfileSidebar from '../components/common/ProfileSidebar';
import useAuth from '../hooks/useAuth';
import withAuth from '../hooks/withAuth';
import { useRouter } from 'next/router';

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
    const router = useRouter();
    const { isReady } = router;
    // const [user, setUser] = useState(initialvalues)
    const [editBasicInfo, setEditBasicInfo] = useState(false);
    const [editContactInfo, setEditContactInfo] = useState(false);

    const [firstname, setFirstname] = useState(""); 
    const [lastname, setLastname] = useState(""); 
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState(""); 
    const [phone_number, setPhoneNumber] = useState("");

    const { isLoading, isAuthenticated } = withAuth(); 
    const { logout } = useAuth(); 
    const user = useAuth.user; 

    useEffect(() => { 
        if(isReady) { 
            setFirstname(user.firstname); 
            setLastname(user.lastname); 
            setEmail(user.email); 
            // setDob(user.dob); 
            // setPhoneNumber(user.phone_number); 
        }
    }, []);

    const fetchUserDetails = async () => { 
        
    }

    return (
        <ProfileLayout>
            <ProfileSidebar user={user && {firstname: user?.firstname, lastname: user?.lastname}}/>
            <div className="w-full lg:w-3/4 py-6">
                <div className='flex flex-col'>

                    {/* header */}
                    <div className='flex items-center'>
                        <img className='h-10' src="/icon_person.png" alt="" />
                        <h3 className='font-medium text-2xl sm:text-4xl uppercase'>About</h3>
                    </div>
                    <div className='bg-gray-300 mb-6'><div className='w-44 border border-yellow-300'></div></div>
                    
                    {/* subheader 1 */}
                    <div className='flex justify-between lg:justify-start items-center mb-6'> 
                        <h1 className='uppercase text-lg sm:text-2xl'>contact information</h1>
                        <img className='h-6 ml-4 cursor-pointer' src="/icon_edit_2_outline.png" alt="" onClick={() => setEditContactInfo(true)} />
                    </div>

                    {/* contact information */}
                    {/* <div className='flex lg:w-1/2 justify-start items-center mb-6'>
                        <div className='w-1/2 capitalize text-lg sm:text-xl'>phone number:</div>
                        <div className={`w-1/2 capitalize ${editContactInfo && 'hidden'}`}>{phone_number}</div>
                        <input
                            name='phone_number'
                            value={phone_number}
                            className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editContactInfo && 'hidden'}`}
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                    </div> */}

                    <div className='flex lg:w-1/2 justify-start items-center mb-6'>
                        <div className='w-1/2 capitalize text-lg sm:text-xl'>Phone Number:</div>
                        <div className={`w-1/2 ${editContactInfo && 'hidden'}`}>{phone_number}</div>
                        <input
                            name='email'
                            value={phone_number}
                            className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editContactInfo && 'hidden'}`}
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    
                    <div className='flex lg:w-1/2 justify-start items-center mb-6'>
                        <div className='w-1/2 capitalize text-lg sm:text-xl'>email address:</div>
                        <div className={`w-1/2 ${editContactInfo && 'hidden'}`}>{user.email}</div>
                        <input
                            name='email'
                            value={user.email}
                            className={`w-1/2 bg-gray-200 rounded-md py-1 px-2 focus:outline-none text-gray-500 ${!editContactInfo && 'hidden'}`}
                            disabled={true}
                        />
                    </div>

                    {editContactInfo && (
                        <div className='flex my-3 mx-3'>
                            <button className='bg-[#ffcc29] hover:bg-[#fad45a] py-1 px-6 rounded-lg' onClick={() => setEditContactInfo(false)}>Save</button>
                            {/* <button className='bg-[#ffcc29] hover:bg-[#fad45a] py-1 px-6 ml-4 rounded-lg' onClick={() => setUser(initialvalues)}>Reset</button> */}
                            <button className='bg-[#ffcc29] hover:bg-[#fad45a] py-1 px-6 ml-4 rounded-lg' onClick={() => setEditBasicInfo(false)}>Cancel</button>
                        </div>
                    )}

                    {/* subheader 2 */}
                    <div className='flex justify-between lg:justify-start items-center mb-6'> 
                        <h1 className='uppercase text-lg sm:text-2xl'>Basic information</h1>
                        <img className='h-6 ml-4 cursor-pointer' src="/icon_edit_2_outline.png" alt="" onClick={() => setEditBasicInfo(true)} />
                    </div>

                    {/* basic information */}
                    <div className='flex lg:w-1/2 justify-start items-center mb-6'>
                        <div className='w-1/2 capitalize text-lg sm:text-xl'>Firstname:</div>
                        <div className={`w-1/2 capitalize ${editBasicInfo && 'hidden'}`}>{firstname}</div>
                        <input
                            name='firstname'
                            value={firstname}
                            className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editBasicInfo && 'hidden'}`}
                            onChange={e => setFirstname(e.target.value)}
                        />
                    </div>
                    
                    <div className='flex lg:w-1/2 justify-start items-center mb-6'>
                        <div className='w-1/2 capitalize text-lg sm:text-xl'>Lastname:</div>
                        <div className={`w-1/2 capitalize ${editBasicInfo && 'hidden'}`}>{lastname}</div>
                        <input
                            name='lastname'
                            value={lastname}
                            onChange={e => setLastname(e.target.value)}
                            className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editBasicInfo && 'hidden'}`}
                        />
                    </div>
                    
                    <div className='flex lg:w-1/2 justify-start items-center mb-6'>
                        <div className='w-1/2 capitalize text-lg sm:text-xl'>Date of Birth:</div>
                        <div className={`w-1/2 capitalize ${editBasicInfo && 'hidden'}`}>{dob}</div>
                        <input
                            name='dob'
                            type='date'
                            value={dob}
                            className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editBasicInfo && 'hidden'}`}
                            onChange={e => setDob(e.target.value)}
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
