"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useApi from "../hooks/useApi";

export default function BookingModal({ open, setOpen }) {
  const { contactUs } = useApi();

  const [date, setDate] = useState(new Date());
  const [hostel, setHostel] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [showHostel, setShowHostel] = useState(false);
  const [time, setTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (isSubmitting) return;
    if (!name || !phone || !hostel || !time) {
      alert("Please fill all required fields");
      return;
    }
    setIsSubmitting(true);
    const message = `
New Booking Request

Hostel: ${hostel}
Date: ${new Date(date).toLocaleDateString()}
Time: ${time}
`;
    const response = await contactUs({
      name, email, phone, message,
      subject: "Schedule Visit Request",
    });
    if (response === "Message sent successfully") {
      alert("Booking request sent!");
      setOpen(false);
    } else {
      alert("Error sending booking");
      console.log(response);
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[2000] bg-black/50 flex items-center justify-center">
      <div className="relative bg-white p-6 rounded-xl w-[320px]">
        <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl">✕</button>
        <h2 className="text-lg font-semibold mb-4">Schedule Your Visit</h2>
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-600 p-2 w-full mb-3 focus:outline-none" />
        <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="border border-gray-600 p-2 w-full mb-3 focus:outline-none" />
        <div className="relative mb-3">
          <button onClick={() => setShowHostel(!showHostel)} className="w-full border border-gray-600 p-2 text-left bg-white flex items-center justify-between">
            <span className={hostel ? "text-black" : "text-gray-500"}>{hostel || "Select Hostel"}</span>
            <svg className={`w-4 h-4 transition-transform ${showHostel ? "rotate-180" : ""} text-gray-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showHostel && (
            <div className="absolute z-50 w-full bg-white border border-gray-600 mt-1 max-h-[150px] overflow-y-auto shadow-md">
              {["Aston - South Mumbai","Atlantis - Juhu, Mumbai","Avenue - Juhu, Mumbai","Arcadia - Andheri, Mumbai","Elita - Juhu, Mumbai","Anand - Vile Parle, Mumbai","Crescenzo - Vile Parle, Mumbai","Ganga Niwas - Vile Parle, Mumbai","Bharat - Vile Parle, Mumbai","Shradha Suman - Vile Parle, Mumbai","Kapadia - Vile Parle, Mumbai","Moti Mahal - Vile Parle, Mumbai"].map((item) => (
                <div key={item} onClick={() => { setHostel(item); setShowHostel(false); }} className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm">{item}</div>
              ))}
            </div>
          )}
        </div>
        <DatePicker selected={date} onChange={(d) => setDate(d)} minDate={new Date()} wrapperClassName="w-full" className="w-full border border-gray-600 p-2 focus:outline-none" />
        <div className="mt-3">
          <p className="text-sm mb-2 text-gray-700">Select Time</p>
          <div className="grid grid-cols-3 gap-2">
            {["12–2 PM", "2–4 PM", "4–6 PM"].map((slot) => (
              <button key={slot} onClick={() => setTime(slot)} className={`border border-gray-600 py-2 text-sm ${time === slot ? "bg-black text-white" : "bg-white text-black"}`}>{slot}</button>
            ))}
          </div>
        </div>
        <button onClick={handleSubmit} className="mt-4 w-full bg-[#ffcc29] py-2 rounded-md">Confirm Visit</button>
      </div>
    </div>
  );
}