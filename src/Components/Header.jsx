import React, { useEffect, useState } from "react";
import Netflix_logo from "../assets/Netflix_Logo.png";
import {
  FaHandHolding,
  FaHandshake,
  FaHeart,
  FaMinus,
  FaPlus,
  FaStar,
  FaTv,
} from "react-icons/fa";
import ajith from "../assets/New Images/ajith.jpg";
import images from "../assets/New Images/images.jpg";
import dabba from "../assets/New Images/dabba.jpg";
import daku from "../assets/New Images/daku.jpg";
import emergency from "../assets/New Images/emergency.jpg";
import nadaniyan from "../assets/New Images/nadaniyan.jpg";
import officer from "../assets/New Images/officer.jpg";
import pushpa2 from "../assets/New Images/pushpa2.jpg";
import squid from "../assets/New Images/squid.jpg";
import Thandel_film from "../assets/New Images/Thandel_film.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Stranger_things from "../assets/videos/Stranger_things.mp4";
import N_logo from "../assets/images/N_logo.png";
import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";

function Header() {
  const [showanswer, setShowanswer] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [setMovie, setSelectMovie] = useState(null);
  const [email, setEmail] = useState("");

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.log("Autoplay failed:", err);
        video.muted = true;
        video.play();
      }
    };

    if (video) {
      playVideo();

      video.currentTime = 0;
    }

    return () => {
      if (video) {
        video.pause();
      }
    };
  }, []);

  const handleShowClick = (index) => {
    setShowanswer(showanswer === index ? null : index);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const combinedFunctinality = (event) => {
    handleToggle();
    if (handleShowClick) {
      handleShowClick(event);
    }
  };

  const trendingMovies = [
    {
      id: 1,
      src: images,
      title: "Khakee: The Bengal Chapter",
      year: "2023",
      rating: "UA",
      type: "Series",
      genres: ["Mystery", "Thriller"],
      description: "A Fictional story.",
    },
    {
      id: 2,
      src: pushpa2,
      title: "Pushpa 2",
      year: "2024",
      rating: "UA 16+",
      type: "Movie",
      genres: ["Action", "Thriller"],
      description: "The much-awaited sequel to the blockbuster 'Pushpa'.",
    },
    {
      id: 3,
      src: officer,
      title: "Officer on Duty",
      year: "2025",
      rating: "UA 16+",
      type: "Series",
      genres: ["Crime", "Thriller"],
      description: "An honest officer takes on a corrupt system.",
    },
    {
      id: 4,
      src: squid,
      title: "Squid",
      year: "2024",
      rating: "UA 18+",
      type: "Series",
      genres: ["Thriller", "Survival"],
      description: "A deadly game with high stakes and unexpected twists.",
    },
    {
      id: 5,
      src: ajith,
      title: "Vidaamuyarchi",
      year: "2025",
      rating: "UA 16+",
      type: "Movie",
      genres: ["Action", "Thriller"],
      description: "A high-octane action thriller starring Ajith Kumar.",
    },
    {
      id: 6,
      src: emergency,
      title: "Emergency",
      year: "2025",
      rating: "UA 16+",
      type: "Movie",
      genres: ["Political", "Drama"],
      description:
        "A gripping tale set in the backdrop of India's Emergency period.",
    },

    {
      id: 7,
      src: nadaniyan,
      title: "Nadaaniyan",
      year: "2025",
      rating: "UA 7+",
      type: "Movie",
      genres: ["Comedy", "Family"],
      description:
        "A fun-filled family entertainer with hilarious misadventures.",
    },
    {
      id: 8,
      src: Thandel_film,
      title: "Thandel",
      year: "2025",
      rating: "UA 13+",
      type: "Movie",
      genres: ["Drama", "Action"],
      description: "A compelling story of bravery and sacrifice.",
    },
    {
      id: 9,
      src: daku,
      title: "Daku Maharaj",
      year: "2025",
      rating: "A",
      type: "Movie",
      genres: ["Action", "Adventure"],
      description:
        "a story of a daring robber striving for survival and establishing his own territory while fighting with powerful adversaries.",
    },

    {
      id: 10,
      src: dabba,
      title: "Dabba Cartel",
      year: "2025",
      rating: "UA 13+",
      type: "Series",
      genres: ["Crime", "Drama"],
      description:
        "a home chef's dabba (tiffin) delivery business spirals into a perilous drug operation",
    },
  ];

  const handleClickMovies = (movie) => {
    setSelectMovie(movie);
  };

  const closePalette = () => {
    setSelectMovie(null);
    setEmail("");
  };

  const handleGetStarted = (e) => {
    e.preventDefault();
    console.log("Get Started with email", email);
    closePalette();
  };

  const renderMovieCard = (movie) => (
    <div
      key={movie.id}
      onClick={() => handleClickMovies(movie)}
      className="relative group flex-shrink-0"
    >
      <img
        src={movie.src}
        alt={movie.title}
        className="object-cover rounded-2xl transform transition duration-300 hover:scale-105 h-64 w-48 overflow-hidden bg-cover inline-block"
      />
    </div>
  );

  return (
    // The NavBar

    <div className="h-full overflow-hidden bg-gradient-to-b from-gradientEnd to-gradientStart  ">
      <div className="bg-gradient-to-b from-black to-transparent pt-2 px-4 sm:px-6 md:px-10 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={Netflix_logo}
            alt="Netflix Logo"
            className="h-12 sm:h-14 md:h-16"
          />
        </div>

        {/* Right Side: Language Selector + Sign In */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Language Selector */}
          <div className="relative bg-white bg-opacity-90 border border-gray-300 rounded-md flex items-center px-2 py-1">
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-black text-sm sm:text-base flex-shrink-0"
            />
            <select
              className="bg-transparent outline-none text-xs sm:text-sm text-black font-semibold pl-2 pr-6 appearance-none cursor-pointer"
              defaultValue="English"
            >
              <option value="English" className="bg-white text-black">
                English
              </option>
              <option value="Hindi" className="bg-white text-black">
                Hindi
              </option>
            </select>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-xs pointer-events-none">
              ▼
            </span>
          </div>

          {/* Sign In Button */}
          <NavLink
            to="/signIn"
            className="bg-white text-black text-sm sm:text-base px-4 py-1 rounded-md font-semibold hover:bg-gray-200 transition-colors duration-300"
          >
            Sign In
          </NavLink>
        </div>
      </div>
      {/* // The Hero */}

      <div className="flex justify-center items-center mt-12 relative bg-transparent">
        <div
          // style={{ border: "1px solid white" }}
          id="Hero"
          className="flex flex-col justify-center items-center w-[90%] rounded-2xl h-[400px] 
         "
        >
          <video
            className="object-cover w-full h-[500px] rounded-2xl shadow  "
            autoPlay
            ref={videoRef}
            loop
            playsInline
            preload="auto"
            src={Stranger_things}
            muted
          ></video>
          <div className="absolute top-[250px] flex flex-col justify-center items-center">
            <h1 className="sm:text-5xl text-3xl  text-white text-center font-extrabold ">
              Unlimited movies, TV <br />
              shows and more
            </h1>
            <p className="sm:text-2xl mb-0 text-lg text-white mt-3  ">
              Starts at 149. Cancel at any time.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-[400px] sm:w-full p-5 items-center text-white mt-14 ">
        <p>
          Ready to watch? Enter your email to create or restart your membership
        </p>
      </div>

      {/* The Email */}

      <div className="flex  justify-center items-center">
        <div className="flex sm:flex-row flex-col sm:justify-around items-center mt-5">
          <input
            style={{ border: "1px solid white" }}
            type="text"
            placeholder="Email address"
            className="sm:w-[550px] w-[300px] h-[50px] rounded-full bg-transparent text-white px-4 placeholder:text-white"
          />
          <button className="text-white bg-red-600 mt-6 ml-4 sm:mt-0 px-4 py-2 rounded-full h-[50px] font-bold w-[170px] text-xl hover:bg-red-700 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* The Cards */}

      <div className="">
        <div className="mt-8">
          <div className="text-3xl font-bold text-white mb-4 ml-7 sm:ml-40">
            Trending Movies
          </div>
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 ml-7 sm:ml-40 scrollbar-hide cursor-pointer">
            {trendingMovies.slice(0, 9).map(renderMovieCard)}
            {[
              // ajith,
              // dabba,
              // emergency,
              // daku,
              // images,
              // nadaniyan,
              // officer,
              // pushpa2,
              // squid,
              // Thandel_film,
            ].map((src, index) => (
              <div key={index} className="relative group flex-shrink-0 w-48">
                <img
                  src={src}
                  alt={`Movie ${index + 1}`}
                  className="object-cover rounded-2xl h-64 w-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Another Cards */}

      <div className="">
        {/* <div className="mt-8">
          <div className="text-3xl font-bold text-white mb-4 ml-7 sm:ml-40">
            Only On Netflix
          </div>
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 ml-7 sm:ml-40 scrollbar-hide">
            {trendingMovies.slice(1, 9).map(renderMovieCard)}
            {[
              Nayanthara,
              khel_khel_mein,
              animal,
              The_buckingham,
              do_patti,
              GOAT,
              kapil_sharma_show,
              devara,
            ].map((src, index) => (
              <div key={index} className="relative group flex-shrink-0 w-48">
                <img
                  src={src}
                  alt={`Movie ${index + 1}`}
                  className="object-cover rounded-2xl h-64 w-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div> */}

        {trendingMovies.map((movie) => {
          <div
            key={movie.id}
            onClick={() => handleClickMovies(movie)}
            className="relative group flex-shrink-0 "
          >
            <img
              src={movie.src}
              alt={movie.title}
              className="object-cover rounded-2xl transform transition duration-300 hover:scale-105 h-64 w-48 overflow-hidden bg-cover inline-block"
            />
          </div>;
        })}

        {setMovie && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 transition-opacity duration-600 flex justify-center items-center z-50"
            onClick={closePalette}
          >
            <div
              className="bg-transparent rounded-2xl w-[750px] h-[500px] relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={setMovie.src}
                  alt={setMovie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
              </div>
              <button
                className="absolute top-4 right-4 text-white text-3xl  transition-colors duration-300 py-3 rounded-full w-8 h-11 flex items-center justify-center"
                onClick={closePalette}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="white"
                >
                  <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                </svg>
              </button>
              <div className="p-6 bg-black bg-opacity-90">
                <h2 className="text-3xl font-bold text-white mb-2"></h2>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <span>•</span>
                  <span>{setMovie.year}</span>
                  <span>•</span>
                  <span>{setMovie.rating}</span>
                  <span>•</span>
                  <span>{setMovie.type}</span>
                  <span>•</span>
                  <span>{setMovie.genres.join("  •  ")}</span>
                </div>
                <p className="text-white text-base mb-6">
                  {setMovie.description}
                </p>
                <form onSubmit={handleGetStarted} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full h-12 px-4 rounded-full bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-gray-500"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-red-600 text-white w-[250px] px-4 text-center text-base py-1 rounded-full font-semibold flex items-center gap-2 hover:bg-red-700 transition-colors duration-300"
                  >
                    Get Started
                    <span>➔</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
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
            className="relative sm:w-72 w-[350px] h-32  rounded-2xl flex flex-col justify-center shadow-2xl"
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
            className="relative sm:w-72  w-[350px] h-32 rounded-2xl flex flex-col justify-center shadow-2xl"
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
            className="relative sm:w-72  w-[350px] h-32 rounded-2xl flex flex-col justify-center shadow-2xl"
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
            className=" relative sm:w-72 w-[350px] h-32 rounded-2xl flex flex-col justify-center shadow-2xl"
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
            onClick={() => handleShowClick(0)}
            className={`bg-customGray hover:bg-hoverGray relative sm:w-[900px]  w-[350px] rounded-2xl shadow-2xl p-5 cursor-pointer transition-all duration-500 ${
              showanswer === 0 ? "mb-10" : "mb-4"
            }`}
          >
            {/* Question no 1 */}
            <div className="flex justify-between ">
              <h1 className="text-xl font-semibold text-white ml-5">
                What is Netflix?
              </h1>
              {showanswer === 0 ? (
                <FaMinus fontSize={"25px"} color="white" />
              ) : (
                <FaPlus fontSize={"25px"} color="white" />
              )}
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
            onClick={() => handleShowClick(1)}
            // style={{ backgroundColor: "rgb(39, 39, 39)" }}
            className={`bg-customGray  hover:bg-hoverGray relative sm:w-[900px] w-[350px] rounded-2xl shadow-2xl p-5 cursor-pointer transition-all duration-500 ${
              showanswer === 1 ? "mb-10" : "mb-4"
            }`}
          >
            {/* Question no 2 */}
            <div className="flex justify-between ">
              <h1 className="text-xl font-semibold text-white ml-5">
                How much does Netflix cost?
              </h1>{" "}
              {showanswer === 1 ? (
                <FaMinus fontSize={"25px"} color="white" />
              ) : (
                <FaPlus fontSize={"25px"} color="white" />
              )}
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
            onClick={() => handleShowClick(2)}
            // style={{ backgroundColor: "rgb(39, 39, 39)" }}
            className={`bg-customGray hover:bg-hoverGray sm:w-[900px] w-[350px] relative  rounded-2xl shadow-2xl p-5 cursor-pointer transition-all duration-500 ${
              showanswer === 2 ? "mb-10" : "mb-4"
            }`}
          >
            {/* Question no 3 */}
            <div className="flex justify-between ">
              <h1 className="text-xl font-semibold text-white ml-5">
                Where can I watch?
              </h1>{" "}
              {showanswer === 2 ? (
                <FaMinus fontSize={"25px"} color="white" />
              ) : (
                <FaPlus fontSize={"25px"} color="white" />
              )}
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
            onClick={() => handleShowClick(3)}
            // style={{ backgroundColor: "rgb(39, 39, 39)" }}
            className={`bg-customGray hover:bg-hoverGray relative sm:w-[900px] w-[350px] rounded-2xl shadow-2xl p-5 cursor-pointer transition-all duration-500 ${
              showanswer === 3 ? "mb-10" : "mb-4"
            }`}
          >
            {/* Question no 4 */}
            <div className="flex justify-between ">
              <h1 className="text-xl font-semibold text-white ml-5">
                How do I cancel?
              </h1>{" "}
              {showanswer === 3 ? (
                <FaMinus fontSize={"25px"} color="white" />
              ) : (
                <FaPlus fontSize={"25px"} color="white" />
              )}
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
            onClick={() => handleShowClick(4)}
            // style={{ backgroundColor: "rgb(39, 39, 39)" }}
            className={`bg-customGray hover:bg-hoverGray relative sm:w-[900px] w-[350px] rounded-2xl shadow-2xl p-5 cursor-pointer transition-all duration-500 ${
              showanswer === 4 ? "mb-10" : "mb-4"
            }`}
          >
            {/* Question no 3 */}
            <div className="flex justify-between ">
              <h1 className="text-xl font-semibold text-white ml-5">
                How much does Netflix cost?
              </h1>{" "}
              {showanswer === 4 ? (
                <FaMinus fontSize={"25px"} color="white" />
              ) : (
                <FaPlus fontSize={"25px"} color="white" />
              )}
            </div>
            {/* Smooth answer section */}
            {showanswer === 4 && (
              <div className="transition-all duration-500 overflow-hidden mt-4">
                <p
                  style={{ backgroundColor: "rgb(39, 39, 39)" }}
                  className="rounded-2xl p-4 text-white text-xl font-semibold bg-hoverGray "
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

      <div style={{ backgroundColor: "rgb(15, 15, 15)" }}>
        <footer className="text-gray-300 py-8 sm:ml-44 ">
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-4 md:ml-9 gap-4 text-sm  ml-5">
            <div>
              <ul className="cursor-pointer">
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
              <ul className="cursor-pointer">
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
              <ul className="cursor-pointer">
                <li className="mt-5 underline underline-offset-1">Privacy</li>
                <li className="mt-5 underline underline-offset-1">
                  Cookie Preferences
                </li>
                <li className="mt-5 underline underline-offset-1">
                  Corporate Information
                </li>
                <li className="mt-5 underline underline-offset-1">
                  Contact Us
                </li>
              </ul>
            </div>
            <div>
              <ul className="cursor-pointer">
                <li className="mt-5 underline underline-offset-1">
                  Speed Test
                </li>
                <li className="mt-5 underline underline-offset-1">
                  Legal Notices
                </li>
                <li className="mt-5 underline underline-offset-1">
                  Only on Netflix
                </li>
              </ul>
            </div>
          </div>
          <div className="border-gray-400 border rounded-full p-1 w-36 sm:ml-9 ml-7 mt-10 ">
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-white text-xl pl-3"
            />
            <select className=" bg-transparent outline-none rounded-3xl text-sm text-white font-semibold pl-3">
              <option className="bg-transparent text-black">English</option>
              <option className="bg-transparent text-black">Hindi</option>
            </select>
          </div>
          <p className="sm:ml-9  ml-8 mt-12 mb-20">Netflix India</p>
        </footer>
      </div>

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
