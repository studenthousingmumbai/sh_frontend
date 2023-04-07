import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Layout from '../components/Layout'

export default function Example() {
  return (
    <Layout> 
        <div className="relative bg-white max-h-full">
            <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5 h-full">
                <div className="relative flex justify-center bg-gray-100 items-center my-auto h-[500px] lg:h-[90%] lg:col-span-2">
                    <img className='w-full h-full object-cover' src="/about-us.png" alt="about-us" />
                    <div className='absolute bg-black-overlay w-full h-full'></div>
                    <div className='absolute w-full text-center'>
                        <h1 className='uppercase font-bold text-[#EDBD00] text-5xl'>
                            re-imagining
                        </h1>
                        <h1 className='uppercase text-2xl text-white'>
                            <b>co-living</b> for the future
                        </h1>
                    </div>
                </div>
                <div className=" py-12 lg:col-span-3 lg:py-16">
                    <div className='px-4 sm:px-6 lg:px-8 '>
                        <div className="flex relative  max-w-lg lg:max-w-none h-18 sm:h-24 items-center">
                            <div className='absolute h-full bg-yellow-300 top-0 left-0 bg-left w-1'>
                            </div>
                            <div className='uppercase left-2 font-bold text-4xl sm:text-5xl md:text-6xl pl-4'>about us</div>
                        </div>
                        <div className='mt-3 text-md'>
                            <p className='mb-3'>
                                At student housing, we understand the challenges of being a student and living away from home. That's why we strive to create a welcoming and supportive environment where students can thrive academically and socially.
                            </p>
                            <p className='mb-3'>
                                Our company has been in operation for several years, and we have built a strong reputation for providing high-quality accommodation services to our students. We have a team of experienced staff members who are always ready to assist students in any way they can.
                            </p>
                            <p className='mb-3'>
                                Our hostels are strategically located near major universities and colleges, making it easy for students to access their classes and other academic facilities. We also offer a variety of amenities, including laundry services, high-speed internet, and 24-hour security.
                            </p>
                            <p className='mb-3'>
                                We believe that our student hostels provide an excellent opportunity for students to meet new people and form lifelong friendships. Our social events and community-building initiatives are designed to help students connect with one another and make the most of their university experience.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center bg-gray-100 px-3 my-3">
                        <div className="grid grid-cols-3 gap-0 sm:gap-4 md:gap-8 items-center py-3 lg:py-6 sm:px-6 lg:px-0">
                            <div className="col-span-1 flex justify-center">
                                <img className="h-6 sm:h-8" src="/furniture1.png" alt="Tuple" />
                                <h2 className="text-md sm:text-lg md:text-xl lg:text-xl px-3">300+ Beds</h2>
                            </div>
                            <div className="col-span-1 flex justify-center">
                                <img className="h-6 sm:h-8" src="/home-2-1.png" alt="Tuple" />
                                <h2 className="text-md sm:text-lg md:text-xl lg:text-xl px-3 ">20+ Hostels</h2>
                            </div>
                            <div className="col-span-1 flex justify-center items-center">
                                <img className="h-6 sm:h-8" src="/multiple-users-silhouette-1.png" alt="Tuple" />
                                <h2 className="text-md sm:text-lg md:text-xl lg:text-xl px-3">4000+ Students</h2>
                            </div>
                        </div>
                    </div>

                    <div className='px-4 sm:px-6 lg:px-8 ' >
                        <div className='flex items-center'>
                            <img className='h-12' src="/our_mission.png" alt="our_mission" />
                            <div className="flex items-center uppercase max-w-lg lg:max-w-none h-14 pl-2 left-2 font-bold text-3xl">
                                our mission
                            </div>
                        </div>
                        <div className='pt-6'>
                            At student housing, we are passionate about providing our students with the best possible experience. We are constantly looking for ways to improve our services and make our hostels even better. So if you're looking for a safe, comfortable, and affordable place to stay while pursuing your studies, look no further than our student hostels. We would be delighted to welcome you to our community!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
