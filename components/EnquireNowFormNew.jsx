import { useState } from "react";
import useApi from "../hooks/useApi";
import { useRouter } from "next/navigation";

const initialValues = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
};

export default function EnquireNowFormNew({ open, setOpen }) {
  const [values, setValues] = useState(initialValues);
  const { contactUs } = useApi();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await contactUs({
      name: `${values?.firstName} ${values?.lastName}`,
      email: values?.email,
      phone: values?.phone,
      message: values?.message,
    });

    console.log("Response", response);

    if (typeof response !== "string") {
      console.log("Error occured while sending email!");
    } else {
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
          placeholder="First name *"
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
    </div>
  );
}
