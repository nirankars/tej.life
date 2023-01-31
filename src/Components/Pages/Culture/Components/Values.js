import React from "react";

export default function Values() {
  return (
    <>
      <div className="container mx-auto text-white">
        <div className="lg:flex md:flex mx-32">
          <div className="basis-1/2 lg:text-right md:text-right">
            <h1 className="text-6xl font-bold mt-64 text-[#7b8291]">
              ourvalues:
            </h1>
          </div>
          <div className="basis-1/2 font-bold lg:text-left md:text-left">
            <p className="text-6xl lg:mt-64 md:mt-64 sm:mt-20">
              take care of each other
              <br />
              <br />
              collaborate inside and out
              <br />
              <br />
              speak up<br />(no silent disagreement)
              <br />
              <br />
              produce amazing work
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
