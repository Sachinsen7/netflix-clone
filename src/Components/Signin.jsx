import React, { useState } from "react";
import netflixCover from "../assets/SignIn/netflixCover.jpg";
import Netflix_logo from "../assets/images/Netflix_logo.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/stepone", { state: { email, password } });
  };

  return (
    <>
      <div className="relative h-screen flex justify-center items-center overflow-hidden">
        <img
          src={netflixCover}
          alt=""
          className="absolute h-full w-full object-cover bg-cover"
        />
        <img
          src={Netflix_logo}
          alt=""
          className="absolute h-20 w-48 top-3 left-28 cursor-pointer "
        />

        <div
          //   style={{ backgroundColor: " rgb(5, 3, 0)" }}
          // style={{ backgroundColor: "black", opacity: "0.9" }}
          className="absolute top-28  w-[450px] sm:h-[650px] h-full p-4 bg-black sm:opacity-[0.9]"
        >
          <h1 className="text-3xl font-bold text-white mt-7 ml-12">Sign in</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or mobile number "
              className="mt-8 w-[300px] h-14  p-5   bg-transparent border-gray-300 border rounded-sm focus:outline-none focus:ring focus:ring-gray-200 text-white"
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-5 w-[300px] h-14 rounded-sm p-5 bg-transparent border-gray-300 border focus:outline-none focus:ring focus:ring-gray-200 text-white"
            />
            <button
              type="submit"
              className="text-white bg-red-800 mt-5  rounded-sm h-[40px] font-semibold w-[300px] text-lg hover:bg-red-700 transition-colors duration-300"
            >
              Sign in
            </button>
            <p className="mt-5 text-center text-gray-300">OR</p>
            <button className="text-white mt-5  rounded-sm h-[40px] font-semibold w-[300px] text-lg  transition-colors duration-300 bg-customGray hover:bg-hoverGray">
              Use a sign-in code
            </button>
            <a
              href=""
              className="text-white mt-5 underline  hover:underline-offset-0 "
            >
              Forgot Password?
            </a>
          </form>
          <div className="mt-5 ml-12 flex flex-col  justify-start">
            <p className="ml-8 text-white ">
              <input type="checkbox" className="mr-2" />
              Remember me
            </p>
            <p className="ml-8 text-gray-300 mt-4">
              New to Netflix? <span className="text-white">Sign up Now.</span>
            </p>
            <p className="text-gray-300 mt-10 text-sm ml-8 ">
              This page is protected by Google reCAPTCHA <br /> to ensure you're
              not a bot.
              <a
                href=""
                className="ml-1 text-blue-400 underline  hover:underline-offset-0 "
              >
                Learn more.
              </a>
            </p>
          </div>
        </div>
        {/* footer section goes from here */}

        <div
          style={{ backgroundColor: "rgb(243, 243, 243)" }}
          className="mt-16 w-full"
        >
          <footer className="text-gray-700 py-2  ">
            <p className="text-gray-60000 mt-6 text-lg  sm:ml-28">
              Questions? Call 000-800-919-1694
            </p>
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-1 ml-9 gap-4 text-sm  sm:ml-24">
              <div>
                <ul className="flex flex-row gap-32 cursor-pointer">
                  <li className="mt-5 curser-pointer">FAQ</li>
                  <li className="mt-5  curser-pointer">Help Centre</li>
                  <li className="mt-5 ">Terms of Use</li>
                  <li className="mt-5 ">Privacy</li>
                </ul>
              </div>

              <div>
                <ul className="flex flex-row gap-32 cursor-pointer">
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

export default SignIn;
