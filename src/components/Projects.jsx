import React from "react";
import netfliximg from "../assets/netfliximg.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: netfliximg,
    },
    {
      id: 2,
      src: netfliximg,
    },
    {
      id: 3,
      src: netfliximg,
    },
    {
      id: 4,
      src: netfliximg,
    },
    {
      id: 5,
      src: netfliximg,
    },
    {
      id: 6,
      src: netfliximg,
    },
  ];
  return (
    <div
      name="projects"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white" // Changed h-screen to min-h-screen to allow content to determine height
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto p-4 w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6 text-xl">Check out some of my projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-300 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;