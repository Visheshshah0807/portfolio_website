import React from "react";
import { TiArrowRightThick } from "react-icons/ti";
import HeroImage from "../src/assets/vishesh.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
        <div>
          <h2>Hi, I'm Vishesh</h2>
          <p>I'm a Web Developer</p>
          <div>
            <button className="flex items-center">
              Portfolio
              <span className="px-1">
                <TiArrowRightThick />
              </span>
            </button>
          </div>
        </div>
        <div className="px-10">
          <img
            src={HeroImage}
            alt="my profile"
            className=" rounded-lg mx-auto w-2/3 md:w-full size-[28rem] drop-shadow-[0_0px_35px_rgba(255,255,255,1.0)]
"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
