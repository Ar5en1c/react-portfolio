import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import { MdOutlineVolunteerActivism } from 'react-icons/md'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="My pic" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1.5+ Years Experience</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
            <article className='about__card'>
              <MdOutlineVolunteerActivism className='about__icon'/>
              <h5>Volunteer Work</h5>
              <small>3+ Volunteering Jobs</small>
            </article>
          </div>
          <p>Hello, I am a recent Computer Science graduate with internship experience in full-stack development and Data Science. I have completed 20+ projects, including web applications, mobile apps, machine learning models and Data Visualization.<br/> Proficient in Python, JavaScript, Java, and other languages/frameworks, I am dedicated to creating user-friendly interfaces and ensuring high-quality output. Let's connect and explore how we can work together to achieve common goals.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About