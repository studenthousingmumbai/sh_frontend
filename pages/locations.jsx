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
                            <p className="mt-3 text-lg leading-6 text-gray-500">
                                Student Housing Ganga Niwas - Boys Accommodation
                            </p> 
                            <dl className="mt-8 text-base text-gray-500">
                                <div>
                                    <dt className="sr-only">Postal address</dt>
                                    <dd>
                                        <a href="https://goo.gl/maps/j4Hyw1hUb3heq8K86" target="_blank" className="mt-6 max-w-3xl text-base text-indigo-500 underline">
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
                 
                </div>
            </div>
        </Layout>
    )
}
