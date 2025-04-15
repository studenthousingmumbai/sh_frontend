import Header from "./Header";
import Footer from "./Footer";
import Marquee from "./MarqeeText";
import { useEffect, useState, useRef } from "react";
import { gql } from "@apollo/client";
import client from "../apolloClient";
import Modal from "../components/common/Modal";
import { XMarkIcon } from "@heroicons/react/24/outline";
import useApi from "../hooks/useApi";
import { Dialog, DialogContent, DialogTitle } from "./components/ui/dialog";

export default function Layout(props) {
  const initialValues = {
    name: "",
    contact: "",
    housingProperty: "",
    referralName: "",
    referralContact: "",
    referralHousingProperty: "",
  };

  const [marqueeOpen, setMarqueeOpen] = useState(true);
  const [marqueeText, setMarqueeText] = useState("");
  const isMounted = useRef(false);
  const [enquireNowOpen, setEnquireNowOpen] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [success, setSuccess] = useState(false);
  const { referAndEarn } = useApi();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    if (!isMounted.current) {
      fetchMarqueeText();
    } else {
      isMounted.current = true;
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    return;

    const response = await referAndEarn(values);

    if (typeof response !== "string") {
      console.log("Error occured while sending email!");
    } else {
      setSuccess(true);
      // router.push('/thank-you');
    }
  };

  const fetchMarqueeText = async () => {
    console.log("fetdch marquee text called!");
    try {
      const { data } = await client.query({
        query: gql`
          query Announcement {
            announcements {
              marquee
            }
          }
        `,
      });
      const { announcements } = data;
      const { marquee } = announcements[0];
      setMarqueeText(marquee);
    } catch (err) {
      console.error("Error occured while fetching marquee text: ", err);
    }
  };

  return (
    <div className="">
      <Dialog onOpenChange={setEnquireNowOpen} open={enquireNowOpen}>
        <DialogContent>
          <DialogTitle>Enquire Now</DialogTitle>
          <div className="w-full flex justify-center lg:justify-start items-center p-3">
            <form action="submit" onSubmit={handleSubmit}>
              <input
                name="name"
                id="name"
                type="text"
                className="outline-none rounded-md w-full mt-4 border-gray-300 bg-gray-100 focus:outline-none text-xs py-3"
                placeholder="Full Name *"
                onChange={handleChange}
              />
              <input
                name="contact"
                id="contact"
                type="text"
                className="outline-none rounded-md w-full mt-4 border-gray-300 bg-gray-100 focus:outline-none text-xs py-3"
                placeholder="Contact Number *"
                onChange={handleChange}
              />
              <input
                name="housingProperty"
                id="housingProperty"
                type="text"
                className="outline-none rounded-md w-full mt-4 border-gray-300 bg-gray-100 focus:outline-none text-xs py-3"
                placeholder="Student Housing Property Are You Staying? *"
                onChange={handleChange}
              />
              <input
                name="referralName"
                id="referralName"
                type="text"
                className="outline-none rounded-md w-full mt-4 border-gray-300 bg-gray-100 focus:outline-none text-xs py-3"
                placeholder="Friends / Referral's Full Name*"
                onChange={handleChange}
              />
              <input
                name="referralContact"
                id="#"
                type="text"
                className="outline-none rounded-md w-full mt-4 border-gray-300 bg-gray-100 focus:outline-none text-xs py-3"
                placeholder="His / Her Contact Number *"
                onChange={handleChange}
              />
              <input
                name="referralHousingProperty"
                id="#"
                type="text"
                className="outline-none rounded-md w-full mt-4 border-gray-300 bg-gray-100 focus:outline-none text-xs py-3"
                placeholder="Student Housing Property Will Your Friend Be Staying? *"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full mt-6 bg-brandColor py-3 rounded-lg font-semibold text-sm"
              >
                Submit
              </button>
            </form>

            {success && (
              <div className="rounded-md bg-green-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon
                      className="h-5 w-5 text-green-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                      Thank you! Our team will contact you shortly.
                    </p>
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
            )}
          </div>
        </DialogContent>
      </Dialog>

      <div
        className={`z-40 ${
          props?.open === false ? "relative sticky top-0" : ""
        }`}
      >
        {marqueeOpen && (
          <Marquee
            text={marqueeText}
            marqueeOpen={marqueeOpen}
            setMarqueeOpen={setMarqueeOpen}
          />
        )}
        <Header />
      </div>
      <div className="fixed top-1/2 -translate-y-1/2 right-0 z-50">
        <button
          className="w-44 h-12 p-3 bg-[#F8C14C] text-black font-semibold transform rotate-90 origin-top-right shadow-md"
          style={{
            border: "1px solid #00000029",
            boxShadow: "0px 4px 20px #00000014",
            clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
          }}
          onClick={() => setEnquireNowOpen(true)}
        >
          Enquire now
        </button>
      </div>
      <div className="z-30">{props.children}</div>
      <Footer />
    </div>
  );
}
