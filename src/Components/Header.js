import React from "react";

export default function Header({ isOpen, setIsOpen }) {
  return (
    <div className="flex px-2 py-1 shadow-lg shadow-bg-gray-600">
      {/* hamburger */}
      <div className="flex items-start">
        <button
          className="flex top-3 left-5 z-20 relative w-10 h-10 text-black focus:outline-none w-1/4 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="absolute w-5 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
              className={`absolute h-0.5 w-5 transform transition duration-300 ease-in-out ${
                isOpen
                  ? "rotate-45 delay-200 bg-white"
                  : "-translate-y-1.5 bg-black"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 transform transition-all duration-200 ease-in-out ${
                isOpen
                  ? "w-0 opacity-50"
                  : "w-5 delay-200 opacity-100 bg-black"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-5 transform transition duration-300 ease-in-out ${
                isOpen
                  ? "-rotate-45 delay-200 bg-white"
                  : "translate-y-1.5 bg-black"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* image */}
      <div className="flex items-center mx-auto">
        <img
          className="h-16"
          src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
          alt=""
        />
      </div>
    </div>
  );
}
