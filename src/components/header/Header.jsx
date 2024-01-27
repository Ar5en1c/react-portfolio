import React, { useState, useEffect } from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    const interval = setInterval(() => {
      // Function to update the greeting randomly with different languages
      const languages = [
        "english",
        "spanish",
        "hindi",
        "french",
        "chinese",
        "japanese",
      ];
      const randomLanguage =
        languages[Math.floor(Math.random() * languages.length)];
      updateGreeting(randomLanguage);
    }, 1000); // Update

    return () => {
      clearInterval(interval);
    };
  }, []);

  const updateGreeting = (language) => {
    switch (language) {
      case "english":
        setGreeting("Hello");
        break;
      case "spanish":
        setGreeting("Hola");
        break;
      case "hindi":
        setGreeting("Namaste");
        break;
      case "french":
        setGreeting("Bonjour");
        break;
      case "chinese":
        setGreeting("Nǐ hǎo");
        break;
      case "japanese":
        setGreeting("Konnichiwa");
        break;
      default:
        setGreeting("Hello");
        break;
    }
  };

  return (
    <header>
      <div className="container header__container">
        <h4>{greeting} I'm</h4>
        <h1>Kuldeep Singh</h1>
        <h5 className="text-light">Fullstack Developer | Data Scientist</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
