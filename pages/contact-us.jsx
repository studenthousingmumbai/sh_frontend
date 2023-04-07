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
    const { contactUs } = useApi();

    const handleSendMessage = async (e) => { 
        e.preventDefault(); 

        const response = await contactUs({ name, email, phone, message }); 

        if(typeof response !== 'string') {
            console.log("Error occured while sending email!");
        } else { 
            setSuccess(true);
        }
    }

  return (
    <Layout> 
        <div className="relative bg-white h-[90vh]">
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
            </div>

            <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5 h-full">
                <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                    <div className="mx-auto max-w-lg">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
                        <p className="mt-3 text-lg leading-6 text-gray-500">
                            Have a query? Send us a message and we will get back to you. 
                        </p>
                        <dl className="mt-8 text-base text-gray-500">
                            <div>
                                <dt className="sr-only">Postal address</dt>
                                <dd>
                                    <p>G-11, Madonna Apts, Next to NMIMS and Mithibai College, Opp: Bhaidas Hall, Vile Parle (W), Mumbai - 400056</p>
                                </dd>
                            </div>
                            <div className="mt-6">
                                <dt className="sr-only">Phone number</dt>
                                    <dd className="flex">
                                    <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    <span className="ml-3"> +91-9819780000/9004033884</span>
                                </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Email</dt>
                                <dd className="flex">
                                    <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    <span className="ml-3">studenthousing.co.in@gmail.com</span>
                                </dd>
                            </div>
                        </dl>

                        {/* <p className="mt-6 text-base text-gray-500">
                            Looking for careers?{' '}
                            <a href="#" className="font-medium text-gray-700 underline">
                                View all job openings
                            </a>
                            .
                        </p> */}
                    </div>
                </div>
                <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                    <div className="mx-auto max-w-lg lg:max-w-none">
                        <form className="grid grid-cols-1 gap-y-6 mb-3" onSubmit={handleSendMessage}>
                            <div>
                                <label htmlFor="full-name" className="sr-only">
                                    Full name
                                </label>
                                <input
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    type="text"
                                    name="full-name"
                                    id="full-name"
                                    autoComplete="name"
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    placeholder="Full name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">
                                    Phone
                                </label>
                                <input
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    autoComplete="tel"
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    placeholder="Phone"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Message
                                </label>
                                <textarea
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    placeholder="Message"
                                    defaultValue={''}
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                        {
                            success && 
                            <div className="rounded-md bg-green-50 p-4">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-green-800">Message sent successfully!</p>
                                    </div>
                                    <div className="ml-auto pl-3">
                                        <div className="-mx-1.5 -my-1.5">
                                            <button
                                                type="button"
                                                className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                                                onClick={() => setSuccess(false)}
                                            >
                                                <span className="sr-only">Dismiss</span>
                                                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
