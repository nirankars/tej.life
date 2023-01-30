import React from "react";

export default function WorkIntro() {
  return (
    <>
      <div className="text-white container mx-auto">
        <div className="flex gap-10">
          <div className="basis-1/2">
            <h1 className="text-8xl font-bold mt-64 text-[#7b8291]">thinking and making at the same time</h1>
          </div>
          <div className="basis-1/2">
            <p className="text-2xl mt-64 ml-56">
              We believe in the importance of pushing creativity upstream and
              finding ways to bring experimentation into the process, without
              messing up what’s already working.
              <br />
              <br />
              To get there, we test solutions as we develop insights, and we use
              our deep knowledge of culture and behavior to ensure that we’re
              rock-solid in our ideas, but not too precious with the outputs.
              <br />
              <br />
              What does this mean for you? Work that meets your business goals –
              while still putting people in the center.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
