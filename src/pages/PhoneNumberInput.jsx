import React, { useState } from "react";
import axios from "axios";

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://kgamify-backend.onrender.com/api/send-sms", { phoneNumber });
      alert("Link sent to your phone number!");
    } catch (error) {
      console.error("Error sending SMS:", error);
      alert("Failed to send SMS. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Enter Your Phone Number</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded-lg"
        >
          Send Link
        </button>
      </form>
    </div>
  );
};

export default PhoneNumberInput;