import React, { useState } from "react";
import Netflix_logo from "../../assets/Netflix_Logo.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCheck } from "@fortawesome/free-solid-svg-icons";

function StepFour() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("Basic"); // Default to Basic as the selected plan

  const handleNext = () => {
    navigate("/stepfive", { state: { plan: selectedPlan } });
  };

  const plans = [
    {
      name: "Mobile",
      resolution: "480p",
      price: "₹149",
      quality: "Fair",
      fullResolution: "480p",
      devices: "Mobile phone, tablet",
      concurrentDevices: 1,
      downloadDevices: 1,
    },
    {
      name: "Basic",
      resolution: "720p",
      price: "₹199",
      quality: "Good",
      fullResolution: "720p (HD)",
      devices: "TV, computer, mobile phone, tablet",
      concurrentDevices: 1,
      downloadDevices: 1,
      isPopular: true,
    },
    {
      name: "Standard",
      resolution: "1080p",
      price: "₹499",
      quality: "Great",
      fullResolution: "1080p (Full HD)",
      devices: "TV, computer, mobile phone, tablet",
      concurrentDevices: 2,
      downloadDevices: 2,
    },
    {
      name: "Premium",
      resolution: "4K + HDR",
      price: "₹649",
      quality: "Best",
      fullResolution: "4K (Ultra HD) + HDR",
      devices: "TV, computer, mobile phone, tablet",
      concurrentDevices: 4,
      downloadDevices: 4,
    },
  ];

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
        <a className="mr-4 sm:mr-6 text-base sm:text-lg md:text-xl font-bold text-gray-900 hover:underline">
          Sign in
        </a>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16 md:mt-20">
        <p className="text-xs sm:text-sm text-center">STEP 4 OF 4</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 text-center">
          Choose the plan that’s right for you
        </h1>

        {/* Plan Cards */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative border rounded-xl p-3 cursor-pointer transition-all duration-300 ${
                selectedPlan === plan.name
                  ? "border-blue-500 shadow-lg"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              onClick={() => setSelectedPlan(plan.name)}
            >
              {/* Most Popular Tag */}
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div
                className={`relative rounded-xl text-white font-semibold p-5 text-start ${
                  plan.name === "Mobile"
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                    : plan.name === "Basic"
                    ? "bg-gradient-to-r from-green-500 to-teal-600"
                    : plan.name === "Standard"
                    ? "bg-gradient-to-r from-purple-500 to-pink-600"
                    : "bg-gradient-to-r from-red-500 to-orange-600"
                }`}
              >
                <h2 className="font-bold text-lg sm:text-xl">
                  {plan.name} <br className="hidden sm:block" />{" "}
                  {plan.resolution}
                </h2>
                {selectedPlan === plan.name && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-xl"
                  />
                )}
              </div>

              {/* Plan Details */}
              <div className="mt-4 text-start px-4 space-y-4">
                <div>
                  <p className="text-gray-500 font-bold text-sm sm:text-base">
                    Monthly price
                  </p>
                  <span className="text-sm sm:text-base text-gray-800 font-bold">
                    {plan.price}
                  </span>
                </div>
                <hr />
                <div>
                  <p className="text-gray-500 font-bold text-sm sm:text-base">
                    Video and sound quality
                  </p>
                  <span className="text-sm sm:text-base text-gray-800 font-bold">
                    {plan.quality}
                  </span>
                </div>
                <hr />
                <div>
                  <p className="text-gray-500 font-bold text-sm sm:text-base">
                    Resolution
                  </p>
                  <span className="text-sm sm:text-base text-gray-800 font-bold">
                    {plan.fullResolution}
                  </span>
                </div>
                <hr />
                <div>
                  <p className="text-gray-500 font-bold text-sm sm:text-base">
                    Supported devices
                  </p>
                  <span className="text-sm sm:text-base text-gray-800 font-bold">
                    {plan.devices}
                  </span>
                </div>
                <hr />
                <div>
                  <p className="text-gray-500 font-bold text-sm sm:text-base">
                    Devices your household can watch at the same time
                  </p>
                  <span className="text-sm sm:text-base text-gray-800 font-bold">
                    {plan.concurrentDevices}
                  </span>
                </div>
                <hr />
                <div>
                  <p className="text-gray-500 font-bold text-sm sm:text-base">
                    Download devices
                  </p>
                  <span className="text-sm sm:text-base text-gray-800 font-bold">
                    {plan.downloadDevices}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-6 sm:mt-8 max-w-[1200px] mx-auto px-4 sm:px-0">
          <p className="text-xs sm:text-sm">
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your internet service and device capabilities. Not all
            content is available in all resolutions. See our{" "}
            <a href="#" className="text-blue-700 hover:underline">
              Terms of Use
            </a>{" "}
            for more details.
          </p>
          <p className="mt-4 text-xs sm:text-sm">
            Only people who live with you may use your account. Watch on 4
            different devices at the same time with Premium, 2 with Standard,
            and 1 with Basic and Mobile.
          </p>
          <p className="mt-4 text-xs sm:text-sm">
            Live events are included with any Netflix plan and contain ads.
          </p>
        </div>

        {/* Next Button */}
        <form className="flex flex-col items-center mt-6 sm:mt-8">
          <button
            onClick={handleNext}
            style={{ backgroundColor: "rgb(246, 19, 29)" }}
            className="text-white bg-red-700 rounded-sm font-semibold w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-14 sm:h-16 text-lg sm:text-xl hover:bg-red-600 transition-colors duration-300"
          >
            Next
          </button>
        </form>
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

export default StepFour;
