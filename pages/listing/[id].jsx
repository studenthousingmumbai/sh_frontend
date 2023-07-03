import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'; 
import Head from 'next/head'; 
import Link from 'next/link'; 
import Modal from '../../components/common/Modal'; 
import { Disclosure, Tab } from '@headlessui/react'
import Layout from '../../components/Layout'; 
import useApi from '../../hooks/useApi';
import withAuth from '../../hooks/withAuth';
import GoogleMap from '../../components/common/GoogleMap';
import VideoPlayer from '../../components/common/VideoPlayer';
import apis from '../../lib/apis';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ listing: Listing }) {
  const router = useRouter();
  // const { isReady } = router; 
  const { id } = router.query; 
  const [listing, setListing] = useState(Listing); 
  // const { getListing } = useApi();
  const { isAuthenticated } = withAuth(); 
  const [open, setOpen] = useState(false); 
  const [locationOpen, setLocationOpen] = useState(false);
  const [watchVideoOpen, setWatchVideoOpen] = useState(false); 
  // const [selectedImage, setSelectedImage] = useState(""); 
  // const [selectedImageOpen, setSelectedImageOpen] = useState(false); 

  console.log("Listing : ", listing); 

  // useEffect(() => { 
  //   if(isReady){
  //       console.log("listing id: ", id); 
  //       fetchListing(id); 
  //   }
  // }, [isReady]); 

  // const fetchListing = async (id) => { 
  //   const Listing = await getListing(id); 
  //   console.log("listing retrieved: ", Listing);
  //   setListing(Listing)
  // }

  const handleBooknow = () => { 
    if(isAuthenticated) { 
      router.push(`/booking/${id}`)
    } else { 
      setOpen(true); 
    }
  }

  const handleViewOnMap = async (e) => { 
    e.preventDefault(); 
    e.stopPropagation(); 

    setLocationOpen(true);
  }

  return (
    <>
      <Head> 
        { 
          listing && listing.metatags.length > 0 && 
          listing.metatags.map(tag => ( 
            <>
              <title>{tag.title}</title>
              <meta name='description' content={tag.description}/>
            </>
          ))
        }
      </Head>

      <Layout> 
        <Modal title={"Sign in to make a booking"} open={open} onClose={() => setOpen(false)}>
          <div className='mb-3'> 
            <span>Please </span>
            <Link href='/signin'>
              <a href="#" className="font-medium text-[#f5c325] hover:text-[#fad45a]">
                sign in 
              </a>
            </Link> 
            <span> or </span>
            <Link href='/signup'>
              <a href="#" className="font-medium text-[#f5c325] hover:text-[#fad45a]">
                Create a new account
              </a>
            </Link> 
            <span> to make a booking!</span>
          </div>
          <button
            type='button'
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base font-medium text-gray-700 shadow-sm bg-[#ffcc29] hover:bg-[#fad45a]"
            onClick={() => setOpen(false)}
          >
            Ok
          </button>
        </Modal>

        <Modal title="Watch Listing Video" onClose={setWatchVideoOpen} open={watchVideoOpen}>
          <VideoPlayer videoLink={listing.video_link} width={'w-[550px]'}/>
        </Modal>

        {/* <Modal open={selectedImageOpen} onClose={() => setSelectedImageOpen(false)}>
          <div className='w-[1000px]'> 
            <img src={selectedImage} className='w-full'/>
          </div>
        </Modal> */}

        <div className="bg-white mb-5 px-4 sm:px-16">
          <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              {/* Product */}
              <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                {/* Image gallery */}
                <Tab.Group as="div" className="flex flex-col-reverse">
                  {/* Image selector */}
                  <div className="mx-auto mt-6  w-full max-w-2xl sm:block lg:max-w-none">
                    <Tab.List className="grid grid-cols-4 gap-6">
                      {listing && listing.images && listing.images.map((image) => (
                        <Tab
                          key={image}
                          className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                        >
                          {({ selected }) => (
                            <>
                              {/* <span className="sr-only"> {image.name} </span> */}
                              <span className="absolute inset-0 overflow-hidden rounded-md">
                                <img src={image} alt="Listing Image" className="h-full w-full object-cover object-center" />
                              </span>
                              <span
                                className={classNames(
                                  selected ? 'ring-indigo-500' : 'ring-transparent',
                                  'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                                )}
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>

                  <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                    {listing && listing.images && listing.images.map((image) => (
                      <Tab.Panel key={image.id}>
                        <img
                          src={image}
                          alt={"Listing Image"}
                          className="h-full w-full object-cover object-center sm:rounded-lg"
                          onClick={() => {setSelectedImage(image); setSelectedImageOpen(true)}}
                        />
                      </Tab.Panel>
                    ))}

                    {
                      listing.images && listing.images.length === 0 && 
                      <img 
                        src='https://movi.com.tr/wp-content/uploads/2021/08/placeholder-home.png'
                        alt={"Listing Image"}
                        className="h-full w-full object-cover object-center sm:rounded-lg"
                      /> 
                    }
                  </Tab.Panels>
                </Tab.Group>

                {/* Product info */}
                <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900">{listing.name}</h1>

                  <div className="mt-3">
                    <h2 className="sr-only">Listing description</h2>
                    <h2 className="text-xl tracking-tight text-gray-600 font-medium">{listing && listing.description}</h2>
                  </div>
                  

                  <div className="mt-3">
                    <h5 className="sr-only">Listing address</h5>
                    <p className="text-md tracking-tight text-gray-600">{listing && listing.address && listing.address.line_1}</p>
                  </div>

                  {/* <div className="mt-3">
                    <h2 className="sr-only">Distances</h2>
                    <a className="text-md tracking-tight text-green-500 hover:text-green-600 underline cursor-pointer">View distances</a>
                  </div> */}

                  <div className='flex mt-3'> 
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2"
                        onClick={handleViewOnMap}
                      >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="-ml-1 mr-2 h-5 w-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          View on Map
                      </button>

                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => setWatchVideoOpen(true)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" className='mr-2'>
                          <path fill="#FF0000" d="M21.34 5.04c-.24-.89-.95-1.59-1.84-1.84C17.53 3 12 3 12 3S6.47 3 4.5 3.2c-.89.25-1.6.95-1.84 1.84C2 7.12 2 12 2 12s0 4.88.66 6.96c.24.89.95 1.59 1.84 1.84 1.97.2 7.5.2 7.5.2s5.53 0 7.5-.2c.89-.25 1.6-.95 1.84-1.84.66-2.08.66-6.96.66-6.96s0-4.88-.66-6.96zM9.75 15.42V8.58l6.67 3.42-6.67 3.42z" />
                        </svg>
                        Watch Video
                      </button>
                  </div>

                  <div className="mt-3 mb-3 ">
                    <h1 className='uppercase text-lg text-gray-600'>starting at</h1>
                    <p className="text-3xl tracking-tight text-gray-900">₹{parseInt(listing.price).toLocaleString('en-IN', { maximumFractionDigits: 2 })}/-</p>
                  </div>
                  
                  <div className='mb-3'>
                    <h1 className='uppercase text-lg text-gray-600 '>Amenities</h1>
                    <div className='flex flex-wrap'> 
                      { 
                          listing && listing.amenities && listing.amenities.length !== 0 && listing.amenities.map((amenity, index) => (
                              <span className='text-sm mb-2 mr-2 inline-flex items-center rounded-full bg-amenitiesPillBg px-2.5 py-0.5 text-xs font-semibold text-amenitiesPillText border border-amenitiesPillBorder'> 
                                  {amenity}
                              </span> 
                          ))
                      }
                    </div>
                  </div>

                  <div className='flex mt-3 mb-3'> 
                    <button
                        type="button"
                        className="mr-3 inline-flex items-center rounded-md border border-transparent bg-[#FFCC29] px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-[#fad45a] focus:outline-none focus:ring-2 focus:ring-[#fad45a] focus:ring-offset-2"
                        onClick={() => handleBooknow()}
                    >
                        Book Now
                    </button>   

                    <button
                        type="button"
                        className="mr-3 inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        onClick={() => router.push('/contact-us')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="-ml-1 mr-2 h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        Contact Us
                    </button> 
                  </div>

                  <div>
                    <Link
                      href='/terms-and-conditions'
                    >
                      <a className="text-lg text-gray-500 underline font-semibold text- hover:text-[#FFCC29]">
                        Hostel Rules and Policies
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <Modal title={"View Location On Map"} open={locationOpen} onClose={() => setLocationOpen(false)}>
              <div className='mb-3 w-full h-[500px] bg-gray-200'> 
                  <GoogleMap location={listing.location}/>
              </div>
            </Modal>
          </main>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
    console.log("Get server side props called!"); 
    const { id } = context.params;

    // Fetch data from external API
    const listing = await apis.getListing(id); 

    console.log("Listing: ", listing); 

    // Pass data to the page via props
    return { 
        props: { 
          listing
        } 
    }
}