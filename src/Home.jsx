import React from "react";
import { TiArrowRightThick } from "react-icons/ti";
import HeroImage from "../src/assets/VisheshShah BGR.png"; // Ensure the image path is correct
import Typewriter from "./components/typewritter";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen pt-20 md:pt-0 w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-7xl font-bold text-gray-400 md:pb-3 ">
            Hello, I'm
          </h1>
          <h2 className="text-4xl md:pb-3 sm:text-7xl font-bold">
            Vishesh Shah
          </h2>
          <h3 className="text-2xl  font-semibold text-gray-300">
            <Typewriter />
          </h3>
          <p className="text-gray-400 py-4 max-w-md">
            Passionate Computer Science Engineering student and AWS Cloud
            Practitioner, leading CodeChef BU Club. Dedicated to innovative tech
            solutions, fostering learning, and collaborating on projects that
            merge creativity with functionality.
          </p>

          <div className="mt-8 flex ">
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 font-bold"
            >
              Projects
              <span className="ml-1 group-hover:rotate-90 duration-300">
                <TiArrowRightThick size={25} />
              </span>
            </Link>
            <a
              href="https://drive.google.com/file/d/1VUvASNsBkFSZ4ELrN76OgFwVpyvBOudN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="group md:hidden text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 font-bold ml-10">
                Resume
                <span className="ml-1 group-hover:rotate-90 duration-300">
                  <TiArrowRightThick size={25} />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={HeroImage}
            alt="Vishesh Shah's profile"
            className=" rounded-lg mx-auto w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
