import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="p-3">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center ml-5">
            <h1 className="self-center text-2xl font-bold text-white"><span>तेज</span> Life</h1>
          </a>
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center p-2 mr-5 text-2xl text-white rounded-lg hover:scale-125 transition-all"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-8 h-8"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full" id="navbar-hamburger">
            <ul className="grid grid-cols-4 text-center rounded-lg bg-gray-50">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-[#200034]"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-[#200034]"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text[#200034]"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-[#200034]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
