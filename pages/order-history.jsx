import React from 'react'
import { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import OrderHistory from '../components/OrderHistory/order-history';
import ProfileLayout from '../components/common/ProfileLayout';
import ProfileSidebar from '../components/common/ProfileSidebar';
import useApi from '../hooks/useApi';
import useAuth from '../hooks/useAuth';
import withAuth from '../hooks/withAuth';

// const initialvalues = { 
//     firstname: "Tanay", 
//     lastname: "Kulkarni",
//     phone_number: '8097029342',
//     email: "tanaykulkarni7@gmail.com", 
//     academic_year: "FY.Bsc", 
//     college: "K.C College", 
//     gender: "male", 
//     dob: "1998/10/21", 
//     addres: { 
//         city: "Mumbai", 
//         state: "Maharashtra"
//     }
// }

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
    // const [user, setUser] = useState(initialvalues)
    const [orders, setOrders] = useState([])
    const { getOrders } = useApi(); 
    const { isAuthenticated, isLoading } = withAuth(); 
    const user = useAuth.user; 

    console.log("User is: ", user);

    const fetchOrders = async () => { 
        console.log("User in fetch orders: ", user); 
        const { orders: allOrders, total } = await getOrders({ 
            filters: { user: user.id }, 
            skip: 0, 
            limit: 0
        }); 

        let transformed_orders = [];

        for(let order of allOrders) { 
            transformed_orders.push({ 
                order_id: order.id, 
                createdAt: order.createdAt, 
                listing_id: order.listing_id, 
                listing_name: order.listing, 
                floor_no: order.floor,
                address: order.address,  
                status: "COMPLETE", 
                scheduled_term: "1", 
                images: order.images, 
                course: order.course, 
                appartment_no: order.appartment, 
                amenities: "", 
                room_no: order.room_no, 
                bed_id: order.bed, 
                bed_no: order.bed_no,
                year: order.year 
            }); 
        }
        
        setOrders(transformed_orders); 

        console.log("This users orders: ", allOrders, " total: ", total);
    }

    useEffect(() => { 
        if(!isLoading && isAuthenticated) { 
            fetchOrders(); 
        }   
    }, [isLoading]); 

    return (
        <ProfileLayout>
            {isAuthenticated && 
                <>
                    <ProfileSidebar/>
                    <div className="w-full">
                        <div className='hidden lg:block pl-3 pb-3 font-bold text-3xl'>Order History</div>
                        {
                            orderList.length !== 0 && orderList.map((order,index) => ( 
                                <>
                                    <OrderHistory 
                                        listing_id={order.listing_id}
                                        id={order.order_id}
                                        key={order.order_id}
                                        name={order.listing_name}
                                        status= {order.status} 
                                        floor_no={order.floor_no}
                                        room_no={order.room_no}
                                        bed_no={order.bed_no}
                                        appartment_no={order.appartment_no}
                                        bed_id={order.bed_id}
                                        images={order.images}
                                        scheduled_term={order.scheduled_term}
                                        price={order.price} 
                                        createdAt={order.createdAt}
                                        year={order.year}
                                        address={order.address}
                                        course={order.course}
                                    />  
                                </>
                            )) 
                        }
                    </div>
                </>
            }

        </ProfileLayout>
    )
}
