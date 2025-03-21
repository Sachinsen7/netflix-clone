import React from "react";
import Netflix_logo from "../../assets/images/Netflix_logo.png";
import imageVisa from "../../assets/StepOneImages/imageVisa.png";
import masterCard from "../../assets/StepOneImages/masterCard.png";
import bhim from "../../assets/StepOneImages/bhim.png";
import Gpay from "../../assets/StepOneImages/Gpay.png";
import paytm from "../../assets/StepOneImages/paytm.png";
import amazonpay from "../../assets/StepOneImages/amazonpay.png";
import rightArrow from "../../assets/StepOneImages/right-arrow.png";
import phonepe from "../../assets/StepOneImages/phonepe (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function StepFive() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/paymentone");
  };

  const handleNextt = () => {
    navigate("/paymenttwo");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <div className="flex w-full justify-between items-center px-4 sm:px-8 border-b-2 border-gray-200">
        <a href="/">
          <img
            src={Netflix_logo}
            alt="Netflix Logo"
            className="h-16 sm:h-20 md:h-24 w-auto max-w-[150px] sm:max-w-[180px] md:max-w-[208px] cursor-pointer"
          />
        </a>
        <a
          href="/signin"
          className="mr-4 sm:mr-6 text-base sm:text-lg md:text-xl font-bold text-gray-900 hover:underline"
        >
          Sign in
        </a>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-[500px] mx-auto mt-10 sm:mt-16 md:mt-20 px-4 sm:px-0">
        <p className="text-xs sm:text-sm text-center">STEP 4 OF 4</p>
        <div className="flex flex-col items-center mt-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-0 text-center">
            Choose how to pay
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-5 text-center font-semibold">
            Your payment is encrypted and you can change your payment method at
            anytime.
          </p>
          <p className="text-xs sm:text-sm mt-4 sm:mt-5 text-center font-bold">
            Secure for peace of mind. Cancel easily online.
          </p>
        </div>

        {/* Payment Options */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full max-w-md mt-6 sm:mt-9">
          {/* Encrypted Notice */}
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faLock} className="text-gray-600 text-sm" />
            <p className="text-xs sm:text-sm text-gray-600">
              End-to-end encrypted
            </p>
          </div>

          {/* Credit/Debit Card Button */}
          <button
            className="border border-gray-300 py-3 sm:py-4 px-4 sm:px-6 rounded-md flex justify-between items-center w-full shadow-sm hover:shadow-md transition-shadow duration-300"
            onClick={handleNext}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-sm sm:text-base font-medium">
                Credit or Debit Card
              </span>
              <div className="flex gap-1 sm:gap-2">
                <img
                  src={imageVisa}
                  alt="Visa Logo"
                  className="h-5 sm:h-6 p-0.5 border border-gray-400 rounded-sm"
                />
                <img
                  src={masterCard}
                  alt="MasterCard Logo"
                  className="h-5 sm:h-6 p-0.5 border border-gray-400 rounded-sm"
                />
              </div>
            </div>
            <img src={rightArrow} alt="Right Arrow" className="h-4 sm:h-5" />
          </button>

          {/* UPI AutoPay Button */}
          <button
            className="border border-gray-300 py-3 sm:py-4 px-4 sm:px-6 rounded-md flex justify-between items-center w-full shadow-sm hover:shadow-md transition-shadow duration-300"
            onClick={handleNextt}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-sm sm:text-base font-medium">
                UPI AutoPay
              </span>
              <div className="flex gap-1 sm:gap-2">
                <img
                  src={paytm}
                  alt="Paytm Logo"
                  className="h-5 sm:h-6 p-0.5 border border-gray-400 rounded-sm"
                />
                <img
                  src={bhim}
                  alt="BHIM Logo"
                  className="h-5 sm:h-6 p-0.5 border border-gray-400 rounded-sm"
                />
                <img
                  src={amazonpay}
                  alt="Amazon Pay Logo"
                  className="h-5 sm:h-6 p-0.5 border border-gray-400 rounded-sm"
                />
                <img
                  src={Gpay}
                  alt="Google Pay Logo"
                  className="h-5 sm:h-6 p-0.5 border border-gray-400 rounded-sm"
                />
                <img
                  src={phonepe}
                  alt="PhonePe Logo"
                  className="h-5 sm:h-6 p-0.5 border border-gray-400 rounded-sm"
                />
              </div>
            </div>
            <img src={rightArrow} alt="Right Arrow" className="h-4 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div
        style={{ backgroundColor: "rgb(243, 243, 243)" }}
        className="w-full mt-16"
      >
        <footer className="text-gray-700 py-4">
          <p className="text-gray-600 mt-6 text-base sm:text-lg px-4 sm:ml-28">
            Questions? Call 000-800-919-1694
          </p>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-16 cursor-pointer">
              <li className="mt-5 hover:underline">FAQ</li>
              <li className="mt-5 hover:underline">Help Centre</li>
              <li className="mt-5 hover:underline">Terms of Use</li>
              <li className="mt-5 hover:underline">Privacy</li>
            </ul>
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-16 cursor-pointer">
              <li className="mt-5 hover:underline">Cookie Preferences</li>
              <li className="mt-5 hover:underline">Corporate Information</li>
            </ul>
          </div>
          <div className="border-gray-400 bg-white border rounded-sm p-2 w-36 sm:ml-28 ml-7 mt-10">
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-gray text-xl pl-3"
            />
            <select className="bg-transparent outline-none rounded-3xl text-sm text-gray font-semibold pl-3">
              <option className="bg-transparent text-black">English</option>
              <option className="bg-transparent text-black">Hindi</option>
            </select>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default StepFive;
