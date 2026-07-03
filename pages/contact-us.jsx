import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import Layout from "../components/Layout";
import useApi from "../hooks/useApi";
import Head from "next/head";
import Link from "next/link";

export default function Example() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const { contactUs } = useApi();
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


const handleSendMessage = async (e) => {
  e.preventDefault();

  if (submitLockRef.current || isSubmitting) return;

  const lockUntil = Date.now() + LOCK_TIME;
  submitLockRef.current = true;
  setIsSubmitting(true);
  localStorage.setItem(LOCK_KEY, String(lockUntil));

  // lets the button text paint as "Sending..."
  await new Promise((resolve) => requestAnimationFrame(resolve));

  try {
    const emailResponse = await contactUs({
      name,
      email,
      phone: `+91${phone}`,
      message,
      subject: "New Enquiry Received",
    });

    console.log("EMAIL RESPONSE:", emailResponse);

    const crmResponse = await fetch("/api/sangam-crm", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name,
    email,
    phone,
    message,
  }),
});

const crmText = await crmResponse.text();
console.log("CRM STATUS:", crmResponse.status);
console.log("CRM RAW:", crmText);

let crmData = {};
try {
  crmData = JSON.parse(crmText);
} catch (e) {
  console.log("CRM response was not JSON");
}

    if (!crmResponse.ok || !crmData.success) {
      throw new Error(crmData.message || "CRM failed");
    }

    setSuccess(true);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    router.push("/thank-you");
  } catch (error) {
    console.error("SUBMIT ERROR:", error);
    alert(error.message || "Something went wrong");

    // allow retry only on failure
    submitLockRef.current = false;
    setIsSubmitting(false);
    localStorage.removeItem(LOCK_KEY);
  }
};

  return (
    <>
      <Head>
        <title>Contact Student Housing | Get in Touch for Hostel Bookings</title>
        <meta
          name="description"
          content="Have questions about student hostels in Mumbai? Contact Student Housing for enquiries, bookings or support and get assistance from our team"
        />


<meta property="og:url" content="https://www.studenthousing.co.in/contact-us"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Contact Student Housing | Get in Touch for Hostel Bookings"/>
<meta property="og:description" content="Have questions about student hostels in Mumbai? Contact Student Housing for enquiries, bookings or support and get assistance from our team"/>
<meta property="og:image" content="https://www.studenthousing.co.in/about-us/IMG_2397.webp"/>
 

<meta name="twitter:card" content="summary_large_image"/>
<meta property="twitter:domain" content="studenthousing.co.in"/>
<meta property="twitter:url" content="https://www.studenthousing.co.in/contact-us"/>
<meta name="twitter:title" content="Contact Student Housing | Get in Touch for Hostel Bookings"/>
<meta name="twitter:description" content="Have questions about student hostels in Mumbai? Contact Student Housing for enquiries, bookings or support and get assistance from our team"/>
<meta name="twitter:image" content="https://www.studenthousing.co.in/about-us/IMG_2397.webp"></meta>

        <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: `{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Student Housing India Limited",
        "image": "https://www.studenthousing.co.in/SH.png",
        "url": "https://www.studenthousing.co.in/",
        "telephone": "+919819780000",
        "priceRange": "₹₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Avenue By Student Housing, Shree Krishna building, NS Mankikar Rd, next to Shetty tower, Nutan Laxmi Society, JVPD Scheme, Vile Parle West",
          "addressLocality": "Mumbai",
          "postalCode": "400049",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 19.10831612604247,
          "longitude": 72.83014687940613
        },
        "sameAs": [
          "https://www.facebook.com/StudentHousingIN",
          "https://www.instagram.com/studenthousing_mumbai/",
          "https://www.youtube.com/@studenthousingmumbai",
          "https://in.linkedin.com/company/student-housing-india",
          "https://www.studenthousing.co.in/"
        ]
      }`,
    }}
  />
        
      </Head>
      <Layout>
         <div className="relative flex justify-center bg-gray-100 items-center my-auto h-[500px] ">
          <img
            className="w-full h-full object-cover"
            src="/contact-bg.jpeg"
            alt="locations"
          />
          <div className="absolute bg-black-overlay w-full h-full"></div>
          <div className="absolute w-full text-center">
            <h1 className="uppercase text-2xl text-white">
              <b> Contact us </b>
            </h1>
          </div>
        </div>
 <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#eef2ff] py-16 px-6">

  <div className="max-w-6xl mx-auto">

    {/* HERO */}
    <div className="text-center mb-14">
      <p className="text-4xl font-bold text-gray-900">
        Let’s Connect 👋
      </p>
      <p className="text-gray-500 mt-3 text-lg">
        Have questions about student housing? We’re here to help.
      </p>
    </div>

    {/* MAIN CARD */}
    <div className="grid lg:grid-cols-2 gap-10 bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-10">

      {/* LEFT SIDE */}
      <div className="space-y-8">


<img
  src="/IMG_7505.webp"
  alt="Student"
  className="w-full h-[260px] object-cover rounded-2xl shadow-xl"
 />


        <h2 className="text-2xl font-semibold text-gray-900">
          Contact Details
        </h2>

        {/* ADDRESS */}
        <div className="flex items-center gap-4">
          <div className="bg-indigo-100 p-3 rounded-xl">
            📍
          </div>
          <a
            href="https://maps.app.goo.gl/ub1u8tMqrYyzP8qdA"
            target="_blank"
            className="text-gray-600 "
          >
            Avenue By Student Housing, Shree Krishna building, NS Mankikar Rd, next to Shetty tower, Nutan Laxmi Society, JVPD Scheme, Vile Parle West, Mumbai
          </a>
        </div>

        {/* PHONE */}
        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-xl">
            📞
          </div>
          <div className="text-gray-600 space-y-1">
            <a href="tel:+919819780000" className="block ">
              +91 9819780000
            </a>
            <a href="tel:+919004033884" className="block ">
              +91 9004033884
            </a>

             <a href="tel:+919702704881" className="block ">
              +91 9702704881
            </a>
          </div>
        </div>

        {/* EMAIL */}
        <div className="flex items-center gap-4">
          <div className="bg-yellow-100 p-3 rounded-xl">
            ✉️
          </div>
          <a
            href="mailto:info@studenthousing.co.in"
            className="text-gray-600 "
          >
            info@studenthousing.co.in
          </a>
        </div>

      </div>

      {/* RIGHT SIDE FORM */}
      <form
        onSubmit={handleSendMessage}
        className="space-y-5"
      >

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none"
        />

      <div className="flex items-center w-full rounded-xl border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-indigo-400 focus-within:border-indigo-400">
  
  <span className="px-4 py-3 bg-gray-100 text-gray-700 border-r border-gray-200">
    +91
  </span>

  <input
    value={phone}
    onChange={(e) => {
      const value = e.target.value.replace(/\D/g, "").slice(0, 10);
      setPhone(value);
    }}
    type="tel"
    inputMode="numeric"
    pattern="[0-9]{10}"
    maxLength={10}
    placeholder="Phone Number"
    required
    className="w-full px-4 py-3 outline-none border-0 focus:outline-none focus:ring-0"
  />
</div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none"
        />

       <button
  type="submit"
  disabled={isSubmitting}
  className="w-full bg-[#fad45a] text-black py-3 rounded-xl font-medium disabled:opacity-60 disabled:cursor-not-allowed"
>
  {isSubmitting ? "Sending..." : "Send Message 🚀"}
</button>

      </form>

    </div>
  </div>
</div>
      </Layout>
    </>
  );
}
