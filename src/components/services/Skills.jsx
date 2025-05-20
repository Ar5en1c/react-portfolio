import React from "react";
import "./skills.css";
import { BiCheck } from "react-icons/bi";
import { SiSwift, SiReact, SiAmazonaws } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container skills__container">
        <div className="section__title">
          <h5>Area of Expertise</h5>
          <h2>My Skills</h2>
        </div>

        <div className="skills__content">
          <article className="skills__card ios-development">
            <div className="skills__card-header">
              <SiSwift className="skills__icon" />
              <h3>iOS Development</h3>
            </div>
            <ul className="skills__list">
              <li>
                <BiCheck className="skills__list-icon" />
                <p>Swift & SwiftUI Development</p>
              </li>
              <li>
                <BiCheck className="skills__list-icon" />
                <p>UIKit & Interface Builder</p>
              </li>
              <li>
                <BiCheck className="skills__list-icon" />
                <p>Core Data & CloudKit</p>
              </li>
              <li>
                <BiCheck className="skills__list-icon" />
                <p>App Store Deployment</p>
              </li>
              <li>
                <BiCheck className="skills__list-icon" />
                <p>MVVM-C Architecture</p>
              </li>
            </ul>
          </article>

          <article className="skills__card web-development">
            <div className="skills__card-header">
              <SiReact className="skills__icon" />
              <h3>Web Development</h3>
            </div>
            <ul className="skills__list">
              <li>
                <BiCheck className="skills__list-icon" />
                <p>React.js & TypeScript</p>
              </li>
              <li>
                <BiCheck className="skills__list-icon" />
                <p>Node.js & Express</p>
              </li>
              <li>
                <BiCheck className="skills__list-icon" />
                <p>GraphQL & REST APIs</p>
              </li>
              <li>
                <BiCheck className="skills__list-icon" />
                <p>Responsive Web Design</p>
              </li>
              <li>
                <BiCheck className="skills__list-icon" />
                <p>Modern JavaScript (ES6+)</p>
              </li>
            </ul>
          </article>

          <article className="skills__card cloud-development">
            <div className="skills__card-header">
              <SiAmazonaws className="skills__icon" />
              <h3>Cloud & DevOps</h3>
            </div>
            <ul className="skills__list">
              <li>
                <BiCheck className="skills__list-icon" />
                <p>AWS Services</p>
              </li>
              <li>
                <BiCheck className="skills__list-icon" />
                <p>CI/CD Implementation</p>
              </li>
              <li>
                <BiCheck className="skills__list-icon" />
                <p>Docker & Containerization</p>
              </li>
              <li>
                <BiCheck className="skills__list-icon" />
                <p>Firebase Integration</p>
              </li>
              <li>
                <BiCheck className="skills__list-icon" />
                <p>Infrastructure as Code</p>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Skills;
