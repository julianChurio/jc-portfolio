import React from "react";
import wanderLogo from "../../assets/images/wanderlove-logo.png";
import favLogo from "../../assets/images/favshop.png";

const Proyectos = () => {
  return (
    <section>
      <div>
        <h2 className="text-3xl p-5 text-sky-600 font-medium dark:text-sky-400 text-center">
          Projects I've worked on
        </h2>
        {/* PRIMER PROYECTO */}
        <div className="flex justify-center gap-20 flex-col md:flex-row">
          <div className="flex flex-col items-center p-10 rounded-3xl shadow-2xl">
            <img src={wanderLogo} alt="" className="w-48 h-48" />
            <h3 className="text-2xl mx-auto">Wanderlove</h3>
            <p className="text-lg">A freelance project I've done with a partner</p>
            <div className="flex w-full justify-center gap-5 pt-5">
              <a
                href="https://github.com/GiulianoLucco/proyectoWanderlove"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-gradient-to-r from-sky-400 to-sky-500 text-white px-4 py-2 rounded-md ">
                  Code
                </button>
              </a>
              <a
                href="https://proyecto-wanderlove-ritb2z06m-giulianolucco.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-gradient-to-r from-sky-400 to-sky-500 text-white px-4 py-2 rounded-md ">
                  Demo
                </button>
              </a>
            </div>
          </div>
          {/* SEGUNDO PROYECTO */}
          <div className="flex flex-col items-center p-10 rounded-3xl shadow-2xl">
            <img src={favLogo} alt="" className="w-48 h-48 mx-auto" />
            <h3 className="text-2xl">favShop</h3>
            <p className="text-lg">A project to close out my React course at Coderhouse</p>
            <div className="flex w-full justify-center gap-5 pt-5">
              <button className="bg-gradient-to-r from-sky-400 to-sky-500 text-white px-4 py-2 rounded-md ">
                Code
              </button>
              <button className="bg-gradient-to-r from-sky-400 to-sky-500 text-white px-4 py-2 rounded-md ">
                Demo
              </button>
            </div>
          </div>
          {/* FIN DE PROYECTOS */}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
