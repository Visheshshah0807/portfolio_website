import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20" // Changed h-screen to min-h-screen to allow content to determine height
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20 px-5">
          Hello! I am Vishesh Shah, a dedicated and enthusiastic Computer
          Science Engineering student at Bennett University. I specialize in
          creating innovative solutions to real-world problems through
          technology. My journey as a developer has been fueled by my curiosity
          and passion for building projects that merge creativity with
          functionality. I am certified as an AWS Cloud Practitioner, which has
          strengthened my knowledge of cloud infrastructure and services. This
          certification has helped me integrate cloud solutions into my
          projects, ensuring scalability and reliability. I am passionate about
          learning and experimenting with new technologies. Whether it’s
          designing efficient algorithms, developing seamless user interfaces,
          or implementing AI models, I am always eager to explore, innovate, and
          improve. I believe every challenge is an opportunity to grow, and I
          approach each project with dedication and enthusiasm.
        </p>

        <br />

        <p className="text-xl px-5">
          As the President of the CodeChef BU Club, I actively lead initiatives
          to foster a culture of learning and collaboration among tech
          enthusiasts. I have organized and conducted numerous events, including
          competitive coding sessions, problem-solving idea challenges, and
          technical workshops. These experiences have honed my leadership,
          communication, and teamwork skills while inspiring me to stay at the
          forefront of emerging technologies. Thank you for visiting my
          portfolio! I am always open to collaborations, discussions, and new
          ideas. Feel free to explore my work and connect with me to share your
          thoughts or collaborate on exciting projects.
        </p>
      </div>
    </div>
  );
};

export default About;
