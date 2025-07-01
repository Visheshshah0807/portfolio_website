import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import netfliximg1 from "../assets/netfliximg.png";
import findmyjob1 from "../assets/findmyjob.png";
import bmi1 from "../assets/bmi4.jpg";
import bmi2 from "../assets/bmi2 (2).jpg";
import bb2 from "../assets/bb2.jpg";
import bb1 from "../assets/bb1.jpg";
import bb3 from "../assets/bb3.jpg";
import fmj1 from "../assets/fmj1.png";
import fmj2 from "../assets/fmj2.png";
import fmj3 from "../assets/fmj3.png";
import fmj4 from "../assets/fmj4.png";
import fmj5 from "../assets/fmj5.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Find My Job",
      images: [findmyjob1, fmj5, fmj1, fmj2, fmj3, fmj4],
      demo: "https://findmyjobs.vercel.app/",
      code: "https://github.com/Visheshshah0807/FINDMYJOB",
      isMobileApp: false,
    },
    {
      id: 2,
      name: "BMI Tracker App",
      images: [bmi1, bmi2],
      code: "https://github.com/Visheshshah0807/bmi_tracker/tree/master",
      isMobileApp: true,
    },
    {
      id: 3,
      name: "Book Bro App",
      images: [bb1, bb2, bb3],
      code: "https://github.com/BookBro/BookBroo",
      isMobileApp: true,
    },
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

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-5 sm:px-0">
          {projects.map(({ id, name, images, demo, code, isMobileApp }) => (
            <div
              key={id}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                // autoplay={{ delay: 2500, disableOnInteraction: false }}
                className="w-full h-48"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`${name} screenshot ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center text-gray-200">
                  {name}
                </h3>

                <div className="flex items-center justify-center gap-4">
                  {!isMobileApp && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:underline font-bold"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300 hover:underline border border-gray-600 font-bold"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
