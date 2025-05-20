import React from "react";
import "./experience.css";
import { BsBriefcase } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const experiences = [
    {
      title: "iOS Developer",
      company: "Walmart Inc.",
      location: "Sunnyvale, CA",
      period: "May 2024 - Present",
      description: [
        "Deep Linking & Navigation: Designed and implemented robust deep linking functionality using Swift and the Coordinator pattern",
        "UI Development: Developed high-performance UI components with Swift, UIKit, and custom frameworks (GlassUI, LivingDesign)",
        "Analytics Integration: Leveraged the Combine framework to integrate real-time analytics",
        "Quality & Collaboration: Led cross-functional code reviews, unit testing initiatives, and technical debt reduction efforts",
        "Leveraged Git, CI/CD pipelines with Jenkins, Jira, and Splunk/OpenObserve for efficient debugging",
      ],
    },
    {
      title: "Software Developer",
      company: "Eitacies Inc.",
      location: "Chicago, IL",
      period: "Jun 2023 - Feb 2024",
      description: [
        "Architected and developed a HIPAA-compliant iOS healthcare application using Swift, UIKit, and MVVM design pattern",
        "Implemented RESTful API integration using URLSession and async/await for efficient data handling",
        "Implemented secure authentication system with Keychain services and push notifications integration",
        "Led code reviews and established SwiftLint rules for the iOS team, improving code quality and reducing technical debt by 30%",
      ],
    },
    {
      title: "Graduate Assistant",
      company: "University of Illinois Chicago (UIC)",
      location: "Chicago, IL",
      period: "Aug 2022 - May 2023",
      description: [
        "Architected and developed full-stack web applications using Django and React.js",
        "Improved security for departmental applications by integrating Two-Factor Authentication (2FA)",
        "Mentored junior developers and conducted code reviews to maintain high code quality standards",
      ],
    },
    {
      title: "Data Science Intern",
      company: "Pactiv Evergreen Inc.",
      location: "Lake Forest, IL",
      period: "Jun 2022 - Aug 2022",
      description: [
        "Developed a Tableau-driven data governance dashboard with MySQL database",
        "Collaborated in developing predictive models in Python for workforce optimization",
        "Collaborated with stakeholders to translate complex data insights into actionable recommendations",
      ],
    },
    {
      title: "Software Developer",
      company: "Humourbaba Pvt. Ltd.",
      location: "Vellore, TN",
      period: "Dec 2019 - Jan 2021",
      description: [
        "Enhanced web application performance using MERN stack, achieving 50% increase in speed",
        "Executed backend transformation using Node.js and AWS services",
        "Strengthened application security by implementing JWT and Passport.js",
      ],
    },
  ];

  return (
    <section id="experience">
      <h5>My Journey</h5>
      <h2>Work Experience</h2>

      <div className="container experience__container">
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(15px)",
                WebkitBackdropFilter: "blur(15px)",
                border: "1px solid transparent",
                borderRadius: "1.5rem",
                boxShadow: "none",
                color: "var(--color-white)",
                transition: "background 0.3s, box-shadow 0.3s, border 0.3s",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.08)",
              }}
              date={exp.period}
              iconStyle={{ background: "var(--color-primary)", color: "#fff" }}
              icon={<BsBriefcase />}
            >
              <h3 className="vertical-timeline-element-title">{exp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {exp.company} • {exp.location}
              </h4>
              <ul className="experience__description">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
