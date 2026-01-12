import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Modal from "../../components/common/Modal";
import { Disclosure, Tab } from "@headlessui/react";
import Layout from "../../components/Layout";
import useApi from "../../hooks/useApi";
import withAuth from "../../hooks/withAuth";
import VideoPlayer from "../../components/common/VideoPlayer";
import apis from "../../lib/apis";
import { ChevronDownIcon } from "@heroicons/react/24/outline/";
import { FaBed } from "react-icons/fa";
import client from "../../apolloClient";
import { gql } from "@apollo/client";
import ImageViewerCarousel from "../../components/ImageViewerCarousel";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Occupancies({ occupancies }) {
  return (
    <div className="flex flex-wrap mb-3">
      {occupancies &&
        occupancies.map((occupancy) => (
          <div className="border border-gray-300 p-6 rounded-lg mr-3 mb-3 grow bg-gray-50">
            <div className="flex items-center justify-center mb-3">
              <div className="p-3 rounded-full shadow-md bg-white">
                <FaBed className="text-brandColor w-6 h-6" />
              </div>
              <div className="">
                &nbsp; X{" "}
                <span className="text-brandColor font-bold text-xl">
                  {occupancy.total_beds}
                </span>
              </div>
            </div>
            <div className="font-semibold text-center">
              {" "}
              {occupancy.description}{" "}
            </div>
            <div className="flex items-center justify-center">
              ₹&nbsp;
              <div className="text-xl font-bold">
                {occupancy.price} / {occupancy.period}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

function Faqs({ faqs }) {
  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="flex">
            <div className="">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 w-full mb-3">
                Frequently asked questions
              </h2>
              <div className="border-[5px] w-[60px] border-b border-brandColor "></div>
            </div>
          </div>

          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open
                                ? "-rotate-180 transition-all"
                                : "rotate-0 transition-all",
                              "h-6 w-6 transform transition-all"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500 transition-all">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default function Example({ listing: Listing }) {
  const router = useRouter();
  // const { isReady } = router;
  const { slug } = router.query;
  const [listing, setListing] = useState(Listing);
  // const { getListing } = useApi();
  const { isAuthenticated } = withAuth();
  const [open, setOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [watchVideoOpen, setWatchVideoOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const [selectedImage, setSelectedImage] = useState("");
  // const [selectedImageOpen, setSelectedImageOpen] = useState(false);

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

  console.log("Listing collegesNearby", listing?.collegesNearby);
  console.log("Listing foodMenu", listing?.foodMenu);

  const handleBooknow = () => {
    if (isAuthenticated) {
      router.push(`/booking/${slug}`);
    } else {
      setOpen(true);
    }
  };

  const handleViewOnMap = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    setLocationOpen(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        listing?.images && listing.images.length > 0
          ? (prevIndex + 1) % listing.images.length
          : 0
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [listing?.images]);

  return (
    <>
      <Head>
        {listing &&
          listing?.metatags.length > 0 &&
          listing?.metatags.map((tag) =>
            tag.metaName ? (
              <meta name={tag.metaName} content={tag.metaContent} />
            ) : tag.metaProperty ? (
              <meta property={tag.metaProperty} content={tag.metaContent} />
            ) : null
          )}
        {listing && listing.pageTitle && <title>{listing.pageTitle}</title>}
      </Head>

      <Layout>
        <Modal
          title={"Sign in to make a booking"}
          open={open}
          onClose={() => setOpen(false)}
        >
          <div className="mb-3">
            <span>Please </span>
            <Link href="/signin" legacyBehavior>
              <a
                href="#"
                className="font-medium text-[#f5c325] hover:text-[#fad45a]"
              >
                sign in
              </a>
            </Link>
            <span> or </span>
            <Link href="/signup" legacyBehavior>
              <a
                href="#"
                className="font-medium text-[#f5c325] hover:text-[#fad45a]"
              >
                Create a new account
              </a>
            </Link>
            <span> to make a booking!</span>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base font-medium text-gray-700 shadow-sm bg-[#ffcc29] hover:bg-[#fad45a]"
            onClick={() => setOpen(false)}
          >
            Ok
          </button>
        </Modal>

        <Modal
          title="Watch Listing Video"
          onClose={setWatchVideoOpen}
          open={watchVideoOpen}
        >
          <VideoPlayer videoLink={listing?.video_link} width={"w-[550px]"} />
        </Modal>

        {/* <Modal open={selectedImageOpen} onClose={() => setSelectedImageOpen(false)}>
          <div className='w-[1000px]'> 
            <img src={selectedImage} className='w-full'/>
          </div>
        </Modal> */}

        <div className="bg-white mb-5 px-4 sm:px-16">
          <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none mb-6">
              {/* Product */}
              <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                {/* Image gallery */}
                <div className="flex flex-col">
                  <ImageViewerCarousel
                    images={listing?.images?.map((imgs) => {
                      return {
                        url: imgs.url,
                      };
                    })}
                    startIndex={1}
                    isOpen={isDialogOpen}
                    onOpenChange={setIsDialogOpen}
                  />
                  <div className="relative">
                    <img
                      src={listing?.images[currentImageIndex]?.url}
                      className="w-full h-auto cursor-pointer bg-blend-darken rounded-lg object-cover transform transition-transform duration-300 group-hover:scale-105"
                      onClick={() => setIsDialogOpen(true)}
                    />
                    {listing?.images?.length > 1 && (
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-lg px-3 py-2 rounded">
                        +{listing.images.length - 1}
                      </div>
                    )}
                  </div>
                </div>

                {/* Product info */}
                <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                    {listing?.name}
                  </h1>

                  <div className="mt-3">
                    <h2 className="sr-only">Listing description</h2>
                    <h2 className="text-xl tracking-tight text-gray-600 font-medium">
                      {listing?.description}
                    </h2>
                  </div>

                  <div className="mt-3">
                    <h5 className="sr-only">Listing address</h5>
                    <p className="text-md tracking-tight text-gray-600">
                      {listing?.address?.line_1}
                    </p>
                  </div>

                  {/* <div className="mt-3">
                    <h2 className="sr-only">Distances</h2>
                    <a className="text-md tracking-tight text-green-500 hover:text-green-600 underline cursor-pointer">View distances</a>
                  </div> */}

                  <div className="flex mt-3">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2"
                      onClick={handleViewOnMap}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="-ml-1 mr-2 h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      View on Map
                    </button>

                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setWatchVideoOpen(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="24"
                        height="24"
                        className="mr-2"
                      >
                        <path
                          fill="#FF0000"
                          d="M21.34 5.04c-.24-.89-.95-1.59-1.84-1.84C17.53 3 12 3 12 3S6.47 3 4.5 3.2c-.89.25-1.6.95-1.84 1.84C2 7.12 2 12 2 12s0 4.88.66 6.96c.24.89.95 1.59 1.84 1.84 1.97.2 7.5.2 7.5.2s5.53 0 7.5-.2c.89-.25 1.6-.95 1.84-1.84.66-2.08.66-6.96.66-6.96s0-4.88-.66-6.96zM9.75 15.42V8.58l6.67 3.42-6.67 3.42z"
                        />
                      </svg>
                      Watch Video
                    </button>
                  </div>

                  <div className="mt-3 mb-3 ">
                    <h1 className="uppercase text-lg text-gray-600">
                      starting at
                    </h1>
                    <p className="text-3xl tracking-tight text-gray-900">
                      ₹
                      {parseInt(listing?.price).toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                      })}
                      /-
                    </p>
                  </div>

                  <div className="mb-3">
                    <h1 className="uppercase text-lg text-gray-600 ">
                      Amenities
                    </h1>
                    <div className="flex flex-wrap">
                      {listing &&
                        listing?.amenities &&
                        listing?.amenities.length !== 0 &&
                        listing?.amenities.map((amenity, index) => (
                          <span className="text-sm mb-2 mr-2 inline-flex items-center rounded-full bg-amenitiesPillBg px-2.5 py-0.5 text-xs font-semibold text-amenitiesPillText border border-amenitiesPillBorder">
                            {amenity}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div className="flex mt-3 mb-3">
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
                      onClick={() => router.push("/contact-us")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="-ml-1 mr-2 h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                      Contact Us
                    </button>
                  </div>
                  <div>
                    <Link href="/terms-and-conditions" legacyBehavior>
                      <a className="text-lg text-gray-500 underline font-semibold text- hover:text-[#FFCC29]">
                        Hostel Rules and Policies
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 w-full mb-3">
                    Hostel Details
                  </h2>
                  <div className="border-[5px] w-[60px] border-b border-brandColor "></div>
                </div>
              </div>
              <Occupancies occupancies={listing?.occupancies} />
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
              {listing?.collegesNearby?.length > 0 && (
                <div className="mb-6 flex-1 flex flex-col gap-6">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 w-full mb-3">
                      Colleges Nearby
                    </h2>
                    <div className="border-[5px] w-[60px] border-b border-brandColor "></div>
                  </div>

                  <div className="flex flex-col gap-4">
                    {listing?.collegesNearby?.map((clgs) => (
                      <div
                        key={clgs.name}
                        className="flex items-center font-bold"
                      >
                        <span className="whitespace-nowrap">{clgs.name}</span>
                        <span className="flex-grow border-b border-dashed border-black mx-4"></span>
                        <span className="whitespace-nowrap">
                          {clgs.distance} M
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {listing?.mapEmbed && (
                <div className="mb-6 flex-1 flex flex-col gap-6">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 w-full mb-3">
                      Locate On Map
                    </h2>
                    <div className="border-[5px] w-[60px] border-b border-brandColor"></div>
                  </div>
                  <div className="w-full aspect-auto max-w-full overflow-hidden rounded-lg">
                    <div
                      className="w-full h-full"
                      dangerouslySetInnerHTML={{ __html: listing?.mapEmbed }}
                    />
                  </div>
                </div>
              )}
            </div>

            {listing?.foodMenu?.url && (
              <div className="flex flex-col">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 w-full mb-3">
                    Food Menu
                  </h2>
                  <div className="border-[5px] w-[60px] border-b border-brandColor "></div>
                </div>

                <div className="w-full">
                  <img
                    className="w-full h-full object-cover"
                    src={listing?.foodMenu.url}
                  ></img>
                </div>
              </div>
            )}

            <div className="mt-12 mb-12">
              <Faqs faqs={listing?.faqs} />
            </div>

            <Modal
              title={"View Location On Map"}
              open={locationOpen}
              onClose={() => setLocationOpen(false)}
            >
              <div className="mb-3 w-full h-[500px] bg-gray-200">
                {listing?.mapEmbed && (
  <div className="w-full h-[500px] rounded-md overflow-hidden">
    <div
      className="w-full h-full"
      dangerouslySetInnerHTML={{ __html: listing.mapEmbed }}
    />
  </div>
)}
              </div>
            </Modal>
          </main>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("Get server side props called!");
  const { slug } = context.params;

  try {
    const { data } = await client.query({
      query: gql`
        query HostelsOrder($slug: String!) {
          hostelsOrders(first: 1000) {
            hostel(where: { slug: $slug }) {
              name
              slug
              description
              pageTitle
              address {
                line1
                line2
                city
                state
                zip
              }
              amenities
              images {
                url
                id
              }
              metatags {
                metaName
                metaContent
                metaProperty
              }
              schemaMarkup
              mapEmbed
              total_price
              price
              gender
              foodMenu {
                id
                url
              }
              video_link
              faqs {
                question
                answer
              }
              occupancies {
                price
                description
                total_beds
                period
              }
              collegesNearby {
                name
                distance
              }
            }
          }
        }
      `,
      variables: {
        slug,
      },
    });
    console.log("Data: ", data);
    const { hostelsOrders } = data;
    const hostels = hostelsOrders[0].hostel;
    return {
      props: {
        listing: hostels[0] || null,
      },
    };
  } catch (e) {
    console.error("Error fetching data:", e);
    return {
      props: {
        listing: null,
      },
    };
  }
}
