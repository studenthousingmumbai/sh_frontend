import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import useApi from "../../hooks/useApi";
import Link from "next/link";

const LOCK_KEY = "contactFormBlockedUntil";
const LOCK_DURATION_MS = 5 * 60 * 1000; // 5 minutes
const REDIRECT_DELAY_MS = 1500;

export default function Example() {
  const router = useRouter();
  const { contactUs } = useApi();

  const lockRef = useRef(false);
  const timerRef = useRef(null);
  const redirectRef = useRef(null);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const startLock = (durationMs = LOCK_DURATION_MS) => {
    const blockedUntil = Date.now() + durationMs;
    localStorage.setItem(LOCK_KEY, String(blockedUntil));
    lockRef.current = true;
    setIsBlocked(true);
    setRemainingTime(Math.ceil(durationMs / 1000));
  };

  const clearLockState = () => {
    localStorage.removeItem(LOCK_KEY);
    lockRef.current = false;
    setIsBlocked(false);
    setRemainingTime(0);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedUntil = localStorage.getItem(LOCK_KEY);
    if (!storedUntil) return;

    const blockedUntil = Number(storedUntil);
    const diff = blockedUntil - Date.now();

    if (diff > 0) {
      lockRef.current = true;
      setIsBlocked(true);
      setRemainingTime(Math.ceil(diff / 1000));
    } else {
      localStorage.removeItem(LOCK_KEY);
    }
  }, []);

  useEffect(() => {
    if (!isBlocked) return;

    timerRef.current = setInterval(() => {
      const storedUntil = localStorage.getItem(LOCK_KEY);

      if (!storedUntil) {
        clearLockState();
        return;
      }

      const blockedUntil = Number(storedUntil);
      const diff = blockedUntil - Date.now();

      if (diff <= 0) {
        clearLockState();
      } else {
        setRemainingTime(Math.ceil(diff / 1000));
      }
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isBlocked]);

  useEffect(() => {
    return () => {
      if (redirectRef.current) clearTimeout(redirectRef.current);
    };
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (lockRef.current || isSending) return;

    setError("");
    startLock();
    setShowPopup(true);
    setIsSending(true);

    try {
      await contactUs({
  name,
  email,
  phone: `+91${phone}`,
  message,
});

      redirectRef.current = setTimeout(() => {
        router.replace("/thank-you");
      }, REDIRECT_DELAY_MS);
    } catch (err) {
      console.log("contact form error:", err?.response?.status);
      console.log("contact form response:", err?.response?.data);

      setError("Something went wrong. Please try again later.");
      setShowPopup(false);
      setIsSending(false);
      // lock stays for 5 mins anyway
    }
  };

  return (
    <div className="bg-gray-50 pb-5">
      {showPopup ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-start gap-3">
              <div className="mt-1 h-4 w-4 animate-pulse rounded-full bg-green-500" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Enquiry received
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  Your enquiry has been received. You are being redirected to
                  the confirmation page.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 rounded-lg">
        <div className="relative bg-white shadow-xl rounded-lg">
          <h2 className="sr-only">Get in touch with us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="relative overflow-hidden bg-yellow-400 py-10 px-6 sm:px-10 xl:p-12 rounded-lg">
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

                <dd className="flex text-base text-indigo-50">
                  <EnvelopeIcon
                    className="h-6 w-6 flex-shrink-0 text-indigo-200"
                    aria-hidden="true"
                  />
                  <Link href="mailto:info@studenthousing.co.in" className="ml-3">
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
                <fieldset disabled={isSending || isBlocked} className="contents">
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
                        className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:bg-gray-100"
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
                        className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:bg-gray-100"
                        required
                      />
                    </div>
                  </div>

                  <div>
  <label
    htmlFor="phone"
    className="block text-sm font-medium text-gray-900"
  >
    Phone
  </label>

  <div className="mt-1 flex rounded-md shadow-sm">
    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-100 px-4 text-gray-700">
      +91
    </span>

    <input
      value={phone}
      onChange={(e) => {
        const value = e.target.value.replace(/\D/g, "").slice(0, 10);
        setPhone(value);
      }}
      type="tel"
      name="phone"
      id="phone"
      autoComplete="tel"
      inputMode="numeric"
      pattern="[0-9]{10}"
      maxLength={10}
      placeholder="9876543210"
      className="block w-full rounded-r-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:bg-gray-100"
      required
    />
  </div>

  <p className="mt-1 text-xs text-gray-500">
    Enter 10 digit mobile number
  </p>
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
                        className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:bg-gray-100"
                        aria-describedby="message-max"
                        required
                      />
                    </div>
                  </div>
                </fieldset>

                {error ? (
                  <div className="sm:col-span-2 text-sm text-red-600">
                    {error}
                  </div>
                ) : null}

                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    disabled={isSending || isBlocked}
                    className="inline-flex justify-center rounded-md border border-transparent bg-brandColor py-3 px-6 text-base font-medium shadow-sm hover:bg-[#fad45a] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isBlocked
                      ? `Try again in ${formatTime(remainingTime)}`
                      : isSending
                      ? "Submitting..."
                      : "Send Message 🚀"}
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
