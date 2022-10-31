import { useState } from "react";
import "./assets/css/globals.css";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3, FaReact, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import wanderLogo from "./assets/images/wanderlove-logo.png";
import favLogo from "./assets/images/favshop.png";
import Footer from "./components/footer/Footer";
// import placeholder from "./assets/images/appita-placeholder.png";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white min-h-screen dark:bg-gray-900">
        <section>
          <nav className="flex justify-end py-5 px-5">
            <ul className="flex items-center">
              <li>
                <BsMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-gray-200"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://placekitten.com/500/500"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className=" text-5xl py-2 text-teal-500 font-medium">Julian Churio</h2>
            <h3 className="text-2xl py-2">Developer</h3>
            <p className="text-md pt-5 leading-8 text-gray-800">texto :v</p>
          </div>
          {/*         <div className="mt-20">
            <img src={placeholder} alt="" className="rounded-full w-80 h-80 mx-auto" />
          </div> */}
        </section>
        {/* SEGUNDA SECCION */}
        <section>
          <div>
            <h2 className="text-3xl py-2 text-teal-500 font-medium text-center">
              Skills I've learned
            </h2>
            <div className="flex justify-center gap-6 text-5xl dark:text-gray-200">
              <div>
                <AiFillHtml5 className="text-html  mx-auto" />
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
              <div>
                <SiTailwindcss className="text-tailwind  mx-auto" />
                <p className="text-base font-bold text-center">Tailwind CSS</p>
              </div>
              <div>
                <IoLogoJavascript className="bg-yellow-400 rounded  mx-auto text-black p-2" />
                <p className="text-base font-bold text-center">JavaScript</p>
              </div>
              <div>
                <FaReact className="text-react mx-auto" />
                <p className="text-base font-bold text-center">React</p>
              </div>
            </div>
          </div>
        </section>
        {/* TERCERA SECCION */}
        <section>
          <div>
            <h2 className="text-3xl py-2 text-teal-500 font-medium text-center">
              Projects I've worked on
            </h2>
            {/* PRIMER PROYECTO */}
            <div className="flex justify-center gap-20 flex-col md:flex-row">
              <div className="flex flex-col items-center p-10 rounded-3xl shadow-2xl">
                <img src={wanderLogo} alt="" className="w-48 h-48" />
                <h3>Wanderlove</h3>
                <p>A freelance project I've done with a partner</p>
                <div className="flex w-full justify-center gap-5">
                  <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ">
                    Code
                  </button>
                  <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ">
                    Demo
                  </button>
                </div>
              </div>
              {/* SEGUNDO PROYECTO */}
              <div className="flex flex-col items-center p-10 rounded-3xl shadow-2xl">
                <img src={favLogo} alt="" className="w-48 h-48" />
                <h3>favShop</h3>
                <p>A project to close out my React course at Coderhouse</p>
                <div className="flex w-full justify-center gap-5">
                  <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ">
                    Code
                  </button>
                  <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ">
                    Demo
                  </button>
                </div>
              </div>
              {/* FIN DE PROYECTOS */}
            </div>
          </div>
        </section>
        {/* CUARTA SECCION */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
