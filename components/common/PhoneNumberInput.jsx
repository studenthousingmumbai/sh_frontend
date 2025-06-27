import { useState } from "react";

const PhoneNumberInput = ({ initialValue, onChange, required }) => {
  const [phoneNumber, setPhoneNumber] = useState(initialValue || "");

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10 && /^[0-9]*$/.test(value)) {
      setPhoneNumber(value);
      onChange(value);
    }
  };

  return (
    <div>
      <label
        htmlFor="phone"
        className="block text-sm font-medium text-gray-700"
      >
        Phone number
      </label>
      <div className="mt-1 relative">
        <div
          className="absolute rounded-tl-md rounded-bl-md  inset-y-0 left-0 flex items-center pl-3 pr-3 pointer-events-none border-r bg-gray-100"
          style={{ fontSize: "0.875rem" }}
        >
          +91
        </div>
        <input
          id="phone"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleInputChange}
          type="text"
          maxLength="10"
          required={true}
          className="block w-full appearance-none rounded-md border border-gray-300 pl-14 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default PhoneNumberInput;
