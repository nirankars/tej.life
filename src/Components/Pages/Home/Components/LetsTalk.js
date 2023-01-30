import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function LetsTalk () {
    return(
        <>
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
            <button className="inline-flex mt-16" href>
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
            </button>
          </div>
        </div>
      </div>

      {/* lets talk ends */}
        </>
    );
}