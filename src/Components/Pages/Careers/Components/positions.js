import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Careers() {
  return (
    <>
      <div className="text-white container mx-auto">
        <div className="flex gap-10">
          <div className="basis-1/2">
            <h1 className="text-8xl font-bold mt-64 text-[#7b8291]">
              open <br /> positions
            </h1>
          </div>
          <div className="basis-1/2">
            <p className="text-2xl mt-64 ml-56">
              Our people are our most important asset and we make every effort
              to treat them as such. They are never viewed as a line item on a
              spreadsheet, or a percentage in a budget, but instead are at the
              fundamental core of who we are.
              <br />
              <br />
              So when it comes to finding the right talent, we treat the process
              with extra care and are always looking for people with a new
              perspective. We mine for those who see the world a little
              differently, who will disrupt our thinking and who will bring
              something extra to add to our crew. And when you give us the best
              of you, we'll give you the best of us.
            </p>
            <button className="inline-flex mt-16 ml-56" href>
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

        <div className="flex gap-10">
          <div className="basis-1/2">
            <h1 className="text-8xl font-bold mt-64 text-[#7b8291]">
              humans <br /> not robots
            </h1>
          </div>
          <div className="basis-1/2">
            <p className="text-2xl mt-64 ml-56">
              We foster a culture of inclusion and welcome applicants of all
              races, genders, ages, identities, orientations, beliefs, abilities
              and experience levels. We pride ourselves on taking care of each
              other, and do not tolerate harassment, discrimination, or hate of
              any kind in our workplace. Our inclusive and nondiscriminatory
              policies and practices permeate throughout every stage of
              employment at Big Spaceship, from recruitment to engagement to
              career development and beyond.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
