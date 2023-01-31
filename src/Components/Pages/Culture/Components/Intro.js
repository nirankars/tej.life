import React from "react";
import Culture1 from "../Assets/Culture1.png";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Intro() {
  return (
    <>
      <div className="container mx-auto text-white">
        <div className="flex gap-10">
          <div className="basis-1/2">
            <h1 className="text-8xl font-bold mt-64 text-[#7b8291]">
              bring your <br /> unique self
            </h1>
          </div>
          <div className="basis-1/2">
            <p className="text-2xl mt-64 ml-56">
              Taking care of each other is core to how we operate at Big
              Spaceship. We strive to foster a culture of inclusivity where we
              take care of each other, regardless of age, gender identity, race,
              sexual orientation, religion, physical or mental ability, or
              ethnicity. We encourage everyone to bring their whole self and
              unique perspective to work every day; and we expect everyone to
              accept, respect, and value the unique perspectives and viewpoints
              of others. We commit to providing an environment where all members
              of our crew feel safe, respected, and that they belong.
              <br />
              <br />
              Big Spaceship’s approach to diversity, equity and inclusion (DEI)
              starts with treating it as a fundamental organizational priority.
              We identify diverse talent and foster a culture of inclusivity
              that not only allows us to deliver against our goals but also
              ensures a safe space for all employees. We know and believe that
              diversity in all aspects makes us better in everything we do.
            </p>
          </div>
        </div>

        <div className="mt-40 grid grid-flow-col gap-10">
          <div>
            <img src={Culture1} alt="" />
          </div>
          <div>
            <img src={Culture1} alt="" />
          </div>
          <div>
            <img src={Culture1} alt="" />
          </div>

          <button className="block">
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
