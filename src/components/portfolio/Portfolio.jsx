import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/portfolio7.PNG";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Job Application Tracker",
      description: [
        "Track job applications efficiently with a custom Chrome extension.",
        "Built with React.js, Webpack, and AWS Lambda for backend processing.",
      ],
      image: IMG7,
      github: "https://github.com/Ar5en1c/JobTracker-react-",
      demo: "https://chromewebstore.google.com/detail/job-application-tracker/mggpimiojdmbijnlfeibpokbjnbcblnl",
      technologies: ["React.js", "Webpack", "AWS Lambda", "Chrome Extension"],
    },
    {
      id: 2,
      title: "Cardiovascular Disease Visualization",
      description: [
        "Interactive dashboard for visualizing cardiovascular data",
        "Advanced data analysis using Python (NumPy, pandas, seaborn)",
        "User-centric dashboard with D3.js, JavaScript, HTML5, and CSS3",
      ],
      image: IMG1,
      github: "https://github.com/Ar5en1c/CardiovascularViz",
      demo: "https://ar5en1c.github.io/CardiovascularViz",
      technologies: ["D3.js", "Python", "NumPy", "Pandas", "Seaborn"],
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      description: [
        "Modern, responsive portfolio built with React.js",
        "Custom animations and interactive elements",
        "Optimized performance and accessibility",
      ],
      image: IMG3,
      github: "https://github.com/Ar5en1c/react-portfolio",
      demo: "https://ar5en1c.github.io/react-portfolio",
      technologies: ["React.js", "CSS3", "EmailJS", "GitHub Pages"],
    },
    {
      id: 4,
      title: "Cloud Hosting Website with HTML5 and CSS3",
      description: [
        "Responsive cloud hosting landing page.",
        "Modern HTML5 and CSS3 with animations.",
      ],
      image: IMG2,
      github: "https://github.com/Ar5en1c/moshify",
      demo: "https://ar5en1c.github.io/moshify/",
      technologies: ["HTML5", "CSS3", "Responsive Design"],
    },
    {
      id: 5,
      title: "Early Stage Diabetes Prediction using Machine Learning",
      description: [
        "Predict diabetes at an early stage using ML algorithms.",
        "Python, scikit-learn, and data visualization.",
      ],
      image: IMG4,
      github:
        "https://github.com/Ar5en1c/Early-Stage-Diabetes-Prediction-using-Machine-Learning",
      demo: "https://www.example.com",
      technologies: ["Python", "scikit-learn", "Data Visualization"],
    },
    {
      id: 6,
      title: "Gun Deaths Visualization In USA From DEC 2012-13",
      description: [
        "Data visualization project for gun deaths in the USA.",
        "D3.js, HTML5, and CSS3 for interactive charts.",
      ],
      image: IMG5,
      github: "https://github.com/Ar5en1c/Data-Visualization-Project",
      demo: "https://ksingh51.people.uic.edu/sgd.html",
      technologies: ["D3.js", "HTML5", "CSS3"],
    },
    {
      id: 7,
      title: "Flow Particle Visualization using D3.js and Three.js",
      description: [
        "Visualize particle flow with D3.js and Three.js.",
        "WebGL-powered interactive graphics.",
      ],
      image: IMG6,
      github: "https://github.com/Ar5en1c/Data-Visualization-Project",
      demo: "https://ksingh51.people.uic.edu/flowviz.html",
      technologies: ["D3.js", "Three.js", "WebGL"],
    },
  ];

  return (
    <section id="portfolio">
      <div className="container portfolio__container">
        <div className="section__title">
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>
        </div>

        <div className="portfolio__grid">
          {projects.map(
            ({ id, title, description, image, github, demo, technologies }) => (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <div className="portfolio__item-content">
                  <h3>{title}</h3>
                  <ul className="portfolio__item-description">
                    {description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                  <div className="portfolio__item-technologies">
                    {technologies.map((tech, index) => (
                      <span key={index} className="technology-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="portfolio__item-cta">
                    <a
                      href={github}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
