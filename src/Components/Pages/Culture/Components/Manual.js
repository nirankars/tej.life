import React from "react";
import Manualimg from "../Assets/Manualimg.jpeg";

export default function Manual() {
  return (
    <>
      <div className="container mx-auto text-white mt-32 mb-32">
        <img src={Manualimg} className="w-full" alt="img" />

        <div className="flex gap-10 text-right">
          <div className="basis-1/2">
            <h1 className="text-8xl font-bold mt-20 text-[#7b8291]">
              our <br /> manual
            </h1>
          </div>
          <div className="basis-1/2">
            <p className="text-2xl mt-28 ml-20">
              During a hack day, a few folks wrote and illustrated a book
              explaining the way we work in detail. It's doesn’t give details
              about 401k's or instructions for email setup. Rather it shares how
              we make decisions as a team and as a company.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
