import React, { useState } from "react";
import netflixCover from "../assets/SignIn/netflixCover.jpg";
import Netflix_logo from "../assets/Netflix_logo.png";
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
    <div className="min-h-screen w-full relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${netflixCover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-4 sm:p-8">
          <a href="/">
            <img
              src={Netflix_logo}
              alt="Netflix Logo"
              className="sm:h-12 h-8 w-auto cursor-pointer"
            />
          </a>
        </header>

        {/* Sign In Form */}
        <div className="flex-1 flex items-center justify-center py-8">
          <div className="bg-black bg-opacity-75 p-8 sm:p-12 rounded-md w-full max-w-md">
            <h1 className="text-3xl font-bold text-white mb-8">Sign In</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email or mobile number"
                className="w-full h-12 p-4 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full h-12 p-4 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="w-full bg-red-600 text-white h-12 rounded font-semibold hover:bg-red-700 transition-colors duration-300"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 space-y-4">
              <p className="text-center text-gray-400">OR</p>
              <button className="w-full bg-gray-600 text-white h-12 rounded font-semibold hover:bg-gray-700 transition-colors duration-300">
                Use a sign-in code
              </button>
              <a
                href="#"
                className="text-white hover:underline block text-center"
              >
                Forgot Password?
              </a>

              <div className="space-y-4 text-gray-400">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <p>
                  New to Netflix?{" "}
                  <a href="#" className="text-white hover:underline">
                    Sign up now
                  </a>
                </p>
                <p className="text-sm">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.{" "}
                  <a href="#" className="text-blue-400 hover:underline">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black bg-opacity-75 text-gray-400 p-8">
          <div className="max-w-5xl mx-auto">
            <p className="mb-6">Questions? Call 000-800-919-1694</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <a href="#" className="hover:underline">
                FAQ
              </a>
              <a href="#" className="hover:underline">
                Help Centre
              </a>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
              <a href="#" className="hover:underline">
                Privacy
              </a>
              <a href="#" className="hover:underline">
                Cookie Preferences
              </a>
              <a href="#" className="hover:underline">
                Corporate Information
              </a>
            </div>
            <div className="mt-6">
              <div className="inline-flex items-center border border-gray-600 rounded p-2">
                <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                <select className="bg-transparent text-white outline-none">
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default SignIn;
