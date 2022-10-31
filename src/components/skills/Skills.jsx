import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3, FaReact, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { DiSass } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <section className="pb-20 sm:pb-10">
      <>
        <h2 className="text-3xl py-5 text-sky-600 dark:text-sky-400 font-medium text-center">
          Skills I've learned
        </h2>
        <div className="flex text-7xl dark:text-gray-200 justify-center gap-6 pt-5">
          <div className="flex sm:flex-row flex-col gap-6">
            <div>
              <AiFillHtml5 className="text-html mx-auto" />
              <p className="text-base font-bold text-center">HTML5</p>
            </div>
            <div>
              <FaCss3 className="text-css  mx-auto" />
              <p className="text-base font-bold text-center">CSS</p>
            </div>
            <div>
              <FaBootstrap className="text-bootstrap mx-auto" />
              <p className="text-base font-bold text-center">Bootstrap</p>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-6">
            <div>
              <SiTailwindcss className="text-tailwind mx-auto" />
              <p className="text-base font-bold text-center">Tailwind CSS</p>
            </div>
            <div>
              <DiSass className="text-pink-500" />
              <p className="text-base font-bold text-center">Sass</p>
            </div>
            <div>
              <FaGitAlt className="text-orange-500 mx-auto" />
              <p className="text-base font-bold text-center">Git</p>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-6">
            <div>
              <IoLogoJavascript className="bg-yellow-400 rounded mx-auto text-black p-4" />
              <p className="text-base font-bold text-center">JavaScript</p>
            </div>
            <div>
              <FaReact className="text-react mx-auto" />
              <p className="text-base font-bold text-center">React</p>
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default Skills;
