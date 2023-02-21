import React from 'react'
import { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import OrderHistory from '../components/OrderHistory/order-history';
import ProfileLayout from '../components/common/ProfileLayout';
import ProfileSidebar from '../components/common/ProfileSidebar';

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
    }
}

const orderList = [
    {
      order_id: "63dd57bcdc548038fa7fe6e5", 
      createdAt: "2023-01-30T13:07:43.836Z", // this is the date placed, to show the date use - new Date(order.cretedAt).toDateString()
      status: "COMPLETE", 
      listing_name: "Ganga Niwas", 
      floor_no: "3", 
      appartment_no: "105", 
      room_no: "2", 
      bed_id: "63dd57bcdc448038fa7fe6e5", 
      scheduled_term: "1", 
      amenities: "", 
      images: ['https://lh5.googleusercontent.com/p/AF1QipMD8uMloIMenAHDHnRg77jXZOdWXkr64pWC57VC=w348-h160-k-no'],
      address: '123 Ganga Nivas, 34th Street, Juhu, Mumbai 401202',
      course: "FY BCOM"
    }, 
    {
      order_id: "63dd57bcdc548038fa7fe6e5", 
      createdAt: "2023-01-30T13:07:43.836Z", // this is the date placed, to show the date use - new Date(order.cretedAt).toDateString()
      status: "COMPLETE", 
      listing_name: "Ganga Niwas", 
      floor_no: "3", 
      appartment_no: "105", 
      room_no: "2", 
      bed_id: "63dd57bcdc448038fa7fe6e5",
      scheduled_term: "1", 
      amenities: "", 
      images: ['https://lh5.googleusercontent.com/p/AF1QipMD8uMloIMenAHDHnRg77jXZOdWXkr64pWC57VC=w348-h160-k-no'],
      address: '123 Ganga Nivas, 34th Street, Juhu, Mumbai 401202',
      course: "FY BCOM"
    }, 
]


export default function Example() {

    const [user, setUser] = useState(initialvalues)

    const [orders, setOrders] = useState(orderList)

    return (
    <ProfileLayout>
        <ProfileSidebar user={user && {firstname: user?.firstname, lastname: user?.lastname}}/>
        <div className="w-full">
                {/* <h1 className='font-semibold capitalize text-2xl mb-3'>
                    Showing all listings  
                </h1>  */}
                {/* <div className="xl:w-96">
                    <div className="input-group relative flex mb-2">
                        <input 
                            type="search" 
                            className="mr-2 form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                            placeholder="Search Listings" 
                            aria-label="Search" 
                            aria-describedby="button-addon2"
                        />
                        <button className="btn inline-block px-6 py-2.5 bg-white text-gray-400 border border-solid border-gray-300 hover:text-blue-600 focus:text-blue-600 active:text-blue-600  text-xs rounded focus:outline-none hover:border-blue-600 focus:border-blue-600 focus:ring-0 transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </button>
                    </div>
                </div> */}
                {
                    orders.length !== 0 && orders.map((order,index) => ( 
                        <>
                            <OrderHistory 
                                id={order.order_id}
                                key={order.order_id}
                                name={order.listing_name}
                                status= {order.status} 
                                floor_no={order.floor_no}
                                room_no={order.room_no}
                                appartment_no={order.appartment_no}
                                bed_id={order.bed_id}
                                images={order.images}
                                scheduled_term={order.scheduled_term}
                                price={order.price} 
                                amenities={order.amenities}
                                address={order.address}
                                course={order.course}
                            />  
                            {/* { index !== listings.length - 1 && <div className='w-full h-[0.5px] border border-gray-200 mb-3'></div>} */}
                        </>
                    )) 
                }
            </div> 
    </ProfileLayout>
  )
}
