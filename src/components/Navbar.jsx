import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      child: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/vishesh-shah-9a284222b/",
    },
    {
      id: 2,
      child: <FaGithub size={30} />,
      href: "https://github.com/Visheshshah0807?tab=overview&from=2024-07-01&to=2024-07-16",
    },
    {
      id: 3,
      child: <FaTwitter size={30} />,
      href: "https://x.com/VisheshShah20",
    },
    {
      id: 4,
      child: <FaInstagram size={30} />,
      href: "https://www.instagram.com/visheshshah0807/",
    },
    {
      id: 5,
      child: <HiOutlineMail size={30} />,
      href: "mailto:visheshshah0807@gmail.com",
    },
    {
      id: 6,
      child: <BsFillPersonLinesFill size={30} />,
      href: "https://drive.google.com/file/d/1IXVtBryJNl04Z-x7s0N3onodI5X5s4QA/view?usp=sharing",
      download: true,
    },
  ];

  return (
    <div className="flex justify-between items-center bg-[#000] w-full h-20 z-10 fixed px-5 text-white">
      <div>
        <Link to="home" smooth duration={500} ><img src={logo} alt="Logo" className="w-20 h-20 cursor-pointer" /></Link>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-medium relative duration-300 hover:text-blue-400 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-blue-400 before:scale-x-0 before:origin-left hover:before:scale-x-100 hover:before:origin-right capitalize"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={handleClick}
        className="cursor-pointer pr-4 z-10 md:hidden text-gray-400"
      >
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {nav && (
        <div className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 md:hidden">
          <ul className="flex flex-col items-center">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 py-6 text-4xl cursor-pointer capitalize hover:scale-125 duration-150 text-gray-500 hover:text-blue-400"
              >
                <Link to={link} smooth duration={500} onClick={handleClick}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          {/* Social media links in a 3x3 grid */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {socialLinks.map(({ id, child, href, download }) => (
              <a
                key={id}
                href={href}
                className="bg-gray-500 w-12 h-12 flex justify-center items-center rounded-md text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
