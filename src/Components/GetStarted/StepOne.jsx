import React from "react";
import Netflix_logo from "../../assets/images/Netflix_logo.png";
import computer from "../../assets/StepOneImages/computer.png";
import laptop from "../../assets/StepOneImages/laptop.png";
import tablet from "../../assets/StepOneImages/tablet.png";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function StepOne() {
  const location = useLocation();
  const navigate = useNavigate();

  const { email, password } = location.state || {};

  const handleNext = () => {
    navigate("/steptwo", { state: { email, password } });
  };
  return (
    <>
      <div className="min-h-screen overflow-hidden">
        <div className="flex justify-between items-center sm:px-8 border-b-2 border-gray-200">
          <a href="/">
            <img
              src={Netflix_logo}
              alt=""
              className=" sm:h-24 sm:w-52 w-32 cursor-pointer "
            />
          </a>

          <a
            href="/signin"
            className="mr-6 sm:text-xl font-bold text-gray-900 hover:underline"
          >
            Sign in
          </a>
        </div>

        <div className="flex justify-center items-center flex-col p-12 mt-12 ">
          <div className="flex justify-center gap-7 items-center">
            <img src={laptop} alt="laptop-icon" className="h-20" />
            <img src={computer} alt="computer-icon" className="h-24" />
            <img src={tablet} alt="tablet" className="h-14" />
          </div>
          <div className="flex justify-center flex-col sm:items-center mt-3">
            <p className="text-sm mt-5">STEP 1 OF 4</p>
            <h1 className="text-4xl font-semibold sm:mt-0 mt-5 sm:text-center">
              Finsh setting up your <br /> account
            </h1>
            <p className="text-xl sm:text-center mt-5">
              Netflix is personalised for you. <br /> Create a password to watch
              on any <br /> device at any time.
            </p>
            <div>
              <p>Email: {email || "Not Provided"}</p>
              <p>Password: {password || "Not Provided"} </p>
            </div>
            <button
              onClick={handleNext}
              className="text-white bg-red-700 mt-5  rounded-sm h-[70px] font-semibold w-[350px] text-xl hover:bg-red-600 transition-colors duration-300"
            >
              Next
            </button>
          </div>
        </div>

        {/* footer section goes from here */}

        <div
          style={{ backgroundColor: "rgb(243, 243, 243)" }}
          className="mt-16"
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

export default StepOne;
