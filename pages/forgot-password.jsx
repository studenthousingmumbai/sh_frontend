import { useEffect, useState } from 'react'; 
import Link from "next/link";
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google'; 
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/router";
import withAuth from "../hooks/withAuth";
import Errors from '../components/common/Errors';
import useApi from '../hooks/useApi';

export default function Signin() {
    const router = useRouter();
    // const { isAuthenticated } = withAuth();
    const [email, setEmail] = useState(""); 
    const { isAuthenticated, isLoading} = withAuth();
    const { forgotPassword } = useApi();
    const [resetEmailSent, setResetEmailSent] = useState(false);

    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        // login(email,password); 
        await sendResetLink();
    } 

    const sendResetLink = async () => { 
      const response = await forgotPassword(email); 
      console.log("Forgot password response: ", response);
      
      if(typeof response === 'string') { 
        setResetEmailSent(true); 
      } else { 
        setResetEmailSent(false);
      }
    }

    return (
      <>
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
                {
                  !resetEmailSent && 
                  <>
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Forgot Password</h2>
                    <p className="mt-2 text-sm text-gray-600">
                      Enter email address to receive a password reset link
                    </p>
                  </>
                }
              </div>

              { 
                !resetEmailSent && 
                <div className="mt-8">
                  <div className="mt-6">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email address
                        </label>
                        <div className="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            autoComplete="email"
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm  text-gray-700 bg-[#ffcc29] hover:bg-[#fad45a]"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                || 
                <div className="mx-auto w-full max-w-sm lg:w-96 h-full items-center mt-3">
                  <h1>
                    A password reset link has been sent to your registered email address. If you haven't received the link, click &nbsp;
                    <a href="#" onClick={sendResetLink} className="font-medium text-[#f5c325] hover:text-[#fad45a]">
                      here
                    </a>&nbsp;
                    to send again. 
                  </h1>
                </div>
              } 
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
      </>
    )
  }