import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import useApi from "../../hooks/useApi";
import Link from "next/link";

export default function Example() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const [error, setError] = useState("");

  const { contactUs } = useApi();

  // Check localStorage on page load
  useEffect(() => {
    const blockedUntil = localStorage.getItem("contactFormBlockedUntil");

    if (blockedUntil) {
      const timeLeft = parseInt(blockedUntil) - Date.now();

      if (timeLeft > 0) {
        setIsBlocked(true);
        setRemainingTime(Math.ceil(timeLeft / 1000));
      } else {
        localStorage.removeItem("contactFormBlockedUntil");
      }
    }
  }, []);

  // Countdown timer
  useEffect(() => {
    let timer;

    if (isBlocked && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsBlocked(false);
            localStorage.removeItem("contactFormBlockedUntil");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isBlocked, remainingTime]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (isBlocked || isSending) return;

    setIsSending(true);
    setError("");

    try {
      await contactUs({
        name,
        email,
        phone,
        message,
      });

      // Block button for 5 minutes
      const blockedUntil = Date.now() + 5 * 60 * 1000;

      localStorage.setItem(
        "contactFormBlockedUntil",
        blockedUntil.toString()
      );

      setIsBlocked(true);
      setRemainingTime(5 * 60);

      router.replace("/thank-you");
    } catch (err) {
      console.log("contact form error:", err);

      setError("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  // Format timer
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-gray-50 pb-5">
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
              <h3 className="text-lg font-medium text-gray-900">
                Write to us
              </h3>

              <form
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 mb-3"
                onSubmit={handleSendMessage}
              >
                <fieldset
                  disabled={isSending || isBlocked}
                  className="contents"
                >
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-900">
                      Full Name
                    </label>

                    <div className="mt-1">
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm disabled:bg-gray-100"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900">
                      Email
                    </label>

                    <div className="mt-1">
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm disabled:bg-gray-100"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900">
                      Phone
                    </label>

                    <div className="mt-1">
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm disabled:bg-gray-100"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label className="block text-sm font-medium text-gray-900">
                        Message
                      </label>

                      <span className="text-sm text-gray-500">
                        Max. 500 characters
                      </span>
                    </div>

                    <div className="mt-1">
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm disabled:bg-gray-100"
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
                    className="inline-flex justify-center rounded-md border border-transparent bg-brandColor py-3 px-6 text-base font-medium shadow-sm hover:bg-[#fad45a] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSending
                      ? "Submitting..."
                      : isBlocked
                      ? `Try again in ${formatTime(remainingTime)}`
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
