import React from 'react'
import RomSelection from '../components/Booking/RomSelection'
import PanZoom from '../components/Booking/PanZoom'; 
import FloorPlanTest from '../components/Booking/FloorPlanTest';

const orders = [
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
    course: "FY BCOM"
  }, 
]

const user = { 
  firstname: "Tanay", 
  lastname: "Kulkarni", 
  email: "tanaykulkarni7@gmail.com", 
  academic_year: "FY.Bsc", 
  college: "K.C College", 
  gender: "male", 
  dob: "21/10/1998", 
  addres: { 
    city: "Mumbai", 
    state: "Maharashtra"
  }
}

export default function test() {
  return (
    <div>
      {/* <RomSelection/> */}
      {/* <PanZoom/> */}
      <FloorPlanTest/>
    </div>
  )
}


