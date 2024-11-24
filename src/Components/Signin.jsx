import React from "react";
import netflixCover from "../assets/SignIn/netflixCover.jpg";
import Netflix_logo from "../assets/images/Netflix_logo.png";

function SignIn() {
  return (
    <>
      <div className="relative h-screen flex justify-center items-center">
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
          style={{ backgroundColor: "black", opacity: "0.9" }}
          className="absolute top-28  w-[450px] h-[650px] p-4  "
        >
          <h1 className="text-3xl font-bold text-white mt-7 ml-12">Sign in</h1>
          <form action="" className="flex flex-col justify-center items-center">
            <input
              type="email"
              placeholder="Email or mobile number "
              className="mt-8 w-[300px] h-14  p-5   bg-transparent border-gray-300 border rounded-sm focus:outline-none focus:ring focus:ring-gray-200 text-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="mt-5 w-[300px] h-14 rounded-sm p-5 bg-transparent border-gray-300 border focus:outline-none focus:ring focus:ring-gray-200 text-white"
            />
            <button className="text-white bg-red-800 mt-5  rounded-sm h-[40px] font-semibold w-[300px] text-lg hover:bg-red-700 transition-colors duration-300">
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
      </div>
    </>
  );
}

export default SignIn;
