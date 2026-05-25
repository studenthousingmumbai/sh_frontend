import { useEffect, useRef, useState } from "react";
import useApi from "../hooks/useApi";
import { useRouter } from "next/router";

const initialValues = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
};

export default function EnquireNowFormNew() {
  const [values, setValues] = useState(initialValues);
  const { contactUs } = useApi();
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitLockRef = useRef(false);
  const LOCK_KEY = "studenthousing_contact_lock";
  const LOCK_TIME = 2 * 60 * 1000; // 2 minutes

  useEffect(() => {
    const savedLock = localStorage.getItem(LOCK_KEY);

    if (savedLock) {
      const lockUntil = Number(savedLock);

      if (Date.now() < lockUntil) {
        setIsSubmitting(true);
        submitLockRef.current = true;
      } else {
        localStorage.removeItem(LOCK_KEY);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitLockRef.current || isSubmitting) return;

    const lockUntil = Date.now() + LOCK_TIME;
    submitLockRef.current = true;
    setIsSubmitting(true);
    localStorage.setItem(LOCK_KEY, String(lockUntil));

    await new Promise((resolve) => requestAnimationFrame(resolve));

    try {
      const fullName = `${values.firstName} ${values.lastName}`.trim();

      const emailResponse = await contactUs({
        name: fullName,
        email: values.email,
        phone: values.phone,
        message: values.message,
        subject: "New Enquiry Received",
      });

      console.log("EMAIL RESPONSE:", emailResponse);

      const crmResponse = await fetch("/api/sangam-crm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: values.email,
          phone: values.phone,
          message: values.message,
        }),
      });

      const crmData = await crmResponse.json();
      console.log("CRM RESPONSE:", crmData);

      if (!crmResponse.ok || !crmData.success) {
        throw new Error(crmData.message || "CRM failed");
      }

      setValues(initialValues);
      router.push("/thank-you");
    } catch (error) {
      console.error("SUBMIT ERROR:", error);
      alert(error.message || "Something went wrong");

      submitLockRef.current = false;
      setIsSubmitting(false);
      localStorage.removeItem(LOCK_KEY);
    }
  };

  return (
    <div className="w-full flex justify-center lg:justify-start items-center">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="firstName"
          id="firstName"
          autoComplete="name"
          className="outline-none rounded-md w-full mt-4 border-gray-300 bg-gray-100 focus:outline-none text-xs py-3"
          placeholder="First name *"
          required
          disabled={isSubmitting}
        />
        <input
          onChange={handleChange}
          type="text"
          name="lastName"
          id="lastName"
          autoComplete="name"
          className="outline-none rounded-md w-full mt-4 border-gray-300 bg-gray-100 focus:outline-none text-xs py-3"
          placeholder="Last name *"
          required
          disabled={isSubmitting}
        />
        <input
  name="phone"
  id="phone"
  type="tel"
  inputMode="numeric"
  maxLength={10}
  pattern="[0-9]{10}"
  autoComplete="phone"
  value={values.phone}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);

    setValues({
      ...values,
      phone: value,
    });
  }}
  className="outline-none rounded-md w-full mt-4 border-gray-300 bg-gray-100 focus:outline-none text-xs py-3"
  placeholder="Contact Number *"
  required
  disabled={isSubmitting}
/>

        <input
          name="email"
          id="email"
          type="email"
          autoComplete="email"
          className="outline-none rounded-md w-full mt-4 border-gray-300 bg-gray-100 focus:outline-none text-xs py-3"
          placeholder="Email *"
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />

        <textarea
          name="message"
          id="message"
          className="outline-none rounded-md w-full mt-4 border-gray-300 bg-gray-100 focus:outline-none text-xs py-3"
          placeholder="Message *"
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-6 bg-brandColor py-3 rounded-lg font-semibold text-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}