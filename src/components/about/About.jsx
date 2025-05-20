import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="section__title">
          <h5>Get To Know</h5>
          <h2>About Me</h2>
        </div>

        <div className="about__content">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About" />
            </div>
          </div>

          <div className="about__content-right">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>3+ Years</small>
              </article>

              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Users</h5>
                <small>30+ WAU</small>
              </article>

              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>20+ Completed</small>
              </article>
            </div>

            <div className="about__description">
              <p>
                iOS Developer with expertise in creating performant,
                user-centric mobile applications using Swift, UIKit, and
                SwiftUI. Experienced in implementing robust architectures (MVVM,
                MVC), integrating RESTful APIs, and ensuring high code quality
                through unit testing and code reviews.
              </p>
              <p>
                Skilled in developing full-stack web applications using
                React.js, Node.js, and various AWS services. Strong background
                in data analysis and visualization using Python, pandas, and
                D3.js. Passionate about creating innovative solutions that solve
                real-world problems.
              </p>
              <a href="#contact" className="btn btn-primary">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
