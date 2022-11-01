import { React, useState } from "react";
import Intro from "../components/intro/Intro";
import Skills from "../components/skills/Skills";
import Proyectos from "../components/proyectos/Proyectos";
import Footer from "../components/footer/Footer";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white min-h-screen dark:bg-gray-900  dark:text-gray-200 box-border scroll-smooth">
        <Intro darkMode={darkMode} setDarkMode={setDarkMode} />
        <Skills />
        <Proyectos />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
