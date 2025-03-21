import React, { useState } from "react";
import Netflix_logo from "../assets/images/Netflix_logo.png";
import {
  FaHandHolding,
  FaHandshake,
  FaHeart,
  FaMinus,
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
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [showanswer, setShowanswer] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [setMovie, setSelectMovie] = useState(null);
  const [email, setEmail] = useState("");

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
      src: paul_miketyson,
      title: "Paul vs Mike Tyson",
      year: "2024",
      rating: "UA 16+",
      type: "Movie",
      genres: ["Action", "Drama"],
      description: "A thrilling match between two boxing legends.",
    },
    {
      id: 2,
      src: Nayanthara,
      title: "Nayanthara",
      year: "2023",
      rating: "UA 13+",
      type: "Movie",
      genres: ["Drama", "Romance"],
      description: "A heartfelt story of love and resilience.",
    },
    {
      id: 3,
      src: khel_khel_mein,
      title: "Khel Khel Mein",
      year: "2024",
      rating: "UA 16+",
      type: "Movie",
      genres: ["Comedy", "Drama"],
      description: "A fun-filled drama with unexpected twists.",
    },
    {
      id: 4,
      src: animal,
      title: "Animal",
      year: "2023",
      rating: "UA 18+",
      type: "Movie",
      genres: ["Action", "Thriller"],
      description: "A raw and intense action-packed thriller.",
    },
    {
      id: 5,
      src: The_buckingham,
      title: "The Buckingham",
      year: "2022",
      rating: "UA 16+",
      type: "Movie",
      genres: ["Mystery", "Drama"],
      description: "A mysterious tale set in a historic mansion.",
    },
    {
      id: 6,
      src: do_patti,
      title: "Do Patti",
      year: "2024",
      rating: "UA 13+",
      type: "Movie",
      genres: ["Thriller", "Drama"],
      description: "A suspenseful drama with dual identities.",
    },
    {
      id: 7,
      src: GOAT,
      title: "GOAT",
      year: "2024",
      rating: "UA 16+",
      type: "Movie",
      genres: ["Action", "Sports"],
      description: "A sports drama about the greatest of all time.",
    },
    {
      id: 8,
      src: kapil_sharma_show,
      title: "Kapil Sharma Show",
      year: "2023",
      rating: "UA 13+",
      type: "Show",
      genres: ["Comedy", "Talk Show"],
      description: "A hilarious talk show with celebrity guests.",
    },
    {
      id: 9,
      src: devara,
      title: "Devara",
      year: "2024",
      rating: "UA 16+",
      type: "Movie",
      genres: ["Action", "Drama"],
      description: "An epic tale of power and vengeance.",
    },
    {
      id: 10,
      src: stranger_things,
      title: "Stranger Things",
      year: "2022",
      rating: "UA 16+",
      type: "Show",
      genres: ["Sci-Fi", "Horror"],
      description: "A thrilling sci-fi adventure in a small town.",
    },
    {
      id: 11,
      src: lucifer,
      title: "Lucifer",
      year: "2021",
      rating: "UA 16+",
      type: "Show",
      genres: ["Drama", "Fantasy"],
      description: "A devilish tale with a twist of humor.",
    },
    {
      id: 12,
      src: cobra_kai,
      title: "Cobra Kai",
      year: "2022",
      rating: "UA 13+",
      type: "Show",
      genres: ["Action", "Drama"],
      description: "The Karate Kid saga continues.",
    },
    {
      id: 13,
      src: queen_of_tears,
      title: "Queen of Tears",
      year: "2023",
      rating: "UA 13+",
      type: "Show",
      genres: ["Romance", "Drama"],
      description: "A touching story of love and tears.",
    },
    {
      id: 14,
      src: tribhuvan,
      title: "Tribhuvan Mishra",
      year: "2024",
      rating: "UA 16+",
      type: "Show",
      genres: ["Comedy", "Drama"],
      description: "A quirky tale of modern life.",
    },
    {
      id: 15,
      src: helicopter_heist,
      title: "Helicopter Heist",
      year: "2023",
      rating: "UA 16+",
      type: "Movie",
      genres: ["Action", "Crime"],
      description: "A daring heist in the skies.",
    },
    {
      id: 16,
      src: king_the_land,
      title: "King the Land",
      year: "2023",
      rating: "UA 13+",
      type: "Show",
      genres: ["Romance", "Comedy"],
      description: "A royal romantic comedy.",
    },
    {
      id: 17,
      src: my_demon,
      title: "My Demon",
      year: "2023",
      rating: "UA 16+",
      type: "Show",
      genres: ["Fantasy", "Romance"],
      description: "A demon finds love unexpectedly.",
    },
    {
      id: 18,
      src: sector_36,
      title: "Sector 36",
      year: "2024",
      rating: "UA 18+",
      type: "Movie",
      genres: ["Thriller", "Crime"],
      description: "A dark crime thriller.",
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
      <div className="pt-2 px-4 sm:px-6 md:px-10 flex flex-wrap justify-between items-center">
        <div className="flex-shrink-0">
          <img
            src={Netflix_logo}
            alt="Netflix Logo"
            className="h-12 sm:h-16 md:h-20 hidden md:block"
          />
          <img
            src={N_logo}
            alt="Netflix Small Logo"
            className="h-8 sm:h-10 md:hidden inline-block"
          />
        </div>
        <div className="flex justify-end  items-center space-x-4 sm:space-x-6  sm:mt-0 w-full sm:w-auto">
          <div className="border border-gray-400 flex items-center rounded-full p-1 w-full max-w-[8rem] sm:max-w-[12rem]">
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-white text-lg sm:text-xl pl-2 flex-shrink-0"
            />
            <select
              className="bg-transparent outline-none text-xs sm:text-sm text-white font-semibold pl-2 w-full appearance-none cursor-pointer"
              defaultValue="English"
            >
              <option value="English" className="bg-gray-800 text-white">
                English
              </option>
              <option value="Hindi" className="bg-gray-800 text-white">
                Hindi
              </option>
            </select>
          </div>

          <NavLink
            to="/signIn"
            className="bg-white w-16 sm:w-full text-center text-sm sm:text-lg p-0 text-black px-3 py-1 rounded-2xl font-semibold hover:bg-slate-200"
          >
            Sign In
          </NavLink>
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

      <div className="flex justify-center w-[400px] sm:w-full p-5 items-center text-white mt-10">
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
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 ml-7 sm:ml-40 scrollbar-hide">
            {trendingMovies.slice(0, 9).map(renderMovieCard)}
            {[
              cobra_kai,
              helicopter_heist,
              king_the_land,
              lucifer,
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
        </div>
      </div>

      {/* Another Cards */}

      <div className="">
        <div className="mt-8">
          <div className="text-3xl font-bold text-white mb-4 ml-7 sm:ml-40">
            Only On Netflix
          </div>
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 ml-7 sm:ml-40 scrollbar-hide">
            {trendingMovies.slice(0, 9).map(renderMovieCard)}
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
        </div>

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
                className="absolute top-4 right-4 text-white text-3xl hover:bg-gray-500 transition-colors duration-300 py-3 rounded-full w-8 h-11 flex items-center justify-center"
                onClick={closePalette}
              >
                {" "}
                x{" "}
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
