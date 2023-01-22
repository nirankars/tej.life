import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";
// import { <RxSlash } from "react-icons/rx";
import { useState } from "react";
import leMugs from "../Assests/leMugs.jpg";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div>
      {/*  Navbar Starts */}
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
          <a href="/">
            <p className="text-2xl font-medium mt-8">01</p>
            <h1 className="hover:underline underline-offset-4 transition-all text-4xl font-bold font-sans-serif mb-4">
              home
            </h1>
          </a>
          <a href="/">
            <p className="text-2xl font-medium mt-8">02</p>
            <h1 className="hover:underline underline-offset-4 transition-all text-4xl font-bold font-sans-serif mb-4">
              blockchain
            </h1>
          </a>
          <a href="/">
            <p className="text-2xl font-medium mt-8">03</p>
            <h1 className="hover:underline underline-offset-4 transition-all text-4xl font-bold font-sans-serif mb-4">
              about
            </h1>
          </a>
          <a href="/">
            <p className="text-2xl font-medium mt-8">04</p>
            <h1 className="hover:underline underline-offset-4 transition-all text-4xl font-bold font-sans-serif mb-4">
              contact
            </h1>
          </a>
        </div>
      </nav>
      {/* Navbar ends */}

      {/* Main Starts */}

      <div className="container mx-auto text-white text-8xl font-extrabold mt-64">
        <h1 className="ml-4">
          <span>तेज़</span> <br />
          <span className="ml-12">Life</span>
        </h1>
      </div>
      {/* Part 1 starts */}
      <div className="container mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 text-white ">
        <h2 className="text-8xl text-[#c8c0b0] font-bold mt-96">
          USER-CENTRIC <br /> EXPERIENCES <br /> THAT ACTUALLY <br />{" "}
          <span className="text-8xl">WORK</span>
        </h2>

        <p className="text-2xl lg:mt-[570px] md:mt-16 sm:mt-16 ml-48">
          We have been known for our rich-quality and enhanced solutions for our
          clients A team of strong professionals with backgrounds like working
          in Google, IBM & Merkle Inc. Expertise in Blockchain Integration,
          Enterprise Solutions.
        </p>
      </div>
      {/* Part 1 ends */}

      {/* part 2 starts */}
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-12 text-white">
        <div className="mt-40">
          <h3 className="mb-12 text-2xl text-[#c8c0b0]">
            web <br /> development
          </h3>
          <p className="text-xl mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa culpa
            vitae sunt magnam obcaecati totam ratione sed ipsum tenetur. Ad
            harum unde aliquid provident facere voluptas quae voluptate. Cumque,
            consequatur.
          </p>
        </div>
        <div className="mt-40">
          <h3 className="mb-12 text-2xl text-[#c8c0b0]">
            user interfaces & <br /> experiences
          </h3>
          <p className="text-xl mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa culpa
            vitae sunt magnam obcaecati totam ratione sed ipsum tenetur. Ad
            harum unde aliquid provident facere voluptas quae voluptate. Cumque,
            consequatur.
          </p>
        </div>
        <div className="mt-40">
          <h3 className="mb-12 text-2xl text-[#c8c0b0]">
            logo marks & <br /> brand development
          </h3>
          <p className="text-xl mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa culpa
            vitae sunt magnam obcaecati totam ratione sed ipsum tenetur. Ad
            harum unde aliquid provident facere voluptas quae voluptate. Cumque,
            consequatur.
          </p>
        </div>
        <div className="mt-40">
          <h3 className="mb-12 text-2xl text-[#c8c0b0]">
            enterprise <br /> solutions
          </h3>
          <p className="text-xl mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa culpa
            vitae sunt magnam obcaecati totam ratione sed ipsum tenetur. Ad
            harum unde aliquid provident facere voluptas quae voluptate. Cumque,
            consequatur.
          </p>
        </div>
      </div>
      {/* part 2 ends */}

      {/* recent work starts */}
      <div className="container mx-auto text-white mt-96">
        <h2 className="text-8xl text-[#c8c0b0] font-bold mb-4">
          recent <br /> work
        </h2>
        <hr />

        <div className="flex mt-16">
          <div>
            <h4 className="text-xl flex-initial w-[450px]">company name</h4>
            <p className="text-4xl flex-initial mt-4">project details</p>
          </div>
          <div>
            <img
              src={leMugs}
              alt=""
              className=" hover:scale-110 transition-all h-[600px] mb-16"
            />
          </div>
        </div>
        <hr />
        <div className="flex mt-16">
          <div>
            <h4 className="text-xl flex-initial w-[450px]">company name</h4>
            <p className="text-4xl flex-initial mt-4">project details</p>
          </div>
          <div>
            <img
              src={leMugs}
              alt=""
              className=" hover:scale-110 transition-all h-[600px] mb-16"
            />
          </div>
        </div>
        <hr />
        <div className="flex mt-16">
          <div>
            <h4 className="text-xl flex-initial w-[450px]">company name</h4>
            <p className="text-4xl flex-initial mt-4">project details</p>
          </div>
          <div>
            <img
              src={leMugs}
              alt=""
              className=" hover:scale-110 transition-all h-[600px] mb-16"
            />
          </div>
        </div>
        <hr />
        <div className="text-center mt-8">
          <a class="inline-flex" href>
            <span class="h-12 flex items-center justify-center text-lg px-8 border bg-[#c8c0b0] border-[#c8c0b0] hover:bg-[#1b1d1d] text-[#1b1d1d] hover:text-white transition duration-500 ease-in-out">
              view all cases
            </span>
            <span class="h-12 w-12 flex-shrink-0 flex items-center text-lg justify-center border border-l-0 border-[#c8c0b0] bg-[#c8c0b0] hover:bg-[#1b1d1d] text-[#1b1d1d] hover:text-white transition duration-500 ease-in-out">
              <AiOutlineArrowRight />
            </span>
          </a>
        </div>
      </div>
      {/* recent work ends */}

      {/* in the work ends */}
      <div className="container mx-auto text-white">
        <h4 className="text-4xl flex-initial mb-8 mt-56">in the works</h4>
        <div className="grid grid-cols-3 gap-12">
          <div>
            <hr />
            <p className="mt-4 text-2xl font-normal">
              A first of its kind stock index voice skill for a leading
              international financial services organization.
            </p>
          </div>
          <div>
            <hr />
            <p className="mt-4 text-2xl font-normal">
              A first of its kind stock index voice skill for a leading
              international financial services organization.
            </p>
          </div>
          <div>
            <hr />
            <p className="mt-4 text-2xl font-normal">
              A first of its kind stock index voice skill for a leading
              international financial services organization.
            </p>
          </div>
          <div>
            <hr />
            <p className="mt-4 text-2xl font-normal">
              A first of its kind stock index voice skill for a leading
              international financial services organization.
            </p>
          </div>
          <div>
            <hr />
            <p className="mt-4 text-2xl font-normal">
              A first of its kind stock index voice skill for a leading
              international financial services organization.
            </p>
          </div>
          <div>
            <hr />
            <p className="mt-4 text-2xl font-normal">
              A first of its kind stock index voice skill for a leading
              international financial services organization.
            </p>
          </div>
        </div>
      </div>
      {/* in the work ends */}

      {/* lets talk starts */}
      <div className="mt-40">
        <div className="container mx-auto text-white flex">
          <h1 className="text-[250px] font-extrabold">
            let's <br />
            <span className="ml-[500px]">talk</span>
          </h1>
          <div className=" mt-24">
            <p className="w-96 text-2xl">
              We are always on the lookout for great clients who are passionate
              about their products and customers.
            </p>
            <a className="inline-flex mt-16" href>
              <span
                href="/"
                class="h-12 flex items-center justify-center text-lg px-8 border bg-[#c8c0b0] border-[#c8c0b0] hover:bg-[#1b1d1d] text-[#1b1d1d] hover:text-white transition duration-500 ease-in-out"
              >
                contact us
              </span>
              <span
                href="/"
                class="h-12 w-12 flex-shrink-0 flex items-center text-lg justify-center border border-l-0 border-[#c8c0b0] bg-[#c8c0b0] hover:bg-[#1b1d1d] text-[#1b1d1d] hover:text-white transition duration-500 ease-in-out"
              >
                <AiOutlineArrowRight />
              </span>
            </a>
          </div>
        </div>        
      </div>
      
      {/* lets talk ends */}

      {/* Footer starts */}
      <div className="container mx-auto text-white grid grid-cols-2 mb-8 mt-16">
        <h1 className="mt-4 text-lg ml-8"> <span>तेज़</span> Life</h1>
          <div className="text-lg flex flex-row-reverse">
            <a href="/" className="ml-2">transparency </a>
            <a href="/" className="ml-2">privacy </a>
            <a href="/" className="ml-2">terms </a>
          </div>

      </div>
      {/* Footer ends */}
    </div>
  );
}
