import React from "react";
import Netflix_logo from "../../assets/Netflix_Logo.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
function StepThree() {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/stepfour");
  };
  return (
    <div className="flex items-center flex-col">
      <div className="flex w-full justify-between items-center px-4 sm:px-8 border-b-2 border-gray-200">
        <a href="/">
          <img
            src={Netflix_logo}
            alt="Netflix Logo"
            className="h-16 sm:h-20 md:h-24 w-auto max-w-[150px] sm:max-w-[180px] md:max-w-[208px] cursor-pointer"
          />
        </a>
        <a
          href=""
          className="mr-4 sm:mr-6 text-base sm:text-lg md:text-xl font-bold text-gray-900 hover:underline"
        >
          Sign in
        </a>
      </div>
      <div className="w-full max-w-[500px] mx-auto mt-10 sm:mt-16 md:mt-20 px-4 sm:px-0">
        <p className="text-xs sm:text-sm mt-5 text-center">STEP 3 OF 4</p>
        <div className="flex flex-col items-center mt-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-0 text-center">
            Choose your plan.
          </h1>
          <div className="mt-6 sm:mt-8">
            <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-5 flex items-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-red-600 text-xl sm:text-2xl mr-3 mt-1 flex-shrink-0"
              />
              <span>
                No commitments, cancel <br className="hidden sm:block" />{" "}
                anytime.
              </span>
            </p>
            <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-5 flex items-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-red-600 text-xl sm:text-2xl mr-3 mt-1 flex-shrink-0"
              />
              <span>
                Everything on Netflix for one <br className="hidden sm:block" />{" "}
                low price.
              </span>
            </p>
            <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-5 flex items-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-red-600 text-xl sm:text-2xl mr-3 mt-1 flex-shrink-0"
              />
              <span>No ads and no extra fees. Ever.</span>
            </p>
          </div>
        </div>
        <form
          action=""
          className="flex flex-col items-center"
          onSubmit={handleNext}
        >
          <button
            style={{ backgroundColor: "rgb(246, 19, 29)" }}
            className="text-white bg-red-700 mt-6 sm:mt-8 rounded-sm font-semibold w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-14 sm:h-16 text-lg sm:text-xl hover:bg-red-600 transition-colors duration-300"
          >
            Next
          </button>
        </form>
      </div>
      {/* footer section goes from here */}
      <div
        style={{ backgroundColor: "rgb(243, 243, 243)" }}
        className="sm:mt-16 w-full"
      >
        <footer className="text-gray-700 py-2  ">
          <p className="text-gray-60000 mt-6 text-lg  sm:ml-28 ml-8">
            Questions? Call 000-800-919-1694
          </p>
          <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-1 ml-9 gap-4 text-sm  sm:ml-24">
            <div>
              <ul className="flex sm:flex-row flex-col sm:gap-32 cursor-pointer">
                <li className="mt-5 curser-pointer">FAQ</li>
                <li className="mt-5  curser-pointer">Help Centre</li>
                <li className="mt-5 ">Terms of Use</li>
                <li className="mt-5 ">Privacy</li>
              </ul>
            </div>

            <div>
              <ul className="flex sm:flex-row flex-col sm:gap-32 cursor-pointer">
                <li className="mt-5 ">Cookie Preferences</li>
                <li className="mt-5 ">Corporate Information</li>
              </ul>
            </div>
          </div>
          <div className="border-gray-400 bg-white border rounded-sm  p-2 w-36 sm:ml-28 ml-7 mt-10 ">
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-gray text-xl pl-3"
            />
            <select className=" bg-transparent outline-none rounded-3xl text-sm text-gray font-semibold pl-3">
              <option className="bg-transparent text-black">English</option>
              <option className="bg-transparent text-black">Hindi</option>
            </select>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default StepThree;
