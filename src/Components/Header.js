import React from "react";

export default function Header() {
  return (
    <div className="flex px-2 py-1 shadow-lg shadow-bg-gray-600">
      {/* hamburger */}
      {/* <div className="flex justify-center">
        <button onClick={handleHamburger} className="space-y-2 ">
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
        </button>

      </div> */}

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
