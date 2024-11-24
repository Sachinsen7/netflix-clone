import React from "react";
import Netflix_logo from "../../assets/images/Netflix_logo.png";
import computer from "../../assets/StepOneImages/computer.png";
import laptop from "../../assets/StepOneImages/laptop.png";
import tablet from "../../assets/StepOneImages/tablet.png";

function StepOne() {
  return (
    <>
      <div>
        <div className="flex justify-between items-center px-8 border-b-2 border-gray-200">
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

        <div className="flex justify-center items-center flex-col p-12 ">
          <div className="flex justify-center  gap-7  items-center mt-24">
            <img src={laptop} alt="" className="h-20" />
            <img src={computer} alt="" className="h-24" />
            <img src={tablet} alt="" className="h-14" />
          </div>
          <div className="flex justify-center flex-col  items-center mt-3">
            <p className="text-sm mt-5">STEP 1 OF 4</p>
            <h1 className="text-4xl font-semibold mt-0 text-center">
              Finsh setting up your <br /> account
            </h1>
            <p className="text-xl text-center mt-5">
              Netflix is personalised for you. <br /> Create a password to watch
              on any <br /> device at any time.
            </p>
            <button className="text-white bg-red-700 mt-5  rounded-sm h-[70px] font-semibold w-[350px] text-xl hover:bg-red-600 transition-colors duration-300">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StepOne;
