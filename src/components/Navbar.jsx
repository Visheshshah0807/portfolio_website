import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
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
            className="px-4 cursor-pointer font-medium relative duration-300 hover:text-gray-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-gray-300 before:scale-x-0 before:origin-left hover:before:scale-x-100 hover:before:origin-right capitalize hidden md:block"
          >
            {link}
          </li>
        ))}
      </ul>
      <FaBars className="block md:hidden text-3xl cursor-pointer" />
    </div>
  );
};

export default Navbar;
