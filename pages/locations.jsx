import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import Layout from '../components/Layout'
import useApi from '../hooks/useApi';

export default function Example() {
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [message,setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const { locations } = useApi();


    return (
        <Layout> 
            <div className="relative bg-white">
                <div className="absolute inset-0 px-4 sm:px-12 ">
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
                </div>

                <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5 h-full">
                    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                        <div className="mx-auto max-w-lg">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">Student Housing Ganga Niwas - Boys Accommodation</h2>
                     
                            <dl className="mt-8 text-base text-gray-500">
                                <div>
                                    <dt className="sr-only">Postal address</dt>
                                    <dd>
                                        <a href="https://www.google.com/maps/place/Ganga+Niwas+Boys+Hostel-+Student+Housing/@19.102562,72.8333613,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9b27d21464b:0xfa24c72136c1ac3e!8m2!3d19.102562!4d72.83555!16s%2Fg%2F11fln228xf?hl=en-GB&authuser=1&entry=ttu" target="_blank" className="mt-6 max-w-3xl text-base text-indigo-500 underline">
                                            Ganga Niwas, Next to SBI Bank, Vaikunthlal Mehta Road, Across NMIMS, Vile Parle West, Mumbai, Maharashtra 400056 
                                        </a>
                                    </dd>
                                </div>
                                <div className="mt-6">
                                    <dt className="sr-only">Phone number</dt>
                                    <dd className="flex mb-3">
                                        <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3"> +91-9819780000</span>
                                    </dd>
                                   
                                </div>
                                 <div className="mt-3">
                                    <dt className="sr-only">Email</dt>
                                    <dd className="flex">
                                        <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3">info@studenthousing.co.in</span>
                                    </dd>
                                    <dd className="flex">                                       
                                        <span className="ml-3">Working hours: Open 24 Hours</span>
                                    </dd> 
                                </div>
                            </dl>

                        
                        </div>
                    </div>

                    <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                        <div className="mx-auto max-w-lg">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                            Student Housing Crescenzo- Girls Accommodation</h2>
                          
                            <dl className="mt-8 text-base text-gray-500">
                                <div>
                                    <dt className="sr-only">Postal address</dt>
                                    <dd>
                                        <a href="https://www.google.com/maps/place/Student+Housing+Hostels:+Crescenzo+Apartment/@19.1024726,72.7630308,13z/data=!3m1!5s0x3be7c9b8bfa30ceb:0xc685c3566f90015d!4m10!1m2!2m1!1screscenzo!3m6!1s0x3be7c90d5e92ad71:0xac4f3339bb7ec057!8m2!3d19.1024726!4d72.8351286!15sCgljcmVzY2Vuem9aCyIJY3Jlc2NlbnpvkgEWc3R1ZGVudF9ob3VzaW5nX2NlbnRlcuABAA!16s%2Fg%2F11qzj3y64s?hl=en-GB&authuser=1&entry=ttu" target="_blank" className="mt-6 max-w-3xl text-base text-indigo-500 underline">
                                        Crescenzo, Floor 3, 4, 5, 6 Crescenzo Residences, Next to HDFC Bank, Vaikunthlal Mehta Rd, JVPD Scheme, Vile Parle West Mumbai Maharashtra 400056   

                                        </a>
                                    </dd>
                                </div>
                                <div className="mt-6">
                                    <dt className="sr-only">Phone number</dt>
                                    <dd className="flex mb-3">
                                        <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3"> +91-9004033884</span>
                                    </dd>
                                   
                                </div>
                                 <div className="mt-3">
                                    <dt className="sr-only">Email</dt>
                                    <dd className="flex">
                                        <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3">info@studenthousing.co.in</span>
                                    </dd>
                                    <dd className="flex">                                       
                                        <span className="ml-3">Working hours: Monday- Sunday 10am- 8pm</span>
                                    </dd> 
                                </div>
                            </dl>

                        
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5 h-full">
                    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                        <div className="mx-auto max-w-lg">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">Student Housing Ganga Niwas - Boys Accommodation</h2>
                     
                            <dl className="mt-8 text-base text-gray-500">
                                <div>
                                    <dt className="sr-only">Postal address</dt>
                                    <dd>
                                        <a href="https://www.google.com/maps/place/Ganga+Niwas+Boys+Hostel-+Student+Housing/@19.102562,72.8333613,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9b27d21464b:0xfa24c72136c1ac3e!8m2!3d19.102562!4d72.83555!16s%2Fg%2F11fln228xf?hl=en-GB&authuser=1&entry=ttu" target="_blank" className="mt-6 max-w-3xl text-base text-indigo-500 underline">
                                            Ganga Niwas, Next to SBI Bank, Vaikunthlal Mehta Road, Across NMIMS, Vile Parle West, Mumbai, Maharashtra 400056 
                                        </a>
                                    </dd>
                                </div>
                                <div className="mt-6">
                                    <dt className="sr-only">Phone number</dt>
                                    <dd className="flex mb-3">
                                        <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3"> +91-9819780000</span>
                                    </dd>
                                   
                                </div>
                                 <div className="mt-3">
                                    <dt className="sr-only">Email</dt>
                                    <dd className="flex">
                                        <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3">info@studenthousing.co.in</span>
                                    </dd>
                                    <dd className="flex">                                       
                                        <span className="ml-3">Working hours: Open 24 Hours</span>
                                    </dd> 
                                </div>
                            </dl>

                        
                        </div>
                    </div>

                    <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                        <div className="mx-auto max-w-lg">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                            Student Housing Crescenzo- Girls Accommodation</h2>
                          
                            <dl className="mt-8 text-base text-gray-500">
                                <div>
                                    <dt className="sr-only">Postal address</dt>
                                    <dd>
                                        <a href="https://www.google.com/maps/place/Student+Housing+Hostels:+Crescenzo+Apartment/@19.1024726,72.7630308,13z/data=!3m1!5s0x3be7c9b8bfa30ceb:0xc685c3566f90015d!4m10!1m2!2m1!1screscenzo!3m6!1s0x3be7c90d5e92ad71:0xac4f3339bb7ec057!8m2!3d19.1024726!4d72.8351286!15sCgljcmVzY2Vuem9aCyIJY3Jlc2NlbnpvkgEWc3R1ZGVudF9ob3VzaW5nX2NlbnRlcuABAA!16s%2Fg%2F11qzj3y64s?hl=en-GB&authuser=1&entry=ttu" target="_blank" className="mt-6 max-w-3xl text-base text-indigo-500 underline">
                                        Crescenzo, Floor 3, 4, 5, 6 Crescenzo Residences, Next to HDFC Bank, Vaikunthlal Mehta Rd, JVPD Scheme, Vile Parle West Mumbai Maharashtra 400056   

                                        </a>
                                    </dd>
                                </div>
                                <div className="mt-6">
                                    <dt className="sr-only">Phone number</dt>
                                    <dd className="flex mb-3">
                                        <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3"> +91-9004033884</span>
                                    </dd>
                                   
                                </div>
                                 <div className="mt-3">
                                    <dt className="sr-only">Email</dt>
                                    <dd className="flex">
                                        <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3">info@studenthousing.co.in</span>
                                    </dd>
                                    <dd className="flex">                                       
                                        <span className="ml-3">Working hours: Monday- Sunday 10am- 8pm</span>
                                    </dd> 
                                </div>
                            </dl>

                        
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
