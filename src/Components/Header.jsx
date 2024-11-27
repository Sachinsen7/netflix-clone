import React, { useState } from "react";
import Netflix_logo from "../assets/images/Netflix_logo.png";
import {
  FaHandHolding,
  FaHandshake,
  FaHeart,
  FaPlus,
  FaStar,
  FaTv,
} from "react-icons/fa";
import paul_miketyson from "../assets/images/paul_miketyson.jpg";
import animal from "../assets/images/animal.jpg";
import devara from "../assets/images/devara.jpg";
import do_patti from "../assets/images/do_patti.jpg";
import GOAT from "../assets/images/GOAT.jpg";
import kapil_sharma_show from "../assets/images/kapil_sharma_show.jpg";
import khel_khel_mein from "../assets/images/khel_khel_mein.jpg";
import Nayanthara from "../assets/images/Nayanthara.png";
import The_buckingham from "../assets/images/The_buckingham.jpg";
// import { FaHandSparkles } from "react-icons/fa";
import money_heist from "../assets/images_only_netflix/money_heist.jpg";
import stranger_things from "../assets/images_only_netflix/stranger_things.jpg";
import lucifer from "../assets/images_only_netflix/lucifer.jpg";
import tribhuvan from "../assets/images_only_netflix/tribhuvan.jpg";
import king_the_land from "../assets/images_only_netflix/king_the_land.jpg";
import cobra_kai from "../assets/images_only_netflix/cobra_kai.jpg";
import queen_of_tears from "../assets/images_only_netflix/queen_of_tears.jpg";
import my_demon from "../assets/images_only_netflix/my_demon.jpg";
import sector_36 from "../assets/images_only_netflix/sector_36.jpg";
import helicopter_heist from "../assets/images_only_netflix/helicopter_heist.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Stranger_things from "../assets/videos/Stranger_things.mp4";
import N_logo from "../assets/images/N_logo.png";

function Header() {
  const [showanswer, setShowanswer] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  // const [isplaying, setIsplaying] = useState(false);

  // const handlePlay = () => setIsplaying(true);
  // const handlePause = () => setIsplaying(false);

  const handlleShowClick = (index) => {
    setShowanswer(showanswer === index ? null : index);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const combinedFunctinality = (event) => {
    handleToggle();
    if (handlleShowClick) {
      handlleShowClick(event);
    }
  };

  return (
    // The NavBar

    <div className="h-full bg-gradient-to-b from-gradientEnd to-gradientStart  ">
      <div className="pt-2 pl-10 flex justify-between items-center  ">
        <div>
          <img src={Netflix_logo} alt="" className="w-40 hidden sm:block" />
          <img src={N_logo} alt="" height={"10px"} className="sm:hidden" />
        </div>
        <div className="flex justify-around items-center mr-14 ">
          <div className="border-gray-400 border rounded-full p-1 w-32 ml-40">
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-white text-xl pl-3"
            />
            <select className=" bg-transparent outline-none rounded-3xl text-sm text-white font-semibold pl-3">
              <option className="bg-transparent text-black hidden">
                English
              </option>
              <option className="bg-transparent text-black">Hindi</option>
            </select>
          </div>
          <div className="ml-4">
            <button className="bg-white w-20 sm:text-lg text-sm p-0 text-black px-3 py-1 rounded-2xl font-semibold hover:bg-slate-200">
              Sign in
            </button>
          </div>
        </div>
      </div>

      {/* // The Hero */}

      <div className="flex justify-center items-center mt-5 relative bg-transparent">
        <div
          // style={{ border: "1px solid white" }}
          id="Hero"
          className="flex flex-col justify-center items-center w-[90%] rounded-2xl h-[400px] 
         "
        >
          <video
            className="object-cover w-full h-[380px] rounded-2xl shadow  "
            autoPlay
            loop
            playsInline
            preload="auto"
            src={Stranger_things}
          ></video>
          <div className="absolute top-[200px] flex flex-col justify-center items-center">
            <h1 className="sm:text-5xl text-4xl  text-white text-center font-extrabold ">
              Unlimited movies, TV <br />
              shows and more
            </h1>
            <p className="sm:text-2xl mb-0 text-lg text-white mt-3  ">
              Starts at 149. Cancel at any time.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center text-white mt-10">
        <p>
          Ready to watch? Enter your email to create or restart your membership
        </p>
      </div>

      {/* The Email */}

      <div className="flex  justify-center items-center">
        <div className="flex sm:flex-row flex-col sm:justify-around items-center mt-5 ">
          <input
            style={{ border: "1px solid white" }}
            type="text"
            placeholder="Email address"
            className="w-[550px] h-[50px] rounded-full bg-transparent text-white px-4 placeholder:text-white"
          />
          <button className="text-white bg-red-600 mt-6 ml-4 sm:mt-0 px-4 py-2 rounded-full h-[50px] font-bold w-[170px] text-xl hover:bg-red-700 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* The Cards */}

      <div className="">
        <h1 className="sm:text-3xl  text-2xl font-bold text-white mt-8 sm:ml-44 ml-7">
          Trending Now
        </h1>
        <div className="mt-8 text-3xl font-bold text-white flex sm:gap-3 gap-6 overflow-x-auto whitespace-nowrap sm:ml-40 ml-7 scrollbar-hide">
          <div className=" group flex-shrink-0 rounded-2xl">
            <img
              src={paul_miketyson}
              alt=""
              className="object-cover rounded-2xl transform transition duration-300 hover:scale-105 h-64 w-48 overflow-hidden bg-cover inline-block shadow-lg"
            />
          </div>
          <div className="relative group flex-shrink-0">
            <img
              src={Nayanthara}
              alt=""
              className="object-cover rounded-2xl bg-cover h-64 w-48 inline-block overflow-hidden transform transition duration-300 hover:scale-105"
            />
          </div>
          <div className="relative group flex-shrink-0">
            <img
              src={khel_khel_mein}
              alt=""
              className="object-cover rounded-2xl bg-cover h-64 w-48 inline-block overflow-hidden transform transition duration-300 hover:scale-105 "
            />
          </div>
          <div className="relative group flex-shrink-0">
            <img
              src={animal}
              alt=""
              className="object-cover rounded-2xl bg-cover h-64 w-48 inline-block overflow-hidden transform transition duration-300 hover:scale-105 "
            />
          </div>
          <div className="relative group flex-shrink-0">
            <img
              src={The_buckingham}
              alt=""
              className="object-cover rounded-2xl bg-cover h-64 w-48 inline-block overflow-hidden transform transition duration-300 hover:scale-105 "
            />
          </div>
          <div className="relative group flex-shrink-0">
            <img
              src={do_patti}
              alt=""
              className="object-cover rounded-2xl bg-cover h-64 w-48 inline-block overflow-hidden transform transition duration-300 hover:scale-105 "
            />
          </div>
          <div className="relative group flex-shrink-0">
            <img
              src={GOAT}
              alt=""
              className="object-cover rounded-2xl bg-cover h-64 w-48 inline-block overflow-hidden transform transition duration-300 hover:scale-105 "
            />
          </div>
          <div className="relative group flex-shrink-0">
            <img
              src={kapil_sharma_show}
              alt=""
              className="object-cover rounded-2xl bg-cover h-64 w-48 inline-block overflow-hidden transform transition duration-300 hover:scale-105 "
            />
          </div>
          <div className="">
            <img
              src={devara}
              alt=""
              className="object-cover rounded-2xl bg-cover h-64 w-48 inline-block overflow-hidden transform transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Another Cards */}

      <div className="">
        <h1 className="sm:text-3xl  text-2xl font-bold text-white mt-8 sm:ml-44 ml-7">
          Only On Netflix
        </h1>
        <div className="mt-8 text-3xl font-bold text-white flex sm:gap-3 gap-6 overflow-x-auto whitespace-nowrap sm:ml-40 ml-7  scrollbar-hide ">
          <div className="relative group flex-shrink-0 ">
            <img
              src={money_heist}
              alt=""
              className="object-cover rounded-2xl transform transition duration-300 hover:scale-105 h-64 w-48 overflow-hidden bg-cover inline-block"
            />
          </div>
          <div className="relative group flex-shrink-0 ">
            <img
              src={stranger_things}
              alt=""
              className="object-cover rounded-2xl transform transition duration-300 hover:scale-105 h-64 w-48 overflow-hidden bg-cover inline-block"
            />
          </div>
          <div className="relative group flex-shrink-0">
            <img
              src={lucifer}
              alt=""
              className="object-cover rounded-2xl bg-cover h-64 w-48 inline-block overflow-hidden transform transition duration-300 hover:scale-105"
            />
          </div>
          <div className="relative group flex-shrink-0">
            <img
              src={cobra_kai}
              alt=""
              className="object-cover rounded-2xl bg-cover h-64 w-48 inline-block overflow-hidden transform transition duration-300 hover:scale-105 "
            />
          </div>
          <div className="relative group flex-shrink-0">
            <img
              src={queen_of_tears}
              alt=""
              className="object-cover rounded-2xl bg-cover h-64 w-48 inline-block overflow-hidden transform transition duration-300 hover:scale-105 "
            />
          </div>
          <div className="relative group flex-shrink-0">
            <img
              src={tribhuvan}
              alt=""
              className="object-cover rounded-2xl bg-cover h-64 w-48 inline-block overflow-hidden transform transition duration-300 hover:scale-105 "
            />
          </div>
          <div className="relative group flex-shrink-0">
            <img
              src={helicopter_heist}
              alt=""
              className="object-cover rounded-2xl bg-cover h-64 w-48 inline-block overflow-hidden transform transition duration-300 hover:scale-105 "
            />
          </div>
          <div className="relative group flex-shrink-0">
            <img
              src={king_the_land}
              alt=""
              className="object-cover rounded-2xl bg-cover h-64 w-48 inline-block overflow-hidden transform transition duration-300 hover:scale-105 "
            />
          </div>
          <div className="relative group flex-shrink-0">
            <img
              src={my_demon}
              alt=""
              className="object-cover rounded-2xl bg-cover h-64 w-48 inline-block overflow-hidden transform transition duration-300 hover:scale-105 "
            />
          </div>
          <div className="">
            <img
              src={sector_36}
              alt=""
              className="object-cover rounded-2xl bg-cover h-64 w-48 inline-block overflow-hidden transform transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Boxes */}
      <div className="">
        <h1 className="sm:text-3xl text-2xl font-bold text-white mt-8 sm:ml-44 ml-7">
          More reasons to join
        </h1>
        <div className="grid sm:grid-cols-4 gap-4 mt-10 sm:ml-40 ml-5">
          {/* First box */}
          <div
            style={{ backgroundColor: "rgb(39, 39, 39)" }}
            className="relative sm:w-72 w-[550px] h-32  rounded-2xl flex flex-col justify-center shadow-2xl"
          >
            <p className="absolute top-4 left-4 text-lg font-semibold text-white text-center">
              Stories tailored to your taste
            </p>
            <div className=" absolute bottom-1 right-3">
              <FaHandHolding style={{ fontSize: "30px", color: "red" }} />
              <FaStar
                style={{
                  fontSize: "10px",
                  color: "gold",
                  position: "relative",
                  top: "-30px",
                  left: "20px",
                }}
              />
            </div>
          </div>
          {/* Second box */}
          <div
            style={{ backgroundColor: "rgb(39, 39, 39)" }}
            className="relative sm:w-72  w-[550px] h-32 rounded-2xl flex flex-col justify-center shadow-2xl"
          >
            <p className="absolute top-4 left-4 text-lg font-semibold text-white ">
              Cancel or switch plans anytime
            </p>
            <div className=" absolute bottom-1 right-3">
              <FaHandshake style={{ fontSize: "30px", color: "red" }} />
            </div>
          </div>
          {/* Third box */}
          <div
            style={{ backgroundColor: "rgb(39, 39, 39)" }}
            className="relative sm:w-72 w-[550px] h-32 rounded-2xl flex flex-col justify-center shadow-2xl"
          >
            <p className="absolute top-4 left-4 text-lg font-semibold text-white text-center">
              A place just for kids
            </p>
            <div className=" absolute bottom-1 right-3">
              <FaHeart style={{ fontSize: "30px", color: "red" }} />
            </div>
          </div>

          {/* Fourth box */}
          <div
            style={{ backgroundColor: "rgb(39, 39, 39)" }}
            className=" relative sm:w-72 w-[550px] h-32 rounded-2xl flex flex-col justify-center shadow-2xl"
          >
            <p className="absolute top-4 left-4 text-lg font-semibold text-white ">
              For your phone, tablet, laptop and TV
            </p>
            <div className=" absolute bottom-1 right-3">
              <FaTv style={{ fontSize: "30px", color: "red" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Questions */}
      <div>
        <h1 className="sm:text-3xl text-2xl font-bold text-white mt-8 sm:ml-44 ml-7">
          Frequently Asked Questions
        </h1>
        {/* Question Container */}
        <div className="mt-7 gap-2 cursor-pointer flex flex-col items-center ">
          {/* First Question */}
          <div
            onClick={() => handlleShowClick(0)}
            className={`bg-customGray hover:bg-hoverGray relative sm:w-[900px]  w-[550px] rounded-2xl shadow-2xl p-5 cursor-pointer transition-all duration-500 ${
              showanswer === 0 ? "mb-10" : "mb-4"
            }`}
          >
            {/* Question no 1 */}
            <div className="flex justify-between ">
              <h1 className="text-xl font-semibold text-white ml-5">
                What is Netflix?
              </h1>
              <FaPlus fontSize={"25px"} color="white" />
            </div>
            {/* Smooth answer section */}
            {showanswer === 0 && (
              <div className="transition-all duration-500 overflow-hidden mt-4">
                <p
                  // style={{ backgroundColor: "rgb(39, 39, 39)" }}
                  className="bg-customGray hover:bg-hoverGray rounded-2xl p-4 text-white text-xl font-semibold"
                >
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  — on thousands of internet-connected devices. You can watch as
                  much as you want, whenever you want, without a single ad — all
                  for one low monthly price. There's always something new to
                  discover, and new TV shows and movies are added every week!
                </p>
              </div>
            )}
          </div>

          {/* Second Question */}
          <div
            onClick={() => handlleShowClick(1)}
            // style={{ backgroundColor: "rgb(39, 39, 39)" }}
            className={`bg-customGray  hover:bg-hoverGray relative sm:w-[900px] w-[550px] rounded-2xl shadow-2xl p-5 cursor-pointer transition-all duration-500 ${
              showanswer === 1 ? "mb-10" : "mb-4"
            }`}
          >
            {/* Question no 2 */}
            <div className="flex justify-between ">
              <h1 className="text-xl font-semibold text-white ml-5">
                How much does Netflix cost?
              </h1>
              <FaPlus fontSize={"25px"} color="white" />
            </div>
            {/* Smooth answer section */}
            {showanswer === 1 && (
              <div className="transition-all duration-500 overflow-hidden mt-4">
                <p
                  style={{ backgroundColor: "rgb(39, 39, 39)" }}
                  className="rounded-2xl p-4 text-white text-xl font-semibold"
                >
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  — on thousands of internet-connected devices. You can watch as
                  much as you want, whenever you want, without a single ad — all
                  for one low monthly price. There's always something new to
                  discover, and new TV shows and movies are added every week!
                </p>
              </div>
            )}
          </div>
          {/* Third Question */}
          <div
            onClick={() => handlleShowClick(2)}
            // style={{ backgroundColor: "rgb(39, 39, 39)" }}
            className={`bg-customGray hover:bg-hoverGray sm:w-[900px] w-[550px] relative  rounded-2xl shadow-2xl p-5 cursor-pointer transition-all duration-500 ${
              showanswer === 2 ? "mb-10" : "mb-4"
            }`}
          >
            {/* Question no 3 */}
            <div className="flex justify-between ">
              <h1 className="text-xl font-semibold text-white ml-5">
                Where can I watch?
              </h1>
              <FaPlus fontSize={"25px"} color="white" />
            </div>
            {/* Smooth answer section */}
            {showanswer === 2 && (
              <div className="transition-all duration-500 overflow-hidden mt-4">
                <p
                  style={{ backgroundColor: "rgb(39, 39, 39)" }}
                  className="rounded-2xl p-4 text-white text-xl font-semibold"
                >
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  — on thousands of internet-connected devices. You can watch as
                  much as you want, whenever you want, without a single ad — all
                  for one low monthly price. There's always something new to
                  discover, and new TV shows and movies are added every week!
                </p>
              </div>
            )}
          </div>
          {/* Fourth Question */}
          <div
            onClick={() => handlleShowClick(3)}
            // style={{ backgroundColor: "rgb(39, 39, 39)" }}
            className={`bg-customGray hover:bg-hoverGray relative sm:w-[900px] w-[550px] rounded-2xl shadow-2xl p-5 cursor-pointer transition-all duration-500 ${
              showanswer === 3 ? "mb-10" : "mb-4"
            }`}
          >
            {/* Question no 4 */}
            <div className="flex justify-between ">
              <h1 className="text-xl font-semibold text-white ml-5">
                How do I cancel?
              </h1>
              <FaPlus fontSize={"25px"} color="white" />
            </div>
            {/* Smooth answer section */}
            {showanswer === 3 && (
              <div className="transition-all duration-500 overflow-hidden mt-4">
                <p
                  style={{ backgroundColor: "rgb(39, 39, 39)" }}
                  className="rounded-2xl p-4 text-white text-xl font-semibold"
                >
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  — on thousands of internet-connected devices. You can watch as
                  much as you want, whenever you want, without a single ad — all
                  for one low monthly price. There's always something new to
                  discover, and new TV shows and movies are added every week!
                </p>
              </div>
            )}
          </div>
          {/* Fifth Question */}
          <div
            onClick={() => handlleShowClick(4)}
            // style={{ backgroundColor: "rgb(39, 39, 39)" }}
            className={`bg-customGray hover:bg-hoverGray relative sm:w-[900px] w-[550px] rounded-2xl shadow-2xl p-5 cursor-pointer transition-all duration-500 ${
              showanswer === 4 ? "mb-10" : "mb-4"
            }`}
          >
            {/* Question no 3 */}
            <div className="flex justify-between ">
              <h1 className="text-xl font-semibold text-white ml-5">
                How much does Netflix cost?
              </h1>
              <FaPlus fontSize={"25px"} color="white" />
            </div>
            {/* Smooth answer section */}
            {showanswer === 4 && (
              <div className="transition-all duration-500 overflow-hidden mt-4">
                <p
                  style={{ backgroundColor: "rgb(39, 39, 39)" }}
                  className="rounded-2xl p-4 text-white text-xl font-semibold"
                >
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  — on thousands of internet-connected devices. You can watch as
                  much as you want, whenever you want, without a single ad — all
                  for one low monthly price. There's always something new to
                  discover, and new TV shows and movies are added every week!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex sm:justify-center flex-col items-center mt-9">
        <button className="text-white bg-red-600 px-4 py-2 rounded-full h-[45px] font-semibold w-[170px] text-lg hover:bg-red-700 transition-colors duration-300">
          Get Started
        </button>
        <p className="text-white mt-2 text-lg">
          Create or restart your membership
        </p>
      </div>

      <p className="text-gray-300 mt-6 text-lg sm:ml-40 ml-5">
        Questions? Call 000-800-919-1694
      </p>

      {/* Footer Section */}

      {/* <footer className="text-gray-300 py-8 sm:ml-44 ">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-4 md:ml-9 gap-4 text-sm  ml-5">
          <div>
            <ul className="">
              <li className="mt-5 underline underline-offset-1 curser-pointer">
                FAQ
              </li>
              <li className="mt-5 underline underline-offset-1 curser-pointer">
                Help Centre
              </li>
              <li className="mt-5 underline underline-offset-1 curser-pointer">
                Account
              </li>
              <li className="mt-5 underline underline-offset-1 curser-pointer">
                Media Centre
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mt-5 underline underline-offset-1">
                Investor Relations
              </li>
              <li className="mt-5 underline underline-offset-1">Jobs</li>
              <li className="mt-5 underline underline-offset-1">
                Ways to Watch
              </li>
              <li className="mt-5 underline underline-offset-1">
                Terms of Use
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mt-5 underline underline-offset-1">Privacy</li>
              <li className="mt-5 underline underline-offset-1">
                Cookie Preferences
              </li>
              <li className="mt-5 underline underline-offset-1">
                Corporate Information
              </li>
              <li className="mt-5 underline underline-offset-1">Contact Us</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mt-5 underline underline-offset-1">Speed Test</li>
              <li className="mt-5 underline underline-offset-1">
                Legal Notices
              </li>
              <li className="mt-5 underline underline-offset-1">
                Only on Netflix
              </li>
            </ul>
          </div>
        </div>
        <div className="border-gray-400 border rounded-full p-1 w-36 sm:ml-40 ml-7 mt-10 ">
          <FontAwesomeIcon icon={faGlobe} className="text-white text-xl pl-3" />
          <select className=" bg-transparent outline-none rounded-3xl text-sm text-white font-semibold pl-3">
            <option className="bg-transparent text-black">English</option>
            <option className="bg-transparent text-black">Hindi</option>
          </select>
        </div>
        <p className="sm:ml-44 ml-8 mt-12 mb-20">Netflix India</p>
      </footer> */}
    </div>
  );
}

export default Header;
