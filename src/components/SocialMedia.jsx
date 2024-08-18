import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialMedia = () => {
  const Link = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/vishesh-shah-9a284222b/",
      style: "rounded-tr-md",
    },

    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Visheshshah0807?tab=overview&from=2024-07-01&to=2024-07-16",
    },

    {
      id: 1,
      child: (
        <>
          Twitter <FaTwitter size={30} />
        </>
      ),
      href: "https://x.com/VisheshShah20",
    },

    {
      id: 1,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/visheshshah0807/",
    },

    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:visheshshah0807@gmail.com",
    },

    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "./resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
      <ul>
        {Link.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center bg-gray-500 w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
