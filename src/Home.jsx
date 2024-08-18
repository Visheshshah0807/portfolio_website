import React from "react";
import { TiArrowRightThick } from "react-icons/ti";
import HeroImage from "../src/assets/VisheshShah BGR.png";  // Ensure the image path is correct
import Typewriter from "./components/typewritter";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-7xl font-bold text-gray-400">
            Hello, I'm
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold pt-10">
            Vishesh Shah
          </h2>
          <h3 className="text-2xl pt-3 font-semibold text-gray-300">
            <Typewriter />
          </h3>
          <p className="text-gray-400 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
            fugiat doloribus officiis odio corporis tempora exercitationem
            cupiditate, eveniet maxime voluptate accusamus quam laboriosam quia!
            Blanditiis, optio temporibus. Debitis, itaque non.
          </p>
          <div className="mt-8">
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio
              <span className="ml-1 group-hover:rotate-90 duration-300">
                <TiArrowRightThick size={25} />
              </span>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={HeroImage}
            alt="Vishesh Shah's profile"  // Updated alt text for better accessibility and description
            className="rounded-lg mx-auto w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-cover"  // Added object-cover for better image scaling
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
