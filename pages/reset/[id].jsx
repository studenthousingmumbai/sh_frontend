import { useEffect, useState } from "react";
import Link from "next/link";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/router";
import withAuth from "../../hooks/withAuth";
import useApi from "../../hooks/useApi";
import useAuth from "../../hooks/useAuth";

export default function ResetPassword() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { verifyResetCode, resetPassword } = useApi();
  const { isAuthenticated, isLoading } = withAuth();
  const [password, setPassword] = useState("");
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resetComplete, setResetComplete] = useState(false);

  useEffect(() => {
    if (isReady) {
      handleVerification(id);
    }
  }, [isReady]);

  const handleVerification = async (id) => {
    setLoading(true);
    const response = await verifyResetCode(id);

    if ("verified" in response && response.verified) {
      setVerified(true);
    } else if ("errors" in response) {
      router.push("/signin");
    }

    setLoading(false);
  };

  const updatePassword = async (e) => {
    e.preventDefault();

    const update_response = await resetPassword(password, id);
    console.log("Password reset response: ", update_response);

    if ("errors" in update_response) {
      console.log(
        "Error occured while updating password: ",
        update_response.errors
      );
    } else if ("reset" in update_response && update_response.reset) {
      setResetComplete(true);
    }
  };

  return (
    <>
      <div className="flex min-h-full">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <Link href="/">
                <img
                  className="h-20 w-auto cursor-pointer"
                  src="https://studenthousing.co.in/wp-content/uploads/2020/03/SH_LogoR.png"
                  alt="Your Company"
                />
              </Link>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                Reset Password
              </h2>
            </div>

            {(!resetComplete && !loading && verified && (
              <div className="mt-8">
                <div className="mt-6">
                  <form className="space-y-6" onSubmit={updatePassword}>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Enter new Password
                      </label>
                      <div className="mt-1">
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-gray-700 bg-[#ffcc29] hover:bg-[#fad45a]"
                      >
                        Reset Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )) || (
              <div className="mx-auto w-full max-w-sm lg:w-96 h-full items-center">
                <h1>
                  Your password was reset successfully! You can login &nbsp;
                  <Link href="/signin" legacyBehavior>
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500 text-[#f5c325] hover:text-[#fad45a]"
                    >
                      here
                    </a>
                  </Link>
                </h1>
              </div>
            )}
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
  );
}
