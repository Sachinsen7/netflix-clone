import React from "react";
import Netflix_logo from "../../assets/images/Netflix_logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
function StepTwo() {
  const location = useLocation();
  const navigate = useNavigate();

  const { email, password } = location.state || {};

  const handleNext = () => {
    navigate("/stepthree", { state: { email, password } });
  };
  return (
    <>
      <div className="flex items-center flex-col overflow-hidden">
        <div className="flex w-full justify-between items-center sm:px-8 border-b-2 border-gray-200">
          <a href="/">
            <img
              src={Netflix_logo}
              alt=""
              className=" sm:h-24 sm:w-52 w-32 cursor-pointer "
            />
          </a>

          <a
            href=""
            className="mr-6 sm:text-xl font-bold text-gray-900 hover:underline"
          >
            Sign in
          </a>
        </div>

        <div className="flex items-start flex-col px-4 sm:px-0">
          <p className="text-sm mt-5 ml-5 sm:ml-9">STEP 2 OF 4</p>
          <div className="flex flex-col items-start mt-3 ml-5 sm:ml-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-0 leading-tight">
              Create a password to start <br className="hidden sm:block" /> your
              membership
            </h1>
            <p className="text-lg sm:text-xl mt-4 sm:mt-5">
              Just a few more steps and you're done!{" "}
              <br className="hidden sm:block" /> We hate paperwork, too.
            </p>
          </div>
          <form
            action=""
            className="flex flex-col items-center justify-center w-full mt-4 sm:mt-6"
          >
            <input
              type="email"
              placeholder="Email or mobile number"
              className="w-full max-w-[360px] sm:max-w-[450px] h-14 sm:h-16 p-4 sm:p-5 text-gray-950 bg-transparent border-gray-300 border rounded-sm focus:outline-none focus:ring focus:ring-blue-300 mt-4"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full max-w-[360px] sm:max-w-[450px] h-14 sm:h-16 p-4 sm:p-5 text-gray-950 bg-transparent border-gray-300 border rounded-sm focus:outline-none focus:ring focus:ring-blue-300 mt-4"
            />
            <button
              style={{ backgroundColor: "rgb(246, 19, 29)" }}
              className="text-white bg-red-700 mt-5 rounded-sm font-semibold w-full max-w-[300px] sm:max-w-[450px] h-14 sm:h-16 text-lg sm:text-xl hover:bg-red-600 transition-colors duration-300"
              onClick={handleNext}
            >
              Next
            </button>
          </form>
        </div>

        {/* footer section goes from here */}

        <div
          style={{ backgroundColor: "rgb(243, 243, 243)" }}
          className="mt-16 w-full"
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
    </>
  );
}

export default StepTwo;
