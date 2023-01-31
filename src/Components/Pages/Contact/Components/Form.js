import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Form() {
  return (
    <>
      <div className="container mx-auto text-center text-white w-[580px] mb-16">
        <p className="text-2xl mb-8 text-left">
          We’d love to hear from you and show you more of our work! Just fill
          out the form and you will hear from one of us.
        </p>
        <div className="text-left mb-16">
          <a className="text-2xl font-medium" href="/">
            hello@tej.life
          </a>
        </div>
        <hr />
        <input
          className=" bg-[#1b1d1d] border mt-16 w-full h-10 p-4"
          placeholder="your email"
        ></input>
        <p className="text-2xl mt-8 text-left ">
          What would you like to discuss?
        </p>
        <p className="text-xl mt-2 text-left ">I am looking for a job</p>
        <p className="text-xl mt-2 text-left ">
          I want to discuss a pontential project
        </p>
        <p className="text-xl mt-2 text-left ">I am a partner/vendor</p>
        <p className="text-xl mt-2 text-left ">I just want to talk</p>
        <input
          className=" bg-[#1b1d1d] border mt-16 w-full h-40 p-4"
          placeholder="tell us a bit more if you would like"
        ></input>
        <p className="text-2xl mt-8 text-left ">
          Ever wonder where people find the best news, GIFs, and trends from
          across the Internet? Subscribe to our Internet Brunch to see our
          secret recipe.
        </p>
        <p className="text-lg mt-8 text-left ">
          By checking the box above, you agree that Big Spaceship may, in
          accordance with our privacy policy, collect and use your personal data
          entered in this form to provide you with our newsletters. As always,
          you can opt-out of this by clicking unsubscribe at the bottom of the
          email at any time.
        </p>
        <button className="inline-flex mt-16" href>
              <span
                href="/"
                class="h-12 flex items-center justify-center text-lg px-8 border bg-[#c8c0b0] border-[#c8c0b0] hover:bg-[#1b1d1d] text-[#1b1d1d] hover:text-white transition duration-500 ease-in-out"
              >
                submit
              </span>
              <span
                href="/"
                class="h-12 w-12 flex-shrink-0 flex items-center text-lg justify-center border border-l-0 border-[#c8c0b0] bg-[#c8c0b0] hover:bg-[#1b1d1d] text-[#1b1d1d] hover:text-white transition duration-500 ease-in-out"
              >
                <AiOutlineArrowRight />
              </span>
            </button>
      </div>
    </>
  );
}
