import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/portfolio7.PNG";

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG7,
    title: "Job Application Tracker using React.js and Webpack with AWS",
    github: "https://github.com/Ar5en1c/JobTracker-react-",
    demo: "https://chromewebstore.google.com/detail/job-application-tracker/mggpimiojdmbijnlfeibpokbjnbcblnl",
  },
  {
    id: 2,
    image: IMG1,
    title: "Cardiovascular Disease Visualization using D3.js",
    github: "https://github.com/Ar5en1c/Cardio-Vascular-Disease-Visualization",
    demo: "https://ar5en1c.github.io/final-project/",
  },
  {
    id: 3,
    image: IMG2,
    title: "Cloud Hosting Website with HTML5 and CSS3",
    github: "https://github.com/Ar5en1c/moshify",
    demo: "https://ar5en1c.github.io/moshify/",
  },
  {
    id: 4,
    image: IMG3,
    title: "My Portfolio Website using React.js, Swipper.js and Email.js",
    github: "https://github.com/Ar5en1c/My-React-Portfolio",
    demo: "https://www.example.com",
  },
  {
    id: 5,
    image: IMG4,
    title: "Early Stage Diabetes Prediction using Machine Learning",
    github:
      "https://github.com/Ar5en1c/Early-Stage-Diabetes-Prediction-using-Machine-Learning",
    demo: "https://www.example.com",
  },
  {
    id: 6,
    image: IMG5,
    title: "Gun Deaths Visualization In USA From DEC 2012-13",
    github: "https://github.com/Ar5en1c/Data-Visualization-Project",
    demo: "https://ksingh51.people.uic.edu/sgd.html",
  },
  {
    id: 7,
    image: IMG6,
    title: "Flow Particle Visaulization using D3.js and Three.js",
    github: "https://github.com/Ar5en1c/Data-Visualization-Project",
    demo: "https://ksingh51.people.uic.edu/flowviz.html",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
