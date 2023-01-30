import React from "react";
import leMugs from "../Assests/leMugs.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function RecentWork() {
    return(
        <>
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
        </>
    );
}
