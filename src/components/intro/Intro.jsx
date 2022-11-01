import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";

const Intro = ({ darkMode, setDarkMode }) => {
  return (
    <section>
      <div className="flex justify-end p-10">
        <BsMoonStarsFill
          onClick={() => setDarkMode(!darkMode)}
          className="cursor-pointer text-2xl dark:text-gray-200"
        />
      </div>

      <div className="text-center">
        <h2 className="text-5xl py-2 text-sky-600 font-medium dark:text-sky-400">Julian Churio</h2>
        <h3 className="text-xl py-2 dark:text-gray-200">Developer and programming enthusiast</h3>
        <div className="text-2xl text-center p-10 pt-4">
          <p className="leading-6 pb-4">
            Passionate tech nerd currently working on my front-end skills.
          </p>
          <p className="leading-6 pb-4">
            I love to constantly be learning, working on adapting to different work environments,
            and forming part of productive teams.
          </p>
          <p className="leading-6">
            I've currently been learning front-end technologies for about 1 year, so being a
            perfectionist at heart, I feel there's always much to learn.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
