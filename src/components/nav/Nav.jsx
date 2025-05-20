import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const scrollToSection = (sectionId) => {
    setActiveNav(sectionId);
    const element = document.querySelector(sectionId);
    if (!element) return;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const navClassNames = "nav";

  return (
    <nav className={navClassNames}>
      <div className="nav__container">
        <button
          onClick={() => scrollToSection("#header")}
          className={activeNav === "#" ? "active" : ""}
          aria-label="Home"
        >
          <AiOutlineHome />
          <span>Home</span>
        </button>
        <button
          onClick={() => scrollToSection("#about")}
          className={activeNav === "#about" ? "active" : ""}
          aria-label="About"
        >
          <AiOutlineUser />
          <span>About</span>
        </button>
        <button
          onClick={() => scrollToSection("#skills")}
          className={activeNav === "#skills" ? "active" : ""}
          aria-label="Skills"
        >
          <GiSkills />
          <span>Skills</span>
        </button>
        <button
          onClick={() => scrollToSection("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
          aria-label="Experience"
        >
          <BiBook />
          <span>Experience</span>
        </button>

        <button
          onClick={() => scrollToSection("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
          aria-label="Contact"
        >
          <BiMessageSquareDetail />
          <span>Contact</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
