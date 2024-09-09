import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <header className="bg-white relative shadow-md z-50">
      <nav className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-gray-800 text-3xl font-extrabold">
          <span className="text-purple-800">Jo</span>
          <span className="text-purple-600">Find</span>
        </h1>
        <ul className="hidden md:flex items-center gap-8">
          <li className="">
            <Link
              to="/"
              className="text-gray-700 hover:text-purple-800 hover:underline transition-all duration-300 font-semibold"
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link className="text-gray-700 hover:text-purple-800 hover:underline transition-all duration-300 font-semibold">
              Find Jobs
            </Link>
          </li>
          <li className="">
            <Link className="text-gray-700 hover:text-purple-800 hover:underline transition-all duration-300 font-semibold">
              About Us
            </Link>
          </li>
          <li className="">
            <Link className="text-gray-700 hover:text-purple-800 hover:underline transition-all duration-300 font-semibold">
              Contact
            </Link>
          </li>
        </ul>
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMobileMenu(true)}
        >
          <FaBars size={24} />
        </button>
        <div className="relative hidden md:block">
          <img
            src="https://picsum.photos/200"
            alt="Profile Pic"
            height={40}
            width={40}
            className="rounded-full border-2 border-purple-600 hover:shadow-lg transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setIsDropDown(true)}
            onMouseLeave={() => setIsDropDown(false)}
          />
          <div
            className={`absolute py-2 right-0 w-48 bg-white rounded-md shadow-xl flex-col border ${
              isDropDown ? "flex" : "hidden"
            } `}
            onMouseEnter={() => setIsDropDown(true)}
            onMouseLeave={() => setIsDropDown(false)}
          >
            <Link className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-all duration-300">
              Account
            </Link>
            <Link className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-all duration-300">
              Profile
            </Link>
            <Link className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-all duration-300">
              Log Out
            </Link>
          </div>
        </div>
      </nav>
      {isMobileMenu && (
        <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-9/12 bg-white shadow-lg z-20 transform ${
          isMobileMenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h1 className="text-gray-800 text-3xl font-extrabold">
            <span className="text-purple-800">Jo</span>
            <span className="text-purple-600">Find</span>
          </h1>
          <button
            className="text-gray-800"
            onClick={() => setIsMobileMenu(false)}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-8 mt-8">
          <li className="">
            <Link className="text-gray-700 hover:text-purple-800 hover:underline transition-all duration-300 font-semibold">
              Home
            </Link>
          </li>
          <li className="">
            <Link className="text-gray-700 hover:text-purple-800 hover:underline transition-all duration-300 font-semibold">
              Find Jobs
            </Link>
          </li>
          <li className="">
            <Link className="text-gray-700 hover:text-purple-800 hover:underline transition-all duration-300 font-semibold">
              About Us
            </Link>
          </li>
          <li className="">
            <Link className="text-gray-700 hover:text-purple-800 hover:underline transition-all duration-300 font-semibold">
              Contact
            </Link>
          </li>
          <li className="relative" onClick={() => setIsDropDown(!isDropDown)}>
            <button
              type=""
              className="flex items-center text-gray-700 font-semibold"
            >
              <FaUserCircle size={24} />
              <span className="ml-2">Profile</span>
            </button>
            <div
              className={`absolute py-2 right-0 w-48 mt-1 bg-white rounded-md shadow-xl flex-col border ${
                isDropDown ? "flex" : "hidden"
              } z-30`}
            >
              <Link className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-all duration-300">
                Account
              </Link>
              <Link className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-all duration-300">
                Profile
              </Link>
              <Link className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-all duration-300">
                Log Out
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
