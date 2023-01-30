import React from "react";
import leMugs from "../Assests/leMugs.jpg";


export default function RecentWork() {
    return(
        <>
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
      </div>
        </>
    );
}
