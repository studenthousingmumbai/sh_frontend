import { useRouter } from 'next/router'; 

export default function Listing({ id, name, description, price, amenities, address, images }) {
    const router = useRouter(); 

    return (
        <div className='flex w-full mb-3'>
            <div className="rounded-xl bg-gray-300 w-[500px] h-[300px] mr-3 relative">
                <div className='bg-[rgba(0,0,0,0.3)] absolute top-0 left-0 w-full h-full rounded-md'></div>
                <img className='w-full h-full object-cover rounded-md' src={images[0] || 'https://movi.com.tr/wp-content/uploads/2021/08/placeholder-home.png'}/>
            </div>
            <div className="rounded-md w-full h-[300px] flex flex-col justify-between">
                <h2 className='text-3xl uppercase mb-3'> 
                    {name}
                </h2>

                <div className='mb-3'> 
                    <div className='uppercase'>starting at</div>
                    <div className='text-2xl font-bold'>₹{price}/-</div>    
                </div>

                <div>
                    <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-3"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="-ml-1 mr-2 h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        View on Map
                    </button>
                </div> 

                <div className='mb-3'> 
                    <h2 className='uppercase text-xl'>amenities</h2>
                    <div className='flex'> 
                        { 
                            amenities.length !== 0 && amenities.map(amenity => ( 
                                <span className='mr-3 text-md font-semibold'> 
                                    {amenity}
                                </span> 
                            ))
                        }
                    </div>
                </div>
                        
                <div className='flex'> 
                    <button
                        type="button"
                        className="mr-3 inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        onClick={() => router.push(`/listing/${id}`)}
                    >
                        Book Now
                    </button>   

                    <button
                        type="button"
                        className="mr-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="-ml-1 mr-2 h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        Contact Us
                    </button> 
                </div>
            </div>  
        </div>
    )
}