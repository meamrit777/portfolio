import React from "react";
import { BsLinkedin, BsGithub, BsDribbble } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/amrit777" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/meamrit777" target="_blank">
        <BsGithub />
      </a>
      <a href="https://dribble.com" target="_blank">
        <BsDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
