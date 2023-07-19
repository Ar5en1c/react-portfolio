import React from 'react'
import './services.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Experience = () => {
  return (
    <section id='experience'>
      <h5>Where Have I Worked</h5>
      <h2>My Work Experience</h2>

      {/* <div className="container experience__container"> */}
      <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#424242', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #424242' }}
        date="Dec 2019 - Jan 2021"
        iconStyle={{ background: '#ff9800', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faBriefcase} />}
      >
        <h3 className="vertical-timeline-element-title">Software Development Intern</h3>
        <h5 className="vertical-timeline-element-subtitle">Humourbaba Pvt. Ltd.</h5>
        <p className='text-light'>
          <BsPatchCheckFill className='experience__details-icon'/>Developed and maintained web application using the MERN stack (MongoDB, Express.js, React.js, Node.js). <br/><BsPatchCheckFill className='experience__details-icon'/>Implemented user authentication and authorization using JSON Web Tokens (JWT) and Passport.js, ensuring secure access to the
application.<br/><BsPatchCheckFill className='experience__details-icon'/>Designed and developed RESTful APIs using Express.js.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#424242', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #424242' }}
        date="Jun 2022 - Aug 2022"
        iconStyle={{ background: '#ff9800', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faBriefcase}/>}
      >
        <h3 className="vertical-timeline-element-title">Data Science Intern</h3>
        <h5 className="vertical-timeline-element-subtitle">Pactiv Evergreen Inc.</h5>
        <p className='text-light'>
        <BsPatchCheckFill className='experience__details-icon'/>Created a comprehensive Data Governance Dashboard using Tableau for providing crucial insights into data quality, data ownership, and data management. <br/><BsPatchCheckFill className='experience__details-icon'/>Conducted predictive data analysis on resource management and product output to optimize the labor model resulting
in a significant reduction (~50%) in the need for workforce adjustment.<br/><BsPatchCheckFill className='experience__details-icon'/>Collaborated with cross-functional teams to identify and implement data-driven solutions to business problems, resulting in a 20%
increase in productivity and a 10% reduction in costs.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#424242', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #424242' }}
        date="Aug 2022 – May 2023"
        iconStyle={{ background: '#ff9800', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faBriefcase}/>}
      >
        <h3 className="vertical-timeline-element-title">Graduate Assistant</h3>
        <h5 className="vertical-timeline-element-subtitle">University of Illinois at Chicago (UIC)</h5>
        <p className='text-light'>
        <BsPatchCheckFill className='experience__details-icon'/>Built web applications for the College of Engineering, utilizing technologies such as Django (Python), React.js, and PostgreSQL.<br/><BsPatchCheckFill className='experience__details-icon'/>Implemented advanced security measures, enhancing overall system security by 80% through the integration of Two-Factor
Authentication (2FA) and encrypted data storage.<br/><BsPatchCheckFill className='experience__details-icon'/>Successfully deployed the application across 10 departments, resulting in a significant 75% reduction in paperwork and streamlining
employee review processes.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
        {/* END OF CONTENT CREATION */}
      {/* </div> */}
    </section>
  )
}

export default Experience