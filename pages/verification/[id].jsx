import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import useApi from "../../hooks/useApi";
import Link from "next/link";

export default function verification() {
    const router = useRouter(); 
    const { isReady } = router; 
    const { id } = router.query; 
    const { verifyAccount } = useApi();
    const [verified, setVerified] = useState(false); 
    const [loading, setLoading] = useState(false); 

    useEffect(() => { 
        if(isReady){
            console.log("verification id: ", id); 
            handleVerification(id); 
        }
    }, [isReady]); 

    const handleVerification = async (id) => {
        setLoading(true);
        const response = await verifyAccount(id);
        
        if(typeof response === 'string'){ 
            router.push('/signin'); 
        } else { 
            if('verified' in response && response.verified){ 
                setVerified(true);
            } else if ('errors' in response){
                setVerified(false);
            } 
        }
        setLoading(false)
    } 

    return (
        <>
            {
                loading && !verified ?
                <h1>Verifying account...</h1>
                : 
                !loading && verified ? 
                <div className="flex min-h-full">
                    <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                        <div className="mx-auto w-full max-w-sm lg:w-96">
                            <div>
                                <Link href='/'>
                                    <img
                                        className="h-20 w-auto cursor-pointer"
                                        src="/sh_logo.png"
                                        alt="Your Company"
                                    />
                                </Link>
                                <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Account verification complete</h2>
                                <p className="mt-2 text-sm text-gray-600">
                                    Congratulations your account has been verified successfully! You can sign in &nbsp;
                                    <Link href='/signin'>
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 text-[#f5c325] hover:text-[#fad45a]">
                                            here
                                        </a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative hidden w-0 flex-1 lg:block">
                        <img
                            className="absolute inset-0 h-full w-full object-cover"
                            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                            alt=""
                        />
                    </div>
                </div>
                : 
                <></>
            }
        </>
    )
}
