import React, { useState } from "react";
import Netflix_logo from "../../assets/Netflix_Logo.png";
import { useLocation, useNavigate } from "react-router-dom";

function StepFourCard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, password } = location.state || {};

  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardName: "",
    agree: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    const { cardNumber, expiry, cvv, cardName, agree } = formData;
    if (!cardNumber || !expiry || !cvv || !cardName || !agree) {
      setError("Please fill all fields and agree to the terms.");
      return;
    }
    setError("");
    navigate("/paymentTwo", { state: { email, password } });
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* Header */}
      <div className="flex w-full justify-between items-center px-8 border-b-2 border-gray-200">
        <a href="/">
          <img
            src={Netflix_logo}
            alt="Netflix Logo"
            className="sm:h-24 sm:w-52 w-32 cursor-pointer"
          />
        </a>
        <a
          href="/signin"
          className="mr-6 sm:text-xl font-bold text-gray-900 hover:underline"
        >
          Sign In
        </a>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-md p-6">
        <p className="text-sm mt-5">STEP 4 OF 4</p>
        <h1 className="text-4xl font-semibold mt-3">
          Set up your credit or debit card
        </h1>
        <div className="flex gap-2 mt-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
            alt="Visa Logo"
            className="h-6"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
            alt="Mastercard Logo"
            className="h-6"
          />
        </div>

        {/* Form */}
        <form className="flex flex-col mt-5" onSubmit={handleNext}>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card number"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full h-14 p-4 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-blue-300 mb-4"
          />
          <div className="flex gap-4">
            <input
              type="text"
              name="expiry"
              placeholder="Expiration date (MM/YY)"
              value={formData.expiry}
              onChange={handleChange}
              className="w-1/2 h-14 p-4 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
            <div className="relative w-1/2">
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleChange}
                className="w-full h-14 p-4 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
                ?
              </span>
            </div>
          </div>
          <input
            type="text"
            name="cardName"
            placeholder="Name on card"
            value={formData.cardName}
            onChange={handleChange}
            className="w-full h-14 p-4 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-blue-300 mt-4"
          />

          {/* Pricing */}
          <div className="flex justify-between items-center mt-4 p-4 bg-gray-100 rounded-sm">
            <span className="text-lg font-semibold">₹199/month</span>
            <a href="#" className="text-blue-600 hover:underline">
              Change
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Any payment above ₹2000 shall need additional authentication.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            By checking the checkbox below, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Use
            </a>
            ,{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Statement
            </a>
            , and that you are over 18...
          </p>

          {/* Checkbox */}
          <label className="flex items-center mt-4">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-sm text-gray-600">I agree.</span>
          </label>
          {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

          {/* Button */}
          <button
            type="submit"
            className="mt-6 w-full h-14 bg-red-600 text-white font-semibold text-xl rounded-sm hover:bg-red-700 transition-colors duration-300"
          >
            Start Membership
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer
        className="mt-16 w-full py-6 text-gray-700"
        style={{ backgroundColor: "rgb(243, 243, 243)" }}
      ></footer>
    </div>
  );
}

export default StepFourCard;
