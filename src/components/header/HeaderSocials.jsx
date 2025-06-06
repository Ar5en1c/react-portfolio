import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/kuldeep-singh-10374015b/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Ar5en1c" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://leetcode.com/Ar5en1c/" target="_blank" rel="noreferrer">
        <SiLeetcode />
      </a>
    </div>
  );
};

export default HeaderSocials;
