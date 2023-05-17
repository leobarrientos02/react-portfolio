import React from "react";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Resume from "../resume/Leonel Enrique Barrientos.htm";

export const Header = () => {
  return (
    <div className="header flex flex-wrap flex-row w-2/3 p-3 items-center border-t border-gray-200">
      <Link to="/" className="flex items-center text-2xl w-1/4">
        <div className="logo-div flex flex-row items-center">
          <FaCode className=" Logo bg-gray-200 mx-1 rounded-full shadow-lg shadow-blue-300" />
          <span className="font-bold">Portfolio</span>
        </div>
      </Link>
      <ul className="header-links flex flex-row justify-around items-center w-3/4 text-2xl">
        <li className="cursor-pointer hover:underline" id="project">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="cursor-pointer hover:underline" id="about">
          <NavLink to="/about">About Me</NavLink>
        </li>
        <li className="cursor-pointer hover:underline" id="contact">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <a href={Resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};
