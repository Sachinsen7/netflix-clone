import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div style={{ backgroundColor: "rgb(15, 15, 15)" }}>
      <footer className="text-gray-300 py-8 sm:ml-44 ">
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
        <div className="border-gray-400 border rounded-full p-1 w-36 sm:ml-9 ml-7 mt-10 ">
          <FontAwesomeIcon icon={faGlobe} className="text-white text-xl pl-3" />
          <select className=" bg-transparent outline-none rounded-3xl text-sm text-white font-semibold pl-3">
            <option className="bg-transparent text-black">English</option>
            <option className="bg-transparent text-black">Hindi</option>
          </select>
        </div>
        <p className="sm:ml-9  ml-8 mt-12 mb-20">Netflix India</p>
      </footer>
    </div>
  );
}

export default Footer;
