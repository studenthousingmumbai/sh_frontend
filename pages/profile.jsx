import React from 'react'
import { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import Listing from '../components/Listings/Listing';
import ProfileLayout from '../components/common/ProfileLayout';
import ProfileSidebar from '../components/common/ProfileSidebar';
import useAuth from '../hooks/useAuth';
import withAuth from '../hooks/withAuth';
import { useRouter } from 'next/router';
import useApi from '../hooks/useApi';

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
    const [father_name, setFatherName] = useState(""); 
    const [mother_name, setMotherName] = useState(""); 
    const [father_phone, setFatherPhone] = useState(""); 
    const [mother_phone, setMotherPhone] = useState(""); 
    const [pan_no, setPanNo] = useState(""); 
    const [father_pan_no, setFatherPanNo] = useState(""); 
    const [college, setCollege] = useState(""); 
    const [course, setCourse] = useState(""); 
    const [year, setYear] = useState(""); 
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState(""); 
    const [phone_number, setPhoneNumber] = useState("");

    const { isLoading, isAuthenticated } = withAuth(); 
    const { logout } = useAuth(); 
    const user = useAuth.user; 
    const { getUser, updateUser } = useApi();

    useEffect(() => { 
        if(isReady) { 
            fetchUserDetails();
            // setDob(user.dob); 
            // setPhoneNumber(user.phone_number); 
        }
    }, []);

    const fetchUserDetails = async () => { 
        const user_id = JSON.parse(localStorage.getItem("user")).id; 
        console.log("User id: ", user_id); 
        const userDetails = await getUser(user_id);
        console.log("User details: ", userDetails);

        setFirstname(userDetails.firstname); 
        setLastname(userDetails.lastname); 
        setEmail(userDetails.email); 
        setDob(userDetails.dob);
        setPhoneNumber(userDetails.phone_number);
        setFatherName(userDetails.father_name); 
        setMotherName(userDetails.mother_name); 
        setFatherPhone(userDetails.father_phone); 
        setMotherPhone(userDetails.mother_phone); 
        setPanNo(userDetails.pan_no); 
        setFatherPanNo(userDetails.father_pan_no); 
        setCollege(userDetails.college); 
        setCourse(userDetails.course); 
        setYear(userDetails.year); 
    }

    const updateUserDetails = async () => { 
        const user_id = JSON.parse(localStorage.getItem("user")).id; 
        const update_user_response = await updateUser({
            id: user_id,
            firstname, 
            lastname, 
            email, 
            dob, 
            phone_number, 
            father_name, 
            mother_name, 
            mother_phone, 
            father_phone, 
            pan_no, 
            father_pan_no, 
            college, 
            course, 
            year, 
        });
        console.log("Update user response: ", update_user_response); 
        fetchUserDetails();
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
                            <button className='bg-[#ffcc29] hover:bg-[#fad45a] py-1 px-6 rounded-lg' onClick={() => { setEditContactInfo(false); updateUserDetails() }}>Save</button>
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
                        <div className='w-1/2 capitalize text-lg sm:text-xl'>Father's name:</div>
                        <div className={`w-1/2 capitalize ${editBasicInfo && 'hidden'}`}>{father_name}</div>
                        <input
                            name='father_name '
                            value={father_name}
                            onChange={e => setFatherName(e.target.value)}
                            className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editBasicInfo && 'hidden'}`}
                        />
                    </div>

                    <div className='flex lg:w-1/2 justify-start items-center mb-6'>
                        <div className='w-1/2 capitalize text-lg sm:text-xl'>Mother's name:</div>
                        <div className={`w-1/2 capitalize ${editBasicInfo && 'hidden'}`}>{mother_name}</div>
                        <input
                            name='mother_name '
                            value={mother_name}
                            onChange={e => setMotherName(e.target.value)}
                            className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editBasicInfo && 'hidden'}`}
                        />
                    </div>

                    <div className='flex lg:w-1/2 justify-start items-center mb-6'>
                        <div className='w-1/2 capitalize text-lg sm:text-xl'>Father's phone:</div>
                        <div className={`w-1/2 capitalize ${editBasicInfo && 'hidden'}`}>{father_phone}</div>
                        <input
                            maxLength="10"
                            type='text'
                            name='father_phone '
                            value={father_phone}
                            onChange={e => setFatherPhone(e.target.value)}
                            className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editBasicInfo && 'hidden'}`}
                            onKeyPress={(event) => {
                                const keyCode = event.keyCode || event.which;
                                const keyValue = String.fromCharCode(keyCode);
                                const regex = /[0-9]/;
                                if (!regex.test(keyValue)) {
                                  event.preventDefault();
                                }
                            }}
                        />
                    </div>
                    
                    <div className='flex lg:w-1/2 justify-start items-center mb-6'>
                        <div className='w-1/2 capitalize text-lg sm:text-xl'>Mother's phone:</div>
                        <div className={`w-1/2 capitalize ${editBasicInfo && 'hidden'}`}>{mother_phone}</div>
                        <input
                            maxLength="10"
                            name='mother_phone '
                            type='text'
                            value={mother_phone}
                            onChange={e => setMotherPhone(e.target.value)}
                            className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editBasicInfo && 'hidden'}`}
                            onKeyPress={(event) => {
                                const keyCode = event.keyCode || event.which;
                                const keyValue = String.fromCharCode(keyCode);
                                const regex = /[0-9]/;
                                if (!regex.test(keyValue)) {
                                  event.preventDefault();
                                }
                            }}
                        />
                    </div>

                    <div className='flex lg:w-1/2 justify-start items-center mb-6'>
                        <div className='w-1/2 capitalize text-lg sm:text-xl'>Student PAN no:</div>
                        <div className={`w-1/2 capitalize ${editBasicInfo && 'hidden'}`}>{pan_no}</div>
                        <input
                            name='pan_no '
                            type='text'
                            maxLength="10"
                            value={pan_no}
                            onChange={e => setPanNo(e.target.value)}
                            className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editBasicInfo && 'hidden'}`}
                            onKeyPress={(event) => {
                                const keyCode = event.keyCode || event.which;
                                const keyValue = String.fromCharCode(keyCode);
                                const regex = /[0-9]/;
                                if (!regex.test(keyValue)) {
                                  event.preventDefault();
                                }
                            }}
                        />
                    </div>

                    <div className='flex lg:w-1/2 justify-start items-center mb-6'>
                        <div className='w-1/2 capitalize text-lg sm:text-xl'>Father's PAN no:</div>
                        <div className={`w-1/2 capitalize ${editBasicInfo && 'hidden'}`}>{father_pan_no}</div>
                        <input
                            name='father_pan_no '
                            value={father_pan_no}
                            type='text'
                            maxLength="10"
                            onChange={e => setFatherPanNo(e.target.value)}
                            className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editBasicInfo && 'hidden'}`}
                            onKeyPress={(event) => {
                                const keyCode = event.keyCode || event.which;
                                const keyValue = String.fromCharCode(keyCode);
                                const regex = /[0-9]/;
                                if (!regex.test(keyValue)) {
                                  event.preventDefault();
                                }
                            }}
                        />
                    </div>

                    <div className='flex lg:w-1/2 justify-start items-center mb-6'>
                        <div className='w-1/2 capitalize text-lg sm:text-xl'>College:</div>
                        <div className={`w-1/2 capitalize ${editBasicInfo && 'hidden'}`}>{college}</div>
                        <input
                            name='college '
                            value={college}
                            onChange={e => setCollege(e.target.value)}
                            className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editBasicInfo && 'hidden'}`}
                        />
                    </div>

                    <div className='flex lg:w-1/2 justify-start items-center mb-6'>
                        <div className='w-1/2 capitalize text-lg sm:text-xl'>Course:</div>
                        <div className={`w-1/2 capitalize ${editBasicInfo && 'hidden'}`}>{course}</div>
                        <input
                            name='course '
                            value={course}
                            onChange={e => setCourse(e.target.value)}
                            className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editBasicInfo && 'hidden'}`}
                        />
                    </div>

                    <div className='flex lg:w-1/2 justify-start items-center mb-6'>
                        <div className='w-1/2 capitalize text-lg sm:text-xl'>Year:</div>
                        <div className={`w-1/2 capitalize ${editBasicInfo && 'hidden'}`}>{year}</div>
                        <input
                            name='year'
                            value={year}
                            type='number'
                            onChange={e => setYear(e.target.value)}
                            className={`w-1/2 capitalize bg-gray-200 rounded-md py-1 px-2 focus:outline-none ${!editBasicInfo && 'hidden'}`}
                        />
                    </div>

                    <div className='flex lg:w-1/2 justify-start items-center mb-6'>
                        <div className='w-1/2 capitalize text-lg sm:text-xl'>Date of Birth:</div>
                        <div className={`w-1/2 capitalize ${editBasicInfo && 'hidden'}`}>{new Date(dob).toDateString()}</div>
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
                            <button className='bg-[#ffcc29] hover:bg-[#fad45a] py-1 px-6 rounded-lg' onClick={() => {setEditBasicInfo(false); updateUserDetails(); }}>Save</button>
                            {/* <button className='bg-[#ffcc29] hover:bg-[#fad45a] py-1 px-6 ml-4 rounded-lg' onClick={() => setUser(initialvalues)}>Reset</button> */}
                            <button className='bg-[#ffcc29] hover:bg-[#fad45a] py-1 px-6 ml-4 rounded-lg' onClick={() => setEditBasicInfo(false)}>Cancel</button>
                        </div>
                    )}
                </div>
            </div> 
        </ProfileLayout>
  )
}
