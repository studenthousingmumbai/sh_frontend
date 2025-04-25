import { useState } from "react";
import useApi from "../hooks/useApi";

const initialValues = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
};

export default function EnquireNowFormNew({ open, setOpen }) {
  const [values, setValues] = useState(initialValues);
  const [success, setSuccess] = useState(false);
  const { contactUs } = useApi();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await contactUs({
      name: `${firstName} ${lastName}`,
      email,
      phone,
      message,
    });

    if (typeof response !== "string") {
      console.log("Error occured while sending email!");
    } else {
      setSuccess(true);
      router.push("/thank-you");
    }
  };

  return (
    <div className="w-full flex justify-center lg:justify-start items-center">
      <form action="submit" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="firstName"
          id="firstName"
          autoComplete="name"
          className="outline-none rounded-md w-full mt-4 border-gray-300 bg-gray-100 focus:outline-none text-xs py-3"
          placeholder="Full name *"
          required={true}
        />
        <input
          onChange={handleChange}
          type="text"
          name="lastName"
          id="lastName"
          autoComplete="name"
          className="outline-none rounded-md w-full mt-4 border-gray-300 bg-gray-100 focus:outline-none text-xs py-3"
          placeholder="Last name *"
          required={true}
        />
        <input
          name="phone"
          id="phone"
          type="text"
          autoComplete="phone"
          className="outline-none rounded-md w-full mt-4 border-gray-300 bg-gray-100 focus:outline-none text-xs py-3"
          placeholder="Contact Number *"
          onChange={handleChange}
        />

        <textarea
          name="message"
          id="message"
          type="text"
          className="outline-none rounded-md w-full mt-4 border-gray-300 bg-gray-100 focus:outline-none text-xs py-3"
          placeholder="Message *"
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
  );
}
