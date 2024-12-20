import React from "react";
import netfliximg from "../assets/netfliximg.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: netfliximg,
      demo: "https://netflix-home-page-vs.vercel.app/",
      code: "https://github.com/Visheshshah0807/netflixhomepage.git",
    },
    // {
    //   id: 2,
    //   src: img,
    //   demo: "demo link",
    //   code: "code link",
    // },
    // Add more projects as needed
  ];

  return (
    <div
      name="projects"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white pt-20"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto p-4 w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6 text-xl font-semibold">
            Check out some of my projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-5 sm:px-0">
          {projects.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-300 rounded-lg">
              {/* Make the image clickable */}
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt={`Project ${id}`}
                  className="rounded-md duration-200 hover:scale-105 cursor-pointer"
                />
              </a>
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110"
                  onClick={() => window.open(demo, "_blank")} // Open Demo link in a new tab
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110"
                  onClick={() => window.open(code, "_blank")} // Open Code link in a new tab
                >
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
