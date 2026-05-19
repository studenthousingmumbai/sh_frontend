import { useRouter } from "next/router";
import { useState } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import useApi from "../../hooks/useApi";
import Link from "next/link";

export default function Example() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const { contactUs } = useApi();

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (isSending) return;

    try {
      setIsSending(true);

      const response = await contactUs({ name, email, phone, message });

      if (typeof response !== "string") {
        console.log("Error occured while sending email!");
        return;
      }

      setSuccess(true);
      router.push("/thank-you");
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-gray-50 pb-5">
      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 rounded-lg">
        <div className="relative bg-white shadow-xl rounded-lg">
          <h2 className="sr-only">Get in touch with us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="relative overflow-hidden bg-yellow-400 py-10 px-6 sm:px-10 xl:p-12 rounded-lg">
              <div
                className="pointer-events-none absolute inset-0 sm:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div
                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div
                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <img
                src="sh-diamond-logo.png"
                alt="Student Housing"
                className="h-[200px] w-[200px]"
              />

              <h3 className="text-lg font-medium text-white">
                Get in touch with us
              </h3>

              <a
                href="https://goo.gl/maps/j4Hyw1hUb3heq8K86"
                target="_blank"
                rel="noreferrer"
                className="mt-6 max-w-3xl text-base text-indigo-50 underline"
              >
                Ganga Niwas, Next to SBI Bank, Across NMIMS University, VM Road
                Juhu, Vile Parle West, Mumbai- (56)
              </a>

              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>

                <dd className="flex text-base text-indigo-50">
                  <PhoneIcon
                    className="h-6 w-6 flex-shrink-0 text-indigo-200"
                    aria-hidden="true"
                  />
                  <Link href="tel:+91-9819780000" className="ml-3">
                    +91-9819780000
                  </Link>
                </dd>

                <dd className="flex text-base text-indigo-50">
                  <PhoneIcon
                    className="h-6 w-6 flex-shrink-0 text-indigo-200"
                    aria-hidden="true"
                  />
                  <Link href="tel:+91-9004033884" className="ml-3">
                    +91-9004033884
                  </Link>
                </dd>

                <dd className="flex text-base text-indigo-50">
                  <PhoneIcon
                    className="h-6 w-6 flex-shrink-0 text-indigo-200"
                    aria-hidden="true"
                  />
                  <Link href="tel:+91-8779003845" className="ml-3">
                    +91-8779003845
                  </Link>
                </dd>

                <dt>
                  <span className="sr-only">Email</span>
                </dt>

                <dd className="flex text-base text-indigo-50">
                  <EnvelopeIcon
                    className="h-6 w-6 flex-shrink-0 text-indigo-200"
                    aria-hidden="true"
                  />
                  <Link
                    href="mailto:info@studenthousing.co.in"
                    className="ml-3"
                  >
                    info@studenthousing.co.in
                  </Link>
                </dd>
              </dl>
            </div>

            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-gray-900">Write to us</h3>

              <form
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 mb-3"
                onSubmit={handleSendMessage}
              >
                <div className="sm:col-span-2">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Phone
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Message
                    </label>
                    <span id="message-max" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      aria-describedby="message-max"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex justify-center rounded-md border border-transparent bg-brandColor py-3 px-6 text-base font-medium shadow-sm hover:bg-[#fad45a] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSending ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
