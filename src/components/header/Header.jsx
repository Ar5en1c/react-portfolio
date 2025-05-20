import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/me.png";
import CanvasBackground from "./CanvasBackground";
import { BiDownArrowAlt } from "react-icons/bi";

const Header = () => {
  const headerRef = useRef(null);
  const [isHeaderInView, setIsHeaderInView] = useState(true);

  useEffect(() => {
    const currentRef = headerRef.current;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsHeaderInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <header ref={headerRef} id="header">
      <CanvasBackground />
      <div className="container header__container">
        {isHeaderInView && <HeaderSocials />}
        <div className="header__content">
          <div className="header__text">
            <span className="greeting">Hello, I'm</span>
            <h1>Kuldeep Singh</h1>
            <h5 className="text-light">Full-stack Developer & iOS Engineer</h5>
            <CTA />
          </div>

          <div className="me">
            <div className="me__image-container">
              <img src={ME} alt="me" className="floating" />
            </div>
          </div>
        </div>
        {isHeaderInView && (
          <a href="#contact" className="scroll__down">
            <span className="scroll__down-text">Scroll Down</span>
            <div className="scroll__down-indicator">
              <BiDownArrowAlt size={32} />
            </div>
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
