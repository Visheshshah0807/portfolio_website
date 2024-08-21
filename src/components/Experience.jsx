import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import flutter from "../assets/flutter.png";
import aws from "../assets/AWS.png";

const Experience = () => {
  const experience = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 7,
      src: node,
      title: "Node",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: flutter,
      title: "Flutter",
      style: "shadow-sky-500",
    },
    {
      id: 9,
      src: aws,
      title: "AWS Cloud Practitioner",
      style: "shadow-white",
    },
  ];

  return (
    <section
      name="experience"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <header>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 text-xl font-semibold">
            Check out some of my work here
          </p>
        </header>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {experience.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={`${title} logo`} className="w-20 mx-auto" />
              <p className="my-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
