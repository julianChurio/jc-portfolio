import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-5xl flex justify-center gap-16 py-3">
      <AiFillGithub />
      <AiFillLinkedin />
    </div>
  );
};

export default Footer;
