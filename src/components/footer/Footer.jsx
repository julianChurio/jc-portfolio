import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-5xl flex p-12 justify-evenly flex-col sm:flex-row text-center gap-10">
      <div className="flex flex-col">
        <p className="">Contact me!</p>
        <div className="flex flex-row justify-evenly p-4">
          <a href="https://github.com/julianChurio" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/churiojulian/" target="_blank" rel="noreferrer">
            <AiFillLinkedin />
          </a>
          <a
            className="bg-gradient-to-r from-sky-400 to-sky-500 text-white rounded-md text-lg self-center p-2"
            href="https://drive.google.com/file/d/1r81uueGdya8nkZDXEPa7_UaADROjpj0-/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="">
        <p>Created with</p>
        <div className="flex flex-row justify-evenly p-4">
          <div>
            <FaReact className="text-react mx-auto" />
            <p className="text-xl">React</p>
          </div>
          <div>
            <SiTailwindcss className="text-tailwind mx-auto" />
            <p className="text-xl">Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
