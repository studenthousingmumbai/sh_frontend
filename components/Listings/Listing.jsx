import { useState } from 'react';  
import { useRouter } from 'next/router'; 
import { EllipsisHorizontalIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Modal from '../../components/common/Modal';
import GoogleMap from '../common/GoogleMap';

export default function Listing({ id, name, description, price, amenities, address, images, location }) {
    const router = useRouter(); 
    const [open,setOpen] = useState(false);

    const handleViewOnMap = (e) => { 
        e.preventDefault();
        e.stopPropagation(); 
        setOpen(true);
    }

    return (
        <div className='mb-3'>
            <div className='hidden lg:flex w-full rounded-md p-4 transition-all ease-in-out duration-300 hover:shadow-md hover:cursor-pointer border border-1 border-gray-300 hover:border-gray-400 hover:scale-[1.01] shadow-sm group' onClick={() => router.push(`/listing/${id}`)}>
                <div className="rounded-xl bg-gray-300 w-[700px] h-[300px] mr-6 relative">
                    {/* <div className='bg-[rgba(0,0,0,0.3)] absolute top-0 left-0 w-full h-full rounded-md'></div> */}
                    <img className='w-full h-full object-cover rounded-md' src={images[0] || 'https://movi.com.tr/wp-content/uploads/2021/08/placeholder-home.png'}/>
                </div>

                <div className="rounded-md w-full flex flex-col justify-between">
                    <h2 className='text-3xl uppercase mb-3 transition ease-in-out duration-300 group-hover:text-brandColorHover'> 
                        {name}
                    </h2>

                    <div className='mb-3'> 
                        <h2 className='uppercase text-xl mb-1'>starting at</h2>
                        <div className='text-2xl font-bold'>₹{parseInt(price).toLocaleString('en-IN', { maximumFractionDigits: 2 })}/-</div>    
                    </div>

                    <div>
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-3"
                            onClick={handleViewOnMap}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="-ml-1 mr-2 h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            View on Map
                        </button>
                    </div> 

                    <div className='mb-3'> 
                        <h2 className='uppercase text-lg mb-1'>amenities</h2>
                        <div className='flex flex-wrap'> 
                            { 
                                amenities.length !== 0 && amenities.map((amenity, index) => ( 
                                    <span className='text-sm mr-2 inline-flex items-center rounded-full bg-amenitiesPillBg px-2.5 py-0.5 text-xs font-semibold text-amenitiesPillText border border-amenitiesPillBorder mb-2'> 
                                        {amenity}
                                    </span> 
                                ))
                            }
                        </div>
                    </div>
                            
                    <div className='flex'> 
                        <button
                            type="button"
                            className="mr-3 inline-flex items-center rounded-md border border-transparent bg-[#FFCC29] px-4 py-2 text-sm lg1:text-base font-medium text-black shadow-sm hover:bg-[#fad45a] focus:outline-none focus:ring-2 focus:ring-[#fad45a] focus:ring-offset-2"
                            onClick={() => router.push(`/listing/${id}`)}
                        >
                            Book Now
                        </button>   

                        <button
                            type="button"
                            className="mr-3 inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm lg1:text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-[#167d05] focus:ring-offset-2"
                            onClick={(e) => { e.stopPropagation(); router.push(`/contact-us`); }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="-ml-1 mr-2 h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            Contact Us
                        </button> 
                    </div>
                </div>  
            </div>

            <div className='flex flex-col lg:hidden w-full rounded-md p-6 hover:shadow-xl border-2 border-gray-200 transition-all ease-in-out duration-300 hover:cursor-pointer group' onClick={() => router.push(`/listing/${id}`)}>
                <div className="rounded-xl bg-gray-300 w-full h-[350px] mr-3 relative">
                    <div className='bg-[rgba(0,0,0,0.3)] absolute top-0 left-0 w-full h-full rounded-md'></div>
                    <img className='w-full h-full object-cover rounded-md' src={images[0] || 'https://movi.com.tr/wp-content/uploads/2021/08/placeholder-home.png'}/>
                </div>
                <div className="rounded-md w-full flex flex-col justify-between">
                    <div className='flex w-full gap-1 justify-between items-center my-3'>
                        <h2 className='text-2xl sm:text-3xl uppercase font-bold group-hover:text-blue-500'> 
                            {name}
                        </h2>
                        <div>
                            <button
                                type="button"
                                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={handleViewOnMap}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="-ml-1 mr-2 h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <span className='text-xs sm:text-base'>View on Map</span>
                            </button>
                        </div> 
                    </div>

                    <div className='mb-3'> 
                        <h2 className='uppercase text-lg sm:text-lg mb-1'>starting at</h2>
                        <div className='text-lg sm:text-2xl font-bold'>₹{parseInt(price).toLocaleString('en-IN', { maximumFractionDigits: 2 })}/-</div>    
                    </div>

                    <div className='mb-3'> 
                        <h2 className='uppercase text-lg sm:text-xl mb-1'>amenities</h2>
                        <div className='flex flex-wrap'> 
                            { 
                                amenities.length !== 0 && amenities.map((amenity,index) => (
                                    <span className='text-sm mb-2 inline-flex items-center rounded-full bg-amenitiesPillBg px-2.5 py-0.5 text-xs font-semibold text-amenitiesPillText'> 
                                        {amenity}
                                    </span> 
                                ))
                            }
                        </div>
                    </div>
                            
                    <div className='flex w-full md:w-[50%] lg:w-auto gap-3'> 
                        
                        <div className='w-[50%] lg:w-auto'>
                            <button
                                type="button"
                                className="w-full lg:w-auto inline-flex items-center justify-center rounded-md border border-transparent bg-[#FFCC29] px-4 py-2 text-xs sm:text-base font-medium text-black shadow-sm hover:bg-[#fad45a] focus:outline-none focus:ring-2 focus:ring-[#fad45a] focus:ring-offset-2"
                                onClick={() => router.push(`/listing/${id}`)}
                            >
                                Book Now
                            </button> 
                        </div>
                        <div className='w-[50%] lg:w-auto'>
                            <button
                                type="button"
                                className="w-full lg:w-auto inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-xs sm:text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-[#167d05] focus:ring-offset-2"
                                onClick={(e) => { e.stopPropagation(); router.push(`/contact-us`); }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="-ml-1 mr-2 h-4 w-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                Contact Us
                            </button> 
                        </div>
                    </div>
                </div>  
            </div>

            <Modal title={"View Location On Map"} open={open} onClose={() => setOpen(false)}>
                <div className='mb-3 w-full h-[500px] bg-gray-200'> 
                    <GoogleMap location={location}/>             
                </div>
            </Modal>
        </div>
    )
}