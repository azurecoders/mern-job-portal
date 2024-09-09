import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-700 to-blue-600 text-white min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Discover Your <span className="text-yellow-400">Future</span> With{" "}
            <span className="text-yellow-400">JoFind</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 text-gray-200">
            The platform where opportunities meet talent. Whether you're looking
            to hire or get hired, JoFind brings you closer to your career goals.
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-1 justify-center md:space-x-4 space-x-1 w-full">
            <Link className="bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-500 hover:shadow-2xl transition-all duration-300">
              Get Started
            </Link>
            <Link className="text-white flex items-center font-semibold py-3 px-8 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300 text-center justify-center">
              <span>Learn More</span>
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
