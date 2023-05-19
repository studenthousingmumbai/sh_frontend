import { useEffect, useState } from 'react'; 
import Link from "next/link";
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google'; 
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/router";
import withAuth from "../hooks/withAuth";
import Errors from '../components/common/Errors';

export default function Signin() {
    const { login, loginErrors } = useAuth();
    const { googleLogin } = useAuth(); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    const handleSubmit = async (e) => { 
      e.preventDefault(); 
      login(email,password); 
    } 

    const onGoogleLogin = useGoogleLogin({
      onSuccess: tokenResponse => googleLogin(tokenResponse),
      onError: () => { console.log('Error logging in using Google') }, 
    });

    useEffect(() => { 
      console.log("Login errors changed: ", loginErrors);
    }, [loginErrors]);

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
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Or{' '}
                  <Link href='/signup'>
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 text-[#f5c325] hover:text-[#fad45a]">
                      Create a new account
                    </a>
                  </Link>
                </p>
              </div>
  
              <div className="mt-8">
                <div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Sign in with</p>
  
                    <div className="mt-1 grid grid-cols-3 gap-3">
                      <GoogleLogin
                          onSuccess={credentialResponse => { googleLogin(credentialResponse) }}
                          onError={() => { console.log('Error logging in using Google') }}
                          isSignedIn={false}
                      />
                    </div>
                  </div>
  
                  <div className="relative mt-6">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-gray-500">Or continue with</span>
                    </div>
                  </div>
                </div>
  
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
  
                    <div className="space-y-1">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          autoComplete="current-password"
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <Link href='/forgot-password'>
                          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot your password?
                          </a>
                        </Link>
                      </div>
                    </div>
                    {
                      loginErrors.length > 0 && <Errors errors={loginErrors}/>
                    }
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm text-gray-700 bg-[#ffcc29] hover:bg-[#fad45a]"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
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
      </>
    )
  }


export async function getServerSideProps(context) {
  return {
    props: {
      // Your props here
    }
  }
}