import { useRouter } from 'next/router'; 

export default function Listing({
    id,
    name,
    status,
    floor_no,
    room_no,
    appartment_no,
    bed_id,
    amenities,
    address,
    images,
    scheduled_term,
    course, 
    listing_id, 
    createdAt, 
    bed_no, 
    year
}) {
    const router = useRouter(); 

    return (
        <div className='w-full mb-6 border border-2 border-gray-300 rounded-3xl px-8 py-4'>
            <div className='flex w-full'>
                <div className='w-[33.33%] lg:w-[20%] flex flex-col text-center lg:text-start overflow-hidden'>
                    <div className='capitalize font-semibold'>Order ID</div>
                    <div className='text-sm'>{id}</div>
                </div>
                <div className='w-[33.33%] lg:w-[20%] flex flex-col text-center lg:text-start'>
                    <div className='capitalize font-semibold'>date placed</div>
                    <div className='text-sm'>{new Date(createdAt).toDateString()}</div>
                </div>
                <div className='w-[33.33%] lg:w-[20%] flex flex-col text-center lg:text-start'>
                    <div className='capitalize font-semibold '>status</div>
                    <div className='capitalize text-[#158802] text-sm font-bold'>{status}</div>
                </div>
                <div className='hidden lg:flex w-[40%] justify-end items-center'>
                    <button className='py-2 px-4 bg-[#BDFDB3] uppercase font-bold rounded-3xl text-sm' onClick={() => router.push('/contact-us')}>
                        contact us
                    </button>
                    
                    <button className='py-2 px-4 ml-4 bg-[#FBCF5F] uppercase font-bold rounded-3xl text-sm text-white' onClick={() => router.push(`/listing/${listing_id}`)}>
                        view property
                    </button>
                </div>
            </div>

            <div className='w-full h-[0.5px] border border-gray-200 my-3'></div>

            <div className='flex flex-col lg:flex-row py-3'>
                <div className="rounded-xl w-full lg:w-2/6 h-[250px] mr-3 relative">
                    {/* <div className='bg-[rgba(0,0,0,0.3)] absolute top-0 left-0 w-full h-full rounded-3xl'></div> */}
                    <img className='w-full h-full object-cover rounded-3xl' src={images[0] || 'https://movi.com.tr/wp-content/uploads/2021/08/placeholder-home.png'} alt="no image"/>
                </div>
                <div className="rounded-md w-full lg:w-4/6 lg:h-[250px] flex flex-col p-4 pb-0">
                    <h2 className='text-3xl font-bold uppercase'> 
                        {name}
                    </h2>
                    <h2 className='text-lg uppercase'> 
                        {address.line_1}
                    </h2>
                    <div className='lg:hidden flex gap-4 flex-col sm:flex-row justify-start items-start sm:items-center py-2'>
                        <button className='py-2 px-4 bg-[#BDFDB3] uppercase font-bold rounded-3xl text-xs sm:text-sm' onClick={() => router.push('/contact-us')}>
                            contact us
                        </button>
                        
                        <button className='py-2 px-4 bg-[#FBCF5F] uppercase font-bold rounded-3xl text-xs sm:text-sm text-white' onClick={() => router.push(`/listing/${listing_id}`)}>
                            view property
                        </button>
                    </div>
                    <div className='w-[80%] border border-gray-200 my-3'>
                    </div>

                    <div className='uppercase font-medium'>booking information</div>
                    <div className='flex w-full'>
                        <div className='flex flex-col w-1/2'>
                            <div className='flex w-full justify-start pt-2'>
                                <div className='w-4/6 capitalize'>
                                    floor no:
                                </div>
                                <div className='w-2/6'>
                                    {floor_no}
                                </div>
                            </div>
                            <div className='flex w-full justify-start pt-2'>
                                <div className='w-4/6 capitalize'>
                                    apartment no:
                                </div>
                                <div className='w-2/6'>
                                    {appartment_no}
                                </div>
                            </div>
                            <div className='flex w-full justify-start pt-2 '>
                                <div className='w-4/6 capitalize'>
                                    Bed No.:
                                </div>
                                <div className='w-2/6'>
                                    {bed_no}
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <div className='flex w-full justify-start pt-2'>
                                <div className='w-4/6 capitalize'>
                                    scheduled term:
                                </div>
                                <div className='w-2/6'>
                                    {scheduled_term}
                                </div>
                            </div>
                            <div className='flex w-full justify-start pt-2'>
                                <div className='w-4/6 capitalize'>
                                    selected year:
                                </div>
                                <div className='w-2/6'>
                                    {year}
                                </div>
                            </div>
                            <div className='flex w-full justify-start pt-2'>
                                <div className='w-4/6 capitalize'>
                                    selected course:
                                </div>
                                <div className='w-2/6'>
                                    {course}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>

        </div>
    )
}