import React, { useState } from "react";
import Netflix_logo from "../../assets/images/Netflix_logo.png";
import { useLocation, useNavigate } from "react-router-dom";

function StepFourUPI() {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, password } = location.state || {};

  const [upiId, setUpiId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const upiRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+$/; // Basic UPI format
    if (!upiRegex.test(upiId)) {
      setError("Please enter a valid UPI ID (e.g., user@upi).");
      return;
    }
    setError("");
    navigate("/success", { state: { email, password } });
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* Header */}
      <div className="flex w-full justify-between items-center px-8 border-b-2 border-gray-200">
        <a href="/">
          <img
            src={Netflix_logo}
            alt="Netflix Logo"
            className="h-24 w-52 cursor-pointer"
          />
        </a>
        <a
          href="/signin"
          className="mr-6 text-xl font-bold text-gray-900 hover:underline"
        >
          Sign In
        </a>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-md p-6">
        <p className="text-sm mt-5">STEP 4 OF 4</p>
        <h1 className="text-4xl font-semibold mt-3">Set up UPI AutoPay</h1>
        <p className="text-lg mt-3">
          You can change this recurring payment any time in your settings.
        </p>

        {/* Form */}
        <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
          <div className="relative">
            <select
              className="w-full h-14 p-4 text-gray-950 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-blue-300 appearance-none"
              defaultValue="Paytm"
            >
              <option value="Paytm">Paytm</option>
              <option value="Google Pay">Google Pay</option>
              <option value="PhonePe">PhonePe</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
              ▼
            </span>
          </div>
          <input
            type="text"
            placeholder="UPI ID (e.g., user@upi)"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            className={`w-full h-14 p-4 border rounded-sm focus:outline-none focus:ring focus:ring-blue-300 mt-4 ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          />
          {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
          <a href="#" className="text-blue-600 hover:underline text-sm mt-2">
            How do I find my UPI ID?
          </a>
          <button
            type="submit"
            className="mt-6 w-full h-14 bg-red-600 text-white font-semibold text-xl rounded-sm hover:bg-red-700 transition-colors duration-300"
          >
            Next
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer
        className="mt-16 w-full py-6 text-gray-700"
        style={{ backgroundColor: "rgb(243, 243, 243)" }}
      >
        {/* Same as original, omitted for brevity */}
      </footer>
    </div>
  );
}

export default StepFourUPI;
