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
                    <div className='px-4 sm:px-6 lg:px-8 h-[40%]'>
                        <div className="flex relative  max-w-lg lg:max-w-none h-24 items-center">
                            <div className='absolute h-full bg-yellow-300 top-0 left-0 bg-left w-1'>
                            </div>
                            <div className='uppercase left-2 font-bold text-6xl pl-4'>about us</div>
                        </div>
                        <div className='py-6'>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum."
                        </div>
                    </div>

                    <div className="flex items-center bg-gray-100 my-3">
                        <div className="grid grid-cols-3 gap-8 py-4 items-center sm:px-6 lg:px-0">
                            <div className="col-span-1 flex justify-center">
                                <img className="h-8" src="/furniture1.png" alt="Tuple" />
                                <h2 className="text-[22px] px-3 ">200+ Beds</h2>
                            </div>
                            <div className="col-span-1 flex justify-center">
                                <img className="h-8" src="/home-2-1.png" alt="Tuple" />
                                <h2 className="text-[22px] px-3 ">20+ Hostels</h2>
                            </div>
                            <div className="col-span-1 flex justify-center items-center">
                                <img className="h-8" src="/multiple-users-silhouette-1.png" alt="Tuple" />
                                <h2 className="text-[22px] px-3 ">2467+ Happy Students</h2>
                            </div>
                        </div>
                    </div>

                    <div className='px-4 py-6 sm:px-6 lg:px-8 h-[40%]' >
                        <div className='flex items-center'>
                            <img className='h-12' src="/our_mission.png" alt="our_mission" />
                            <div className="flex items-center uppercase max-w-lg lg:max-w-none h-14 pl-2 left-2 font-bold text-3xl">
                                our mission
                            </div>
                        </div>
                        <div className='pt-6'>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum."
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
