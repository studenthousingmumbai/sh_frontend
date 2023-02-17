import Layout from '../Layout'
import Link from "next/link"

export default function ProfileSidebar({user}) {

    return (
        <div className='h-[30%] w-full lg:h-[800px] lg:w-1/4 mr-5 relative'>
            <div className='h-full w-full rounded-md p-3'>
                {/* profile image */}
                <div className='flex lg:flex-col gap-16 lg:gap-0 justify-start lg:justify-center items-center mx-auto'>
                    <div className='relative h-52 min-h-52 min-w-52 bg-gray-300  rounded-full'>
                        <div className="flex w-52 h-52 rounded-full justify-center items-center text-7xl">
                            {user?.firstname[0]}{user?.lastname[0]}
                        </div>
                        {/* <div className='absolute flex justify-center items-center h-12 w-12 border border-4 border-white bg-gray-300 bottom-0 right-0 rounded-full'>
                            <img 
                                className='w-8 cursor-pointer'
                                src="/icon_edit.png"
                            />
                        </div> */}
                    </div>
                    <div className='hidden lg:block text-center my-8 capitalize font-medium'>
                        <div className='text-3xl'>
                            {user?.firstname} {user?.lastname}
                        </div>
                        
                        <Link href='/profile'>
                            <div className='text-left text-2xl mt-8 cursor-pointer'>
                                profile
                            </div>
                        </Link>
                        <Link href='/order-history'>
                        <div className='text-left text-2xl mt-3 cursor-pointer'>
                            order history
                        </div>
                        </Link>
                    </div>

                    <div className='lg:hidden flex flex-col gap-3 capitalize font-medium min-w-fit max-h-max'>
                        <div className='text-3xl'>
                            {user?.firstname} {user?.lastname}
                        </div>
                        <div className='flex'>
                            <Link href='/profile'>
                                <div className='text-left text-xl cursor-pointer'>
                                    profile
                                </div>
                            </Link>
                            <div className='font-bold text mx-3 border border border-3 border-black'></div>
                            <Link href='/order-history'>
                                <div className='text-left text-xl cursor-pointer'>
                                    order history
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      )
}