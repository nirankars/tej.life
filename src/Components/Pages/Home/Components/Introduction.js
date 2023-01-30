import React from "react";

export default function Introduction() {
  return (
    <>
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

      {/*  */}

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
    </>
  );
}
