import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  const d = new Date();
  return (
    <div className="footer text-center p-4 w-full flex items-center justify-around text-white">
      <p className="text-xl w-1/4 font-semibold">
        Leonel Barrientos. 2020-{d.getFullYear()}
      </p>
      <ul className="flex flex-row text-3xl cursor-pointer text-White w-3/4 items-center justify-evenly">
        <li>
          <a
            href="https://github.com/leobarrientos02"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/leonel-barrientos-519b5a152/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        {/* <li>
            <a href="https://twitter.com/L3O_BARRI3nT0S" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </li> */}
        <li>
          <a
            href="https://www.instagram.com/leonel_barrientos02/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};
