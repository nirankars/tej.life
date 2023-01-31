import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  // const navigate = useNavigate();

  return (
    <div className="">
      <nav className={showNavbar ? "bg-slate-50" : "text-[#f2f6f9]"}>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 pt-4">
          <a href="/" className="">
            <h1
              className={
                showNavbar
                  ? "text-4xl font-bold col-start-1 ml-20 text-[black] transition-all"
                  : "text-4xl font-bold col-start-1 ml-20 text-[#f2f6f9] transition-all"
              }
            >
              <span>तेज़</span> Life
            </h1>
          </a>

          <button
            type="button"
            className={
              showNavbar
                ? "text-4xl col-end-4 mr-20 text-black transition-all"
                : "text-4xl col-end-4 mr-20 text-[#f2f6f9] transition-all"
            }
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <GiHamburgerMenu />
          </button>
        </div>

        <div
          className={
            showNavbar
              ? "grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 text-center gap-5 absolute w-full h-auto bg-slate-50 text-black"
              : "grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 text-center gap-5 absolute w-full h-auto lg:top-[-144px] md:top-[-288px] sm:top-[-540px] bg-slate-50 text-black z-10"
          }
        >
          <Link onClick={ () => {setShowNavbar(false)} } to="/work">
            <p className="text-2xl font-medium mt-8">01</p>
            <h1 className="hover:underline underline-offset-4 transition-all text-4xl font-bold font-sans-serif mb-4">
              Work
            </h1>
          </Link>
          <Link onClick={ () => {setShowNavbar(false)} } to="/culture">
            <p className="text-2xl font-medium mt-8">02</p>
            <h1 className="hover:underline underline-offset-4 transition-all text-4xl font-bold font-sans-serif mb-4">
              culture
            </h1>
          </Link>
          <Link onClick={ () => {setShowNavbar(false)} } to="/careers">
            <p className="text-2xl font-medium mt-8">03</p>
            <h1 className="hover:underline underline-offset-4 transition-all text-4xl font-bold font-sans-serif mb-4">
              Careers
            </h1>
          </Link>
          <Link onClick={ () => {setShowNavbar(false)} } to="/contact">
            <p className="text-2xl font-medium mt-8">04</p>
            <h1 className="hover:underline underline-offset-4 transition-all text-4xl font-bold font-sans-serif mb-4">
              contact
            </h1>
          </Link>
        </div>
      </nav>
     
    </div>
  );
}
