import Head from 'next/head'; 
import Layout from '../components/Layout'

const ThankYouPage = () => {
    return (
        <>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            gtag('event', 'conversion', {'send_to': 'AW-925883133/10XLCOfE-rsYEP21v7kD'});
                        `,
                    }}
                />
            </Head>
            <Layout>
                <div className="flex items-center justify-center h-screen bg-gray-100">
                    <div className="p-6 m-4 bg-green-100 rounded shadow-lg">
                        <div className="flex items-center justify-center text-center">
                            <div className="flex-shrink-0">
                                <svg className="h-12 w-12 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10" className="fill-current text-green-500"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" className="stroke-current text-white" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-green-800 ml-4">Thank You!</h1>
                            </div>
                        </div>
                        <p className="text-green-700 mt-4">
                            Your message has been successfully sent. We appreciate you contacting us and we'll respond as soon as possible.
                        </p>
                    </div>
                </div>
            </Layout>
        </>
        
    );
};
  
export default ThankYouPage;