import React from "react";
import "./services.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Experience = () => {
  const customStyle = {
    background: "rgba(0, 0, 0, 0.3)", // Semi-transparent black background
    backdropFilter: "blur(5px)", // Blur effect
    padding: "1.5rem",
    border: "2px solid",
    borderRadius: "1rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const customArrowStyle = {
    borderRight: "7px solid  rgba(0, 0, 0, 0.3)",
  };

  return (
    <section id="experience">
      <h5>Where Have I Worked</h5>
      <h2>My Work Experience</h2>

      <VerticalTimeline>
        {/* First Timeline Element */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={customStyle}
          contentArrowStyle={customArrowStyle}
          date="Dec 2019 - Jan 2021"
          iconStyle={{ background: "#ff9800", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ color: "var(--color-primary)" }}
          >
            Software Developer
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Humourbaba Pvt. Ltd.
          </h5>
          {/* Details about the role */}
          <p className="text-light">
            <BsPatchCheckFill className="experience__details-icon" />
            Developed and maintained web application using the MERN stack
            (MongoDB, Express.js, React.js, Node.js). <br />
            <BsPatchCheckFill className="experience__details-icon" />
            Implemented user authentication and authorization using JSON Web
            Tokens (JWT) and Passport.js, ensuring secure access to the
            application.
            <br />
            <BsPatchCheckFill className="experience__details-icon" />
            Designed and developed RESTful APIs using Express.js.
          </p>
        </VerticalTimelineElement>

        {/* Second Timeline Element */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={customStyle}
          contentArrowStyle={customArrowStyle}
          date="Jun 2022 - Aug 2022"
          iconStyle={{ background: "#ff9800", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ color: "var(--color-primary)" }}
          >
            Data Science Intern
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Pactiv Evergreen Inc.
          </h5>
          {/* Details about the role */}
          <p className="text-light">
            <BsPatchCheckFill className="experience__details-icon" />
            Created a comprehensive Data Governance Dashboard using Tableau for
            providing crucial insights into data quality, data ownership, and
            data management. <br />
            <BsPatchCheckFill className="experience__details-icon" />
            Conducted predictive data analysis on resource management and
            product output to optimize the labor model resulting in a
            significant reduction (~50%) in the need for workforce adjustment.
            <br />
            <BsPatchCheckFill className="experience__details-icon" />
            Collaborated with cross-functional teams to identify and implement
            data-driven solutions to business problems, resulting in a 20%
            increase in productivity and a 10% reduction in costs.
          </p>
        </VerticalTimelineElement>

        {/* Third Timeline Element */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={customStyle}
          contentArrowStyle={customArrowStyle}
          date="Aug 2022 – May 2023"
          iconStyle={{ background: "#ff9800", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ color: "var(--color-primary)" }}
          >
            Graduate Assistant
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            University of Illinois at Chicago (UIC)
          </h5>
          {/* Details about the role */}
          <p className="text-light">
            <BsPatchCheckFill className="experience__details-icon" />
            Built web applications for the College of Engineering, utilizing
            technologies such as Django (Python), React.js, and PostgreSQL.
            <br />
            <BsPatchCheckFill className="experience__details-icon" />
            Implemented advanced security measures, enhancing overall system
            security by 80% through the integration of Two-Factor Authentication
            (2FA) and encrypted data storage.
            <br />
            <BsPatchCheckFill className="experience__details-icon" />
            Successfully deployed the application across 10 departments,
            resulting in a significant 75% reduction in paperwork and
            streamlining employee review processes.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
