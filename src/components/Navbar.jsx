import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const link = [
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
      link: "portfolio",
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
  return (
    <div className="flex justify-between items-center bg-[#000] w-full h-20 z-10 fixed px-5 text-white">
      <div>
        <img src={logo} alt="Logo" className="w-20 h-20" />
      </div>

      <ul className="flex">
        {link.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-medium relative duration-300 hover:text-blue-400 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-blue-400 before:scale-x-0 before:origin-left hover:before:scale-x-100 hover:before:origin-right capitalize hidden md:block"
          >
            {link}
          </li>
        ))}
      </ul>
      <div
        onClick={handleClick}
        className="cursor-pointer pr-4 z-10 md:hidden text-gray-400 "
      >
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {nav && (
        <ul className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 md:hidden">
          {link.map(({ id, link }) => (
            <li
              key={id}
              className=" px-4 py-6 text-4xl cursor-pointer capitalize hover:scale-125 duration-150 text-gray-500 hover:text-blue-400 "
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
