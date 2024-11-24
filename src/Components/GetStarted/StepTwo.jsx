import React from "react";
import Netflix_logo from "../../assets/images/Netflix_logo.png";

function StepTwo() {
  return (
    <>
      <div className="flex items-center flex-col">
        <div className="flex w-full justify-between items-center px-8 border-b-2 border-gray-200">
          <img
            src={Netflix_logo}
            alt=""
            className=" h-24 w-52 cursor-pointer "
          />

          <a
            href=""
            className="mr-6 text-xl font-bold text-gray-900 hover:underline"
          >
            Sign in
          </a>
        </div>

        <div className="h-[700px] w-[500px]  ">
          <p className="text-sm mt-5">STEP 2 OF 4</p>
          <div className="flex flex-col items-start mt-3">
            <h1 className="text-4xl font-semibold mt-0 ">
              Create a password to start your membership
            </h1>
            <p className="text-xl mt-5">
              Just a few more steps and you're done! <br /> We hate paperwork,
              too.
            </p>
          </div>
          <form action="" className="flex flex-col">
            <input
              type="email"
              placeholder="Email or mobile number "
              className="mt-8 w-[450px] h-16  p-5   bg-transparent border-gray-300 border rounded-sm focus:outline-none focus:ring focus:ring-blue-300 text-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="mt-5 w-[450px] h-16 rounded-sm p-5 bg-transparent border-gray-300 border focus:outline-none focus:ring focus:ring-blue-300 text-white"
            />
            <button
              style={{ backgroundColor: "rgb(246, 19, 29)" }}
              className="text-white bg-red-700 mt-5  rounded-sm font-semibold w-[450px] h-16 text-xl hover:bg-red-600 transition-colors duration-300"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default StepTwo;
